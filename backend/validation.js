// Validation
const Joi = require('@hapi/joi');

// Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data, schema);
};

// Login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
    });
    const valiadtion = schema.validate(data, schema);
    return valiadtion;
    // return schema.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;