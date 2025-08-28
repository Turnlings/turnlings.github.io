---
title: Ciphershare
description: Secure file transfer for HackSheffield9.
layout: project
github_url: https://github.com/SecretSheppy/ciphershare
image_url: /assets/images/ciphershare/thumbnail.png
order: 5
year: 2024
tech:
  - icon: devicon-go-original-wordmark
    name: Go
    priority: true
  - icon: devicon-mongodb-plain
    name: MongoDB
  - icon: devicon-oauth-plain
    name: OAuth
  - icon: devicon-git-plain
    name: Git
---
I worked on CipherShare as part of a four-person team at a hackathon. It allows users to upload files (up to 500MB) and share them securely by specifying allowed email addresses. Recipients access the files via a one-time password sent to their email, with all files encrypted before storage and decrypted only upon download.

Built using the Gorilla web toolkit for routing.

For more information read the [Devpost](https://devpost.com/software/ciphershare).

## Images
![Main page](/assets/images/ciphershare/examples.png)
*Users can enter emails with which they want to share the file*  

![Link](/assets/images/ciphershare/link.png)
*Sharing this link allows the reciever to download the file if their email was included*