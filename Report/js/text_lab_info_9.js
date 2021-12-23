function meta_9() {
    const text = `<h1>Тема, Мета</h1>
        <p>Тема : АСИНХРОННА ВЗАЄМОДІЯ КЛІЄНТСЬКОЇ І СЕРВЕРНОЇ ЧАСТИН WEB- ЗАСТОСУВАНЬ З ВИКОРИСТАННЯМ ТЕХНОЛОГІЇ AJAX. ФОРМУВАННЯ AJAX-ЗАПИТУ ЗАСОБАМИ JQUERY.</p>
        <p>Мета : придбати практичні навички роботи з AJAX запитами.</p>`;
    changeText(text);
}

function miha() {
    const text = `
    <div align="center">
    <h1>Завдання:</h1>
    <img src="lab_img/lab9/miha/taskM.png">
</div>
<div style="text-align: left">
<h2>Теорія:</h2>
<h5 style="font: 22px 'Times New Roman'">AJAX – це абревіатура від "Asynchronous JavaScript and XML", яка дослівно перекладається як "асинхронний JavaScript та XML".</h5>
<h5 style="font: 22px 'Times New Roman'">Основні переваги використання AJAX:</h5>
<ul>
<li>зниження трафіку (через зменшення обсягу переданих даних між клієнтом та сервером)</li>
<li>зменшення навантаження на сервер (не потрібно генерувати всю сторінку, лише ту частину, яку потрібно оновити);</li>
<li>збільшення швидкодії та чуйності (немає необхідності у повному перезавантаженні сторінки, достатньо оновити вміст лише окремих блоків);</li>
<li>підвищення інтерактивності (за допомогою AJAX можна відразу відображати результати та зробити ресурс зручнішим для користування).</li>
</ul>
</div>
<h2>Результат:</h2>
<h3 style="text-align: left">Головна сторінка галереї:</h3>
<img src="lab_img/lab9/miha/result.gif">
<div style="text-align: left">
<h4>HTML:</h4>
<xmp>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>All photos</title>
    </head>
    <body>
    <div>
        <button onclick="window.location = \`index.html\`">Add photo</button>
        <button onclick="window.location = \`slider.html\`">Show as slide</button>
    </div>
    <div id="all">
    </div>
    <script src="./../js/showJS.js"></script>
    </body>
    </html>
</xmp>
<h4 style="text-align: left">JavaScript:</h4>
<img src="lab_img/lab9/miha/jsT1.png">
<h4>Php:</h4>
<xmp>
    <?php
$conn = new mysqli("localhost","Misha","124578","test");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$arrays =array();
if($result = $conn->query("SELECT * FROM images ORDER BY uploaded_on DESC")){
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $arrays[] = $row;
    }
    exit(json_encode($arrays));
}
</xmp>
</div>

<hr>

<h3 style="text-align: left">Видалення:</h3>
<img src="lab_img/lab9/miha/test.gif">
<div style="text-align: left">
<h4>HTML:</h4>
<xmp>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>All photos</title>
    </head>
    <body>
    <div>
        <button onclick="window.location = \`index.html\`">Add photo</button>
        <button onclick="window.location = \`slider.html\`">Show as slide</button>
    </div>
    <div id="all">
    </div>
    <script src="./../js/showJS.js"></script>
    </body>
    </html>
</xmp>
<h4 style="text-align: left">JavaScript:</h4>
<img src="lab_img/lab9/miha/jsT2.png">
<h4>Php:</h4>
<xmp>
<?php
$conn = new mysqli("localhost","Misha","124578","test");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['idi'];
$sql = "Delete from images where id = $name";
if($conn->query($sql)) ;
</xmp>
</div>

<hr>

<h3 style="text-align: left">Додавання фотографії:</h3>
<img src="lab_img/lab9/miha/result2.gif">
<div style="text-align: left">
<h4>HTML:</h4>
<xmp>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add photo</title>
</head>
<body>
<div align="center">
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Select Image File to Upload:
        <input type="file" name="file"><br>
        Name:
        <input type="text" name="name"><br>
        <input type="submit" name="submit" value="Upload">
    </form>
    <button onclick="window.location=\`test.html\`">Back to gallery</button>
</div>
</body>
</html>
</xmp>
<h4>Php:</h4>
<xmp>
<?php
$conn = new mysqli("localhost","Misha","124578","test");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$targetDir = "uploads/";
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;
$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
$name = $_POST['name'];

if(isset($_POST["submit"]) && !empty($_FILES["file"]["name"])){
    $allowTypes = array('jpg','png','jpeg','gif','pdf');
    if(in_array($fileType, $allowTypes)){
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
            $insert = $conn->query("INSERT into images (file_name, uploaded_on,name) VALUES ('".$fileName."', NOW(),'$name')");
        }
    }
}
header('Location:test.html');
</xmp>
</div>

<hr>

<h3 style="text-align: left">Перегляд фотографій слайдами:</h3>
<img src="lab_img/lab9/miha/result3.gif">
<div style="text-align: left">
<h4>HTML + CSS:</h4>
<xmp>
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                * {box-sizing:border-box}
        
                /* Slideshow container */
                .slideshow-container {
                    max-width: 500px;
                    position: relative;
                    margin: auto;
                }
        
                /* Hide the images by default */
                .mySlides {
                    display: none;
                }
        
                /* Next & previous buttons */
                .prev, .next {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    width: auto;
                    margin-top: -22px;
                    padding: 16px;
                    color: white;
                    font-weight: bold;
                    font-size: 18px;
                    transition: 0.6s ease;
                    border-radius: 0 3px 3px 0;
                    user-select: none;
                }
        
                /* Position the "next button" to the right */
                .next {
                    right: 0;
                    border-radius: 3px 0 0 3px;
                }
        
                /* On hover, add a black background color with a little bit see-through */
                .prev:hover, .next:hover {
                    background-color: rgba(0,0,0,0.8);
                }
        
                /* Caption text */
                .text {
                    color: #f2f2f2;
                    font-size: 15px;
                    padding: 8px 12px;
                    position: absolute;
                    bottom: 8px;
                    width: 100%;
                    text-align: center;
                }
        
                /* Number text (1/3 etc) */
                .numbertext {
                    color: #f2f2f2;
                    font-size: 12px;
                    padding: 8px 12px;
                    position: absolute;
                    top: 0;
                }
        
                /* The dots/bullets/indicators */
                .dot {
                    cursor: pointer;
                    height: 15px;
                    width: 15px;
                    margin: 0 2px;
                    background-color: #bbb;
                    border-radius: 50%;
                    display: inline-block;
                    transition: background-color 0.6s ease;
                }
        
                .active, .dot:hover {
                    background-color: #717171;
                }
        
                /* Fading animation */
                .fade {
                    -webkit-animation-name: fade;
                    -webkit-animation-duration: 1.5s;
                    animation-name: fade;
                    animation-duration: 1.5s;
                }
        
                @-webkit-keyframes fade {
                    from {opacity: .4}
                    to {opacity: 1}
                }
        
                @keyframes fade {
                    from {opacity: .4}
                    to {opacity: 1}
                }
            </style>
        </head>
        <body>
        
        <div class="slideshow-container" id="conter">
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>
        <div style="text-align:center" id="btn">
        </div>
        <button onclick="window.location=\`test.html\`">Back to gallery</button>
        <script src="./../js/slide.js"></script>
        </script>
        </body>
        </html>
 </div>
 </body>
 </html>
</xmp>
<h4 style="text-align: left">JavaScript:</h4>
<img src="lab_img/lab9/miha/jsT3.png">
<img src="lab_img/lab9/miha/jsT31.png">
<h4>Php:</h4>
<xmp>
<?php
$conn = new mysqli("localhost","Misha","124578","test");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$arrays =array();
if($result = $conn->query("SELECT * FROM images ORDER BY uploaded_on DESC")){
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $arrays[] = $row;
    }
    exit(json_encode($arrays));
}
</xmp>
</div>
`;

    changeText(text);
}

function denys() {
    const text = `
    <div align="center">
    <h1>Завдання:</h1>
    <img src="lab_img/lab9/denys/taskD.png">
<h2>Результат:</h2>
<h3 style="text-align: left">Головна сторінка:</h3>
<img src="lab_img/lab9/denys/result.png">
<h3 style="text-align: left">Добавлення завдання:</h3>
<img src="lab_img/lab9/denys/result1.png">
<div style="text-align: left">
<h4 style="text-align: left">CSS:</h4>
<img src="lab_img/lab9/denys/css.png"><br>
<img src="lab_img/lab9/denys/css1.png">
<h4 style="text-align: left">PHP + HTML:</h4>
<img src="lab_img/lab9/denys/php1.png"><br>
<img src="lab_img/lab9/denys/php2.png"><br>
<img src="lab_img/lab9/denys/php3.png"><br>
<img src="lab_img/lab9/denys/php4.png">
</div>
`;

    changeText(text);
}


function itog_9() {
    const text = `<h1>Висновок</h1>
        <p style="text-align:justify;">На лабораторній роботі №6 ми придбали практичні навички роботи з AJAX запитами</p>`
    changeText(text);
}