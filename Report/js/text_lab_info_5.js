function meta_5() {
    const text = `<h1>Тема, Мета</h1>
        <p>Тема : ВИКОРИСТАННЯ В СЦЕНАРІЯХ JAVASCRIPT БІБЛІОТЕК КРОС-БРАУЗЕРНИХ ІНТЕРФЕЙСІВ МЕТОДІВ DOM.  БІБЛІОТЕКА JQUERY UI.ЗАСОБИ НАЛАГОДЖЕННЯ І ТЕСТУВАННЯ СЦЕНАРІЇВ JAVASCRIPT.</p>
        <p>Мета : придбати практичні навички роботи jQuery UI, вміти додавати до сайту  динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.</p>`;
    changeText(text);
}

function dinamic5() {
    const text = `<h1>Динамічні елементи 3 пункту</h1>
        <h2>Завдання:</h2>
        <img src="lab_img/lab5_img/task3.png">
        <hr>
        <h2>Tabs - організація вкладок на сторінці </h2>
        <div style="text-align: left">
            <h2>Результат:</h2>
            <img src="lab_img/lab5_img/result_1.1.png" >
        </div>
        <hr>
        <h2>Slider - вибір числа за допомогою повзунка. </h2>
        <div style="text-align: left">
            <h2>Результат:</h2>
            <img src="lab_img/lab5_img/result_1.2.png" >
        </div>
        <hr>
        <h2>Datepicker - вибір дати з календаря </h2>
        <div style="text-align: left">
            <h2>Результат:</h2>
            <img src="lab_img/lab5_img/result_1.3.png" > 
            </div>
            <h2>Код:</h2>
            <img src="lab_img/lab5_img/code_3.1.png">
            <img src="lab_img/lab5_img/code_3.2.png">
        </div>
`;

    changeText(text);
}

function buttons5() {
    const text = `<h1>Кнопки соціальних мереж та інформери</h1>
        <h2>Завдання:</h2>
        <img src="lab_img/lab5_img/task5.png">
        <hr>
        <div style="text-align: left">
            <h2>Результат:</h2>
            <img src="lab_img/lab5B/result.png" >
            <h2>Код:</h2>
            <h3>HTML:</h3>
            <img src="lab_img/lab5B/htmlSocial1.png">
            <img src="lab_img/lab5B/htmlSocial2.png">
            <img src="lab_img/lab5B/htmlSocial3.png">
            <h3>CSS:</h3>
            <img src="lab_img/lab5B/cssSocial1.png">
            <img src="lab_img/lab5B/cssSocial2.png">
            <img src="lab_img/lab5B/cssSocial3.png">
            <img src="lab_img/lab5B/cssSocial4.png">
            <img src="lab_img/lab5B/cssSocial5.png">
            <img src="lab_img/lab5B/cssSocial6.png">
            <img src="lab_img/lab5B/cssSocial7.png">
            <h3>Структура з jQuery:</h3>
            <img src="lab_img/lab5B/structureSocial.png">
            <h3>JavaScript:</h3>
            <img src="lab_img/lab5B/jsSocial1.png">
        </div>
`;

    changeText(text);
}

function task7() {
    const text = `<h1>Плагін Vide</h1>
        <h2>Завдання:</h2>
        <img src="lab_img/lab5_img/task7.png">
        <hr>
        <div style="text-align: left">
            <h2>Результат:</h2>
            <img src="lab_img/lab5_img/result_7.png" >
            <h2>Код:</h2>
            <img src="lab_img/lab5_img/code_7.png">
        </div>
`;

    changeText(text);
}

function itog_5() {
    const text = `<h1>Висновок</h1>
        <p style="text-align:justify;">На лабораторній роботі №5 ми придбали практичні навички роботи jQuery UI, додали до сайту  динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.</p>`
    changeText(text);
}

function fideo5(){
    const text = `
    <h1>Відеослайдер</h1>
    <img src="lab_img/videoRes.png" >
    <h2>HTML</h2>
    <xmp style="text-align:justify; background-color:whitesmoke;">
    <header>
        <div id="videoslider">
            <div data-type="youtube"
                data-videoid="YvzjG19zhf0"
                data-title="Unbelievable Beauty"
                data-description="by Go Pro"></div>

            <div data-type="youtube"
                data-videoid="Rs3-OJBYKSY"
                data-title="Italy"
                data-description="by Go Pro"></div>

            <div data-type="youtube"
                data-videoid="lJp6BezFLCk"
                data-title="Beauty"
                data-description="by Go Pro"></div>

            <div data-type="youtube"
                data-videoid="lBJyaIR1mlw"
                data-title="Iceland"
                data-description="by Go Pro"></div>
        </div>
    </header>
    </html>
    </xmp>
    <h2>Підключення JS</h2>
    <xmp style="text-align:justify; background-color:whitesmoke;">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js" type="text/javascript"></script>
    <script src='unitegallery/js/unitegallery.min.js' type='text/javascript'  ></script>
    <link  href='unitegallery/css/unite-gallery.css' rel='stylesheet' type='text/css' />				
    <script src='unitegallery/themes/slider/ug-theme-slider.js' type='text/javascript'></script>
    <script src='unitegallery/themes/tiles/ug-theme-tiles.js' type='text/javascript'></script>
    <script src="js/main.js"></script>
    </xmp>
    <h2>JS</h2>
    <xmp style="text-align:justify; background-color:whitesmoke;">
    jQuery("#videoslider").unitegallery({
        gallery_theme: "slider",
        gallery_width: 900,
        gallery_height: 500,
        slider_transition_speed:1000,
    });
    </xmp>
    `;
    changeText(text);
}

function foto5(){
    const text = `
    <h1>Галерея</h1>
    <img src="lab_img/galleryRes.png" >
    <h2>HTML</h2>
    <xmp style="text-align:justify; background-color:whitesmoke;">
    <main>
        <div id="gallery">
            <img src="https://storge.pic2.me/cm/3840x2160/427/585cd40213f5a.jpg" alt="..."/>
            <img src="https://storge.pic2.me/c/1360x800/555/57753010826d4.jpg" alt="..."/>
            <img src="https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg" alt="..."/>
            <img src="https://img5.goodfon.ru/wallpaper/nbig/e/6b/les-nebo-oblaka-peizazh-gory-priroda-ozero-otrazhenie-bere-4.jpg" alt="..."/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtOXNkHWO0ZC0dkPGZ7gL6mk10ajgldVGqAlob8R9tO3UeyzG-qvbHnaD5cQud32RoEA&usqp=CAU" alt="..."/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FXjvJHNO1vn3VLQFrjxuKkkDZhgRHf8uAQ&usqp=CAU" alt="..."/>
            <img src="https://i.artfile.ru/2048x1152_929297_[www.ArtFile.ru].jpg" alt="..."/>
        </div>
    </main>
    </xmp>
    <h2>JS</h2>
    <xmp style="text-align:justify; background-color:whitesmoke;">
    jQuery("#gallery").unitegallery({
        gallery_theme: "tiles",
        tiles_space_between_cols:25,
	    tiles_justified_space_between:25,
	    tiles_col_width:220,
	    tile_enable_shadow:true,
	    theme_gallery_padding:25,
	    tiles_type: "justified",
    });
    </xmp>
    `;
    changeText(text);
}

function slider5(){
    const text = `
    <h1>Слайдер фотографій</h1>
    <img src="lab_img/sliderRes.png" >
    <h2>HTML</h2>
    <xmp style="text-align:justify; background-color:whitesmoke;">
    <div id="slider1">
            <img src="https://images.hdqwalls.com/wallpapers/cyberpunk-city-world-map-4k-vc.jpg" alt="..."/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz6ieaZzBguL7f9zS7-v-OVILMLpxzKN1-mXqCHWkSEntylWk83Eg8zxdNQzLfVvxkUo&usqp=CAU" alt="..."/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLS4HxgWVjOFAMJk-K1cTCoINv2GNoTvx0MV0s3jLdaHTuR7gPCj6HxFaHxGCzPwtw_0M&usqp=CAU" alt="..."/>
    </div>
    </xmp>
    <h2>JS</h2>
    <xmp style="text-align:justify; background-color:whitesmoke;">
    jQuery("#slider1").unitegallery({
        gallery_theme: "slider",
        gallery_width: 450,
        gallery_height: 300,
        gallery_play_interval: 9000,
        slider_transition_speed:1000,
    });

    jQuery("#slider2").unitegallery({
        gallery_theme: "slider",
        gallery_width: 450,
        gallery_height: 300,
        gallery_play_interval: 8000,
        slider_transition_speed:1000,
    });

    jQuery("#slider3").unitegallery({
        gallery_theme: "slider",
        gallery_width: 450,
        gallery_height: 300,
        gallery_play_interval: 10000,
        slider_transition_speed:1000,
    });
    </xmp>
    `;
    changeText(text);
}
