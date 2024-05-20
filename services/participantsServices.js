import { Participant } from "../db/models/Participant.js";

export const listEventAllParticipants = async (query) => {
  const eventAllParticipants = await Participant.find(query);

  return eventAllParticipants;
};

export async function isParticipantExisting(email, eventId) {
  const query = {
    email,
    event_id: eventId,
  };

  const existingParticipant = await Participant.findOne(query);

  return existingParticipant;
}

export async function addParticipant(participantData, event_id) {
  const newParticipant = new Participant({ ...participantData, event_id });

  const participant = await newParticipant.save();
  return participant;
}
