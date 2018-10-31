import * as Joi  from 'joi';

export const defaultFieldProperties = Joi.object().keys({
  hidden: Joi.boolean().valid(false).required(),
  structure_immutable: Joi.boolean().valid(true).required()
});

export const primaryFieldValidators = Joi.object().keys({
  primary: Joi.boolean().valid(true).required()
});

export const idField = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().valid('id').required(),
  type: Joi.string().valid('uuid').required(),
  properties: defaultFieldProperties,
  validators: primaryFieldValidators
});

export const createdAtField = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().valid('created_at').required(),
  properties: defaultFieldProperties,
  type: Joi.string().valid('datetime')
});

export const updatedAtField = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().valid('updated_at').required(),
  properties: defaultFieldProperties,
  type: Joi.string().valid('datetime')
});

export const datasetSchema = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().required(),
  properties: Joi.object().keys({
    structure_immutable: Joi.boolean().valid(false).required()
  }).required(),
  fields: Joi.array().items(idField, createdAtField, updatedAtField).required()
});