// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

import Headshot from './headshot.jpg';

// Help
export const help = async (args: string[]): Promise<string> => {
  
return `Welcome! Here are all the available commands:

help about resume email github linkedin date banner

[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};


// About
export const about = async (args: string[]): Promise<string> => {
  return ` 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/owardlaw`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/owenwardlaw/`);

  return 'Opening linkedin...';
};



// Typical linux commands
export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `

<div style="display: inline-flex; flex-direction: row; align-items: center">
  <img style="margin-right: 2em" src=${Headshot.src} width=180px/>
    <pre>
    ██████╗ ██╗    ██╗███████╗███╗   ██╗    ██╗    ██╗ █████╗ ██████╗ ██████╗ ██╗      █████╗ ██╗    ██╗
    ██╔═══██╗██║    ██║██╔════╝████╗  ██║    ██║    ██║██╔══██╗██╔══██╗██╔══██╗██║     ██╔══██╗██║    ██║
    ██║   ██║██║ █╗ ██║█████╗  ██╔██╗ ██║    ██║ █╗ ██║███████║██████╔╝██║  ██║██║     ███████║██║ █╗ ██║
    ██║   ██║██║███╗██║██╔══╝  ██║╚██╗██║    ██║███╗██║██╔══██║██╔══██╗██║  ██║██║     ██╔══██║██║███╗██║
    ╚██████╔╝╚███╔███╔╝███████╗██║ ╚████║    ╚███╔███╔╝██║  ██║██║  ██║██████╔╝███████╗██║  ██║╚███╔███╔╝
      ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ 
    </pre>
</div>


Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.

Linkedin: <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.linkedin.com/in/owenwardlaw/" target="_blank">here</a></u>.
Github: <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/owardlaw" target="_blank">here</a></u>.
Made with <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">LiveTerm</a></u>.

`;
};
