 angular.module('storageMod',[])

.service('storage',function(){
    'use strict';

var pruductList = [
        {
			title: "Azul Aran",
            image : './images/granite/azularan_sample.jpg',
            href: './images/granite/azularan_slab.jpg',
            type:"granite"
        },
         {
			title: "Azul Bahia",
            image : './images/granite/azulbahia_sample.jpg',
            href: './images/granite/azulbahia_slab.jpg',
            type:"granite"
        },
         {
			title: "Azul Imperial",
            image : './images/granite/azulimperial_sample.jpg',
            href: './images/granite/azulimperial_slab.jpg',
            type:"granite"
        },
         {
			title: "Bianco Romano",
            image : './images/granite/biancoromano_sample.jpg',
            href: './images/granite/biancoromano_slab.jpg',
            type:"granite"
        },
         {
			title: "Black Galaxy",
            image : './images/granite/blackgalaxy_sample.jpg',
            href: './images/granite/blackgalaxy_slab.jpg',
            type:"granite"
        },
		{
			title: "Cooper Canyon",
            image : './images/granite/coppercanyon_sample.jpg',
            href: './images/granite/coppercanyon_slab.jpg',
            type:"granite"
        },
		{
			title: "Cosmos",
            image : './images/granite/cosmos_sample.jpg',
            href: './images/granite/cosmos_slab.jpg',
            type:"granite"
        },
         {
			title: "Costa Esmeralda",
            image : './images/granite/costaesmeralda_sample.jpg',
            href: './images/granite/costaesmeralda_slab.jpg',
            type:"granite"
        },
         {
			title: "Giallo Veneziano",
            image : './images/granite/gialloveneziano_sample.jpg',
            href: './images/granite/gialloveneziano_slab.jpg',
            type:"granite"
        },
         {
			title: "Sapphire Blue",
            image : './images/granite/sapphireblue_sample.jpg',
            href: './images/granite/sapphireblue_slab.jpg',
            type:"granite"
        },
         {
			title: "Tropic Brown",
            image : './images/granite/tropicbrown_sample.jpg',
            href: './images/granite/tropicbrown_slab.jpg',
            type:"granite"

        },
		{
			title: "White Srping",
            image : './images/granite/whitespring_sample.jpg',
            href: './images/granite/whitespring_slab.jpg',
            type:"granite"
        },

        {
			title: "Bianco Carrara",
            image : './images/marble/biancocarrara_sample.jpg',
            href: './images/marble/biancocarrara_slab.jpg',
            type:"marble"
        },
         {
			title: "Bronzo Armani",
            image : './images/marble/bronzoarmani_sample.jpg',
            href: './images/marble/bronzoarmani_slab.jpg',
            type:"marble"
        },
         {
			title: "Calacatta Gold",
            image : './images/marble/calacattagold_sample.jpg',
            href: './images/marble/calacattagold_slab.jpg',
            type:"marble"
        },
         {
			title: "Crema Murfil",
            image : './images/marble/cremamurfil_sample.jpg',
            href: './images/marble/cremamurfil_slab.jpg',
            type:"marble"
        },
         {
			title: "Emperador dark",
            image : './images/marble/emperadordark_sample.jpg',
            href: './images/marble/emperadordark_slab.jpg',
            type:"marble"
        },
		{
			title: "Nero Marquina",
            image : './images/marble/neromarquina_sample.jpg',
            href: './images/marble/neromarquina_slab.jpg',
            type:"marble"
        },
		{
			title: "Nero Portoro",
            image : './images/marble/neroportoro_sample.jpg',
            href: './images/marble/neroportoro_slab.jpg',
            type:"marble"
        },
         {
			title: "Rain Forest",
            image : './images/marble/rainforest_sample.jpg',
            href: './images/marble/rainforest_slab.jpg',
            type:"marble"
        },
         {
			title: "Rosa Verona",
            image : './images/marble/rosaverona_sample.jpg',
            href: './images/marble/rosaverona_slab.jpg',
            type:"marble"
        },
         {
			title: "Statuary",
            image : './images/marble/statuary_sample.jpg',
            href: './images/marble/statuary_slab.jpg',
            type:"marble"
        },
         {
			title: "Striato Olympico",
            image : './images/marble/striatoolympico_sample.jpg',
            href: './images/marble/striatoolympico_slab.jpg',
            type:"marble"
        },
		{
			title: "Turkish Emperador",
            image : './images/marble/turkishemperador_sample.jpg',
            href: './images/marble/turkishemperador_slab.jpg',
            type:"marble"
        },
//    QUARTZITE
       {
			title: "Cezanne",
            image : './images/quartzite/cezanne_sample.jpg',
            href: './images/quartzite/cezanne_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Copper Dune",
            image : './images/quartzite/copperdune_sample.jpg',
            href: './images/quartzite/copperdune_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Emerald",
            image : './images/quartzite/emerald_sample.jpg',
            href: './images/quartzite/emerald_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Fusion",
            image : './images/quartzite/fusion_sample.jpg',
            href: './images/quartzite/fusion_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Luisa Blue",
            image : './images/quartzite/luisablue_sample.jpg',
            href: './images/quartzite/luisablue_slab.jpg',
            type:"quartzite"
        },
		{
			title: "Lumix",
            image : './images/quartzite/lumix_sample.jpg',
            href: './images/quartzite/lumix_slab.jpg',
            type:"quartzite"
        },
		{
			title: "Moonlight",
            image : './images/quartzite/moonlight_sample.jpg',
            href: './images/quartzite/moonlight_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Petrified Wood",
            image : './images/quartzite/petrifiedwood_sample.jpg',
            href: './images/quartzite/petrifiedwood_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Prada",
            image : './images/quartzite/prada_sample.jpg',
            href: './images/quartzite/prada_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Taj Mahal",
            image : './images/quartzite/tajmahal_sample.jpg',
            href: './images/quartzite/tajmahal_slab.jpg',
            type:"quartzite"
        },
         {
			title: "Vogue",
            image : './images/quartzite/vogue_sample.jpg',
            href: './images/quartzite/vogue_slab.jpg',
            type:"quartzite"

        },
		{
			title: "Yellow Bamboo",
            image : './images/quartzite/yellowbamboo_sample.jpg',
            href: './images/quartzite/yellowbamboo_slab.jpg',
            type:"quartzite"
        },
//    ONYX
       {
			title: "Amber",
            image : './images/onyx/amberonyx_sample.jpg',
            href: './images/onyx/amberonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Capuccino",
            image : './images/onyx/cappuccinoonyx_sample.jpg',
            href: './images/onyx/cappuccinoonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Fantasy",
            image : './images/onyx/fantasyonyx_sample.jpg',
            href: './images/onyx/fantasyonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Fire",
            image : './images/onyx/fireonyx_sample.jpg',
            href: './images/onyx/fireonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Gray",
            image : './images/onyx/grayonyx_sample.jpg',
            href: './images/onyx/grayonyx_slab.jpg',
            type:"onyx"
        },
		{
			title: "Green",
            image : './images/onyx/greenonyx_sample.jpg',
            href: './images/onyx/greenonyx_slab.jpg',
            type:"onyx"
        },
		{
			title: "Honey",
            image : './images/onyx/honeyonyx_sample.jpg',
            href: './images/onyx/honeyonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Pink",
            image : './images/onyx/pinkonyx_sample.jpg',
            href: './images/onyx/pinkonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Smeraldo",
            image : './images/onyx/smeraldoonyx_sample.jpg',
            href: './images/onyx/smeraldoonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Velluto",
            image : './images/onyx/vellutoonyx_sample.jpg',
            href: './images/onyx/vellutoonyx_slab.jpg',
            type:"onyx"
        },
         {
			title: "Volcano",
            image : './images/onyx/volcanoonyx_sample.jpg',
            href: './images/onyx/volcanoonyx_slab.jpg',
            type:"onyx"

        },
		{
			title: "White",
            image : './images/onyx/whiteonyx_sample.jpg',
            href: './images/onyx/whiteonyx_slab.jpg',
            type:"onyx"
        },
//    LIMESTONE/travertine
       {
			title: "Jerusalem Gold",
            image : './images/limestone/limestone/jerusalemgold_sample.jpg',
            href: './images/limestone/limestone/jerusalemgold_slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Lagos Blue",
            image : './images/limestone/limestone/lagosblue_sample.jpg',
            href: './images/limestone/limestone/lagosblue_slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Petit Granit",
            image : './images/limestone/limestone/petitgranit_sample.jpg',
            href: './images/limestone/limestone/petitgranit_slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Ramon Gold",
            image : './images/limestone/limestone/ramongold_sample.png',
            href: './images/limestone/limestone/ramongold_slab.jpg',
            type:"limestonetravertine"
        },
         {
			title: "Sea Grass",
            image : './images/limestone/limestone/seagrass_sample.jpg',
            href: './images/limestone/limestone/seagrass_slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Sophia",
            image : './images/limestone/limestone/sophia_sample.jpg',
            href: './images/limestone/limestone/sophia_slab.jpg',
            type:"limestonetravertine"
        },
//    travertine
		{
			title: "Durango",
            image : './images/limestone/travertine/durangotravertine_sample.jpg',
            href: './images/limestone/travertine/durangotravertine_slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Parthenon Gold",
            image : './images/limestone/travertine/parthenongoldtravertine_sample.jpg',
            href: './images/limestone/travertine/parthenongoldtravertine_slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Persian White",
            image : './images/limestone/travertine/persianwhitetravertine_sample.jpg',
            href: './images/limestone/travertine/persianwhitetravertine_slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Red Travertine",
            image : './images/limestone/travertine/redtravertine_sample.jpg',
            href: './images/limestone/travertine/redtravertine_slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Roman Travertine",
            image : './images/limestone/travertine/romantravertine_sample.jpg',
            href: './images/limestone/travertine/romantravertine_slab.jpg',
            type:"limestonetravertine"
        },
		{
			title: "Silver Travertine",
            image : './images/limestone/travertine/silvertravertine_sample.jpg',
            href: './images/limestone/travertine/silvertravertine_slab.jpg',
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
            href: 'http://asdusa.com/samsung-radianz/',
            type:"engineered"
        },
         {
            image : './images/engineered/5.jpg',
            href: 'http://www.msistone.com/quartz-countertops/',
            type:"engineered"
        },
		{
            image : './images/engineered/6.jpg',
            href: 'http://www.marble-granites.com/products/technoquartz/all-technoquartz.aspx?g=125',
            type:"engineered"
        },
		{
            image : './images/engineered/7.jpg',
            href: 'http://www.stone-design.com/gallery/44/',
            type:"engineered"
        },
         {
            image : './images/engineered/8.jpg',
            href: 'http://www.lgviaterausa.com/productOverviews/83/byproductline',
            type:"engineered"
        },
         {
            image : './images/engineered/9.jpg',
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
            href: 'http://www.tmsupply.com/products/natural-stone-products.aspx?filter=difiniti',
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
            image : './images/natural/8.jpg',
            href: 'http://www.cosmosgranite.com',
            type:"natural"
        },
         {
            image : './images/natural/9.jpg',
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
            image : './images/engineered/8.jpg',
            href: 'http://www.lgviaterausa.com',
            type:"suppliers"
        },
         {
            image : './images/engineered/9.jpg',
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
            href: 'http://www.tmsupply.com/products/natural-stone-products.aspx?filter=difiniti',
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
            image : "./images/slide/slide1sml.jpg",
            type:"slidesSml"
        },
        {
            image : "./images/slide/slide2sml.jpg",
            type:"slidesSml"
        },
        {
            image : "./images/slide/slide3sml.jpg",
            type:"slidesSml"
        },
        {
            image1 : "./images/slide/slide1car.jpg",
            image2 : "./images/slide/slide2car.jpg",
            image3 : "./images/slide/slide3car.jpg",
            type: "carousel"
        },
        {
            image1 : './images/slide/slide4car.jpg',
            image2 : './images/slide/slide5car.jpg',
            image3 : './images/slide/slide1car.jpg',
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

