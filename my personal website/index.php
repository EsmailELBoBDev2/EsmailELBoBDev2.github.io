<!DOCTYPE html>
<html lang = "en-US">
 <head>
 <title>Esmail EL BoB [Personal-Beta Website] (V.2)</title>
 <meta charset = "UTF-8">
 <link rel="stylesheet" type="text/css" href="style.css">
 </head>

 <header>
<ul>
  <li><a href="lang/ar/indexar">النسخة العربية</a></li>
</ul>
</header>

<body background="img/background.png">
  <div class="container-fluid">
  <div class="row">
  <div id="logo"><img src="img/logo.png"></div>
  <div id="hello">Hello</div>
  <div id="my-name">I'm Ismail Mohammed</div>

  <?php
    $arrX = array("I'm professional programmer", "Noobest programmer you will ever see xD","So Dont Call Me Baby", "Keke Do You Love Me ?");
   $randIndex = array_rand($arrX);
  ?>

  <div id="noob"><?php echo $arrX[$randIndex]; ?></div>
  </div>
  </div>

    <form id="button1place">
        <input id="button" type="button" value="My E-mails" onclick="window.location.href='https://pastebin.com/raw/eA3Vv6sw'" />
    </form> 

</body>

</html>