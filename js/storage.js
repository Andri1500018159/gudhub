 angular.module('storageMod',[])

.service('storage',function(){
    'use strict';

var pruductList = [
        {
			title: "Azul Aran",
            image : './images/granite/AzulAran_Sample.jpg',
            href: './images/granite/AzulAran_SLAB.jpg',
            type:"granite"
        },
         {
			title: "Azul Bahia",
            image : './images/granite/AzulBahia_sample.jpg',
            href: './images/granite/AzulBahia_Slab.jpg',
            type:"granite"
        },
         {
			title: "Azul Imperial",
            image : './images/granite/AzulImperial_Sample.jpg',
            href: './images/granite/AzulImperial_Slab.jpg',
            type:"granite"
        },
         {
			title: "Bianco Romano",
            image : './images/granite/BiancoRomano_Sample.jpg',
            href: './images/granite/BiancoRomano_Slab.jpg',
            type:"granite"
        },
         {
			title: "Black Galaxy",
            image : './images/granite/BlackGalaxy_Sample.jpg',
            href: './images/granite/BlackGalaxy_Slab.jpg',
            type:"granite"
        },
		{
			title: "Cooper Canyon",
            image : './images/granite/CopperCanyon_Sample.jpg',
            href: './images/granite/CopperCanyon_Slab.jpg',
            type:"granite"
        },
		{
			title: "Cosmos",
            image : './images/granite/Cosmos_sample.jpg',
            href: './images/granite/Cosmos_Slab.jpg',
            type:"granite"
        },
         {
			title: "Costa Esmeralda",
            image : './images/granite/CostaEsmeralda_Sample.jpg',
            href: './images/granite/CostaEsmeralda_Slab.jpg',
            type:"granite"
        },
         {
			title: "Giallo Veneziano",
            image : './images/granite/GialloVeneziano_Sample.jpg',
            href: './images/granite/GialloVeneziano_Slab.jpg',
            type:"granite"
        },
         {
			title: "Sapphire Blue",
            image : './images/granite/SapphireBlue_Sample.jpg',
            href: './images/granite/SapphireBlue_Slab.jpg',
            type:"granite"
        },
         {
			title: "Tropic Brown",
            image : './images/granite/TropicBrown_Sample.jpg',
            href: './images/granite/TropicBrown_Slab.jpg',
            type:"granite"

        },
		{
			title: "White Srping",
            image : './images/granite/WhiteSpring_Sample.jpg',
            href: './images/granite/WhiteSpring_Slab.jpg',
            type:"granite"
        },

        {
			title: "Bianco Carrara",
            image : './images/marble/BiancoCarrara_Sample.jpg',
            href: './images/marble/BiancoCarrara_Slab.jpg',
            type:"marble"
        },
         {
			title: "Bronzo Armani",
            image : './images/marble/BronzoArmani_Sample.jpg',
            href: './images/marble/BronzoArmani_slab.jpg',
            type:"marble"
        },
         {
			title: "Calacatta Gold",
            image : './images/marble/CalacattaGold_Sample.jpg',
            href: './images/marble/CalacattaGold_Slab.jpg',
            type:"marble"
        },
         {
			title: "Crema Murfil",
            image : './images/marble/CremaMurfil_Sample.jpg',
            href: './images/marble/CremaMurfil_Slab.jpg',
            type:"marble"
        },
         {
			title: "Emperador dark",
            image : './images/marble/EmperadorDark_Sample.jpg',
            href: './images/marble/EmperadorDark_Slab.jpg',
            type:"marble"
        },
		{
			title: "Nero Marquina",
            image : './images/marble/NeroMarquina_Sample.jpg',
            href: './images/marble/NeroMarquina_Slab.jpg',
            type:"marble"
        },
		{
			title: "Nero Portoro",
            image : './images/marble/NeroPortoro_Sample.jpg',
            href: './images/marble/NeroPortoro_Slab.jpg',
            type:"marble"
        },
         {
			title: "Rain Forest",
            image : './images/marble/RainForest_Sample.jpg',
            href: './images/marble/RainForest_Slab.jpg',
            type:"marble"
        },
         {
			title: "Rosa Verona",
            image : './images/marble/RosaVerona_Sample.jpg',
            href: './images/marble/RosaVerona_Slab.jpg',
            type:"marble"
        },
         {
			title: "Statuary",
            image : './images/marble/Statuary_Sample.jpg',
            href: './images/marble/Statuary_slab.jpg',
            type:"marble"
        },
         {
			title: "Striato Olympico",
            image : './images/marble/StriatoOlympico_Sample.jpg',
            href: './images/marble/StriatoOlympico_Slab.jpg',
            type:"marble"
        },
		{
			title: "Turkish Emperador",
            image : './images/marble/TurkishEmperador_Sample.jpg',
            href: './images/marble/TurkishEmperador_Slab.jpg',
            type:"marble"
        }
    ]

var sliders= [
        {
            image : "./images/slide/slide1.jpg",
            type:"slides"
        },
        {
            image : "./images/slide/slide2.jpg",
            type:"slides"
        },
        {
            image : "./images/slide/slide3.jpg",
            type:"slides"
        },
         {
            image : "./images/slide/slide1Sml.jpg",
            type:"slidesSml"
        },
        {
            image : "./images/slide/slide2Sml.jpg",
            type:"slidesSml"
        },
        {
            image : "./images/slide/slide3Sml.jpg",
            type:"slidesSml"
        },
        {
            image1 : "./images/slide/slide1.jpg",
            image2 : "./images/slide/slide2.jpg",
            image3 : "./images/slide/slide3.jpg",
            type: "carousel"
        },
        {
            image1 : './images/slide/slide4.jpg',
            image2 : './images/slide/slide5.jpg',
            image3 : './images/slide/slide1.jpg',
            type: "carousel"
        },
        {
            image : "./images/suppliers1.png",
            href: "#",
            type:"suppliers"
        },
         {
            image : "./images/suppliers2.png",
             href: "#",
             type:"suppliers"
        },
         {
            image : "./images/suppliers3.png",
             href: "#",
             type:"suppliers"
        },
         {
            image : "./images/suppliers4.png",
             href: "#",
             type:"suppliers"
        },
         {
            image : "./images/suppliers5.png",
             href: "#",
             type:"suppliers"
        }
    ];

    this.getGallery = function(quantity,type){
        var targetProduct = [];
          angular.forEach(pruductList, function(productList) {

              if(productList.type == type) targetProduct.push(productList);

        });
          return targetProduct;
    }

    this.getSliders = function(type){
        var targetSliders = [];
          angular.forEach(sliders, function(sliders) {
            if(sliders.type == type) targetSliders.push(sliders);
        });
          return targetSliders;
    }

})

