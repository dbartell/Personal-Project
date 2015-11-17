angular.module('motoBetsApp')

.service('dashboardService', function ($q, $http) {
	this.getBets = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:9000/dash'
		}).then(function(res) {
			return res;
		});
	};
	this.getFourRiders = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:9000/riders'
		}).then(function(res) {
			var fourArray = [];
			for(var i = 0; i < res.data.length; i++) {
				if(res.data[i].class == 450) {
					 fourArray.push(res.data[i]);
				}
			} return fourArray;
		});
	};
	this.getTwoRiders = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:9000/riders'
		}).then(function(res) {
			var twoArray = [];
			for(var i = 0; i < res.data.length; i++) {
				if(res.data[i].class == 250) {
					 twoArray.push(res.data[i]);
				}
			} return twoArray;
		});
	};

	this.getFacebook = function() {
		return $http({
			method:'GET',
			url:'http://localhost:9000/users'
		}).then(function(res) {
			return res;
		});
	};
	this.submit = function(id, name, four, two) {
		var def = $q.defer();
		var users = {
			user: name,
			fourpick: four,
			twopick: two
		};
		$http({
	 		method:'PUT',
	 		url: id,
			data: users
	 }).then(function(res) {
		 	def.resolve(res.data);
	 });
	 return def.promise;
 };
 this.getEntries = function(id) {
  return $http({
 	 method: 'GET',
 	 url: 'http://localhost:9000/dash/' + id + '/entries'
 	});
 };
 this.getUser = function() {
	 return $http({
		 method: 'GET',
		 url: '/users'
	 });
 };
 this.getEntriesByUser = function(id) {
	 return $http({
		 method: 'GET',
		 url: '/dash/' + id
	 });
 };



});
