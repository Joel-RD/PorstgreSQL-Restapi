CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(400) NOT NULL,
    lastname VARCHAR(400) NOT NULL,
    age  INTEGER NOT NULL,
    email VARCHAR(300) UNIQUE NOT NULL
);

INSERT INTO users (name, lastname, age, email) VALUES ('Eudy', 'Reyes', '25', 'eudyj@gmail.com');
