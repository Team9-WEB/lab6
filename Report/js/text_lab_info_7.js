function meta_7() {
    const text = `<h1>Тема, Мета</h1>
        <p>Тема : ВЗАЄМОДІЯ WEB-ЗАСТОСУВАНЬ З СИСТЕМОЮ КЕРУВАННЯ БАЗАМИ ДАНИХ (СКБД). ОБРОБКА РЕЗУЛЬТАТІВ SQL-ЗАПИТІВ У PHP-СЦЕНАРІЇ.</p>
        <p>Мета : придбати практичні навички підключення до СКБД, вибора бази даних, виконання запиту, отримання результатів, відключення від СКБД</p>`;
    changeText(text);
}

function mishaDB() {
    const text = `<h1>Створити БД для розкладу руху залізничного транспорту</h1>
<div style="text-align: left">
        <h2>В БД бібліотеки необхідно відобразити наступні дані:</h2>
        <ul>
          <li>З відки відправляється також о котрій</li>
          <li>Куди відправляється також о котрій</li>
          <li>Номер поїзда</li>
          <li>В дорозі</li>
          </ul>
</div>
        <h2> Інфологічна модель:</h2>
        <img src="lab_img/lab7/misha/infolog.png" style="width: 50%; height: 100%">
        <h2>Даталогічна модель : </h2>
        <img src="lab_img/lab7/misha/datalog.png">
        <h2>Реалізація БД в СУБД MySQL</h2>
        <img src="lab_img/lab7/misha/DDL.png">
        <h2>Фізична модель:</h2>
        <img src="lab_img/lab7/misha/fizModel.png">
<div style="text-align: left">
        <h2>Скрипти для внесення даних до БД через html-форму:</h2>
        <p style="font-size: 25px; text-align: left">Html:</p>
        <xmp style="margin: 0">
        <form style="font-size: 18px ; margin: 1px" action="TripSearchController" method="post">
           Звідки : <input type="text" name="from" autocomplete="off" required> 
           Куди : <input type="text" name="to" autocomplete="off" required>
           Поїзд : <input type="text" name="train" autocomplete="off" required>
           <button>Добавити</button>
        </form>
        </xmp>
        <p style="font-size: 25px; text-align: left; margin: 0">Java:</p>
        <xmp style="margin: 0">
        public static void addTrip(int from, int tos, int train) {
        try {
            Connection con = DbConnection.getConnection();
            String sql = "Insert into trip (froms, tos, train, departure, arrival) values(?,?,?,?,?)";
            PreparedStatement preparedStatement = con.prepareStatement(sql);
            preparedStatement.setInt(1, from);
            preparedStatement.setInt(2, tos);
            preparedStatement.setInt(3, train);

            String a = RandomDate();
            String b = RandomDate();
            System.out.println();
            if (findDifference(a, b) > 0) {
                preparedStatement.setString(4, a);
                preparedStatement.setString(5, b);
            } else {
                preparedStatement.setString(4, b);
                preparedStatement.setString(5, a);
            }
            preparedStatement.executeUpdate();
        } catch (Exception e) {
        }
    }
        </xmp>
        <h2>Результат :</h2>
        <img src="lab_img/lab7/misha/show1.png"><br>
        <img src="lab_img/lab7/misha/show1.1.png" style="width: 75%; height: 100%">
        <br>
        <h2>Скрипти для пошуку даних до БД через html-форму:</h2>
        <p style="font-size: 25px; text-align: left">Html:</p>
        <xmp style="margin: 0">
        <form action="searched.jsp" method="GET">
           Пошук по населеному пункту: <input type="text" name="search" autocomplete="off"> <button>Шукати</button>
        </form>
        </xmp>
        <p style="font-size: 25px; text-align: left; margin: 0">Java:</p>
        <xmp style="margin: 0">
        public static ArrayList<Trip> getTripByName(String name) {
        try {
            Connection con = DbConnection.getConnection();
            ArrayList<Trip> list = new ArrayList<>();

            PreparedStatement preparedStatement = con.prepareStatement("Select id from settlements where name = ?");
            preparedStatement.setString(1, name);
            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {

                int i = rs.getInt("id");
                PreparedStatement preparedStatement2 = con.prepareStatement("Select * from trip where froms = ? or tos = ?");
                preparedStatement2.setInt(1, i);
                preparedStatement2.setInt(2, i);
                ResultSet rs2 = preparedStatement2.executeQuery();

                while (rs2.next()) {

                    int id = rs2.getInt("id");
                    String from = getSettlement(rs2.getInt("froms"), con);
                    String to = getSettlement(rs2.getInt("tos"), con);
                    int train = rs2.getInt("train");
                    String departure = rs2.getString("departure");
                    String arrival = rs2.getString("arrival");

                    list.add(new Trip(id, from, to, train, departure, arrival, findDifference(departure, arrival)));
                }
                return list;
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }
        </xmp>
        <h2>Результат :</h2>
        <img src="lab_img/lab7/misha/show2.png"><br>
        <img src="lab_img/lab7/misha/show2.1.png" style="width: 75%; height: 100%">
</div>
`;

    changeText(text);
}

function itog_7() {
    const text = `<h1>Висновок</h1>
        <p style="text-align:justify;">На лабораторній роботі №7 ми придбали практичні навички підключення до СКБД, вибора бази даних, виконання запиту, отримання результатів, відключення від СКБД</p>`
    changeText(text);
}

