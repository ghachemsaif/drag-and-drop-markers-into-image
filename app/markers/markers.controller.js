(function () {

    'use strict';

   angular.module('app')
    .component('manipmarkers', {
        templateUrl: 'app/markers/markers.view.html',
        controller: 'controller',
        controllerAs: 'vm',
    })
    .controller('controller', ['$scope', '$window','$rootScope','$timeout', function ($scope, $window, $rootScope, $timeout) {
        var vm = this;
        $scope.zones = [
            {   "posX":127.421875,
                "posY":206,
                "className":"marker_red_select",
                "relatedpoint":"1",
                "marker_id":"elementmarker1",
                "rotate_deg":-45,
                "scale":1
            },
            {"posX":227.421875,"posY":106,
                "className":"marker_black_select",
                "relatedpoint":"2",
                "marker_id":"elementmarker2",
                "rotate_deg":0,
                "scale":1},
        
            {"posX":127.422,"posY":189,
                "className":"marker_green_select",
                "relatedpoint":"2",
                "marker_id":"elementmarker4",
                "rotate_deg":0,
                "scale":1}
        ];

        var $dragContainer = $('#drag-container');
        var $formContainer = $('#form-container');
        var $dragElementSource = $('.drag-element-source');


        var _updateProperties = function (index, ui, stateClass) {
            console.log(ui.helper[0].id);
            if(ui.helper[0].id){
                index = _.findIndex($scope.zones, {marker_id: ui.helper[0].id});

                $scope.zones[index].posX = ui.position.left;
                $scope.zones[index].posY = ui.position.top;
            }
            else{
                $scope.zones[index] = {
                    'posX' : ui.position.left,
                    'posY' : ui.position.top,
                    'width' : ui.helper.width(),
                    'height' : ui.helper.height(),
                    'className' : stateClass,
                };
            }

            $scope.$apply();
            console.log(JSON.stringify($scope.zones));

        };

        $scope.onDroppedDragStop = function (event, ui) {
            console.log('drop');
            var index = ui.helper.attr('index');
            var stateClass = ui.helper.attr('data-marker');
            _updateProperties(index, ui, stateClass);
        };
        

        $formContainer.droppable({
            'drop' : function (event, ui) {
                // Only do this if this is the source element
                if (ui.helper.hasClass('drag-element-source') === true) {
                    var stateClass  = ui.helper.attr('data-marker');
                    var index = $scope.zones.length;
                    _updateProperties(index, ui, stateClass);
                }

            }
        });

    }]);

}());