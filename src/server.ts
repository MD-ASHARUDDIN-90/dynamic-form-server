import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDb } from './db';
import formsRoutes from "./routes/forms/formsRoute"
import { useBodyParser, useEnhancedExpress } from './helper/server-helper';


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//db connection
connectDb();

// Use Morgan middleware for logging HTTP requests
app.use(morgan('tiny'));

// Use Enhanced Express Middleware with Express Application
useEnhancedExpress(app);


//body-parser
useBodyParser(app);


//check if server is running
app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello, World!' });
});

//form router
app.use("/api/forms" , formsRoutes)



// return 404 if request URL not found
app.use((req, res) => {
	res.errorRes(404);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
