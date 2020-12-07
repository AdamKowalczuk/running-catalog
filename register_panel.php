<?php
session_start()
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="register.css" type="text/css" />
    <SCRIPT type="text/javascript" language="JavaScript" SRC="formularz.js"></SCRIPT>
    <title>Rejestracja</title>
</head>

<body>
    <div class="container-form">
        <form class="register-form" id="form" action="Dodaj.php" method="POST">
            <H2>Panel rejestracji</H2>
            <label>Login(minimum 4):*</label> <input class="inp" id="mylog" name="mylog" required="">
            <br>
            <label>E-mail:*</label><input type="email" class="inp" name="Mail" required="">
            <br>
            <label>Hasło:*</label><input type="password" class="inp" id="haslo" name="Haslo" required="">
            <br>
            <label>Powtórz hasło:*</label><input type="password" id="haslo2" class="inp" required="">
            <br>
            <label>Nr telefonu(format: 111-111-111):*</label><input type="tel" class="inp" id="Nr" name="Telefon" required="">
            <br>
            <label>Data urodzenia:*</label><input type="date" class="inp" name="Urodziny" required="">
            <br>
            <div class="btn-box">
                <button type="submit" class="btn">Załóż konto</button>
                <input type="button" class="btn" onclick="location.href='./index.php';" value="Cofnij">
            </div>
        </form>
    </div>

</body>

</html>