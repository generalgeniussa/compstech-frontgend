/**
 * Created by jpmeyer on 2017/03/26.
 */
angular.module('app').service('httpService', function ($http) {

    var api = this;

    api.request = function(method, url, data) {
        return $http({
            method: method,
            url: url,
            data: data || null
        });
    };

});
