import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';

// recursive sẽ tự tạo folder nếu chưa tồn tại
fs.mkdirSync(`images/`, { recursive: true });

const storage = diskStorage({
  // Xử lý nơi lưu trữ file
  destination: function (req, file, cb) {
    // có req và file để xử lý logic tạo ra folder muốn lưu trữ (file: imag, docx, excel, pdff, ...)
    cb(null, 'images/');
  },

  // Xử lý tên file
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

    // fileExtension (đuôi mở rộng của file)
    const fileExtension = path.extname(file.originalname);

    // const fileNameString = `local-` + file.fieldname + "-" + uniqueSuffix + fileExtension
    const fileNameString = `local-${file.fieldname}-${uniqueSuffix}${fileExtension}`;

    cb(null, fileNameString);
  },
});

const uploadLocal = {
  storage: storage,
  limits: {
    fileSize: 1 * 1024 * 1024, // 1 MB
  },
};

export default uploadLocal;
