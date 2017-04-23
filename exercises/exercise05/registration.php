<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <h1>Ms Mary's Bakery</h1>
    <title>Register here</title>
  </head>
  <body>
    <?php
    require 'code_exec.php';
    session_start();
    if (isset($_REQUEST['username'])){
        // removes backslashes
	  $username = stripslashes($_REQUEST['username']);
        //escapes special characters in a string
  	$username = mysqli_real_escape_string($mysqli,$username);
    $password = stripslashes($_REQUEST['password']);
  	$password = mysqli_real_escape_string($mysqli,$password);
    $cake1 = stripslashes($_REQUEST['cake1']);
  	$cake1 = mysqli_real_escape_string($mysqli,$cake1);
    $cake2 = stripslashes($_REQUEST['cake2']);
  	$cake2 = mysqli_real_escape_string($mysqli,$cake2);
    $cake3 = stripslashes($_REQUEST['cake3']);
  	$cake3 = mysqli_real_escape_string($mysqli,$cake);

    $query = "INSERT into `users` (username, password, cake1, cake2,cake3)
      VALUES ('$username', '".md5($password)."', '$cake1', '$cake2','$cake3')";
              $result = mysqli_query($mysqli,$query);
              if($result){
                  echo "<div class='form'>
      <h3>You are registered successfully.</h3>
      <br/>Click here to <a href='login.php'>Login</a></div>";
              }
          }else{
      ?>
      <div class="form">
      <h1>Registration</h1>
      <form name="registration" action="" method="post">
        <input type="text" name="username" placeholder="Username" required /> <br>
        <input type="password" name="password" placeholder="Password" required /><br>
        <img src="./cake.jpg" alt="Cake1" width="300px" height="300px"><br>
        <input type="text" name="cake1" value="Give this cake a name"><br>
        <img src="./cupcake.jpg" alt="Cake2" width="300px" height="300px"><br>
        <input type="text" name="cake2" value="Give this cake a name"><br>
        <img src="./Floralcake.jpg" alt="Cake3" width="300px" height="300"><br>
        <input type="text" name="cake3" value="Give this cake a name"><br>
        <input type="submit" name="submit" value="Register" />


      </form>
      </div>

     <?php } ?>

  </body>
</html>
