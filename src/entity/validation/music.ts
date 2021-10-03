import { IObject } from 'rey-common';
import * as Joi from 'joi';

export const SCHEME: IObject<Joi.ObjectSchema> = {
    CREATE_MUSIC: Joi.object({
        body: Joi.object({
            title: Joi.string().required(),
            composer_id: Joi.number().required()
        })
    }),

};