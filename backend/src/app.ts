const express = require('express');
const ErrorHandler = require("./middleware/error");
const morgan = require("morgan");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use("/test", (req: any, res: any) => {
    res.send("Hello world!");
  });

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "src/config/.env",
    });
  }

  // import routes
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");

app.use("/api/p7/user", authRouter);
app.use("/api/p7/product", productRouter);
app.use("/api/p7/blog", blogRouter);
app.use("/api/p7/category", categoryRouter);
app.use("/api/p7/blogcategory", blogcategoryRouter);
app.use("/api/p7/brand", brandRouter);
app.use("/api/p7/coupon", couponRouter);
app.use("/api/p7/color", colorRouter);
app.use("/api/p7/enquiry", enqRouter);
app.use("/api/p7/upload", uploadRouter);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;