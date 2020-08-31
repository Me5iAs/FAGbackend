app.directive('egCuadrado', function () {
  return function (scope, element, attrs) {
    console.log("A"); 
    element.bind("click", function (event) {
      alert("bind");
    });
  };
});