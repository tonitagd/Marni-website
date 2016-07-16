'use strict';

angular.module("marniEngineeringApp").directive("sliderMenu", function() {
    function link(scope, element, attrs) {
        function init() {

            [].slice.call(document.querySelectorAll('.dr-menu')).forEach(function(el, i) {

                var trigger = el.querySelector('div.dr-trigger'),
                    icon = trigger.querySelector('.flag'),
                    open = false,
                    list = el.querySelector('ul');

                trigger.addEventListener('click', function(event) {
                    if (!open) {
                        el.className += ' dr-menu-open';
                        open = true;
                    } else {
                        event.stopPropagation();
                        open = false;
                        el.className = el.className.replace(/\bdr-menu-open\b/, '');
                    }
                }, false);

                for (var item in list.children) {
                    var listItem = list.children[item];
                    if (listItem.localName === "li") {
                        listItem.addEventListener('click', function(event) {
                            if (open) {
                                event.stopPropagation();
                                open = false;
                                el.className = el.className.replace(/\bdr-menu-open\b/, '');
                                return false;
                            }
                        }, false);
                    }
                }

            });

        }


        init();
    }

    return {
        restrict: "E",
        templateUrl: "../partials/slider-menu.html",
        transclude: true,
        scope: {
            'language': '=',
            'updateLanguage': '&onUpdateLanguage'
        },
        link: link
    };
});
