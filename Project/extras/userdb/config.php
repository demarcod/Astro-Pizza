<?php

// Create an empty class for configuration data...
$CFG = new stdClass();

// Global configuration variables...
// base_url is the base URL of where this web site is mounted...
// For example, if root of this web site is placed in public_html/provided
// then this needs to be in the base URL.
$CFG->base_url = '';

// db_admin_prohibit_create_drop:
//   IMPORTANT: By default this setting should be TRUE!
//   Functions that are capable of creating and destroying database
//   tables in this site's code will check this setting to see if
//   it has been set to FALSE. If it has not been set to FALSE, then
//   the function will fail to execute as a safety precaution.
$CFG->db_admin_prohibit_create_drop = TRUE;

// Database connectivity information...
//  db_dsn: This must be set to the PHP PDO DSN to your database.
// db_user: This must be set to the database connection's user name.
// db_pass: This must be set to the database connection user's password.
$CFG->db_dsn = 'mysql:host=localhost;dbname=guerreis_projtest';
$CFG->db_user='guerreis_projtest';
$CFG->db_pass='projtest123';

?>
