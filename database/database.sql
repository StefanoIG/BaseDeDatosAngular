CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(180),
    description varchar(255),
    image varchar(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    );