/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('cart', {
    templateUrl: 'scripts/components/cart/cart.template.html',
    controllerAs: '$ctrl',
    bindings: {
        products: '<',
        total: '<',
        checkout: '&',
        removeProductFromCart: '&'
    },
    controller: [function () {
        var $ctrl = this;
    }]
});
