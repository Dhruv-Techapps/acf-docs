import os
import re
import frontmatter
import markdown
from bs4 import BeautifulSoup

BASE_URL = "https://getautoclicker.com/docs/4.x"
PARTIAL_BASE_URL = "./site/layouts/partials"

# Function to remove <img> tags from content
def remove_img_tags(content):
    content = re.sub(r'\n*{{<img[^>]*>}}\n*', '', content)
    return content

# Function to replace {{<docsref "/action/overview">}} with actual URL
def replace_docsref(content, ):
    docsref_pattern = re.compile(r'{{<docsref\s+"([^"]+)"\s*>}}')
    replaced_content = docsref_pattern.sub(lambda match: BASE_URL + match.group(1), content)
    return replaced_content

def extract_and_format_callouts(content):
    callout_pattern = re.compile(r'{{<callout\s+(\w+)>}}(.*?){{</callout\s*>}}', re.DOTALL)
    
    def format_callout(match):
        callout_type = match.group(1)
        callout_message = match.group(2).strip()
        return f"### {callout_type.capitalize()}\n{callout_message}"
    
    formatted_content = callout_pattern.sub(format_callout, content)
    return formatted_content

def replace_example_code(content):
    example_pattern = re.compile(r'{{<example\s+lang="([^"]+)"\s+show_preview="[^"]*">}}(.*?){{</example>}}', re.DOTALL)
    
    def format_example(match):
        lang = match.group(1)
        code = match.group(2).strip()
        return f"```{lang}\n{code}\n```"
    
    formatted_content = example_pattern.sub(format_example, content)
    return formatted_content

def remove_table_tags(content):
    content = re.sub(r'{{<table[^>]*>}}', '', content)
    content = re.sub(r'{{</table[^>]*>}}', '', content)
    return content

def extract_and_convert_html_tables(content):
    soup = BeautifulSoup(content, 'html.parser')
    print(soup.prettify())
    tables = soup.find_all('table')
    
    def html_table_to_markdown(table):
        headers = [header.get_text(strip=True) for header in table.find('thead').find_all('th')]
        rows = []
        for row in table.find('tbody').find_all('tr'):
            cols = [col.get_text(strip=True) for col in row.find_all(['td', 'th'])]
            rows.append(cols)
        
        # Convert headers to markdown
        markdown_table = "| " + " | ".join(headers) + " |\n"
        markdown_table += "| " + " | ".join(['---'] * len(headers)) + " |\n"
        
        # Convert rows to markdown
        for row in rows:
            markdown_table += "| " + " | ".join(row) + " |\n"
        
        markdown_table = markdown_table[::-1].replace("\n"[::-1], "", 1)[::-1]
        return markdown_table
    
    for table in tables:
        markdown_table = html_table_to_markdown(table)
        table.replace_with(BeautifulSoup(markdown_table, 'html.parser'))  # Replace the table with markdown
    
    return str(soup)

def replace_markdown_partial(content):
    markdown_partial_pattern = re.compile(r'{{<markdown>}}(.*?){{</markdown\s*>}}',re.DOTALL)
 
    def fetch_partial_content(match):
        #print(match.group(1))
        partial_pattern = re.compile(r'{{<partial\s+(.*?)\s*>}}', re.DOTALL)
        match = partial_pattern.search(match.group(1))
        if match:
            filename = match.group(1).strip()
        else:
            return "<!-- Partial file not found -->"
        #print(filename)
        partial_path = os.path.join(PARTIAL_BASE_URL, filename)
        if os.path.exists(partial_path):
            with open(partial_path, 'r', encoding='utf-8') as f:
                return f.read()
        else:
            return f"<!-- Partial file {filename} not found -->"
    
    replaced_content = markdown_partial_pattern.sub(fetch_partial_content, content)
    #print("partial content",replaced_content)
    return replaced_content


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
        # Extract table headers from thead th
        headers = [header.get_text(strip=True) for header in table.find('thead').find_all('th')]
        rows = []
        for row in table.find('tbody').find_all('tr'):
            # Extract table rows from tbody td and tbody th
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
        content = post.content
        content = replace_markdown_partial(content)
        content = replace_docsref(content)
        content = extract_and_format_callouts(content)
        content = remove_table_tags(content)
        content = extract_and_convert_html_tables(content)
        content = replace_example_code(content)
        content = remove_img_tags(content)
        text = content
        print(f"{title}{text}\n\n\n\n-------------------\n\n\n\n")
        # Extract callouts
       # callouts, cleaned_content = extract_callouts(post.content)

        # Clean Hugo shortcodes from the content
        
        # content = clean_hugo_shortcodes(cleaned_content)
        
        # Extract markdown tables before converting to HTML
        # markdown_tables, content_without_tables = extract_markdown_tables(content)
        
        # Convert remaining markdown content (without tables) to HTML
        # html_content = markdown.markdown(content_without_tables)
        
        # Extract HTML tables
        # html_tables, content_without_tables = extract_html_tables(html_content)
        
        # Use BeautifulSoup to extract the remaining text from HTML
        # soup = BeautifulSoup(content_without_tables, 'lxml')  # Use 'lxml' parser
        # text = soup.get_text()
        
        # Append markdown tables as plain text
        # for table in markdown_tables:
          #  text += "\n\nMarkdown Table:\n" + table

        # Append callouts to the text
        #if callouts:
         #   text += "\n\nCallouts:\n"
          #  for callout in callouts:
           #     text += f"{callout[0]}: {callout[1].strip()}\n"
        
        # Append HTML tables as formatted text
        #formatted_html_tables = format_tables(html_tables)
        #if formatted_html_tables:
         #   text += "\n\nHTML Table:\n" + formatted_html_tables
        
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
            f.write("---START DOCUMENT---\n")
            f.write(f"Title: {data['title']}\n")
            f.write(f"Description: {data['description']}\n")
            f.write(f"Content:\n{data['content']}\n")
            f.write(f"\nReferences:\n- https://getautoclicker.com/docs/4.x/{os.path.relpath(file, content_dir).replace('.md', '/')}\n")
            f.write("---END DOCUMENT---\n\n\n")

# Path to Hugo's content folder
content_dir = './site/content/docs/4.x/settings'
all_text_content = extract_text_from_hugo_site(content_dir)

# Save output to file
output_file = 'extracted_content_cleaned.txt'
save_output_to_file(all_text_content, output_file)

print(f"Extracted content, titles, descriptions, and tables saved to {output_file}")
