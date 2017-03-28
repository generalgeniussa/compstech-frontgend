/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('internetProducts', {
    templateUrl: 'scripts/components/internet-products/internet-products.template.html',
    controllerAs: '$ctrl',
    bindings: {
        products: '<',
        addProduct: '&',
        'selectedSubcategory': '<'
    },
    controller: [function () {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            console.log($ctrl.products);
        };
    }]
});
