create database database_links;

use database_links;

create table users(
    id int not null auto_increment,
    username varchar(20) not null,
    password varchar(60) not null,
    fullname varchar(100) not null,
    primary key(id)
);

create table links(
    id int not null,
    title varchar(150) not null,
    url varchar(255) not null,
    description text,
    user_id int,
    create_at timestamp not null default current_timestamp,
    constraint fk_user foreign key (user_id) references users(id)
);

