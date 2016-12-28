'use strict';
/**
 * @ngdoc function
 * @name marniEngineeringApp.controller:FotoramaCtrl
 * @description
 * # AboutCtrl
 * Controller of the marniEngineeringApp
 */
angular.module('marniEngineeringApp').controller('FotoramaCtrl', function($scope, $http, FotoramaService) {

    $scope.images = [];

    init();

    function init() {
        var dir = "images/slides/";

        for (var i = 0; i < 7; i++) {
            $scope.images.push({
                url: dir + "img" + i + ".jpg",
                type: "image"
            });
        }

    }

    $scope.getHeight = function() {
        return FotoramaService.getFotoramaHeight() + "px";
    }

});
