var app = angular.module('myapp', [
                                   'ngRoute',
                                   'ui.bootstrap'
                                ]);

//--------------------- MAIN CONTROLLER --------------------//
app.controller('MainCtrl', function( $scope ) {
    'use strict';

    $scope.init_menu = function(){
        angular.forEach(this.main_menu, function(value, key) {
          value.active = false;
        });
    }

	$scope.main_menu = [
			{
                 name: "Home",
                 href: "#/home",
                 active: true
			 },
			 {
                 name: "Portfolio",
                 href: "#/portfolio",
                 active: false
             },
			 {
                 name: "Products",
                 href: "#/products",
                 active: false,
                 submenu: [
                            {
                                name: "Granite",
                                href: "#/granite",
								active: false
                             },
                             {
                                 name: "Marble",
                                 href: "#/marble",
								 active: false
                             },
                             {
                                 name: "Quartzite",
                                 href: "#/quartzite",
								 active: false
                             },
                            {
                                name: "Limestone/Travertine",
                                href: "#/limestone-travertine",
								active: false
                             },
                             {
                                 name: "Onyx/Semi-precious Stone",
                                 href: "#/onyx-semi-precious",
								 active: false
                             },
                             {
                                 name: "Engineering Stone/Quartz",
                                 href: "#/engineering-stone-quartz",
								 active: false
                             }
                         ]
			 },
			 {
                 name: "Design Tools",
                 href: "#/design-tools",
				 active: false,
                 submenu: [
                            {
                                name: "kitchen",
                                href: "#/kitchen",
								active: false
                             },
                             {
                                 name: "2",
                                 href: "#/marble",
								 active: false
                             },
                             {
                                 name: "3",
                                 href: "#/engineering-stone-quartz",
								 active: false
                             }
                         ]
			 },
			 {
                 name: "Suppliers",
                 href: "#/suppliers",
				 active: false
			 },
			 {
                 name: "About Us",
                 href: "#/about-us",
				 active: false
			 },
			 {
                 name: "Contact Us",
                 href: "#/contact-us",
				 active: false
			 }
		];

    $scope.slides = [
        {
            image : './images/slide/slide1.jpg'
        },
        {
            image : './images/slide/slide2.jpg'
        },
        {
            image : './images/slide/slide3.jpg'
        },

    ];

    $scope.slidesSml = [
        {
            image : './images/slide/slide1sml.jpg'
        },
        {
            image : './images/slide/slide2sml.jpg'
        },
        {
            image : './images/slide/slide3sml.jpg'
        },

    ];

    $scope.carousel = [
        {
            image1 : './images/slide/slide1.jpg',
            image2 : './images/slide/slide2.jpg',
            image3 : './images/slide/slide3.jpg'


        },
        {
            image1 : './images/slide/slide4.jpg',
            image2 : './images/slide/slide5.jpg',
            image3 : './images/slide/slide1.jpg'

        }

    ];

    $scope.suppliers = [
        {
            image : './images/suppliers1.png',
            href: "#"
        },
         {
            image : './images/suppliers2.png',
             href: "#"
        },
         {
            image : './images/suppliers3.png',
             href: "#"
        },
         {
            image : './images/suppliers4.png',
             href: "#"
        },
         {
            image : './images/suppliers5.png',
             href: "#"
        }
    ];

	$scope.granite = [
        {
			title: "Azul Aran",
            image : './images/granite/AzulAran_Sample.jpg',
            href: './images/granite/AzulAran_SLAB.jpg'
        },
         {
			title: "Azul Bahia",
            image : './images/granite/AzulBahia_sample.jpg',
            href: './images/granite/AzulBahia_Slab.jpg'
        },
         {
			title: "Azul Imperial",
            image : './images/granite/AzulImperial_Sample.jpg',
            href: './images/granite/AzulImperial_Slab.jpg'
        },
         {
			title: "Bianco Romano",
            image : './images/granite/BiancoRomano_Sample.jpg',
            href: './images/granite/BiancoRomano_Slab.jpg'
        },
         {
			title: "Black Galaxy",
            image : './images/granite/BlackGalaxy_Sample.jpg',
            href: './images/granite/BlackGalaxy_Slab.jpg'
        },
		{
			title: "Cooper Canyon",
            image : './images/granite/CopperCanyon_Sample.jpg',
            href: './images/granite/CopperCanyon_Slab.jpg'
        },
		{
			title: "Cosmos",
            image : './images/granite/Cosmos_sample.jpg',
            href: './images/granite/Cosmos_Slab.jpg'
        },
         {
			title: "Costa Esmeralda",
            image : './images/granite/CostaEsmeralda_Sample.jpg',
            href: './images/granite/CostaEsmeralda_Slab.jpg'
        },
         {
			title: "Giallo Veneziano",
            image : './images/granite/GialloVeneziano_Sample.jpg',
            href: './images/granite/GialloVeneziano_Slab.jpg'
        },
         {
			title: "Sapphire Blue",
            image : './images/granite/SapphireBlue_Sample.jpg',
            href: './images/granite/SapphireBlue_Slab.jpg'
        },
         {
			title: "Tropic Brown",
            image : './images/granite/TropicBrown_Sample.jpg',
            href: './images/granite/TropicBrown_Slab.jpg'
        },
		{
			title: "White Srping",
            image : './images/granite/WhiteSpring_Sample.jpg',
            href: './images/granite/WhiteSpring_Slab.jpg'
        }
    ];

    	$scope.marble = [
        {
			title: "Bianco Carrara",
            image : './images/marble/BiancoCarrara_Sample.jpg',
            href: './images/marble/BiancoCarrara_Slab.jpg'
        },
         {
			title: "Bronzo Armani",
            image : './images/marble/BronzoArmani_Sample.jpg',
            href: './images/marble/BronzoArmani_slab.jpg'
        },
         {
			title: "Calacatta Gold",
            image : './images/marble/CalacattaGold_Sample.jpg',
            href: './images/marble/CalacattaGold_Slab.jpg'
        },
         {
			title: "Crema Murfil",
            image : './images/marble/CremaMurfil_Sample.jpg',
            href: './images/marble/CremaMurfil_Slab.jpg'
        },
         {
			title: "Emperador dark",
            image : './images/marble/EmperadorDark_Sample.jpg',
            href: './images/marble/EmperadorDark_Slab.jpg'
        },
		{
			title: "Nero Marquina",
            image : './images/marble/NeroMarquina_Sample.jpg',
            href: './images/marble/NeroMarquina_Slab.jpg'
        },
		{
			title: "Nero Portoro",
            image : './images/marble/NeroPortoro_Sample.jpg',
            href: './images/marble/NeroPortoro_Slab.jpg'
        },
         {
			title: "Rain Forest",
            image : './images/marble/RainForest_Sample.jpg',
            href: './images/marble/RainForest_Slab.jpg'
        },
         {
			title: "Rosa Verona",
            image : './images/marble/RosaVerona_Sample.jpg',
            href: './images/marble/RosaVerona_Slab.jpg'
        },
         {
			title: "Statuary",
            image : './images/marble/Statuary_Sample.jpg',
            href: './images/marble/Statuary_slab.jpg'
        },
         {
			title: "Striato Olympico",
            image : './images/marble/StriatoOlympico_Sample.jpg',
            href: './images/marble/StriatoOlympico_Slab.jpg'
        },
		{
			title: "Turkish Emperador",
            image : './images/marble/TurkishEmperador_Sample.jpg',
            href: './images/marble/TurkishEmperador_Slab.jpg'
        }
    ];


	console.log('MainCtrl started');
});


//---------------- ROUTING CONFIGURATION -------------------//
app.config(function($routeProvider, $locationProvider) {
	  $routeProvider
		  .when('/', {
			  templateUrl: '/page/home.html'
		  })
		  .when('/home', {
			  templateUrl: '/page/home.html'
		  })
		  .when('/portfolio', {
			  templateUrl: '/page/portfolio.html'
		  })
		  .when('/engineering-stone-quartz', {
			  templateUrl: '/page/engineering-stone-quartz.html'
		  })
		  .when('/granite', {
			  templateUrl: '/page/granite.html'
		  })
		  .when('/limestone-travertine', {
			  templateUrl: '/page/limestone-travertine.html'
		  })
		  .when('/marble', {
			  templateUrl: '/page/marble.html'
		  })
		  .when('/onyx-semi-precious', {
			  templateUrl: '/page/onyx-semi-precious.html'
		  })
		  .when('/quartzite', {
			  templateUrl: '/page/quartzite.html'
		  })
		  .when('/contact-us', {
			  templateUrl: '/page/contact.html'
		  })
		  .when('/kitchen', {
			  templateUrl: '/page/kitchen.html'
		  })
		  .otherwise({
			  redirectTo: '/'
		  });

	  // configure html5 to get links working on jsfiddle
	  //$locationProvider.html5Mode(true);
	});
