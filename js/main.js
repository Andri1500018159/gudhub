angular.module('myapp', [ "ngRoute",
                          "ui.bootstrap",
                          "storageMod",
                          "contactForm"
                                ])

 .controller('MainCtrl', function( $scope, storage ) {
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
                                 name: "Engineered Stone/Quartz",
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
                                name: "project visualizer",
                                href: "#/kitchen",
								active: false
                             },
                             {
                                 name: "3D Edges",
                                 href: "#/3dedges",
								 active: false
                             },
                             {
                                 name: "Request Quote",
                                 href: "#/requestquote",
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

    $scope.slides = storage.getSliders("slides");
    $scope.slidesSml = storage.getSliders("slidesSml");
    $scope.carousel = storage.getSliders("carousel");
    $scope.suppliers = storage.getSliders("suppliers");
    $scope.granite = storage.getGallery( 6, "granite");
    $scope.marble = storage.getGallery( 6, "marble");
    $scope.quartzite = storage.getGallery( 6, "quartzite");
    $scope.onyx = storage.getGallery( 6, "onyx");
    $scope.engineered = storage.getGallery( 6, "engineered");
    $scope.limestonetravertine = storage.getGallery( 6, "limestonetravertine");
})
.config(function($routeProvider, $locationProvider) {
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
		  .when('/3dedges', {
			  templateUrl: '/page/3dedges.html'
		  })
		  .when('/requestquote', {
			  templateUrl: '/page/requestquote.html'
		  })
		  .when('/suppliers', {
			  templateUrl: '/page/suppliers.html'
		  })
		  .otherwise({
			  redirectTo: '/'
		  });
	})


.directive("contactForm", function() {
    return {
        templateUrl:'page/contact-form.html'
    };
});
