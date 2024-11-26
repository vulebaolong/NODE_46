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





