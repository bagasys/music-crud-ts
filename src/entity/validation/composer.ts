import { IObject } from 'rey-common';
import * as Joi from 'joi';

export const SCHEME: IObject<Joi.ObjectSchema> = {
    CREATE_COMPOSER: Joi.object({
        body: Joi.object({
            name: Joi.string().required()
        })
    })
};