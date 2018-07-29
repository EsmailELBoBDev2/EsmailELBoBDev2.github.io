<!DOCTYPE html>
<html lang = "ar-EG">
 <head>
 <title>Esmail EL BoB [Personal-Beta Website] (V.2)</title>
 <meta charset = "UTF-8">
 <link rel="stylesheet" type="text/css" href="stylear.css">
 </head>

 <header>
<ul>
  <li><a href="../../index">English Versopn</a></li>
</ul>
</header>

<body background="../../img/background.png">
  <div class="container-fluid">
  <div class="row">
  <div id="logo"><img src="../../img/logo.png"></div>
  <div id="hello">أهلا</div>
  <div id="my-name">انا إسماعيل محمد</div>
  <?php $arrX = array("انا مبرمج محترف", "افشل مبرمج هتشوفه فى حياتك ههههه","علشان كدا متقوليش يا بيبى", "كيكى انت بتحبينى ؟");
   $randIndex = array_rand($arrX);
  ?>
  <div id="noob"><?php echo $arrX[$randIndex]; ?></div>
  </div>
  </div>

    <form id="button1place">
        <input id="button" type="button" value="إيميلاتى" onclick="window.location.href='https://pastebin.com/raw/eA3Vv6sw'" />
    </form> 
</body>

</html>