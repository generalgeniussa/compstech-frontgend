/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').service('categoryService', function (httpService, CATEGORY_SERVICE_URI) {
    var api = this;

    api.getInternetCategories = function () {
        return httpService.request('get', CATEGORY_SERVICE_URI);
    };
});
