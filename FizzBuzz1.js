(function(){
  for ( var i = 1; i <= 100; i++){
    var messege = "";
    if( i % 3 === 0 ) messege = "Fizz";
    if( i % 5 === 0 ) messege = messege + "Buzz";
    if( messege === "") messege = i;
    console.log(messege)
  }
}());
