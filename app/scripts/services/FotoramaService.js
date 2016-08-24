'use strict';

angular.module('marniEngineeringApp').service('FotoramaService', function() {

    this.getFotoramaHeight = function() {
        var documentHeight = $(document).height();
        return (documentHeight * 2 / 10);
    }

});
