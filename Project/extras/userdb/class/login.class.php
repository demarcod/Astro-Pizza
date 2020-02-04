<?php

class Login
{
  function output()
  {
    $defvalue = '';
    if (array_key_exists('form.login.uname', $_SESSION))
    {
      $defvalue = 'value="'.
        htmlspecialchars($_SESSION['form.login.uname'], ENT_QUOTES).
        '"';
    }

    echo '<!DOCTYPE html>';
    echo <<<ZZEOF
<html>
  <head><title>Login!</title></head>
  <body>
    <form action="process-login.php" method="POST">
      Login: <input id="name" name="name" type="text" $defvalue><br>
      Pass: <input id="passwd" name="passwd" type="password"><br>
      <input type="submit" value="Login">
    </form>
  </body>
</html>
ZZEOF;
  }
}

?>
