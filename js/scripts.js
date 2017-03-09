var numbersArray = [];
var numberList = function(number) {
  for (currentNumber = 1; currentNumber <= number; currentNumber +=1) {
    if (currentNumber % 5 === 0) {
      numbersArray.push("pong")
    }
    else if (currentNumber % 3 === 0) {
      numbersArray.push("ping");
    } else {
      numbersArray.push(currentNumber);
    }
  }
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var finalNumber = parseInt($("#number").val());
    var result = numberList(finalNumber);
    var finalList = numbersArray.map(function(number) {
    $("ul").append("<li>" + number + "</li>");
    });

    $("button#play").hide();
    $("button#play-again").show();

  });
});
