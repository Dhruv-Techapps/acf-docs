import os
import re
import frontmatter
import markdown
from bs4 import BeautifulSoup

# Function to clean Hugo shortcodes (e.g., {{< img settings.png >}})
def clean_hugo_shortcodes(content):
    # This regex matches any Hugo shortcode like {{< img settings.png >}} or {{< ... >}}
    cleaned_content = re.sub(r'{{<.*?>}}', '', content)
    return cleaned_content

# Function to extract markdown tables (if any) from content
def extract_markdown_tables(content):
    # Regex pattern for markdown tables
    table_pattern = re.compile(r'(\|(?:[^\n]+\|)+\n\|(?:[-: ]+\|)+\n(?:\|(?:[^\n]+\|)+\n)+)')
    tables = table_pattern.findall(content)
    
    # Remove tables from content after extracting
    content_without_tables = table_pattern.sub('', content)
    
    return tables, content_without_tables

# Function to extract HTML tables from parsed HTML content
def extract_html_tables(html_content):
    soup = BeautifulSoup(html_content, 'lxml')
    tables = soup.find_all('table')
    
    extracted_tables = []
    for table in tables:
        # Extract table headers
        headers = [header.get_text(strip=True) for header in table.find_all('th')]
        rows = []
        for row in table.find_all('tr'):
            # Extract table rows
            cols = [col.get_text(strip=True) for col in row.find_all(['td', 'th'])]
            rows.append(cols)
        
        extracted_tables.append({
            'headers': headers,
            'rows': rows
        })
    
    # Remove the tables from the original HTML content
    for table in tables:
        table.extract()
    
    return extracted_tables, str(soup)

# Function to format extracted tables into a readable text format
def format_tables(tables):
    formatted = ""
    for table in tables:
        if table.get('headers'):
            formatted += " | ".join(table['headers']) + "\n"
            formatted += "-" * (len(table['headers']) * 10) + "\n"
        for row in table['rows']:
            formatted += " | ".join(row) + "\n"
        formatted += "\n"
    return formatted

def extract_text_from_md(md_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        # Parse the markdown front matter (YAML or TOML) and content
        post = frontmatter.load(f)
        
        # Extract title and description from front matter (if they exist)
        title = post.get('title', 'No Title')
        description = post.get('description', 'No Description')
        
        # Clean Hugo shortcodes from the content
        content = clean_hugo_shortcodes(post.content)
        
        # Extract markdown tables before converting to HTML
        markdown_tables, content_without_tables = extract_markdown_tables(content)
        
        # Convert remaining markdown content (without tables) to HTML
        html_content = markdown.markdown(content_without_tables)
        
        # Extract HTML tables
        html_tables, content_without_tables = extract_html_tables(html_content)
        
        # Use BeautifulSoup to extract the remaining text from HTML
        soup = BeautifulSoup(content_without_tables, 'lxml')  # Use 'lxml' parser
        text = soup.get_text()
        
        # Append markdown tables as plain text
        for table in markdown_tables:
            text += "\n\nMarkdown Table:\n" + table
        
        # Append HTML tables as formatted text
        formatted_html_tables = format_tables(html_tables)
        if formatted_html_tables:
            text += "\n\nHTML Table:\n" + formatted_html_tables
        
        return title, description, text

def extract_text_from_hugo_site(content_dir):
    extracted_content = {}
    for root, dirs, files in os.walk(content_dir):
        for file in files:
            if file.endswith(".md"):
                md_file = os.path.join(root, file)
                title, description, text = extract_text_from_md(md_file)
                extracted_content[md_file] = {
                    'title': title,
                    'description': description,
                    'content': text
                }
    
    return extracted_content

def save_output_to_file(output_data, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        for file, data in output_data.items():
            f.write(f"File: {file}\n")
            f.write(f"Title: {data['title']}\n")
            f.write(f"Description: {data['description']}\n")
            f.write(f"Content:\n{data['content']}\n")
            f.write("\n" + "="*50 + "\n\n")  # Separator between file contents

# Path to Hugo's content folder
content_dir = './site/content/docs/4.x/'
all_text_content = extract_text_from_hugo_site(content_dir)

# Save output to file
output_file = 'extracted_content_cleaned.txt'
save_output_to_file(all_text_content, output_file)

print(f"Extracted content, titles, descriptions, and tables saved to {output_file}")
