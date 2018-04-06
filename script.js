function convert(){

  var str = document.getElementById('number').value;
  var fromBase = document.getElementById('from').value;
  var toBase = document.getElementById('to').value;

  var num = parseInt(str, fromBase);
  
  document.getElementById('answer').innerHTML = str + " в системі числення " + fromBase + " це " + num.toString(toBase).fontcolor("#545454") + " в системі числення " + toBase;
    
}


