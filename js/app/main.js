var main = angular.module('main', ['ui.router']);

main.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
function ($locationProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('empty', {
      url: '/altask',
      views: {
        '': { templateUrl: 'altask/partials/home.html' },
        'head@empty': {
          templateUrl: 'altask/partials/header.html'
        },
        'foot@empty':{
          templateUrl:'altask/partials/footer.html'
        }
      }
    })
    .state('contacts', {
      url: '/contacts',
      views: {
        '': { templateUrl: 'altask/partials/contacts.html' },
        'head@contacts': {
          templateUrl: 'altask/partials/header.html'
        },
        'foot@contacts':{
          templateUrl:'altask/partials/footer.html'
        }
      }
    })
    .state('services', {
      url: '/services',
      views: {
        '': { templateUrl: 'altask/partials/services.html' },
        'head@services': {
          templateUrl: 'altask/partials/header.html'
        },
        'foot@services':{
          templateUrl:'altask/partials/footer.html'
        }
      }
    })
    .state('products', {
      url: '/products/:id',
      views: {
        '': { templateUrl: 'altask/partials/products.html', controller: 'productsController' },
        'head@products': {
          templateUrl: 'altask/partials/header.html'
        },
        'foot@products':{
          templateUrl:'altask/partials/footer.html'
        }
      }
    })

  $locationProvider.html5Mode({
    enabled: true
  });
}]);