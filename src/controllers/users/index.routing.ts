import * as Express from 'express';

import { getByID } from './getByID.ctrl';
import { getAll } from './getAll.ctrl';
import { update } from './update.ctrl';
import { remove } from './remove.ctrl';

export const userRouting = (app: Express.Application) => {
    app.get('/user/:id_user', getByID);
    app.get('/users', getAll);
    app.put('/user/:id_user', update);
    app.delete('/user/:id_user', remove);
};