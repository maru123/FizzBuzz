(function(){
  for( var i = 1; i <= 100; i++){
    var message = decidemessage(i);
    console.log(message);
  }
}());
function decidemessage(num){
  var message = "";
  if (num % 3 === 0) message = "fizz";
  if (num % 5 === 0) message = message + "Buzz";
  return (message === "")? num : message;
}
