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

<body>

  <div class="container-fluid">

  <div class="row">

  <div id="logo"><img src="img/logo.png"></div>

  <div id="hello">Hello</div>

  <div id="my-name">I'm Ismail Mohammed</div>


  <div id="noob"></div>


  <script type="text/javascript">    
   var myArray = [
     "I'm professional programmer",
     "Noobest programmer you will ever see xD",
     "So Dont Call Me Baby <br> -Ed Sheeran",
     "Kiki Do You Love Me ? <br> -Drake"
    ];

   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

   document.getElementById('noob').innerHTML = randomItem;
  </script>


  </div>

  </div>

    <form id="button1place">
        <input id="button" type="button" value="My E-mails" onclick="window.location.href='https://pastebin.com/raw/eA3Vv6sw'" />
    </form> 

</body>

</html>