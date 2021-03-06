angular.module('example', ["clinicico"]);

function TaskCtrl($scope, tasks) {
  $scope.method = "slow";
  $scope.input = "{}";

  $scope.submit = function(method, input) {
    var task = tasks.submit(method, angular.fromJson(input));

    task.on("update", function(status) {
      $scope.status = status;
    });


    task.results.then(function(results) {
      $scope.results = results;
    });

  }

}
TaskCtrl.$inject = ['$scope', 'clinicico.tasks'];
