import * as Joi  from 'joi';

export const policySchema = Joi.object().keys({
  id: Joi.string().required(),
  description: Joi.string().required(),
  effect: Joi.string().valid('allow').required(),
  actions: Joi.array().min(1).max(4).items(
    Joi.string().valid('read', 'create', 'update', 'delete')
  ).required(),
  resources: Joi.array().items(Joi.string()).required(),
  subjects: Joi.array().items(Joi.string()).required()
});