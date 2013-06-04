    function PlanIt($scope) {

     //sample data, but could be fetched from remote server
    $scope.todos = [
    {text:'learn angular',desc:'ohh kinda messy',priority:'1',done:false},
    {text:'build an angular app',desc:'what about backbone.js',priority:'2', done:false},
        { text:'Coffee',desc:'yeah sure ',priority:'2', done:true},
        {text:'Snacks',desc:'at 6',priority:'4', done:false},
        {text:'tea',desc:'with music',priority:'2', done:true},
        {text:'Indexing',desc:'some ..',priority:'3', done:false} ];

        //invoked when the form submit is called .The data fetched from Formfield is pushed onto the data object
    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.todoText,desc:$scope.sbj,priority:$scope.priority, done:false});

        //grounds everything to default value after pushing
    $scope.todoText = '';
        $scope.sbj = '';
        $scope.priority
            = '';
    };

        // calculate the total remains
    $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
    count += todo.done ? 0 : 1;
    });
    return count;
    };
        //when calling this method it takes the index and trash the data
        //splice() method adds/removes items to/from an array, and returns the removed item(s).
        //eg var fruits = ["Banana", "Orange", "Apple", "Mango"];
        //fruits.splice(2,2); gives banana Orange removes from position 2 , 2 elements

      $scope.trash=function(index){
          $scope.todos.splice(index, 1);

        }
        //Dummy function
		$scope.alert=function(index){
          alert('This Feature Coming Soon');

        }

        // removes the completed tasks
    $scope.completed = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
    if (!todo.done) $scope.todos.push(todo);
    });
    };
    }