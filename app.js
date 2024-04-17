//este file es básicamente el server (servidor)
import express from 'express';
import morgan from 'morgan';
import authRoutes from './src/routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use( express.json()) //para que express lea el json (body)
app.use("/api", authRoutes)

export default app