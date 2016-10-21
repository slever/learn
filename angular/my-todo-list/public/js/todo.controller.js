var module = angular.module('todoControllerModule', ['ngResource','todoConstantModule']);

module.controller('TodoController', TodoController);

TodoController.$inject=['$resource','todoConstant'];

function TodoController($resource,todoConstant) {
  var vm = this;
  var res = $resource(todoConstant.url_todos);


  var doLoad = function(){
    vm.todos=res.query();
  }

  vm.showForm = function(){
    $('#createDialog').modal();
  }

  vm.createTodo=function(todo){
    res.save({
      date:todo.date.getTime(),
      task:todo.task}
      ,function(){
      doLoad();
      $('#todoForm')[0].reset();
//      todoForm.$setPristine();
//      todoForm.$setUntouched();
    });
  }

  vm.delete = function(todo){
    res.delete(todo,function(){
      var index = vm.todos.indexOf(todo);
      vm.todos.splice(index, 1);

    //  doLoad();
    });
  }

  doLoad();
}
