<?php
require_once('../common.php');
LoginUtils::log_out_user();
HTTPUtils::redirect('demo-login/example.php');
?>
