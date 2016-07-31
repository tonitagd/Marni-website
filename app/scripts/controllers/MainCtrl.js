'use strict';

/**
 * @ngdoc function
 * @name marniEngineeringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marniEngineeringApp
 */
angular.module('marniEngineeringApp').controller('MainCtrl', function($translate, $scope, $location) {
    this.languages = [{
        code: 'en',
        text: "English",
        img: "../images/en.png"
    }, {
        code: 'bg',
        text: "Български",
        img: "../images/bg.png"
    }];

    this.language = this.languages[1];

    $.mCustomScrollbar.defaults.scrollButtons.enable = true;
    $.mCustomScrollbar.defaults.axis = "y";

    this.updateLanguage = function(code) {
        $translate.use(code);
        for (var element in this.languages) {
            if (this.languages[element].code == code) {
                this.language = this.languages[element];
                break;
            }
        }
    };

    $scope.isActive = function(path) {
        return ($location.path().substr(0, path.length) === path);
    };

});
