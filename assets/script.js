// script per index1 con test di angular

//script per index2
var text ={
	"en":{
		"contacts" :{
			"title":"Contacts",
			"summary":'If you want to talk with me, you can find here : <div id="contactList"><br><a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/data/github-icon.png" alt="github icon"> Github</a> <br> <a href="https://it.linkedin.com/in/alex-andries" target="_blank"><img class="link_icon" src="assets/data/Linkedin-Icon.png" alt="linkedin icon"> LinkedIn</a> <br> <a href="https://steamcommunity.com/id/rastercrow" target="_blank"><img class="link_icon" src="assets/data/steam-icon.png" alt="steam icon"> Steam</a>  <br> <a href="https://trakt.tv/users/rastercrow " target="_blank"><img class="link_icon" src="assets/data/trakt-icon.png" alt="trakt icon"> Trakt </a> <br> <a href="https://twitter.com/rastercrow" target="_blank"><img class="link_icon" src="assets/data/twitter-icon.png" alt="twitter icon"> Twitter</a> <br> <a href="mailto: rastercrow@gmail.com"><img class="link_icon" src="assets/data/mail-icon.png" alt="mail icon"> Mail</a> ( rastercrow@gmail.com )</div>'
		},
		"blogAlert":"Unfortunately, most of the blog is and will be written in Italian... sorry international people.",
		"info":"Hi, I'm Alex, better known as RasterCrow on the web. <br> I like to code, play games and watch movies. \n ", 
		"portfolio":{
			"summary":'Some of the projects I worked on in my free time. <br> You can find more of them on <a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/data/github-icon.png" alt="github icon"> Github</a> or on my Blog.',
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
			"summary":'Se vuoi parlare con me puoi trovarmi su queste piattaforme : <div id="contactList"><br><a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/data/github-icon.png" alt="github icon"> Github</a> <br> <a href="https://it.linkedin.com/in/alex-andries" target="_blank"><img class="link_icon" src="assets/data/Linkedin-Icon.png" alt="linkedin icon"> LinkedIn</a> <br> <a href="https://steamcommunity.com/id/rastercrow" target="_blank"><img class="link_icon" src="assets/data/steam-icon.png" alt="steam icon"> Steam</a>  <br> <a href="https://trakt.tv/users/rastercrow " target="_blank"><img class="link_icon" src="assets/data/trakt-icon.png" alt="trakt icon"> Trakt </a> <br> <a href="https://twitter.com/rastercrow" target="_blank"><img class="link_icon" src="assets/data/twitter-icon.png" alt="twitter icon"> Twitter</a> <br> <a href="mailto: rastercrow@gmail.com"><img class="link_icon" src="assets/data/mail-icon.png" alt="mail icon"> Mail</a> ( rastercrow@gmail.com )</div>'
		},
		"blogAlert":"",
		"info":"Ciao, mi chiamo Alex, ma sul web sono RasterCrow. <br> Programmo, videogioco e guardo molti film. \n ",
		"portfolio":{
			"summary":'Alcuni dei progetti su cui ho lavorato nel tempo libero. <br> Puoi trovarne altri sul mio profilo <a href="https://github.com/RasterCrow" target="_blank"><img class="link_icon" src="assets/data/github-icon.png" alt="github icon"> Github</a> o sul Blog.',
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
	$('.post-modal').on('click', function(e){
		e.preventDefault();
		$('#modalPost').modal('show').find('.modal-content').load($(this).attr('href'));
	  });
	
	//usati per cambiare il colore ai link della navbar
	$("#blogTitle").on("click", function() {
		$(this).toggleClass('button-clicked');
	})
	$("#contactsTitle").on("click", function() {
		$(this).toggleClass('button-clicked');
	})
	$("#infoTitle").on("click", function() {
		$(this).toggleClass('button-clicked');
	})
	$("#portfolioTitle").on("click", function() {
		$(this).toggleClass('button-clicked');
	})

	//scroll into the collapse clicked
	$(document).on('shown.bs.collapse', function(event){
        //console.log( "in! print e: " +event.type);
        event.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    });
	
	//traduco inizialmente la pagina in italino
	translatePage("it");
	//usato per cambiare lingua tramite radio button
    $("input[type='radio']").click(function(){
		var pageLanguage = $("input[name='language']:checked").val();
		translatePage(pageLanguage);
	});

	//carico le varie traduzioni
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
		document.getElementById("blogAlert").innerHTML = text[language].blogAlert;
	};
});