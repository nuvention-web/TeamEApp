app.filter('relevantSchoolFilter', [function($filter) {
  return function(inputArray, searchCriteria, target) {
    if (!angular.isDefined(searchCriteria) || searchCriteria == '') {
      return inputArray;
    }
    var data = [];
    angular.forEach(inputArray, function(program) {
      if (program.school.indexOf(target) > -1) {

        data.push(item);
        
      }
    });
    if (data != []) {
      return data
    }
    angular.forEach(inputArray, function(program) {
      if (program.school.indexOf(target) > -1) {

        data.push(item);
        
      }
    });

    return data;

  };
}]);
