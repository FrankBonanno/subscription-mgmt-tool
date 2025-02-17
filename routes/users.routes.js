import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const usersRouter = Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', authorize, getUser);

usersRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

usersRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

usersRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default usersRouter;
