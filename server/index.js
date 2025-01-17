import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './db.js';
import express from 'express';
import cors from 'cors';

// Routes
import productRoutes from './routes/productRoutes.js';

connectToDatabase();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

const PORT = 5000;

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
