create table songs
(
    id  int not null primary key,
    name char(45) not null,
    year int(5) not null,
    duration int(10) not null
);
create table performers
(
    id  int not null primary key,
    name char(45) not null,
    age int(3) not null
);
create table audioLibrary
(
    id  int not null primary key,
    song int not null,
    performer int not null,
    genre char(45) not null,
    numbers int(10) not null,
    constraint audioLibrary_songs_id_fk
        foreign key (song) references songs(id),
    constraint audioLibrary_performers_id_fk
        foreign key (performer) references performers(id)
);
