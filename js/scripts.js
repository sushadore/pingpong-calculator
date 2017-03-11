var numbersArray = [];
var numberList = function(number) {
  for (currentNumber = 1; currentNumber <= number; currentNumber +=1) {
    if (currentNumber % 5 === 0 && currentNumber % 3 === 0) {
      numbersArray.push("ping pong");
    }
    else if (currentNumber % 5 === 0) {
      numbersArray.push("pong");
    }
    else if (currentNumber % 3 === 0) {
      numbersArray.push("ping");
    } else {
      numbersArray.push(currentNumber);
    }
  }
};

$(function() {
  $("form").submit(function(e) {
    e.preventDefault();

    var inputNumber = numberList(parseInt($("#number").val()));

    var numbersList = numbersArray.map(function(number) {
      $("ul").append("<li>" + number + "</li>");
    });

    $("button#play").hide();
    $("button#play-again").show();
    });

    $("button#play-again").click(function() {
      numbersArray.length=0;
      $("form")[0].reset();
      $(".output").children().remove();
      $("button#play").show();
      $("button#play-again").hide();
  });
});
