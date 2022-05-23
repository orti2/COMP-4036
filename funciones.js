function fibonacci() {
  n = Number(document.getElementById('fib').value);
  if (n === 0) {
      alert(0);
  }
  if (n === 1) {
      alert(1);
      
  }
  
  var previous = 0;
  var current = 1;
  
  for (var i=2; i <=n; i++) {
      new_current = previous + current;
      previous = current;
      current = new_current;
  }
  
  alert(current) ;
}

function factorial() {
  num = Number(document.getElementById('fact_n').value);
  var result = num;

  if (num === 0 || num === 1) 
    alert(1); 

  while (num > 1) { 
    num--;
    result = result * num;  
  }
  alert(result);
}

function cube() {
  num = Number(document.getElementById('n_cubed').value);
  alert(Math.pow(num,3));
}

function cube_url() {
  var url = window.location.href;
  if (url.includes("?=")){
    n = Number(url.slice(url.lastIndexOf('=') + 1, url.length));
    alert(Math.pow(n, 3));
  } else {
    alert("Inválido");
  }
 str  ='hola'
}
// function largest_num_(){
//   alert(
//     "<?php for(int i=0; i<=10; i++{ echo i"
//   )
// }