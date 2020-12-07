<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="stylesheet" href="login.css" type="text/css" />
    <SCRIPT type="text/javascript" language="JavaScript" SRC="scripts.js"></SCRIPT>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    
    <title>Aplikacja Architektura</title>
</head>

<body>
    <div class="login-container">
        <div class="login-box">
            <img class="login-img" src="./images/man.png" alt="man">
            <h2>WITAJ!</h2>
            <form id="logowanie" method="POST">
                <div class="input-container">
                    <input type="text" id="mylog" name="mylog" required="" />
                    <label>Login</label>
                </div>
                <div class="input-container">
                    <input type="password" id="mypass" name="mypass" required="" />
                    <label>Hasło</label>
                </div>
                <div class="login-button-container">
                    <button type="button" class="btn" onclick="Sprawdz()">Zaloguj się</button>
                    <button type="button" class="btn" onclick="location.href='./register_panel.php';">Zarejestruj
                        się</button>
                    
                </div>
            </form>

        </div>
    </div>
</body>

</html>