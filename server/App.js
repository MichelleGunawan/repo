// import modules
const express = require("express");
const { json, urlencoded } = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

// app
const app = express();

// db
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	next();
  });
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }, (g)=>g.AllowAnyOrigin()));
app.use(cookieParser());
app.use(expressValidator());

// routes
const testRoutes = require("./routes/routes");
//const { cookie } = require("express-validator/check");
app.use("/", testRoutes);

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);