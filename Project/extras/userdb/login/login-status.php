<?php
require_once('../common.php');

header('Content-Type: text/plain');
if (LoginUtils::is_user_logged_in())
  echo "You are logged in!\n";
else
  echo "You are not logged in!\n";
?>
