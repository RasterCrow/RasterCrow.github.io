---
layout: blogPost
title: "Geo Locator, a Geoguessr clone"
author: Alex
lang: EN
lang-ref: Geo Locator, a Geoguessr clone
description: I've made a Geoguessr clone for private use.
date: 2021-01-11 15:00:00 +0100
categories: projects
thumbnail_pagina: https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image1.jpg?raw=true

---

# Geo Locator

<div style="position: relative;
  text-align: center;
  color: white;"
  >
  <img class="blogImage" src = "https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image1.jpg?raw=true" alt = "header picture of geo locator" />
</div>


In the last few days my friends and I wanted to play [Geoguessr](https://www.geoguessr.com/) again.
However, since the site has grown so much in recent years, the developers had to make a subscription for the service, to keep it up.
Let's be real, € 3 a month is not a lot, but since I'm only playing it a few times a week, I didn't like the idea of paying for the subscription.

So I thought I'd try to create a clone, just for private use.
And here it is, [Geo Locator](https://github.com/RasterCrow/Geo-Locator).


# What is it?
For those unfamiliar with it, Geoguessr is a multiplayer but also singleplayer game that throws you into a random place in the world and by using Google Street View you have to guess where you are.
The closer your answer ( you set a marker on Google Maps ), the more points you earn.
At the end of the rounds, the person with the most points wins.

# How was it made?
The application is still a WIP, there are several things that can be improved ( especially considering that I'm still a beginner with React, I didn't use any particular Hooks or advanced development methods ), such as the loading of the maps from the Google API Maps, improved performance ( sometimes WebGl crashes in my browser, I have yet to find out why ), but for the use I make of it, it's ok.
If you want to help me with the development you can check the repository on [GitHub](https://github.com/RasterCrow/Geo-Locator).

The app was developed with `React` for the front-end,` Firebase Hosting` for hosting, `Firebase Real Time Database` for match and lobby management and finally the` Google Maps API`.
Initially I was thinking of using [socket.io](https://socket.io/) to create a server to handle the game data, but Firebase's realtime database worked fine.

# Some UI images

<div style="position: relative;
  text-align: center;
  color: white;"
  >
<img class="blogImage" src = "https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image2.png?raw=true" alt = "picture of Lobby Menu" />
<div class="image-text-caption">
  Lobby Menu
  </div>
</div>

<div style="position: relative;
  text-align: center;
  color: white;"
  >
<img class="blogImage" src = "https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image3.jpg?raw=true" alt = "picture of Game Interface" />
<div class="image-text-caption">
  Game Interface
  </div>
</div>

<div style="position: relative;
  text-align: center;
  color: white;"
  >
<img class="blogImage" src = "https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image4.png?raw=true" alt = "picture of Game Recap Menu" />
<div class="image-text-caption">
  Game Recap Menu
  </div>
</div>

# Can I use it with my friends?
Sure, the setup isn't simple, but it's not too complicated either.
First you need to create a project on Firebase, enable Firebase Hosting and RealTime Database.
You also need to enable Google Maps API in the project.

`ATTENTION: Calls to the Google Maps API are not free, but Google provides $ 200 for free per month, so it is important to implement quotas and limitations to this API to avoid misuses and huge bills.`

Also try to limit the use of the API_KEY to the Firebase Hosting site only.
With these security issues fixed, just download Geo Locator from GitHub and place your .env file in the root directory.
Real Time Database rules could also be improved, but if you've already added limits to your key, the defaults one are fine too.

The .env file should look like this:
``
REACT_APP_API_KEY = "YOUR-API-KEY"
REACT_APP_AUTHDOMAIN = "YOUR-DATA"
REACT_APP_BASEURL = "YOUR-DATA"
REACT_APP_PROJECT_ID = "YOUR-DATA"
REACT_APP_STORAGEBUCKET = "YOUR-DATA"
REACT_APP_MESSAGING_SENDER_ID = "YOUR-DATA"
REACT_APP_APP_ID = "YOUR-DATA"
REACT_APP_MEASUREMENT_ID = "YOUR-DATA"
``

Finally just build the project and deploy it on Firebase Hosting and voila, the app is published.

You can also add your Locations to the game by going to _src/providers/GameProvider.js_ and adding the Latitude and Longitude to the LOCATIONS array at the end of the file.

# End
Thanks for your interest, see you!




