import * as Express from 'express';
import validator from 'validator'

export const login = (req: Express.Request, res: Express.Response) => {

    if(!req.body.email || !validator.isEmail(req.body.email)) return res.status(400).send("Valid email required");
    if(!req.body.password) return res.status(400).send("Valid password required");

	return res.send();
};