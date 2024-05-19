import { Participant } from "../db/models/Participant.js";

export const listEventAllParticipants = async (query) => {
  const eventAllParticipants = await Participant.find(query);

  return eventAllParticipants;
};
