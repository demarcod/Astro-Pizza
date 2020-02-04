<?php
require_once('../common.php');

if (array_key_exists('name', $_POST)
  && array_key_exists('passwd', $_POST)
  && count($_POST) == 2)
{
  if (strcmp($_POST['name'], 'admin') == 0
    && $_POST['passwd'] == 'abc123')
  {
    LoginUtils::log_in_user($_POST['name']);
  }
  else if (
  else
  {
    // login unsuccessful
    LoginUtils::possible_new_login($_POST['name']);
    HTTPUtils::redirect('login.php');
  }
}
else 
{
  //invalid information! hacking?
  LoginUtils::log_out_user();
  HTTPUtils::redirect('example.php');
}


header('Content-Type: text/plain');
if (LoginUtils::is_user_logged_in())
  echo "You are logged in!\n";
else
  echo "You are not logged in!\n";
?>
