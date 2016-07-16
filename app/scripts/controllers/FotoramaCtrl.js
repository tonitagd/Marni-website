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
        var temp = [];
        for (var i = 0; i < 9; i++) {
            temp.push({ src: dir + "img" + i + ".png" });
            if ((i + 1) % 3 === 0) {
                $scope.images.push(temp);
                temp = [];
            }
        }
        $scope.images.push(temp);

        $('.fotorama').fotorama({
            width: "100%",
            maxwidth: '100%',
            height: "20%",
            ratio: 16 / 9,
            autoPlay: true,
        });
    }

});
