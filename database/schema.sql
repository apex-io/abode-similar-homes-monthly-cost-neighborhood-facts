DROP DATABASE IF EXISTS abode;

CREATE DATABASE abode;

USE abode;

CREATE TABLE neighborhoods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    neighborhood VARCHAR (20) NOT NULL UNIQUE KEY,
    transit_score INT NOT NULL,
    walk_score INT NOT NULL,
    value_inc_dec INT NOT NULL,
    median_value INT NOT NULL
);