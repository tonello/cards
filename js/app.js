$(document).ready(function(){

	// responsive nav
	var responsiveNav = $('#toggle-nav');
	var navBar = $('.nav-bar');

	responsiveNav.on('click',function(e){
		e.preventDefault();
		console.log(navBar);
		navBar.toggleClass('active')
	});

	// pseudo active
	if($('#docs').length){
		var sidenav = $('ul.side-nav').find('a');
		var url = window.location.pathname.split( '/' );
		var url = url[url.length-1];
		
		sidenav.each(function(i,e){
			var active = $(e).attr('href');

			if(active === url){
				$(e).parent('li').addClass('active');
				return false;
			}
		});
	}

	$("#owl-carousel").owlCarousel({
	stagePadding: 50,
	loop:true,
	margin:30,
	nav:false,
	responsive:{
	    0:{
	        items:1
	    },
	    600:{
	        items:2
	    },
	    800:{
	        items:3
	    },		        
	    1800:{
	        items:3
	    }
	},
	jsonPath: 'cards.json?r='+ Math.random( ),
	jsonSuccess: customDataSuccess
	});

	function customDataSuccess(data){

	var content = "";

	for(var i in data["items"]){
	   
	   var img 			= data["items"][i].Image;
	   var description 	= data["items"][i].Text;
	   var operadora 	= data["items"][i].Operadora;
	   var link 		= data["items"][i].Url;

		content += '<div class="item" style="padding:20px;">';
		content += '<div class="card">';
		content += '<div class="card-img-top">';
		content += '<a href="' + link +'" target="_blank">';
		content += '<img src="' + img +'" width="100%">';

		switch(operadora){

			case 'LATAM':
			content += '<div class="card-img-top-brands"><img class="card-img-top-brands-label" src="./images/LABEL-LATAM.png"></div>';
			break;

			case 'GOL':
			content += '<div class="card-img-top-brands"><img class="card-img-top-brands-label" src="./images/LABEL-GOL.png"></div>';
			break;

			case 'AVIANCA':
			content += '<div class="card-img-top-brands"><img class="card-img-top-brands-label" src="./images/LABEL-AVIANCA.png"></div>';
			break;

			case 'AZUL':
			content += '<div class="card-img-top-brands"><img class="card-img-top-brands-label" src="./images/LABEL-AZUL.png"></div>';
			break;

		}

		content += '</a>';
		content += '</div>';
		content += '<div class="card-body">';
		content += '<div class="row">';
		content += '<div class="col-8 col-md-8">';
		content += '<div class="col-12 col-md-12 p-0">';
		content += '<h5 class="card-title-small">' + description.substring(12, 26) +'</h5>';
		content += '</div>';
		content += '<div class="col-12 col-md-12 p-0">';
		content += '<h5 class="card-title-big">' + description.substring(26, description.length) +'</h5>';
		content += '</div>';
		content += '</div>';
		content += '<div class="col-4 col-md-4 pb-40" style="text-align:right; padding-right:10px;">';

		switch(operadora){

			case 'LATAM':
			content += '<img src="./images/brand-latam.png" width="40px">';
			break;

			case 'GOL':
			content += '<img src="./images/brand-gol.png" width="40px">';
			break;

			case 'AVIANCA':
			content += '<img src="./images/brand-avianca.png" width="40px">';
			break;

			case 'AZUL':
			content += '<img src="./images/brand-azul.png" width="40px">';
			break;

		}			

		content += '</div>';
		content += '</div>';
		content += '<p class="card-text">' + description +'</p>';
		content += '<div class="col-12 col-md-12 p-0">';
		content += '<div class="col-12 col-md-12 p-0" style="float:left;">';
		content += '<a href="' + link +'" class="btn btn-block border-default" style="text-align:center"><span style="font-size:13px; line-height:10px;">A partir de </h4><span style="font-size:22px; font-weight:800;">R$ 256,00</h2></a>';
		content += '</div>';
		content += '<div class="col-12 col-md-12 p-0" style="float:left;">';
		content += '<a href="' + link +'" class="btn btn-primary btn-block" style="font-weight:800; letter-spacing:2px; text-transform:uppercase; font-size: 12px; padding:10px;">COMPRAR AGORA!</a>';
		content += '</div>';
		content += '<div class="col-12 col-md-12 p-0" style="float:left;">';
		content += '<a href="' + link +'" class="btn btn-default border btn-block" style="font-weight:800; letter-spacing:2px; text-transform:uppercase; font-size: 12px; padding:10px;">+ MAIS INFORMAÇÕES</a>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';	 

	}

	$("#owl-carousel").html(content);

	}

});
