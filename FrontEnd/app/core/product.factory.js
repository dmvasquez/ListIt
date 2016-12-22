(function() {
    'use strict';

    angular
        .module('app')
        .factory('productFactory', productFactory);

    productFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function productFactory($http, apiUrl) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(product) {
            return $http.post(apiUrl + '/products', product);
        }

        function getAll() {
            return $http.get(apiUrl + '/products');
        }

        function getById(id) {
            return $http.get(apiUrl + '/products/' + id);
        }

        function update(id, product) {
            return $http.put(apiUrl + '/products/' + id, product);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/products/' + id);
        }
    }
})();