<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="register.css" type="text/css" />
    <SCRIPT type="text/javascript" language="JavaScript" SRC="scripts.js"></SCRIPT>
    <title>Witaj</title>
</head>

<body>
    <?php
    $connection = @mysqli_connect('127.0.0.1:3306', 'root', '', 'baza')
        or die('zły adres lub login');
    mysqli_set_charset($connection, 'UTF8');
    $Login = $_POST['mylog'];
    $sql = "select * from `baza uzytkownikow`";
    $wynik = mysqli_query($connection, $sql);
    $powtorka = false;
    while ($linia = mysqli_fetch_array($wynik)) {
        if ($linia[1] == $Login) {
            $powtorka = true;
        }
    }
    if ($powtorka) {

    ?>
        <div class="Welcome">
            <h1>Twój login jest już zajęty. Wybierz inny</h1>
            <button class="Go" onclick="location.href='./register_panel.php';">Powrót do rejestracji</button>
        </div>
    <?php
    } else {
        
        $_SESSION['mylog'] = true;
        setcookie('log', $Login);
        $Mail = $_POST['Mail'];
        $Haslo = $_POST['Haslo'];
        $Tel = $_POST['Telefon'];
        $Uro = $_POST['Urodziny'];
        $sql = "INSERT INTO `baza uzytkownikow`( `Login`, `Mail`, `Hasło`, `Nr telefonu`, `Data urodzenia` ) VALUES( '" . $Login . "', '" . $Mail . "', '" . $Haslo . "', '" . $Tel . "', '" . $Uro . "')";
        $wynik = mysqli_query($connection, $sql);
        mysqli_set_charset($connection, 'UTF8');
        $sql2 = "CREATE TABLE `$Login` (
            `Id` int(11) ,
            `Nazwa` VARCHAR(80) NOT NULL,
            `Dystans` DECIMAL(10,1) NOT NULL,
            `Województwo` VARCHAR(30),
            `Miasto` VARCHAR(40),
            `Data biegu` DATE
            )ENGINE = MYISAM DEFAULT CHARSET = 'utf8' DEFAULT COLLATE = 'utf8_unicode_ci';";
        $connection->query($sql2)
    ?>
        <div class="Welcome">
            <h1>Rejestracja przebiegła pomyślnie</h1>
            <button class="Go" onclick="location.href='./running_catalog.php';">Przejdź do katalogu</button>
        </div>
    <?php
    }

    ?>

</body>

</html>