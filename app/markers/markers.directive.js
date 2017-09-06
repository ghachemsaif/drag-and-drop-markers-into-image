/**
 * Created by saif on 13/07/17.
 */
 (function () {

    var link = function (scope, element, attrs) {
        $(element).draggable({
            'tolerance' : 'fit',
            'helper' : 'clone',
            'cursor' : 'move',
            'zIndex' : 100
        });
    };

    // Original Drag element
    angular
        .module('app')
        .directive('dragElement', function () {
        return {
            restrict: 'AE',
            replace: true,
            link: link,
            template: '<div class="drag-element-source drag-element"></div>'
        };
    });

    // Dropped Drag element
    angular
        .module('app')
        .directive('droppedElement', function () {
        var controller = function ($scope,$rootScope) {

    };

    var link = function (scope, element, attrs) {
        element = $(element);
        scope.$watch('settings', function() {
            element.css('left', scope.settings.posX);
            element.css('top', scope.settings.posY);
            element.css('width', scope.settings.width);
            element.css('height', scope.settings.height);

        });
        console.log(scope.settings);
        element.draggable({
            'containment' : '#form-container',
            'helper' : 'original',
            'tolerance' : 'fit',
            'stop' : scope.onDragStop,
            'cancel':'.modal_marker'
        });
    };

    return {
        restrict: 'AE',
        replace: true,
        scope: {
            onDragStop: '=',
            settings: '=',
            index: '=',
            zones : '='

        },
        link: link,
        controller: ['$scope', controller],
        template: '<div class="dropped-element drag-element" bindings="{{settings}}">' +
        '</div>'
    };

    });



angular
        .module('app')
        .directive('markeritem', function () {
    var link = function (scope, element, attrs) {
        element = $(element);
        scope.$watch('settings', function() {
            element.css('left', scope.settings.posX);
            element.css('top', scope.settings.posY);
            element.css('width', scope.settings.width);
            element.css('height', scope.settings.height);
        });

    };

    return {
        restrict: 'AE',
        replace: true,
        scope: {
            settings: '=',
            index: '=',

        },
        link: link,
        template: '<div class="dropped-element drag-element"></div>'
    };

});


}());