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
        },
//    QUARTZITE
       {
			title: "Cezanne",
            image : './images/quartzite/Cezanne_Sample.jpg',
            href: './images/quartzite/Cezanne_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Copper Dune",
            image : './images/quartzite/CopperDune_Sample.jpg',
            href: './images/quartzite/CopperDune_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Emerald",
            image : './images/quartzite/Emerald_Sample.jpg',
            href: './images/quartzite/Emerald_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Fusion",
            image : './images/quartzite/Fusion_Sample.jpg',
            href: './images/quartzite/Fusion_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Luisa Blue",
            image : './images/quartzite/LuisaBlue_Sample.jpg',
            href: './images/quartzite/LuisaBlue_Slab.jpg',
            type:"quartzite"
        },
		{
			title: "Lumix",
            image : './images/quartzite/Lumix_Sample.jpg',
            href: './images/quartzite/Lumix_Slab.jpg',
            type:"quartzite"
        },
		{
			title: "Moonlight",
            image : './images/quartzite/Moonlight_Sample.jpg',
            href: './images/quartzite/Moonlight_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Petrified Wood",
            image : './images/quartzite/PetrifiedWood_Sample.jpg',
            href: './images/quartzite/PetrifiedWood_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Prada",
            image : './images/quartzite/Prada_Sample.jpg',
            href: './images/quartzite/Prada_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Taj Mahal",
            image : './images/quartzite/TajMahal_Sample.jpg',
            href: './images/quartzite/TajMahal_Slab.jpg',
            type:"quartzite"
        },
         {
			title: "Vogue",
            image : './images/quartzite/Vogue_Sample.jpg',
            href: './images/quartzite/Vogue_Slab.jpg',
            type:"quartzite"

        },
		{
			title: "Yellow Bamboo",
            image : './images/quartzite/YellowBamboo_Sample.jpg',
            href: './images/quartzite/YellowBamboo_Slab.jpg',
            type:"quartzite"
        },
//    ONYX
       {
			title: "Amber",
            image : './images/onyx/AmberOnyx_Sample.jpg',
            href: './images/onyx/AmberOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Capuccino",
            image : './images/onyx/CappuccinoOnyx_Sample.jpg',
            href: './images/onyx/CappuccinoOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Fantasy",
            image : './images/onyx/FantasyOnyx_Sample.jpg',
            href: './images/onyx/FantasyOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Fire",
            image : './images/onyx/FireOnyx_Sample.jpg',
            href: './images/onyx/FireOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Gray",
            image : './images/onyx/GrayOnyx_Sample.jpg',
            href: './images/onyx/GrayOnyx_Slab.jpg',
            type:"onyx"
        },
		{
			title: "Green",
            image : './images/onyx/GreenOnyx_Sample.jpg',
            href: './images/onyx/GreenOnyx_slab.jpg',
            type:"onyx"
        },
		{
			title: "Honey",
            image : './images/onyx/HoneyOnyx_Sample.jpg',
            href: './images/onyx/HoneyOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Pink",
            image : './images/onyx/PinkOnyx_Sample.jpg',
            href: './images/onyx/PinkOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Smeraldo",
            image : './images/onyx/SmeraldoOnyx_Sample.jpg',
            href: './images/onyx/SmeraldoOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Velluto",
            image : './images/onyx/VellutoOnyx_Sample.jpg',
            href: './images/onyx/VellutoOnyx_Slab.jpg',
            type:"onyx"
        },
         {
			title: "Volcano",
            image : './images/onyx/VolcanoOnyx_Sample.jpg',
            href: './images/onyx/VolcanoOnyx_Slab.jpg',
            type:"onyx"

        },
		{
			title: "White",
            image : './images/onyx/WhiteOnyx_Sample.jpg',
            href: './images/onyx/WhiteOnyx_Slab.jpg',
            type:"onyx"
        },
//    LIMESTONE/travertine
       {
			title: "Jerusalem Gold",
            image : './images/limestone/limestone/JerusalemGold_Sample.jpg',
            href: './images/limestone/limestone/JerusalemGold_Slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Lagos Blue",
            image : './images/limestone/limestone/LagosBlue_Sample.jpg',
            href: './images/limestone/limestone/LagosBlue_Slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Petit Granit",
            image : './images/limestone/limestone/PetitGranit_Sample.jpg',
            href: './images/limestone/limestone/PetitGranit_Slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Ramon Gold",
            image : './images/limestone/limestone/RamonGold_Sample.png',
            href: './images/limestone/limestone/RamonGold_Slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Sea Grass",
            image : './images/limestone/limestone/SeaGrass_Sample.jpg',
            href: './images/limestone/limestone/SeaGrass_Slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Sophia",
            image : './images/limestone/limestone/Sophia_Sample.jpg',
            href: './images/limestone/limestone/Sophia_Slab.jpg',
            type:"limestonetravertine"
        },
//    travertine
		{
			title: "Durango",
            image : './images/limestone/travertine/DurangoTravertine_Sample.jpg',
            href: './images/limestone/travertine/DurangoTravertine_Slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Parthenon Gold",
            image : './images/limestone/travertine/ParthenonGoldTravertine_Sample.jpg',
            href: './images/limestone/travertine/ParthenonGoldTravertine_Slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Persian White",
            image : './images/limestone/travertine/PersianWhiteTravertine_Sample.jpg',
            href: './images/limestone/travertine/PersianWhiteTravertine_Slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Red Travertine",
            image : './images/limestone/travertine/RedTravertine_Sample.jpg',
            href: './images/limestone/travertine/RedTravertine_Slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Roman Travertine",
            image : './images/limestone/travertine/RomanTravertine_Sample.jpg',
            href: './images/limestone/travertine/RomanTravertine_Slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Silver Travertine",
            image : './images/limestone/travertine/SilverTravertine_Sample.jpg',
            href: './images/limestone/travertine/SilverTravertine_Slab.jpg',
            type:"limestonetravertine"
        },
//    engineered
       {
            image : './images/engineered/1.jpg',
            href: 'http://products.daltile.com/onequartz.cfm',
            type:"engineered"
        },
         {
            image : './images/engineered/2.jpg',
            href: 'http://parksite.myeshowroom.com/search?dealer=23154&manufacturer=7453&brand=0&category=0&option=0',
            type:"engineered"
        },
         {
            image : './images/engineered/3.jpg',
            href: 'http://www.marmostone.net/#!kalingastoneslabs/cww',
            type:"engineered"
        },
         {
            image : './images/engineered/4.jpg',
            href: 'http://asdusa.com/samsungradianz/',
            type:"engineered"
        },
         {
            image : './images/engineered/5.jpg',
            href: 'http://www.msistone.com/quartzcountertops/',
            type:"engineered"
        },
		{
            image : './images/engineered/6.jpg',
            href: 'http://www.marblegranites.com/products/technoquartz/alltechnoquartz.aspx?g=125',
            type:"engineered"
        },
		{
            image : './images/engineered/7.jpg',
            href: 'http://www.stonedesign.com/gallery/44/',
            type:"engineered"
        },
         {
            image : './images/engineered/8.JPG',
            href: 'http://www.lgviaterausa.com/productOverviews/83/byproductline',
            type:"engineered"
        },
         {
            image : './images/engineered/9.JPG',
            href: 'http://www.stalwartsystemsusa.com/projects/225027/HanStoneQuartz',
            type:"engineered"
        },
         {
            image : './images/engineered/10.jpg',
            href: 'http://www.direscousa.com/#!colors/c1gt7',
            type:"engineered"
        },
         {
            image : './images/engineered/11.jpg',
            href: 'http://www.universalgranite.com/browse?material=Quartz',
            type:"engineered"

        },
		{
            image : './images/engineered/12.jpg',
            href: 'http://www.caesarstoneus.com/en/TheCatalog/Pages/ByColor.aspx',
            type:"engineered"
        },
		{
            image : './images/engineered/13.jpg',
            href: 'http://www.tmsupply.com/products/naturalstoneproducts.aspx?filter=difiniti',
            type:"engineered"
        },
		{
            image : './images/engineered/14.jpg',
            href: 'http://www.silestoneusa.com/colors/',
            type:"engineered"
        },
//    natural
        {
            image : './images/natural/1.jpg',
            href: 'http://www.globalmarbleil.com',
            type:"natural"
        },
         {
            image : './images/natural/2.jpg',
            href: 'http://www.levantina.com/us/',
            type:"natural"
        },
         {
            image : './images/natural/3.jpg',
            href: 'http://asdusa.com',
            type:"natural"
        },
         {
            image : './images/natural/4.jpg',
            href: 'http://www.damarstone.com',
            type:"natural"
        },
         {
            image : './images/natural/5.jpg',
            href: 'http://www.chadwickssurfaces.net',
            type:"natural"
        },
		{
            image : './images/natural/6.jpg',
            href: 'http://www.stone-design.com',
            type:"natural"
        },
		{
            image : './images/natural/7.jpg',
            href: 'http://www.msistone.com',
            type:"natural"
        },
         {
            image : './images/natural/8.JPG',
            href: 'http://www.cosmosgranite.com',
            type:"natural"
        },
         {
            image : './images/natural/9.JPG',
            href: 'http://www.marble-granites.com',
            type:"natural"
        },
         {
            image : './images/natural/10.jpg',
            href: 'http://www.daltile.com',
            type:"natural"
        },
         {
            image : './images/natural/11.jpg',
            href: 'http://www.tmsupply.com',
            type:"natural"

        },
		{
            image : './images/natural/12.jpg',
            href: 'http://www.marmostone.net',
            type:"natural"
        },
//    suppliers
           {
            image : './images/engineered/1.jpg',
            href: 'http://products.daltile.com/onequartz.cfm',
            type:"suppliers"
        },
         {
            image : './images/engineered/2.jpg',
            href: 'http://parksite.myeshowroom.com/search?dealer=23154&manufacturer=7453&brand=0&category=0&option=0',
            type:"suppliers"
        },
         {
            image : './images/engineered/3.jpg',
            href: 'http://www.marmostone.net/#!kalinga-stone-slabs/cww',
            type:"suppliers"
        },
         {
            image : './images/engineered/4.jpg',
            href: 'http://asdusa.com/samsung-radianz/',
            type:"suppliers"
        },
         {
            image : './images/engineered/5.jpg',
            href: 'http://www.msistone.com/quartz-countertops/',
            type:"suppliers"
        },
		{
            image : './images/engineered/6.jpg',
            href: 'http://www.marble-granites.com/products/technoquartz/all-technoquartz.aspx?g=125',
            type:"suppliers"
        },
		{
            image : './images/engineered/7.jpg',
            href: 'http://www.stone-design.com/gallery/44/',
            type:"suppliers"
        },
         {
            image : './images/engineered/8.JPG',
            href: 'http://www.lgviaterausa.com',
            type:"suppliers"
        },
         {
            image : './images/engineered/9.JPG',
            href: 'http://www.stalwartsystemsusa.com/projects/225027/HanStone-Quartz',
            type:"suppliers"
        },
         {
            image : './images/engineered/10.jpg',
            href: 'http://www.direscousa.com',
            type:"suppliers"
        },
         {
            image : './images/engineered/11.jpg',
            href: 'http://www.universalgranite.com/browse?material=Quartz',
            type:"suppliers"

        },
		{
            image : './images/engineered/12.jpg',
            href: 'http://www.caesarstoneus.com/en/Pages/default.aspx ',
            type:"suppliers"
        },
		{
            image : './images/engineered/13.jpg',
            href: 'http://www.tmsupply.com/products/natural-stoneproducts.aspx?filter=difiniti',
            type:"suppliers"
        },
		{
            image : './images/engineered/14.jpg',
            href: 'http://www.silestoneusa.com',
            type:"suppliers"
        },

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

