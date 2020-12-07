<?php
session_start();
if ($_SESSION['mylog'] == false) {
    header("Location: ./index.php");
}
?>
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="nav.css" type="text/css" />
    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="stylesheet" href="running_catalog.css" type="text/css" />
    <SCRIPT type="text/javascript" language="JavaScript" SRC="scripts.js"></SCRIPT>
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />



    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <title>Running catalog</title>
</head>

<body>
    <?php
     $Log = $_COOKIE['log'];
    ?>
    <div class="nav">

        <img class="nav_logo" src="./images/athletics.svg" alt="logo">
        <button class="logout" onclick="location.href='./LogOut.php';">Wyloguj się</button>
        <div class="website_title">
            <h1>Katalog biegania</h1>
        </div>
        <form action="./favourite_runs.php" class="nav_favourite-form">
            <button type="submit" class="nav_favourite">
                <input type="hidden" id="login" name="login" value=<?php echo $Log ?>>
                <img class="nav_favourite_img" src="./images/star.svg" alt="favourite">
            </button>
        </form>
        <div class="search_box">
            <input onkeyup="searchBoxFilter()" class="search_box_input" type="text" placeholder="Jakiego biegu szukasz?">
            <i class="fas fa-search"></i>
        </div>
    </div>
    <div class="sort_menu">
        <div class="sort_menu_option0"></div>
        <div onclick="sortByCategory('name')" class="sort_menu_option1 sort_menu_option">
            <h3>Nazwa</h3>
        </div>
        <div onclick="sortByCategory('distance')" class="sort_menu_option2 sort_menu_option">
            <h3>Dystans</h3>
        </div>
        <div onclick="sortByCategory('province')" class="sort_menu_option3 sort_menu_option">
            <h3>Województwo</h3>
        </div>
        <div onclick="sortByCategory('city')" class="sort_menu_option4 sort_menu_option">
            <h3>Miasto</h3>
        </div>
        <div onclick="sortByCategory('date')" class="sort_menu_option5 sort_menu_option">
            <h3>Data</h3>
        </div>
    </div>
    <div id="running_container">

    </div>
    <script>
        runningArray.sort(dynamicSort('name'))
        runningArray.forEach(myFunction);
    </script>
</body>

</html>