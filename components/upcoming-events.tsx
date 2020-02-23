import React from "react";
import { useUpcomingEvents } from "../hooks/use-upcoming-events";

const UpcomingEvents = () => {
  const events = useUpcomingEvents();

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
