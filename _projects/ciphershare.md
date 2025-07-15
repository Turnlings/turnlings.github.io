---
title: Ciphershare
description: Secure file transfer for HackSheffield9.
icon: devicon-go-original-wordmark
layout: project
link_name: Github
link_url: https://github.com/SecretSheppy/ciphershare
image_url: /assets/images/ciphershare/thumbnail.png
order: 5
year: 2024
---
I worked on CipherShare as part of a four-person team at a hackathon. It allows users to upload files (up to 500MB) and share them securely by specifying allowed email addresses. Recipients access the files via a one-time password sent to their email, with all files encrypted before storage and decrypted only upon download.

For more information read the [Devpost](https://devpost.com/software/ciphershare).

## Technologies
- Go
- Gorilla Web Framework
- MongoDB
- Auth0

## Images
![Main page](/assets/images/ciphershare/examples.png)
*Users can enter emails with which they want to share the file*  

![Link](/assets/images/ciphershare/link.png)
*Sharing this link allows the reciever to download the file if their email was included*