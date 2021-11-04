<html>
<head>
    <meta charset="utf-8">
    <title>Заказ тренування</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script src="index.js"></script>
</head>
<style>
    .h {
        font: 160% Calibri
    }
</style>
<script>
    $(function () {
        $('#workout').selectmenu();
        $("#date").datepicker();
        $("#coach").checkboxradio();
    })
</script>
<body>
<h1 style="text-align: center"> Записатися на тренування </h1>
<form action="result.php" method="post">
    <fieldset>
        <legend class="h">Про тренування</legend>
        <label for="workout">Тренування : </label>
        <select name="workout" id="workout">
            <option value="Плавання">Плавання</option>
            <option value="Бокс">Бокс</option>
            <option value="Баскетбол">Баскетбол</option>
            <option value="Волейбол">Волейбол</option>
            <option value="Футбол">Футбол</option>
        </select>
        <label for="coach"> Тренер </label>
        <input type="checkbox" name="coach" id="coach">
        <p>Вибрати дату: <input type="text" name="date" id="date" onchange='checkDate()'
                                placeholder="Натисність щоб вибрати"></p>
        <p id="w1" style="color: red"></p>
    </fieldset>
    <fieldset>
        <legend class="h">Особисті дані</legend>
        <div style="margin: 2%"><input type="text" name="fullName" placeholder="ФІО"></div>
        <div style="margin: 2%"><input type="number" id='age' name="age" placeholder="Скільки років"
                                       onchange="checkAge()"></div>
        <p id="w2" style="color: red"></p>
        <div style="margin: 2%"><input type="tel" name="phone" placeholder="Номер телефону"></div>
    </fieldset>
    <button style="margin: 2%" id="send" onmouseover="resultCheck()">Записатися</button>
</form>
</body>
<script>
    const inputs = document.getElementsByTagName('input');
    for (let a = 1; a < inputs.length; a++) {
        inputs[a].autocomplete = 'off'
        inputs[a].setAttribute("required", "")
    }
</script>
</html>
