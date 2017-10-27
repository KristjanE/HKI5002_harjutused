<?php
die("lukku ;)");
$a=scandir('.');
echo json_encode($a);
?>
<!doctype html>
<html>
  <head>
    <title>Andmete lugemine</title>
  </head>
  <body>
    <script>
      var xhr = new XMLHttpRequest();
      function loeVeebist(failinimi) {
        xhr.open("GET", failinimi, false);
        xhr.send();
        document.getElementById("aff").innerHTML = xhr.responseText;
      }
    </script>
    <ul>
<?php
foreach ($a as $file) {
  echo '      <li onclick= "loeVeebist(this.innerHTML)">'. $file .'</li>';
}
?>
    </ul>
    <div id="aff">
    </div>
  </body>
  </html>