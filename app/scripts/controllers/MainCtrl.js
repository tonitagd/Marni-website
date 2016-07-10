'use strict';

/**
 * @ngdoc function
 * @name marniEngineeringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marniEngineeringApp
 */
angular.module('marniEngineeringApp').controller('MainCtrl', function($translate) {
    this.language = 'en';
    this.languages = ['en', 'bg'];
    this.updateLanguage = function() {
        $translate.use(this.language);
    };
});
