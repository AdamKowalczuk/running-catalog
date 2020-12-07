<?php
session_start();
if ($_SESSION['mylog'] == false) {
    header("Location: ./index.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="nav.css" type="text/css" />
    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="stylesheet" href="running_catalog.css" type="text/css" />
    <link rel="stylesheet" href="favourite.css" type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <SCRIPT type="text/javascript" language="JavaScript" SRC="scripts.js"></SCRIPT>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favourite Runs</title>
</head>

<body>
    <div class="nav">
        <img class="nav_logo" src="./images/athletics.svg" onclick="location.href='./running_catalog.php';" alt="logo">
        <button class="logout" onclick="location.href='./LogOut.php';">Wyloguj się</button>
        <div class="website_title">
            <h1>Ulubione</h1>
        </div>
        <button class="nav_favourite-back" onclick="history.back();">
            Powrót do katalogu
        </button>
    </div>
    </div>
    <div class="favourite_container">
            <div class="sort_menu">
        <div class="sort_menu_option0"></div>
        <div class="sort_menu_option1 sort_menu_option sort_menu_yellow">
            <h3>Nazwa</h3>
        </div>
        <div class="sort_menu_option2 sort_menu_option sort_menu_yellow">
            <h3>Dystans</h3>
        </div>
        <div class="sort_menu_option3 sort_menu_option sort_menu_yellow">
            <h3>Województwo</h3>
        </div>
        <div class="sort_menu_option4 sort_menu_option sort_menu_yellow">
            <h3>Miasto</h3>
        </div>
        <div class="sort_menu_option5 sort_menu_option sort_menu_yellow">
            <h3>Data</h3>
        </div>
    </div>
                    <?php
                    $login= $_GET['login'];
                    $connection = @mysqli_connect('127.0.0.1:3306', 'root', '', 'baza')
                        or die('zły adres lub login');
                    mysqli_set_charset($connection, 'UTF8');
                    $sql = "select * from `$login` order by `Data biegu`";
                    $wynik = mysqli_query($connection, $sql);
                    while ($linia = mysqli_fetch_array($wynik)){
                        echo "<div class='running_container_items $linia[0]'>";
                        echo    "<button onclick='deleteRunFromFavourites(value)' value=$linia[0]  class='running_container_button button-yellow'>Usuń</button><div class='running_container_name'>$linia[1]";
                        echo    "</div><div class='running_container_distance'>$linia[2]";
                        echo    "</div><div class='running_container_province'>$linia[3]";
                        echo    "</div><div class='running_container_city'>$linia[4]";
                        echo    "</div><div class='running_container_date'>$linia[5]</div></div>";
                    }
                    ?>
    </div>
</body>

</html>