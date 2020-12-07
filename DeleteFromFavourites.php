<?php
    $connection = @mysqli_connect('mysql.cba.pl', 'Architektura', 'Architektura123', 'baza')
        or die('zły adres lub login');
    mysqli_set_charset($connection, 'UTF8');

    $Login = $_COOKIE['log'];
    $Id=$_COOKIE['id'];
    $sql = "select * from `$Login`";
    $wynik = mysqli_query($connection, $sql);
    $sql="DELETE FROM `$Login` WHERE `Id`=$Id";
    $wynik = mysqli_query($connection, $sql);
    
?>
