CREATE TABLE Course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    instructor VARCHAR(255),
    ratings DOUBLE,
    price DOUBLE,
    image VARCHAR(255)
);