// script per index1 con test di angular

//script per index2
var text ={
	"en":{
		"contacts" :{
			"title":"Contacts",
			"summary":'If you want to talk with me, you can find here : <div id="contactList"><br><a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/github-icon.png" alt="github icon"> Github</a> <br> <a href="https://it.linkedin.com/in/alex-andries" target="_blank"><img class="link_icon" src="assets/Linkedin-Icon.png" alt="linkedin icon"> LinkedIn</a> <br> <a href="https://steamcommunity.com/id/rastercrow" target="_blank"><img class="link_icon" src="assets/steam-icon.png" alt="steam icon"> Steam</a>  <br> <a href="https://www.youtube.com/user/RasterCrown/" target="_blank"><img class="link_icon" src="assets/youtube-icon.png" alt="youtube icon"> YouTube</a><br> <a href="https://trakt.tv/users/rastercrow " target="_blank"><img class="link_icon" src="assets/trakt-icon.png" alt="trakt icon"> Trakt </a> <br> <a href="https://twitter.com/rastercrow" target="_blank"><img class="link_icon" src="assets/twitter-icon.png" alt="twitter icon"> Twitter</a> <br> <a href="mailto: rastercrow@gmail.com"><img class="link_icon" src="assets/mail-icon.png" alt="mail icon"> Mail</a> ( rastercrow@gmail.com )</div>'
		},
		"blog":"Under Construction",
		"info":"Hi, I'm Alex, better known as RasterCrow on the web. <br> I like to code, play games and watch movies. \n ", 
		"portfolio":{
			"summary":'Some of the projects I worked on in my free time. <br> You can find more of them on <a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/github-icon.png" alt="github icon"> Github</a> or on my BLOG.',
			"slide1":{
				"title":"Alexa Skills",
				"desc":"Skills I developed for Amazon Alexa devices.<br>Some are also available on the Google Assistant."
			},
			"slide2":{
				"title":"Browser Game - Deep Space",
				"desc":"My first game, made in 2012 with Construct2."
			},
			"slide3":{
				"title":"Android App - NaviMon",
				"desc":"App I worked on during my Erasmus experience in Estonia for WebIdea. Unfortunately, there's not much left of it on the Internet..."
			}
		}
	},
	"it":{
		"contacts" :{
			"title":"Contacts",
			"summary":'Se vuoi parlare con me puoi trovarmi su queste piattaforme : <div id="contactList"><br><a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/github-icon.png" alt="github icon"> Github</a> <br> <a href="https://it.linkedin.com/in/alex-andries" target="_blank"><img class="link_icon" src="assets/Linkedin-Icon.png" alt="linkedin icon"> LinkedIn</a> <br> <a href="https://steamcommunity.com/id/rastercrow" target="_blank"><img class="link_icon" src="assets/steam-icon.png" alt="steam icon"> Steam</a>  <br> <a href="https://www.youtube.com/user/RasterCrown/" target="_blank"><img class="link_icon" src="assets/youtube-icon.png" alt="youtube icon"> YouTube</a><br> <a href="https://trakt.tv/users/rastercrow " target="_blank"><img class="link_icon" src="assets/trakt-icon.png" alt="trakt icon"> Trakt </a> <br> <a href="https://twitter.com/rastercrow" target="_blank"><img class="link_icon" src="assets/twitter-icon.png" alt="twitter icon"> Twitter</a> <br> <a href="mailto: rastercrow@gmail.com"><img class="link_icon" src="assets/mail-icon.png" alt="mail icon"> Mail</a> ( rastercrow@gmail.com )</div>'
		},
		"blog":"In costruzione",
		"info":"Ciao, mi chiamo Alex, ma sul web sono RasterCrow. <br> Programmo, videogioco e guardo molti film. \n ",
		"portfolio":{
			"summary":'Alcuni dei progetti su cui ho lavorato nel tempo libero. <br> Puoi trovarne altri sul mio profilo <a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/github-icon.png" alt="github icon"> Github</a> o sul BLOG.',
			"slide1":{
				"title":'Alexa Skills',
				"desc":"Un paio di skill che ho sviluppato per i dispositivi Amazon Alexa.<br>Alcune disponibili anche su Google Assistant."
			},
			"slide2":{
				"title":"Browser Game - Deep Space",
				"desc":"Il mio primo gioco,sviluppato con Construct2 nel lontano 2012."
			},
			"slide3":{
				"title":"Android App - NaviMon",
				"desc":'App su cui ho lavorato durante la mia esperienza Erasmus in Estonia per l\'azienda WebIdea.<br> Sembra non esserci rimasto molto sul web sfortunatamente...'
			}
		}
	}
};

$(document).ready(function() {
	translatePage("it");

    $("input[type='radio']").click(function(){
		var pageLanguage = $("input[name='language']:checked").val();
		translatePage(pageLanguage);
	});

	function translatePage(language){
		document.getElementById("infoText").innerHTML = text[language].info;
		document.getElementById("portfolioText").innerHTML = text[language].portfolio.summary;
		document.getElementById("slide1Title").innerHTML = text[language].portfolio.slide1.title;
		document.getElementById("slide1Text").innerHTML = text[language].portfolio.slide1.desc;
		$('#slide2 h5').text(text[language].portfolio.slide2.title);
		$('#slide2 p').text(text[language].portfolio.slide2.desc);
		$('#slide3 h5').text(text[language].portfolio.slide3.title);
		document.getElementById("slide3Text").innerHTML = text[language].portfolio.slide3.desc;
		$('#contactsTitle').text(text[language].contacts.title);
		document.getElementById("contactsText").innerHTML = text[language].contacts.summary;
		document.getElementById("blogText").innerHTML = text[language].blog;
		
	};
});