import express from 'express';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
import usersRouter from './routes/users.routes.js';
import subscriptionsRouter from './routes/subscriptions.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/subscriptions', subscriptionsRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
	res.send('Welcome To The Subscription Tracker API');
});

app.listen(PORT, async () => {
	console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);

	// Connect to MongoDB
	await connectToDatabase();
});

export default app;
