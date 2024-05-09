import { link } from "fs";

export const siteConfig = {
  name: 'S.AI',
  url: 'https://saicodes.dev',
  description: 'Sai blogs above dev',
  author: 'Sai Wai Maung',
  links: {
    github: 'https://github.com/saimaung',
    linkedin: 'https://www.linkedin.com/in/saiwaimaung/',
  }
}

export type SiteConfig = typeof siteConfig;
