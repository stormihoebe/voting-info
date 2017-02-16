$(function() {
  var age = parseInt(prompt("how old are you?"));

  if (age >= 18) {
    $("#votingInfo").show();
  } else {
    $("#tooYoung").show();
  };
});
