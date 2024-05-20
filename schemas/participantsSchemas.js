import Joi from "joi";

export const createParticipantSchema = Joi.object({
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  date_of_birth: Joi.date().iso().required(),
  heard_about_event: Joi.string()
    .valid("Social media", "Friends", "Found myself")
    .required(),
});
