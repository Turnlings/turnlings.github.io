---
title: The Continental System
description: A Napoleonic strategy game for A-Level coursework.
layout: project
image_url: /assets/images/continental_system/thumbnail.png
order: 8
year: 2022-2023
tech:
  - icon: devicon-java-plain
    name: Java
    priority: true
  - icon: devicon-libgdx-plain
    name: LibGDX
    priority: true
---
As this was a piece of coursework we faced heavy restrictions on the use of external libraries and frameworks, because of this I used LibGDX purely for drawing the to screen and getting user inputs. This meant that everything from graph traversal to the UI system were all custom built.

I also had to work on systems to bring real geographical data into the game.

## Features
- Troop navigation across a realistic map of Europe.
- Economy system to earn money and buy troops.
- Army designer allowing you to change the composition (infantry, cavalry, etc...)
- AI countries to fight against and engage in diplomacy.

## Debug Mode
![Debug mode](/assets/images/continental_system/debug.png)

The main technical aspects can be seen here through all the information on the left and the graph. The graph is used for troop movements, but each node also represents a region that can be conquered by others. This is toggled on with the D key. These regions are generated on initialisation from a hand-traced image of regions of Europe, I coloured each region a different colour so they could be identified by the program.

## Images
![Sieging](/assets/images/continental_system/sieging.png)
*An army must stay in a region for a period of time in order to occupy it and for it to become their territory.*

![Building mode](/assets/images/continental_system/building.png)
*You can build factories that lets you make equipment so you can design and build armies. This allows you to become progressively stronger.*

![France vs Russia](/assets/images/continental_system/france_win.png)
*Here the player has lost as their country (UK) has been conquered, France are Russia are now fighting out to find out the victor. Other countries still exist, but due to snowballing they don't really have a chance.*

