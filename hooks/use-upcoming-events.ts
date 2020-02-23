import { IEvent } from "../types/global-types";

export const useUpcomingEvents = () => {
  const events: IEvent[] = [];
  events.push({ id: "1", name: "Test1", url: "www.google.com" });
  return events;
};
