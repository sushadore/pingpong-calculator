var array = [];
var numberlist = function(number) {
  for (currentNumber = 1; currentNumber <= number; currentNumber +=1) {
    array.push(currentNumber);
  }

}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //$("#output").hide();

    var finalNumber = parseInt($("#number").val());
    var result = numberlist(finalNumber);
    $("ul").text(array);



  });
});
