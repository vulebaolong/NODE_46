-- NODE46
-- Mysql sẽ không phân biệt chữ hoa chữ thường: "select" => "SELECT"
-- Nhưng mình nên sử dụng chữ hoa
-- Dấu chấm phẩy ";" kết thúc dòng
-- Đặt tên cho table nên tránh những từ trùng với lệnh MySQL
		-- nếu vẫn muốn sử dụng thì mình sẽ kẹp với backtic (``)
		-- thêm chữ "s" ngay sau tên table
		
-- CSDL

-- Tạo database
CREATE DATABASE demo_database
CREATE DATABASE IF NOT EXISTS demo_database

USE demo_database

-- TABLE
CREATE TABLE IF NOT EXISTS users (	
	users_id INT, 
	full_name VARCHAR(255), 
	email VARCHAR(255), 
	age INT, 
	birth_day DATE,
	money DOUBLE, 
	is_active BOOLEAN
)

-- Đổi tên table
RENAME TABLE users TO users_rename

-- Xoá Table
DROP TABLE users_rename
DROP TABLE IF NOT EXISTS users_rename

-- RÀNG BUỘC

-- Not null
CREATE TABLE not_null (
	id INT NOT NULL,
	age INT
)

-- Unique
CREATE TABLE `unique` (
	id INT UNIQUE
)

-- Default
CREATE TABLE `default` (
	id INT NOT NULL UNIQUE,
	
	role VARCHAR(255) DEFAULT 'ROLE_USER',
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)              

-- khoá chính: PRIMARY KEY
-- đinh vị một dự liệu, tránh việc bị trùng lặp
CREATE TABLE primary_key (
	id BIGINT PRIMARY KEY AUTO_INCREMENT
)

-- khoá phụ: FOREIGN KEY
CREATE TABLE foreign_key (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	
	foreign_key BIGINT,
	
	FOREIGN KEY (foreign_key) REFERENCES primary_key(id)
)


-- THÊM DỮ LIỆU VÀO TABLE
INSERT INTO users (users_id, full_name, email, age, birth_day, money, is_active) VALUES
					(1, 'long 1', 'long@gmail.com', 18, '1999-01-01', 150000, TRUE),
					(2, 'long 1', 'long@gmail.com', 18, '1999-01-01', 50000, TRUE),
					(3, 'long 3', 'long@gmail.com', 18, '1999-01-01', 20000, TRUE)

-- UPDATE DỮ LIỆU
UPDATE users
SET money = 12346
WHERE users_id = 1

-- XOÁ DỮ LIỆU
DELETE FROM users
WHERE users_id = 2

-- Xoá hết dữ liệu trong table nhưng không xoá table
TRUNCATE users

-- TRUY VẤN 



CREATE DATABASE db_app_food

CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(255),
	email VARCHAR(255),
	pass_word VARCHAR(255)
)

INSERT INTO users (full_name, email, pass_word) VALUES
('Nguyen van A', 'a@gmail.com', '1234'),
('Nguyen van B', 'b@gmail.com', '1234'),
('Nguyen van C', 'c@gmail.com', '1234'),
('Nguyen van D', 'd@gmail.com', '1234'),
('Nguyen van E', 'e@gmail.com', '1234')


SELECT * FROM users
WHERE users.user_id = 1



SELECT full_name AS 'Họ Và Tên', email 'email người dùng' FROM users

-- LIMIT: giới hạn số lượng kết quả trả về (bắt dầu từ index 0)
SELECT * FROM users
LIMIT 2 OFFSET 1


CREATE TABLE foods (
	food_id INT PRIMARY KEY AUTO_INCREMENT,
	
	food_name VARCHAR(255),
	description VARCHAR(255)
)

INSERT INTO foods (food_name, description) VALUES
('su kem', 'bánh được làm từ kem'),
('gỏi gà', 'được làm từ gà'),
('gỏi vịt', 'được làm từ vịt'),
('gỏi cá', 'được làm từ cá'),
("gỏi heo's", 'được làm từ heo')


CREATE TABLE orders (
	order_id INT PRIMARY KEY AUTO_INCREMENT,

	user_id INT,
	food_id INT,
	
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (food_id) REFERENCES foods(food_id)
)

INSERT INTO orders (user_id, food_id) VALUES
(1, 2),
(3, 1),
(2, 5),
(1, 3),
(3, 2)

SELECT * FROM orders







