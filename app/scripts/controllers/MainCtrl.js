'use strict';

/**
 * @ngdoc function
 * @name marniEngineeringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marniEngineeringApp
 */
angular.module('marniEngineeringApp').controller('MainCtrl', function($translate, $scope, $location) {
    init();

    function init() {
        $scope.languages = [{
            code: 'en',
            text: "English",
            img: "images/en.png"
        }, {
            code: 'bg',
            text: "Български",
            img: "images/bg.png"
        }];

        $scope.language = $scope.languages[1];
        $scope.style = {};

        $scope.location = $location;
    }

    $scope.updateLanguage = function(code) {
        $translate.use(code);
        for (var element in $scope.languages) {
            if ($scope.languages[element].code == code) {
                $scope.language = $scope.languages[element];
                break;
            }
        }
    };

    $scope.isActive = function(path) {
        return ($location.path().substr(0, path.length) === path);
    }

});
