<html>
<head>
    <meta charset="utf-8">
    <title>Заказ тренування</title>
</head>
<body>
<h1>Про тренування :</h1>
<?php
$workout = filter_input(INPUT_POST,'workout',FILTER_SANITIZE_STRING);
echo "<div>Тренування з $workout </div>";
$coach = (isset($_POST['coach']))?" потрібен </div>": " не потрібен </div>";
echo "<div> Тренер $coach" ;
echo "<div> Дата тренування : ".$_POST['date']."</div>";
echo "<div> Особа : ".$_POST['fullName'].' '.$_POST['age'].' років  '.'</div>';
echo "<div> Номер телефону : ".$_POST['phone'].'</div>';
?>
</body>
</html>
