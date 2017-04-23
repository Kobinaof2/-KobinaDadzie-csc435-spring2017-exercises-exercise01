<?php
include 'auth.php';

 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">

    <title>Welcome <?php echo $_SESSION['username']; ?></title>
    <h1>Welcome <?php echo $_SESSION['username']; ?></h1>
  </head>
  <body class="profilebody">
    <div class="pics">
      <img src="./cake.jpg" alt="Cake1" width="300px" height="300px"><br>
      <h6><?php echo $_SESSION['cake1']; ?></h6><br>
      <img src="./cupcake.jpg" alt="Cake2" width="300px" height="300px"><br>
      <h6><?php echo $_SESSION['cake2']; ?></h6><br>
      <img src="./Floralcake.jpg" alt="Cake3" width="300px" height="300"><br>
      <h6><?php echo $_SESSION['cake3']; ?></h6>



    </div>

    <a href="logout.php">Logout</a>





  </body>
</html>
