/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('internetCategories', {
    templateUrl: 'scripts/components/internet-categories/internet-categories.template.html',
    bindings: {
        'categories': '<',
        'selectCategory': '&'
    },
    controllerAs: '$ctrl',
    controller: [function () {
        var $ctrl = this;

        $ctrl.onInit = function () {
            console.log($ctrl.categories);
        };
    }]
});
