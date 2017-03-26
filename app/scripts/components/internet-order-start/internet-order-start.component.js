/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').component('internetOrderStart', {
    templateUrl: 'scripts/components/internet-order-start/internet-order-start.template.html',
    bindings: {},
    controllerAs: '$ctrl',
    controller: ['categoryService', function (categoryService) {
        var $ctrl = this;
        $ctrl.order = {
            first_name: '',
            surname: '',
            cell: '',
            email: '',
            tel: '',
            fax: '',
            company_name: '',
            company_reg: '',
            company_vat: '',
            physical_address_line_1: '',
            physical_address_line_2: '',
            physical_address_city: '',
            physical_address_province: '',
            physical_address_postal_code: '',
            postal_address_line_1: '',
            postal_address_line_2: '',
            postal_address_city: '',
            postal_address_province: '',
            postal_address_postal_code: '',
            billing_address_line_1: '',
            billing_address_line_2: '',
            billing_address_city: '',
            billing_address_province: '',
            billing_address_postal_code: '',
            bank_name: '',
            bank_branch_name: '',
            bank_branch_code: '',
            bank_acc_number: '',
            bank_acc_type: '',
            terms_agreed: '',
            products: [],
            total: 0.00
        };

        $ctrl.$onInit = function () {
            console.log('Fetching...');
            $ctrl.loading = true;
            $ctrl.step = 'categories';
            categoryService.getInternetCategories()
                .then(function (response) {
                    $ctrl.categories = response.data;
                })
                .catch(function (response) {
                    $ctrl.error = true;
                })
                .finally(function () {
                    $ctrl.loading = false;
                });
        };

        $ctrl.selectCategory = function(category) {
            $ctrl.selectedCategory = category;
            $ctrl.step = 'subcategories';
        };

        $ctrl.selectSubcategory = function(subcategory) {
            console.log('Selected subcategory ', subcategory);
            $ctrl.selectedSubcategory = subcategory;
            $ctrl.step = 'products';
        };

        $ctrl.addProduct = function(product) {
            $ctrl.order.products.push(angular.copy(product));
            $ctrl.order.total = 0.00;
            angular.forEach($ctrl.order.products, function(product) {
                $ctrl.order.total += parseFloat(product.price);
            });
        }
    }]
});
