import { Event } from "../db/models/Event.js";

export const listEvents = async (params) => {
  const { limit, sortField, sortOrder } = params;

  let page = params.page;

  const totalEventsNumber = await Event.countDocuments();

  const totalPages = Math.ceil(totalEventsNumber / limit);

  if (page > totalPages) {
    page = totalPages;
  }

  const skip = (page - 1) * limit;

  let query = Event.find();

  if (sortField && sortField !== "") {
    query = query.sort({
      [sortField]: sortOrder,
      _id: "asc",
    });
  }

  const events = await query.skip(skip).limit(limit);

  const hasMorePages = page < totalPages ? true : false;

  return {
    page,
    totalPages,
    hasMorePages,
    limit,
    itemsOnPage: events.length,
    totalItems: totalEventsNumber,
    events,
  };
};
