;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService'];

  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;
    
  }


})();