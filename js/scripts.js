var numbersArray = [];
var numberList = function(number) {
  for (currentNumber = 1; currentNumber <= number; currentNumber +=1) {
    numbersArray.push(currentNumber);
  }

}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //$("#output").hide();

    var finalNumber = parseInt($("#number").val());
    
    var result = numberList(finalNumber);

    var finalList = numbersArray.map(function(number) {
    $("ul").append("<li>" + number + "</li>");
    });

  });
});
