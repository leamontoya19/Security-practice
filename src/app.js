//este file es básicamente el server (servidor)
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js'
import postsRoutes from './routes/posts.routes.js'

const app = express();
app.use(cors({
    origin:'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use( express.json()); //para que express lea el json (body)
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", postsRoutes);


export default app