CREATE TABLE cars(
   car_id INT PRIMARY KEY AUTO_INCREMENT,
   -- Tên xe, ví dụ: "Tesla Model S"
   `name` VARCHAR(255),
   -- Mô tả ngắn, ví dụ: "Free recharge at any station"
   description TEXT,
   -- Số lượng hành khách, ví dụ: 4
   passengers INT,
   -- Tốc độ tối đa với thời gian tăng tốc, ví dụ: "100 km/h in 4 seconds"
   max_speed VARCHAR(255),
   -- Loại hộp số, ví dụ: "Automatic gearbox"
   gearbox_type VARCHAR(255),
   -- Loại nhiên liệu, ví dụ: "Electric"
   fuel_type VARCHAR(255),
   -- Giá thuê mỗi ngày, ví dụ: 168.00
   price_per_day DOUBLE,
   -- Tỷ lệ giảm giá, ví dụ: 25
   discount_percentage INT DEFAULT 0,
   -- URL hình ảnh xe
   image_url VARCHAR(255),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

INSERT INTO
    cars (
        `name`,
        description,
        passengers,
        max_speed,
        gearbox_type,
        fuel_type,
        price_per_day,
        discount_percentage,
        image_url
    )
VALUES
    (
        "Tesla Model S",
        "Free recharge at any station",
        4,
        "100 km/h in 4 seconds",
        "Automatic gearbox",
        "Electric",
        168.00,
        25,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "BMW i8",
        "Hybrid electric sports car",
        2,
        "120 km/h in 4.2 seconds",
        "Automatic gearbox",
        "Hybrid",
        190.00,
        15,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Audi e-tron",
        "Luxury electric SUV",
        5,
        "110 km/h in 5.7 seconds",
        "Automatic gearbox",
        "Electric",
        200.00,
        20,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Mercedes-Benz EQC",
        "Electric SUV with long range",
        5,
        "100 km/h in 5.1 seconds",
        "Automatic gearbox",
        "Electric",
        210.00,
        10,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Porsche Taycan",
        "Electric performance sedan",
        4,
        "125 km/h in 3.5 seconds",
        "Automatic gearbox",
        "Electric",
        250.00,
        18,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Chevrolet Bolt",
        "Affordable electric hatchback",
        4,
        "90 km/h in 6.5 seconds",
        "Automatic gearbox",
        "Electric",
        95.00,
        5,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Nissan Leaf",
        "Popular electric car",
        4,
        "80 km/h in 7 seconds",
        "Automatic gearbox",
        "Electric",
        80.00,
        12,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Ford Mustang Mach-E",
        "Electric SUV with muscle car spirit",
        5,
        "105 km/h in 5.0 seconds",
        "Automatic gearbox",
        "Electric",
        185.00,
        8,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Jaguar I-PACE",
        "Luxury electric SUV",
        5,
        "110 km/h in 4.8 seconds",
        "Automatic gearbox",
        "Electric",
        220.00,
        20,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Hyundai Kona Electric",
        "Compact electric SUV",
        5,
        "90 km/h in 7.2 seconds",
        "Automatic gearbox",
        "Electric",
        120.00,
        5,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Tesla Model X",
        "Family-friendly electric SUV",
        7,
        "105 km/h in 4.4 seconds",
        "Automatic gearbox",
        "Electric",
        260.00,
        22,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Kia Soul EV",
        "Compact and quirky electric car",
        5,
        "85 km/h in 8.0 seconds",
        "Automatic gearbox",
        "Electric",
        100.00,
        7,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Volkswagen ID.4",
        "All-electric compact SUV",
        5,
        "95 km/h in 6.8 seconds",
        "Automatic gearbox",
        "Electric",
        130.00,
        10,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Mazda MX-30",
        "Stylish electric crossover",
        4,
        "80 km/h in 9.1 seconds",
        "Automatic gearbox",
        "Electric",
        90.00,
        6,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Honda e",
        "Compact city electric car",
        4,
        "75 km/h in 8.3 seconds",
        "Automatic gearbox",
        "Electric",
        85.00,
        3,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Lucid Air",
        "High-performance electric sedan",
        5,
        "120 km/h in 3.0 seconds",
        "Automatic gearbox",
        "Electric",
        290.00,
        20,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Rivian R1T",
        "Electric adventure truck",
        5,
        "105 km/h in 3.2 seconds",
        "Automatic gearbox",
        "Electric",
        280.00,
        18,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "BYD Tang EV",
        "Affordable electric SUV",
        7,
        "90 km/h in 6.5 seconds",
        "Automatic gearbox",
        "Electric",
        150.00,
        12,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Peugeot e-208",
        "Compact electric hatchback",
        5,
        "85 km/h in 7.8 seconds",
        "Automatic gearbox",
        "Electric",
        95.00,
        10,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Renault Zoe",
        "Popular electric city car",
        5,
        "80 km/h in 8.5 seconds",
        "Automatic gearbox",
        "Electric",
        80.00,
        8,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Tesla Model 3",
        "Electric sedan with long range",
        5,
        "110 km/h in 3.5 seconds",
        "Automatic gearbox",
        "Electric",
        170.00,
        20,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Volvo XC40 Recharge",
        "Electric luxury SUV",
        5,
        "100 km/h in 4.9 seconds",
        "Automatic gearbox",
        "Electric",
        225.00,
        15,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "BMW X3 Electric",
        "Luxury compact electric SUV",
        5,
        "105 km/h in 5.2 seconds",
        "Automatic gearbox",
        "Electric",
        210.00,
        10,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Mini Cooper SE",
        "Compact electric hatchback",
        4,
        "80 km/h in 7.0 seconds",
        "Automatic gearbox",
        "Electric",
        90.00,
        5,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Skoda Enyaq iV",
        "Practical electric SUV",
        5,
        "95 km/h in 6.9 seconds",
        "Automatic gearbox",
        "Electric",
        135.00,
        12,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Fiat 500 Electric",
        "Stylish city electric car",
        4,
        "75 km/h in 9.0 seconds",
        "Automatic gearbox",
        "Electric",
        80.00,
        5,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Opel Mokka-e",
        "Compact electric SUV",
        5,
        "85 km/h in 8.5 seconds",
        "Automatic gearbox",
        "Electric",
        95.00,
        7,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Toyota bZ4X",
        "Toyota's first all-electric SUV",
        5,
        "90 km/h in 7.5 seconds",
        "Automatic gearbox",
        "Electric",
        150.00,
        13,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "Ford F-150 Lightning",
        "Electric version of classic truck",
        5,
        "100 km/h in 4.5 seconds",
        "Automatic gearbox",
        "Electric",
        250.00,
        17,
        "https://i.imgur.com/ZL52Q2D.png"
    ),
    (
        "GMC Hummer EV",
        "Electric off-road SUV",
        5,
        "100 km/h in 3.5 seconds",
        "Automatic gearbox",
        "Electric",
        350.00,
        22,
        "https://i.imgur.com/ZL52Q2D.png"
    );