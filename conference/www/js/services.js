angular.module('starter.services', ['ngResource'])
.factory('Session', Session);

Session.$inject = ['$resource']
function Session ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId')
};

