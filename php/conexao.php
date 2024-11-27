<?php

    define('host', 'localhost');
    define('user', 'root');
    define('password', '');
    define('database', 'teste');

    $cnx = mysqli_connect(host, user, password, database);
    mysqli_set_charset($cnx, 'utf8');

?>