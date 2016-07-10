
var app = angular.module ("myApp.directives", []);


app.directive('ngHeaderSection', function() {
		return {
			restrict: 'A', 
			templateUrl: 'views/header.html'
		};
	});


	app.directive('ngPortadaSection', function() {
		return {
			restrict: 'A', 
			templateUrl: 'views/portada.html'
		};
	});


	app.directive('ngFooterSection', function() {
		return {
			restrict: 'A', 
			templateUrl: 'views/footer.html'
		};
	});



	app.directive('ngNavSection', function() {
		return {
			restrict: 'A', 
			templateUrl: 'views/navegator.html'
		};
	});



	app.directive('ngModalSection', function() {
		return {
			restrict: 'A', 
			templateUrl: 'views/modal.html'
		};
	});



	app.directive('ngdestacadosSection', function() {
		return {
			restrict: 'A', 
			templateUrl: 'views/destacados.html'
		};
	});




  app.directive('bandDirective', function(){
	    return {
	      restrict: 'AE',
	      replace: true,
	      templateUrl: 'views/cards.html'
	    };
  });


  app.directive('galleryDirective', function(){
	    return {
	     restrict: 'AE',
	    replace: true,
	     templateUrl: 'views/gallerycards.html'
	  };
 });


    app.directive('ngGallerySection', function(){
	    return {
	      restrict: 'AE',
	      replace: true,
	      templateUrl: 'views/gallerycards.html'
	    };
  });