import express from 'express';
import routes from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
dotenv.config();
const app = express();

// app.use(express.json());  
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', routes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port  ${PORT}`);
});
