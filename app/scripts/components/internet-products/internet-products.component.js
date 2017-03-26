/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('internetProducts', {
    templateUrl: 'scripts/components/internet-products/internet-products.template.html',
    controllerAs: '$ctrl',
    bindings: {
        products: '<',
        addProduct: '&'
    },
    controller: [function () {
        var $ctrl = this;
    }]
});
