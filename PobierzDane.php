<?php
session_start();
$login=$_POST["Login"];
$haslo=$_POST["Haslo"];
    $connection = @mysqli_connect('mysql.cba.pl', 'Architektura', 'Architektura123', 'thelaczek')
        or die('zły adres lub login');
    mysqli_set_charset($connection, 'UTF8');
    $sql = "select * from `baza uzytkownikow`";
    $wynik = mysqli_query($connection, $sql);
    $jest=false;
    while ($linia = mysqli_fetch_array($wynik)){
       if($linia[1]==$login && $linia[3]==$haslo){
           $jest=true;
           $_SESSION['mylog'] = true;
           setcookie('log',$login);
       }
    }
    $data[2]=$jest;
    echo json_encode($data);
?>
