(function(){
  for( var i = 1; i <= 100; i++){
    var messege = decideMessege(i);
    console.log(messege);
  }
}());
function decideMessege(num){
  var messege = "";
  if (num % 3 === 0) messege = "fizz";
  if (num % 5 === 0) messege = messege + "Buzz";
  return (messege === "")? num : messege;
}
