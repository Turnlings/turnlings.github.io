---
title: FGCS
description: Avis Drone Labs ground control station.
layout: project
link_name: fgcs.avisdronelabs.uk
link_url: https://fgcs.avisdronelabs.uk/
github_url: https://github.com/Avis-Drone-Labs/FGCS
image_url: /assets/images/fgcs/github_readme.png
featured: 2
order: 0
year: 2025
tech:
  - icon: devicon-react-plain
    name: React
    priority: true
  - icon: devicon-javascript-plain
    name: JavaScript
    priority: true
  - icon: devicon-redux-plain
    name: Redux
  - icon: devicon-python-plain
    name: Python
  - icon: devicon-electron-original
    name: Electron
  - icon: devicon-docker-plain
    name: Docker
  - icon: devicon-git-plain
    name: Git
---
In my third year of university I have joined Avis Drone Labs, a student led project at the University of Sheffield. I am working on the Falcon Ground Control Station, gaining experience in various technologies.

## SITL Simulator (Docker)
My biggest contribution so far is a feature that allows users to start the Docker container with a SITL simulator directly from within the application. Previously, this required running a command in a separate terminal; now it is fully controlled through a modal.

![SITL Simulator](/assets/images/fgcs/sitl_simulator.png)

The integration of starting the container from within the application also allowed for the extra feature of automatic connection. Overall this made the whole process more streamlined and user-friendly for developers. Working on this feature included not just the frontend, but a backend with thorough exception handling for safe interaction with the Docker SDK.
