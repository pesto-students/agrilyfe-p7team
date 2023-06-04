const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req: any, res: any, cb: any) {
    cb(null, path.join(__dirname, "./uploads"));
  },
  filename: function (req: any, file: any, cb: any) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png");
  },
});

exports.upload = multer({ storage: storage });
