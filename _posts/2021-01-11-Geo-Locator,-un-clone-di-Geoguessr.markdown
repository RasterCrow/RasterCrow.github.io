---
layout: blogPost
title: "Geo Locator - un clone di Geoguessr"
author: Alex
lang: IT
lang-ref: Geo Locator, a Geoguessr clone
description: Ho creato una clone di Geoguessr per uso privato.
date: 2021-01-11 15:00:00 +0100
categories: projects
thumbnail_pagina: https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image1.jpg?raw=true

---

# Geo Locator

![Header image of app](https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image1.jpg?raw=true)

Negli ultimi giorni era tornata voglia a me e dei miei amici di giocare a [Geoguessr](https://www.geoguessr.com/).
Siccome però il sito è cresciuto tanto negli ultimi anni, gli svilupaptori hanno dovuto per forza rendere il servizio a pagamento.
Ora, 3€ al mese non sono molti, ma giocandoci solamente qualche volta la sera in compagnia non mi sembrava il caso di pagare per l'abbonamento.

Cosi ho pensato di provare a crearne un clone, solamente per uso privato.
Ed eccolo qui, [Geo Locator](https://github.com/RasterCrow/Geo-Locator).

# Cos è?
Per chi non lo conoscesse, Geoguessr é un gioco multiplayer ma anche singleplayer che ti butta in un posto casuale nel mondo e grazie alla modalità Street View di Google Maps devi riuscire a scoprire dove ti trovi.
Più vicino è la tua risposta ( fornita con un marker su Google Maps ), più punti guadagni.
Alla fine dei round la persona con più punti vince.

# Com è fatta?
L' applicazione è ancora un WIP, ci sono diverse cose migliorabili ( specie contando che essendo ancora alle prime armi con React, non ho fatto uso di Hook particolari o metodi avanzati di sviluppo ), come per esempio il caricamento delle mappe dalle API di Google Maps, miglioramento delle perfomance ( a volte WebGl crasha nel mio browser, devo ancora scoprire perchè ), ma per l'uso che ne faccio mi sembra a buon punto.
Se volete darmi una mano allo sviluppo potete controllare la repository su [GitHub](https://github.com/RasterCrow/Geo-Locator).

L'app è stata sviluppata con `React` per il front-end, `Firebase Hosting` per l'hosting, `Firebase Real Time Database` per la gestione dei match e delle lobby ed infine le API di `Google Maps`.
Inizialmente pensavo di usare [socket.io](https://socket.io/) per creare un server che gestiva il tutto, ma il database in tempo reale di Firebase é andato bene comunque.

# Alcune immagini della UI

Lobby Menu 
![Lobby functionality menu](https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image2.png?raw=true)

Game Interface
![Game interface](https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image3.jpg?raw=true)

Game Recap Menu
![Game Recap](https://github.com/RasterCrow/Geo-Locator/blob/master/GithubAssets/image4.png?raw=true)

# Posso usarla con i miei amici?
Certo, il setup non è semplice, ma neanche troppo complicato.
Inanzitutto devi creare un progetto su Firebase, abilitare Firebase Hosting e RealTime Database.
Inoltre è necessario abilitare Le API di Google Maps nel progetto.

`ATTENZIONE : Le chiamate alle API di Google Maps non sono gratuite, ma Google mette a dispozione 200$ gratis al mese.E' importante quindi implementare delle quote e limitazioni a tale API per evitare usi impropri e fatture enormi.`

Cerca anche di limitare l'uso della API_KEY solo al sito di Firebase Hosting.
Risolto questi problemi di sicurezza, basta scaricare Geo Locator da GitHub e inserisci il tuo file .env nella directory principale.
Si potrebbero anche migliorare le regole del Real Time Database, ma se hai gia aggiunto limiti alla tua chiave, va bene anche quelle basi.

Il file .env dovrebbe essere cosi :
```
REACT_APP_API_KEY= "YOUR-API-KEY"
REACT_APP_AUTHDOMAIN= "YOUR-DATA"
REACT_APP_BASEURL= "YOUR-DATA"
REACT_APP_PROJECT_ID= "YOUR-DATA"
REACT_APP_STORAGEBUCKET= "YOUR-DATA"
REACT_APP_MESSAGING_SENDER_ID= "YOUR-DATA"
REACT_APP_APP_ID= "YOUR-DATA"
REACT_APP_MEASUREMENT_ID= "YOUR-DATA"
```

Infine basta fare la build del progetto e il deploy su Firebase Hosting e voilà, l'app è pubblicata.

Puoi anche aggiungere le tue Location al gioco andando su _src/providers/GameProvider.js_ e aggiungendo la Latitudine e Longitudine all'array LOCATIONS che c'è a fine file.

# Fine
Grazie per l'interesse, ci vediamo!





