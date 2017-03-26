/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('internetSubcategories', {
    templateUrl: 'scripts/components/internet-subcategories/internet-subcategories.template.html',
    bindings: {
        'subcategories': '<',
        'selectSubcategory': '&'
    },
    controllerAs: '$ctrl',
    controller: [function () {
        var $ctrl = this;
    }]
});
