import yaml
from jinja2 import Environment, FileSystemLoader

# Load YAML configuration
def load_yaml(yaml_file):
    with open(yaml_file, 'r') as file:
        return yaml.safe_load(file)

# Render HTML using Jinja2 template
def render_html(data):
    file_loader = FileSystemLoader('.')
    env = Environment(loader=file_loader)
    template = env.get_template('template.html')
    output = template.render(data=data)
    with open('index.html', 'w') as f:
        f.write(output)

if __name__ == "__main__":
    yaml_data = load_yaml('config.yaml')
    render_html(yaml_data)
