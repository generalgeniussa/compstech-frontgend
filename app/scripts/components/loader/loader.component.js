/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('loader', {
    templateUrl: 'scripts/components/loader/loader.template.html',
    controllerAs: '$ctrl',
    bindings: {
        text: '@',
        active: '<'
    },
    transclude: true
});
