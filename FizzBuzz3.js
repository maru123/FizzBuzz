(function(){
  for( var i = 1; i <= 100; i++){
    var messege = decideMessege(i);
    print(messege);
  }
}());
function decideMessege(num){
  if(num % 3 === 0) return "fizz";
  if(num % 5 === 0) return "Buzz";
  return num;
}
