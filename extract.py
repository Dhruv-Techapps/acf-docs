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

def extract_text_from_md(md_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        # Parse the markdown front matter (YAML or TOML) and content
        post = frontmatter.load(f)
        
        # Extract title and description from front matter (if they exist)
        title = post.get('title', 'No Title')
        description = post.get('description', 'No Description')
        
        # Clean Hugo shortcodes from the content
        content = clean_hugo_shortcodes(post.content)
        
        # Convert markdown to HTML
        html_content = markdown.markdown(content)
        
        # Use BeautifulSoup to extract the text from HTML
        soup = BeautifulSoup(html_content, 'lxml')  # Use 'lxml' parser
        text = soup.get_text()
        
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

print(f"Extracted content, titles, and descriptions saved to {output_file}")
