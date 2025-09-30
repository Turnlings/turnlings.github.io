---
title: Folk Society
description: The website for the University of Sheffield Folk Music Society.
layout: project
github_url: https://github.com/Turnlings/uos-folk-soc
order: 1
year: 2025
tech:
  - icon: devicon-typescript-plain
    name: TypeScript
    priority: true
  - icon: devicon-nextjs-plain
    name: NextJS
    priority: true
  - icon: devicon-react-plain
    name: React
  - icon: devicon-tailwindcss-original
    name: Tailwind
---

Built a dynamic website for the University of Sheffield Folk Music Society after consultation with their committee members. This is my first project using modern front-end technologies and I quickly gained an appreciated for how rapidly you can build a prototype.

## Google Sheets as a Back-End

If you tell someone that you built a site, and instead of a database you use Google Sheets, you might expect them to laugh. But here is the reasoning behind my decision:

- **Acessibility**  
Everybody knows how to use Google Sheets. Users are not expected to be technically minded.
- **Cost (It's Free)**  
Free plans on different providers are constantly changing, a migration between services could cause issues for future maintainers.
- **Collaboration Features**  
Ownership and edit access can be controlled through in-built features, so future committee members can easily be given control.

It wouldn't be fair not to mention some of the limitations of this technique.

- **Formatting**  
It can become difficult to write large sets of text like event descriptions, or to add images. But these are usually written elsewhere and can just be copied into the relevant cell.