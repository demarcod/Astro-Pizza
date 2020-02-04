<?php

class Layout
{
  function __construct()
  {
  }

  function __destruct()
  {
  }

  function output()
  {
    $c = new Config();

    echo '<!DOCTYPE html>';
    echo <<<ZZEOF
<html>
  <head><title>Title!</title></head>
  <body>
  <h1>Cool!</h1>
  <p>name = {$c->db_name}</p>
  <p>name = {$c->db_pass}</p>
  </body>
</html>
ZZEOF;
  }
}

?>
