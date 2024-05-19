import * as EventsService from "../services/eventsServices.js";

export const getEvents = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const sortField = req.query.sortField || "";
    const sortOrder = req.query.sortOrder || "asc";

    const params = {
      page,
      limit,
    };

    if (sortField && sortField !== "") {
      params.sortField = sortField;
      params.sortOrder = sortOrder;
    }

    const data = await EventsService.listEvents(params);

    res.send(data);
  } catch (error) {
    next(error);
  }
};
