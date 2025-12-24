+++
title = "Development"
description = "Development, Programming, and Cybersecurity content. Some of the projects I am working on or things I am learning."
slug = "dev"
page_template = "page.html"
+++

### This Website
This site is built using [Zola](https://www.getzola.org/), a SSG (Static Site Generator) written in Rust, and is deployed to a simple S3 bucket. It is styled using Tailwind + DaisyUI to enable robust customization that works well for generating a small but attractive and feature-rich static website.

I have plans to finish the functionality of the command search bar, add custom styling for the Zola markdown-converted HTML, and add some helpful shortcodes. 

### My "Self-Hosted" Cloud
I have an AWS VPS configured with [Coolify](https://coolify.io/), *"An open-source & self-hostable Heroku / Netlify / Vercel alternative"*. This allows me to have a centralized location to deploy and manage mulitple applications, from sources like cloud or local servers, git deployments, docker containers, docker-compose builds, and more. I run several services here and have the network secured with [Tailscale](https://tailscale.com/).

I will likely be doing a small write-up about my experience with Coolify after some additional testing and usage. 

### Stasher CLI
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