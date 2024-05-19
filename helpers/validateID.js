import HttpError from "./HttpError.js";

const idRegexp = /^[a-f\d]{24}$/i;

const validateID = (req, res, next) => {
  if (!req.query.eventId.match(idRegexp)) {
    next(HttpError(400, "Not valid id"));
  }
  next();
};

export default validateID;
