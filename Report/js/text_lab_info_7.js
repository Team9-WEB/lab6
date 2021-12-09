function meta_8() {
    const text = `<h1>Тема, Мета</h1>
        <p>Тема : ІНТЕРФЕЙСИ ВЗАЄМОДІЇ WEB-ЗАСТОСУВАНЬ З СИСТЕМОЮ КЕРУВАННЯ БАЗ ДАНИХ (СУБД). SQL-ЗАПИТИ У PHP-СЦЕНАРІЯХ. ІНТЕРФЕЙСИ WEB-ЗАСТОСУВАНЬ з СУБД. ВИКОРИСТАННЯ СЕСІЙ І COOKIES  В СЦЕНАРІЯХ АВТОРИЗАЦІЇ. РОЗРОБКА СЦЕНАРІЇВ ОБРОБКИ ДАНИХ З ФАЙЛІВ.</p>
        <p>Мета : придбати практичні навички роботи взаємодії WEB- застосувань з СУБД, використання сесій і cookies  в сценаріях авторизації, розробки сценаріїв обробки даних з файлів.</p>`;
    changeText(text);
}

function DB() {
    const text = `<h1>Створити БД для спортивного комплексу</h1>
<div style="text-align: left">
        <h2>В БД бібліотеки необхідно відобразити наступні дані:</h2>
        <ul>
          <li>Користувачі - люди котрі будуть користуватися нашим сайтом, відповідно поділ на ролі (окрема сутність)</li>
          <li>Зали - інформація про зали нашого спортивного комплексу</li>
          <li>Пакет послуг, котрий надає наш спортивний комплекс</li>
          <li>Заняття - користувачі(тренери) зможуть створювати, а користувачі(клієнти) записуватись на них</li>
          </ul>
</div>
        <h2> Інфологічна модель:</h2>
        <img src="lab_img/lab8/infoLogic.png">
        <h2> Зв'язки: </h2>
        <img src="lab_img/lab8/relations.png">
        <h2> Даталогічна модель : </h2>
        <img src="lab_img/lab8/datalogic.jpg">
        <h2>Реалізація БД в СУБД MySQL</h2>
        <xmp style="margin: 0">
        create table roles
        (
            Id int auto_increment
                primary key,
            Name char(30) not null
        );

        create table users
        (
            id int auto_increment
                primary key,
            RoleId int not null,
            FName char(30) not null,
            LName char(30) not null,
            Phone char(15) not null,
            Email char(30) null,
            Info char(30) null,
            DateRegistration date null,
            DateOfBirth date null,
            PhotoPath char(100) null,
            PasswordHash char(100) not null,
            constraint users_roles_id_fk
                foreign key (RoleId) references roles (Id)
        );

        create table services
        (
            Id int auto_increment
                primary key,
            Title char(50) not null,
            Info char(200) null,
            Price decimal not null,
            PhotoPath char(100) null
        );

        create table halls
        (
            Id int auto_increment
                primary key,
            Name char(100) not null,
            Address char(100) not null,
            Info char(200) null,
            PhotoPath char(200) null,
            TimeOpen time null,
            TimeClose time null
        );

        create table orders
        (
            Id int auto_increment
                primary key,
            UserId int not null,
            ServiceId int not null,
            DateTimeOfOrder datetime null,
            Paid decimal not null,
            constraint orders_services_id_fk
                foreign key (ServiceId) references services (Id),
            constraint orders_users_id_fk
                foreign key (UserId) references users (id)
        );

        create table lessons
        (
            Id int auto_increment
                primary key,
            HallId int not null,
            TrainerId int not null,
            Quantity int not null,
            DateTimeOfLesson datetime not null,
            Duration time null,
            Info char(200) null,
            Price decimal not null,
            constraint lessons_halls_id_fk
                foreign key (HallId) references halls (Id),
            constraint lessons_users_id_fk
                foreign key (TrainerId) references users (id)
        );


        create table records
        (
            Id int auto_increment
                primary key,
            LessonId int not null,
            UserId int not null,
            Paid decimal not null,
            DateTimeOfBooked datetime null,
            Comment char(200) null,
            constraint records_lessons_id_fk
                foreign key (LessonId) references lessons (Id),
            constraint records_users_id_fk
                foreign key (UserId) references users (id)
        );

        </xmp>
        <h2> Фізична модель: </h2>
        <img src="lab_img/lab8/phisiclogic.png">
`;

    changeText(text);
}

function test() {
    const text = `<h1>Створити БД аудіотеки</h1>
<div style="text-align: left">
</div>
        <h2> Java-код внесення данних в БД:</h2>
        <xmp style="margin: 0">
        public static void addUser(String email , String name , String lastName,String phone ,String password){
            try {
                Connection connection = DbConnetion.getConnection();
                PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO users (Email,FName,LName,Phone,PasswordHash) values (?,?,?,?,?)");
                preparedStatement.setString(1,email);
                preparedStatement.setString(2,name);
                preparedStatement.setString(3,lastName);
                preparedStatement.setString(4,phone);
                preparedStatement.setString(5,password);
                preparedStatement.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        </xmp>
        <h2> Демонстрація внесення: </h2>
        <img src="lab_img/lab8/add.png">
        <h2> Java-код видалення данних в БД:</h2>
        <xmp style="margin: 0">
        public static void removeLesson(int id) {
            Connection connection = DbConnetion.getConnection();
            try {
                PreparedStatement preparedStatement = connection.prepareStatement("DELETE from lessons where Id = ?");
                preparedStatement.setInt(1, id);
                preparedStatement.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        </xmp>
        <h2> Демонстрація видалення: </h2>
        <img src="lab_img/lab8/remove.png">
        <h2> Java-код пошук данних в БД:</h2>
        <xmp style="margin: 0">
        public static UserModel getUserByPhone(String phone){
            try {
                Connection connection = DbConnetion.getConnection();
                PreparedStatement preparedStatement = connection.prepareStatement("SELECT * from users where Phone = ?");
                preparedStatement.setString(1,phone);
                ResultSet resultSet = preparedStatement.executeQuery();
                while (resultSet.next()){
                    return new UserModel(
                            resultSet.getString("Phone"),
                            resultSet.getString("FName"),
                            resultSet.getString("LName"),
                            resultSet.getInt("RoleId"));
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return null;
        }
        </xmp>
</div>
`;

    changeText(text);
}

function itog_8() {
    const text = `<h1>Висновок</h1>
    <div style="text-align: left">
        <h2>Запланований функціонал:</h2>
        <ul>
            <li>Авторизацыя та регістрація користувачів</li>
            <li>Перегляд цін на абонементи, заняття</li>
            <li>Купівля абонементів, запис на заняття</li>
            <li>Перегляд інформації про зали, тренерський склад</li>
            <li>Корегування цін адміністратором</li>
            <li>Створення тренувань тренером</li>
        </ul>
    </div>
    <div style="text-align: left">
        <h2>Виконаний функціонал:</h2>
        <ul>
            <li>Авторизацыя та регістрація користувачів</li>
            <li>Перегляд цін на абонементи, заняття</li>
            <li>Купівля абонементів, запис на заняття</li>
            <li>Перегляд інформації про зали, тренерський склад</li>
            <li>Корегування цін адміністратором</li>
            <li>Мультиязичність</li>
        </ul>
    </div>`;
    
    changeText(text);
}

function func() {
    const text = `<h1>Створити БД для фільмотеки</h1>
<div style="text-align: left">
        <h2>В БД бібліотеки необхідно відобразити наступні дані:</h2>
        <ul>
          <li>Хто зняв фільм?(Актори)</li>
          <li>Хто знімався в фільмі?(Режисери)</li>
          <li>Фільми, жанр, дата релізу</li>
          </ul>
</div>
        <h2> Інфологічна модель:</h2>
        <img src="lab_img/lab7/vlad/Infologic.png">
        <h2>Даталогічна модель : </h2>
        <img src="lab_img/lab7/vlad/datalogic.png">
        <h2>Зв'зки:</h2>
        <img src="lab_img/lab7/vlad/Relation.png">
        <h2>Реалізація БД в СУБД MySQL</h2>
        <img src="lab_img/lab7/vlad/Scripts.png">
        
<div style="text-align: left">
        <h2>Скрипти для внесення даних до БД через html-форму:</h2>
        <p style="font-size: 25px; text-align: left">Html:</p>
        <xmp style="margin: 0">
        <form action="addFilm" method="POST" enctype="">
            <label>Title</label>
            <input type="text" name="title" required="required">
            <label>Description</label>
            <input type="text" name="description" aria-multiline="true" required="required">
            <label>ReleaseDate</label>
            <input type="date" name="releaseDate" required="required">
            <label>MainGenre</label>
            <input type="text" name="mainGenre" required="required">
            <input type="submit" value="Add new Film">
        </form>
        </xmp>
        <p style="font-size: 25px; text-align: left; margin: 0">Java:</p>
        <xmp style="margin: 0">
        public void insert(Film film) throws DAOException {
            String sql = "insert into Films(Title, Description, ReleaseDate, MainGenre) values (?, ?, ?, ?)";
            Connection connection = null;
            PreparedStatement preparedStatement = null;
            try {
                connection = db.getConnection();
                preparedStatement = connection.prepareStatement(sql);
                preparedStatement.setString(1, film.getName());
                preparedStatement.setString(2, film.getDescription());
                preparedStatement.setString(3, film.getReleaseDate().toString());
                preparedStatement.setString(4, film.getMainGenre());
                preparedStatement.executeUpdate();
            }
            catch (SQLException err){
                throw new DAOException("Problem in insert(Film) method", err);
            }
            finally {
                try{
                    if(connection != null){
                        connection.close();
                    }
                    if(preparedStatement != null){
                        preparedStatement.close();
                    }
                } catch (SQLException throwables) {
                    throwables.printStackTrace();
                }
            }
        }
        </xmp>
        <h2>Результат :</h2>
        <img src="lab_img/lab7/vlad/result1.png"><br>
        <img src="lab_img/lab7/vlad/result2.png">
        <br>
        <h2>Скрипти для пошуку даних до БД через html-форму:</h2>
        <p style="font-size: 25px; text-align: left">Html:</p>
        <xmp style="margin: 0">
        <form class="search-form" action="search">
            <input class="search-text" type="text" name="text" value="{text}" />
            <input class="search-button" type="submit" value="Search" />
        </form>
        </xmp>
        <p style="font-size: 25px; text-align: left">Java:</p>
        <xmp style="margin: 0">
        public Collection<Film> getByName(String name) throws DAOException {
            String sql = "select * from Films where Title like '%"+name+"%'";
            ArrayList<Film> films = new ArrayList<>();
            Connection connection = null;
            PreparedStatement preparedStatement = null;
            ResultSet resultSet = null;
            try{
                connection = db.getConnection();
                preparedStatement = connection.prepareStatement(sql);
                resultSet = preparedStatement.executeQuery();
                while(resultSet.next()){
                    String[] date = resultSet.getString("ReleaseDate").split("-");
                    LocalDate data = LocalDate.of(Integer.parseInt(date[0]), Integer.parseInt(date[1]), Integer.parseInt(date[2]));
                    films.add(new Film(resultSet.getInt("Id"), resultSet.getString("Title"),
                            resultSet.getString("Description"), data,
                            resultSet.getString("MainGenre"), resultSet.getInt("DirectorId")));
                }
            }
            catch (SQLException err){
                throw new DAOException("Problem in getByName(Film) method", err);
            }
            finally {
                try{
                    if(connection != null){
                        connection.close();
                    }
                    if(preparedStatement != null){
                        preparedStatement.close();
                    }
                    if(resultSet != null){
                        resultSet.close();
                    }
                } catch (SQLException throwables) {
                    throwables.printStackTrace();
                }
            }
            return films;
        }
        </xmp>
        <h2>Результат :</h2>
        <img src="lab_img/lab7/vlad/result3.png"><br>
        <img src="lab_img/lab7/vlad/result4.png"><br>
</div>
`;

    changeText(text);
}

function auto() {
    const text = `<h1>Авторизація</h1>
        <h2> Java-код авторизації:</h2>
        <xmp style="margin: 0">
        @WebServlet(name = "LoginController", value = "/LoginController")
        public class LoginController extends HttpServlet {
            @Override
            protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            UserModel u = UserModel.getUserByPhone(request.getParameter("phone"));
            if(u == null){
                UserModel.addUser(
                        request.getParameter("email"),
                        request.getParameter("first_name"),
                        request.getParameter("last_name"),
                        request.getParameter("phone"),
                        request.getParameter("psw"));
                Cookies.setCookie(response,"user",request.getParameter("phone"));
                response.sendRedirect(request.getContextPath()+"/index.jsp");
            } else{
                response.sendRedirect(request.getContextPath()+"/sign_up.jsp");
            }
            }

            @Override
            protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                UserModel u = UserModel.getUserByPhonePassword(request.getParameter("phone"),request.getParameter("psw"));
                if (u != null){
                    Cookies.setCookie(response,"user",u.getPhone());
                    response.sendRedirect(request.getContextPath()+"/index.jsp");
                }else {
                    response.sendRedirect(request.getContextPath()+"/log_in.jsp");
                }
            }
        }
        </xmp>
        <h2> HTML, JS код: </h2>
        <xmp style="margin: 0">
        <%@ page contentType="text/html;charset=UTF-8" language="java" %>
        <html>
        <head>
            <link rel="stylesheet" href="css/main.css">
            <link rel="stylesheet" href="css/login.css">
            <title>Sport club</title>
        </head>
        <body style="background-image: url(img/8.jpg);">
        <div class="topnav">
            <a href="index.jsp">Home</a>
            <a href="trainings.jsp">Trainings</a>
            <a href="info_hall.jsp">Halls</a>
            <a href="log_in.jsp">Log In</a>
            <a href="sign_up.jsp">Sign Up</a>
            <div id="google_translate_element" style="float:right"></div>

            <script type="text/javascript">
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
                }
            </script>

            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </div>
        <div class="container">
            <br>
        <form action="LoginController" method="post">

            <div class="container1">
                <h1>Log In</h1>
                <p>Please fill in this form to log in an account.</p>
                <hr>
                <label for="uname"><b>Phone</b></label>
                <input type="text" placeholder="Enter Phone Number" name="phone" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container1">
                <button type="button" class="cancelbtn">Cancel</button>
            </div>
        </form>
        </div>
        </body>
        </html>
        </xmp>
        <h2> Демонстрація :</h2>
        <img src="lab_img/lab8/demoAuto1.png"><br>
        <img src="lab_img/lab8/demoAuto2.png"><br>
`;

    changeText(text);
}

function language() {
    const text = `<h1>Мультиязичність</h1>
        <h2> JS-код:</h2>
        <xmp style="margin: 0">
        <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }
        </script>

        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </xmp>
        <h2> Демонстрація: </h2>
        <img src="lab_img/lab8/demoLang1.jpg"><br>
        <img src="lab_img/lab8/demoLang2.jpg"><br>
        <img src="lab_img/lab8/demoLang3.jpg"><br>
        <img src="lab_img/lab8/demoLang4.jpg"><br>
`;

    changeText(text);
}