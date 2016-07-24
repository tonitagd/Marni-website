'use strict';
/**
 * @ngdoc function
 * @name marniEngineeringApp.controller:FotoramaCtrl
 * @description
 * # AboutCtrl
 * Controller of the marniEngineeringApp
 */
angular.module('marniEngineeringApp').controller('FotoramaCtrl', function($scope, $http) {

    $scope.images = [];

    init();

    function init() {
        var dir = "../images/slides/";

        for (var i = 0; i < 2; i++) {
            $scope.images.push({ src: dir + "img" + i + ".png" });
        }

    }

});
