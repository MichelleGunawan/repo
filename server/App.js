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

// Stop deprecation warnings
mongoose.set('strictQuery', true);

// db
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));

let bucket;
mongoose.connection.on("connected", () => {
	const client = mongoose.connections[0].client;
	const db = mongoose.connections[0].db;
	bucket = new mongoose.mongo.GridFSBucket(db, {
		bucketName: "files"
	});
});


// middleware
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(expressValidator());

// routes
const testRoutes = require("./routes/routes");
//const { cookie } = require("express-validator/check");
app.use("/", testRoutes);


const chatRoutes = require("./routes/chatRoutes");
app.use("/api/chat", chatRoutes);

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);