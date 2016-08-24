'use strict';

/**
 * @ngdoc function
 * @name marniEngineeringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marniEngineeringApp
 */
angular.module('marniEngineeringApp').controller('MainCtrl', function($translate, $scope, $location, FotoramaService) {
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

        $scope.$watch('location.url()', function() {
            $scope.showPageFoto = $location.path() === '/about';
            $scope.style = getTop();
        });

        $.mCustomScrollbar.defaults.scrollButtons.enable = true;
        $.mCustomScrollbar.defaults.axis = "y";


    }

    function getTop() {
        var documentHeight = $(document).height();
        var top = documentHeight > 768 ? 80 : 50;
        if ($scope.showPageFoto) {
            top += FotoramaService.getFotoramaHeight();
        }

        return {
            top: top
        }
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
