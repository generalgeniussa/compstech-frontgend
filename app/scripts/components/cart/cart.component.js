/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('cart', {
    templateUrl: 'scripts/components/cart/cart.template.html',
    controllerAs: '$ctrl',
    bindings: {
        products: '<',
        total: '<'
    },
    controller: [function () {
        var $ctrl = this;
    }]
});
