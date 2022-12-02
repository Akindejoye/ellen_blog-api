import express from 'express';
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import cookieParser from "cookie-parser";

const port = 8800;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get('/api', (req, res) => {
  res.json('Welcome to the backend');
})

app.listen(port, () => {
  console.log('Connected to Vanilla Backend...');
})