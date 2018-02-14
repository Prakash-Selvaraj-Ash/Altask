main.controller('productsController', ['$scope', '$stateParams', '$http', '$location', '$state', function ($scope, $stateParams, $http, $location, $state) {
    
    var products = [
        { id:"0", Name: "Pug Cutting", Description: "Pug cutting description", Image: "altask/assets/6 copy.jpg"},
        { id:"1", Name: "consumablesonsumables", Description: "Consumables description", Image: "altask/assets/B&Bartoni/BB consumablea.jpg"},
        { id:"2", Name: "CNC Profile Cutting Machine", Description: "CNC cutting description", Image: "altask/assets/cnc.jpg"}
    ];

    var pugCuttingProduct1 = { description: "Pug cutting description", image: "altask/assets/6 copy.jpg" }

    var consumablesProduct1 = { description: "Consumables description", image: "altask/assets/B&Bartoni/BB consumablea.jpg" }
    var consumablesProduct2 = { description: "Consumables description", image: "altask/assets/B&Bartoni/B&B Silver plus electrode.jpg" }
    var consumablesProduct3 = { description: "Consumables description", image: "altask/assets/B&Bartoni/Gas nozzle.jpg" }
    var consumablesProduct4 = { description: "Consumables description", image: "altask/assets/B&Bartoni/B&B consumable1.jpg" }

    var cncProduct1 = { description: "CNC cutting description", image: "altask/assets/cnc.jpg" }
    var cncProduct2 = { description: "CNC cutting description", image: "altask/assets/CNC4.jpg" }

    var mainProducts = [
        { id: "0", name: "Pug Cutting", isLogoAvailable:true, logoImage:"altask/assets/AREV Logo.png", products: [ pugCuttingProduct1 ]},
        { id: "1", name: "Consumables", isLogoAvailable:true, logoImage: "altask/assets/B&Bartoni/B&B Logo.jpg", products: [ consumablesProduct1, consumablesProduct2, consumablesProduct3, consumablesProduct4 ]},
        { id: "2", name: "CNC Profile Cutting Machine", isLogoAvailable:true, logoImage:"altask/assets/AREV Logo.png", products: [ cncProduct1, cncProduct2 ]},
    ]

    $scope.mainProduct = $.grep(mainProducts, function(e){ return e.id == $stateParams.id; })[0];
}]);