import express from 'express';
import cors from 'cors';
import { userController } from '../controllers/user.controller.ts';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/users', userController);

app.listen(3000);