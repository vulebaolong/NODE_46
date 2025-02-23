/**
 * https://docs.docker.com/reference/cli/docker/
 * 
 * IMAGE ----------------------------------------------------------------
 * 
 * docker build tạo image: 
 *    - docker build -t image-be_cyber_media .
 * 
 * IMGAE LIST
 *    - docker image ls
 *    - docker image list
 * 
 * IMGAE REMOVE
 *    - docker image remove id_ten_imgae
 *    - docker image remove -f image-be_cyber_media  && docker build -t image-be_cyber_media .
 *       - remove và build lại
 * 
 * CONTAINER ----------------------------------------------------------------
 * Container run:
 *    - docker run -d -p 3070:3069 --name cons-be_cyber_media image-be_cyber_media
 *       -d: không chiếm dụng terminal (chạy ngầm)
 * 
 * Container list:
 *    - docker container ls
 *    - docker container list
 *    - docker ps      => câu lệnh các lập trình viên hay dùng
 *       - Lấy ra tất cả container ĐANG ONLINE
 *    
 *    - docker ps -a
 *       - Lấy ra tất cả container ĐANG ONLINE và OFFLINE
 * 
 * Container Restart:
 *    - docker container restart id_name_container
 * 
 * TERMINAL:
 *    - docker logs id_ten_container
 * 
 * Tìm địa chỉ ip của một container (LƯU Ý TRONG MÔI TRƯỜNG DOCKER)
 *    - docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' id_name_DB_SQL_container
 * 
 * DOCKER COMPOSE ----------------------------------------------------------------
 * 
 * start:
 *    - docker compose up -d
 *       -d: không chiếm dụng terminal (chạy ngầm)
 * 
 * stop:
 *    - docker compose down
 * 
 * HUB:
 *    - docker login
 *    - docker push name_container:tag
 * 
 * cách cài ubuntu trên linux:
 * https://docs.docker.com/engine/install/ubuntu/
 * 
 * sudo ./svc.sh install
 * sudo ./svc.sh start
 * 
 * cd _duong_dan_file
 *    - truy cập vapf folder
 * ls -la
 *    - list ra tất cả file đang có
 * nano tènile:
 *    - mở editor của nano để chỉnh sửa nội dung bên trong
 * 
 * ctrl + x: 
 *    - thoát khỏi editor nano
 * 
 * touch ten_file:
 *    - tạo file
 * 
 * ctrl + O và enter
 *    - lưu file
 * 
 * sudo su:
 *    - kẹp quyền root
 * exit:
 *    - thoát quyền root
 * 
 * 
 * DẤU PORT:
 * cài nginx
 *    - sudo apt update
 *    - sudo apt install nginx
 * 
 * mở tệp cấu hình
 *    - sudo nano /etc/nginx/sites-available/default
 * 
 * xoá nhanh:
 *  - ctrl + K
 * 
 * Check code mới copy vô có oke không:
 *    sudo nginx -t
 * 
 * Khởi động lại Nginx để áp dụng code mới thay đổi
 *    sudo systemctl restart nginx
 * 
 * Mở và cho phép port 80 được phép truy cập vào server của AWS
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */