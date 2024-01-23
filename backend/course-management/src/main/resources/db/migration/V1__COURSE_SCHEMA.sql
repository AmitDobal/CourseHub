CREATE TABLE Course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    instructor VARCHAR(255),
    ratings DOUBLE,
    price DOUBLE,
    image VARCHAR(255)
);

INSERT INTO 
course
(id, name, description, instructor, ratings, price, image) 
VALUES ('1001', 'Java Fundamentals', 
'Learn java stream API and lambda expressions.', 
'Suresh Singh', '0', '1299', 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210728114056/Java-Stream-Tutorial.png');
  
INSERT INTO 
course
(id, name, description, instructor, ratings, price, image) 
VALUES ('1002', 'React Fundamentals', 
'Learn java stream API and lambda expressions.', 
'Test Instructor', '0', '1299', 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210728114056/Java-Stream-Tutorial.png');
-- Insert 1
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1006', 'Python Basics', 'Introduction to Python programming language.', 'Anna Johnson', '0', '999', 'https://example.com/python-basics.png');

-- Insert 2
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1007', 'Web Development Fundamentals', 'Foundations of web development.', 'Michael Smith', '0', '1499', 'https://example.com/web-dev-fundamentals.png');

-- Insert 3
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1008', 'Data Science Essentials', 'Essential concepts for data science.', 'Emily Brown', '0', '1999', 'https://example.com/data-science-essentials.png');

-- Insert 4
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1009', 'JavaScript Advanced', 'Advanced topics in JavaScript programming.', 'Daniel White', '0', '1299', 'https://example.com/js-advanced.png');

-- Insert 5
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1010', 'Mobile App Development', 'Building mobile applications with React Native.', 'Sophia Chen', '0', '1699', 'https://example.com/mobile-app-dev.png');

-- Insert 6
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1011', 'Database Design', 'Principles and practices of database design.', 'Brian Davis', '0', '1499', 'https://example.com/database-design.png');

-- Insert 7
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1012', 'Artificial Intelligence Basics', 'Introduction to AI concepts and algorithms.', 'Olivia Lewis', '0', '1799', 'https://example.com/ai-basics.png');

-- Insert 8
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1013', 'Cybersecurity Fundamentals', 'Fundamental principles of cybersecurity.', 'Ethan Miller', '0', '1299', 'https://example.com/cybersecurity-fundamentals.png');

-- Insert 9
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1014', 'DevOps Essentials', 'Key concepts and practices in DevOps.', 'Mia Thompson', '0', '1599', 'https://example.com/devops-essentials.png');

-- Insert 10
INSERT INTO course (id, name, description, instructor, ratings, price, image) 
VALUES ('1015', 'Machine Learning Foundations', 'Foundational concepts in machine learning.', 'Christopher Taylor', '0', '1899', 'https://example.com/ml-foundations.png');