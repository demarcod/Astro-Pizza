<?php
class LoginUtils
{
  public static function possible_new_login($email)
  {
    $_SESSION['form.login.uname'] = $email;
  }

  public static function log_in_user($email)
  {
    $_SESSION['logged_in_user'] = $email;
  }

  public static function log_out_user()
  {
    unset(
      $_SESSION['logged_in_user'],
      $_SESSION['form.login.uname']
    );
  }

  public static function is_user_logged_in()
  {
    return isset($_SESSION['logged_in_user']);
  }

  static function logged_in_user()
  {
    return is_user_logged_in()
      ? $_SESSION['logged_in_user']
      : FALSE;
  }
}
?>
