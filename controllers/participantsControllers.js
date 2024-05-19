import * as ParticipantsService from "../services/participantsServices.js";

export const getEventAllParticipants = async (req, res, next) => {
  try {
    const { eventId } = req.query;

    const query = { event_id: eventId };

    const eventAllParticipants =
      await ParticipantsService.listEventAllParticipants(query);

    res.send(eventAllParticipants);
  } catch (error) {
    next(error);
  }
};
