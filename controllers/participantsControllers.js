import HttpError from "../helpers/HttpError.js";
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

export const createEventParticipant = async (req, res, next) => {
  try {
    const { eventId } = req.query;
    const participantData = req.body;

    const isParticipantExisting =
      await ParticipantsService.isParticipantExisting(
        participantData.email,
        eventId
      );

    if (isParticipantExisting) {
      throw HttpError(
        409,
        `Contact with email ${participantData.email} has already registered to this event`
      );
    }

    const participant = await ParticipantsService.addParticipant(
      participantData,
      eventId
    );
    res.status(201).send(participant);
  } catch (error) {
    next(error);
  }
};
