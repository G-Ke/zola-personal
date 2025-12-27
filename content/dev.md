+++
title = "Development"
description = "Development, Programming, and Cybersecurity content. Some of the projects I am working on or things I am learning."
slug = "dev"
page_template = "page.html"
+++

# This Website

## Zola
This site is built using [Zola](https://www.getzola.org/), a SSG (Static Site Generator) written in Rust. It is styled using Tailwind + DaisyUI to enable robust customization that works well for generating a small but attractive and feature-rich static website. DaisyUI provides a set of pre-built components and utilities that can be easily customized to create a unique and modern look for your website, and saves me time from having to build styling and components from scratch. Content is converted from markdown to HTML using Zola's built-in markdown converter.

## Deployment to AWS

The site is deployed using a GitHub Actions workflow that is triggered on pushes to main. The workflow checks out the code, installs Zola, Tailwind, and DaisyUI, and then builds the site. I use `configure-aws-credentials@v4` to configure AWS credentials by assuming a role in my AWS account. The built site is then synced using the AWS CLI to an S3 bucket that is configured for static website hosting and is cached by AWS's CDN, CloudFront. Once the sync is complete, the CloudFront distribution is invalidated to ensure the latest version of the site is served.

# Stasher CLI
I am currently creating a Python CLI with an interactive AI-agent function that allows me to track and manage my digital content. It can be run manually to perform tasks such as syncing playlists from services like YouTube to my local content database or in Stasher Agent mode where you can give commands in natural language to enable the agent to perform tasks on your behalf. I am currently using [Click](https://click.palletsprojects.com/en/7.x/) to handle CLI functionality and [LiteLLM](https://litellm.ai) to handle LLM API calls. I am rolling my own agent, tools, and task logic instead of utilizing a package like [Crew.ai](https://www.crewai.com/).


```python
class Stasher:
    def __init__(self, ytf_cli_path):
        self.config = load_config()
        self.command_registry = {}
        self._youtube_api = None
        self.initialize_tools()
        self.register_commands()

    @property
    def youtube_api(self):
        if self._youtube_api is None:
            self._youtube_api = YouTubeAPIService(self.config['client_secrets_file'])
        return self._youtube_api
```