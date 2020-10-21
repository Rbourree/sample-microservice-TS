import * as Express from 'express';

import { register } from './register.ctrl';
import { login } from './login.ctrl';

export const userRouting = (app: Express.Application) => {
    app.post('/register', register);
    app.post('/login', login);
};
