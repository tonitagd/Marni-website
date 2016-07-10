'use strict';

/**
 * @ngdoc function
 * @name marniEngineeringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marniEngineeringApp
 */
angular.module('marniEngineeringApp').controller('MainCtrl', function($translate, $scope, $location) {
    this.language = 'en';
    this.languages = ['en', 'bg'];

    this.updateLanguage = function() {
        $translate.use(this.language);
    };

    $scope.isActive = function(path) {
        return ($location.path().substr(0, path.length) === path);
    };
});
