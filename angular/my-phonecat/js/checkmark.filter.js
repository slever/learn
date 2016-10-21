var filter = angular.module('phonecatFiltersModule', []).filter('checkmark', CheckmarkFilterFactory);

function CheckmarkFilterFactory (){
  console.log("factory");
  return function(input) {
    console.log("worker "+input);
    return input ? '\u2713' : '\u2718';
  };
}
