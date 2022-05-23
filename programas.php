<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Página COMP4018</title>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body style=background-color:#f6f1de;>
<header>
  <center>
    <h1>
      Programas
    </h1>
  </center>
</header>
<p>
<center>
  <h3>Javascript:</h3>  
  <h5><br>Fibonacci</h5>  

  <input type="number" name="fib_n" id="fib" placeholder="Ej: fib(0) = ?">
  <button onclick="fibonacci()">JS</button>
  <script src="./funciones.js"></script>

  <h5><br>Factorial</h5> 

  <input type="number" name="fact_n" id="fact_n" placeholder="Ej: fact(0) = ?">
  <button onclick="factorial()" >JS</button>
  <h5><br>Elevar al cubo el número entrado<br> ... intente desde el URL, ej: ?=5</h5> 
  
  <input type="number" name="cube_n" id="n_cubed" placeholder="Ej: 0^3 = ?">
  <button onclick="cube()">
  JS</button>

  <button onclick="cube_url()">
    URL
  </button>
  <br><hr>
  <h3>PHP:</h3>
  <h5><br>Entre su nombre</h5> 
<form method="post" action="programas.php" target="_self">  
<input type="text" name="nombre" id="name" placeholder="Ej: Pedro">  
<button type="submit">PHP</button> 

<?php
  if(isset($_POST['nombre'])){
    $nombre = $_POST['nombre'];
    $mensaje = 'Hola ' . $nombre . '!';
    $alert="<script>alert(" . "'" . $mensaje . "'" . ");</script>";
    echo $alert;
  }
?>

</form> 

<h5><br>Dividir numero entre 2</h5> 
<form method="post" action="programas.php" target="_self">  
<input type="number" name="num_div" id="div_num" placeholder="Ej: 10/2 = ?">  
<button type="submit">PHP</button> 

<?php
  if(isset($_POST['num_div'])){
    $num = $_POST['num_div'];
    $alert="<script>alert(" . "'" . $num/2 . "'" . ");</script>";
  echo $alert;
  }
?>

</form>

<h5><br>Elevar al cubo el número entrado</h5> 
<form method="post" action="programas.php" target="_self">  
<input type="number" name="cube" id="n_cubed" placeholder="Ej: 0^3 = ?">  
<button type="submit">PHP</button> 

<?php
  if(isset($_POST['cube'])){
    $num = $_POST['cube'];
    $alert="<script>alert(" . "'" . pow($num, 3) . "'" . ");</script>";
  echo $alert;
  }
?>

</form> 

  <br>
  <br>
  <button><a href="./index.html">Volver</a></button>
</center>
</p>
<p>
<center>
  

  
</center>
</p>
</body>
</html>