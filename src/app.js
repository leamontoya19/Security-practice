//este file es básicamente el server (servidor)
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer';

import authRoutes from './routes/auth.routes.js'
import postsRoutes from './routes/posts.routes.js'

const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials: true //para que cors tenga acceso a las credenciales y así se pueda guardar el token en las cookies.
}));
app.use(morgan('dev'));
app.use( express.json()); //para que express lea el json (body)
app.use(cookieParser());

const upload = multer({dest:'./uploads/'})
app.post('/upload', upload.single('file'), function (req, res) {
res.status(200).json('Image has been uploaded')
  })

app.use("/api", authRoutes);
app.use("/api", postsRoutes);


export default app