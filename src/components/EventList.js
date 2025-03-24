"use client";
import axios from "axios";

export default function EventList({ events, setEvents }) {
  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:5000/events/${id}`);
    setEvents(events.filter(event => event._id !== id));
  };

  return (
    <ul className="mt-4">
      {events.map((event) => (
        <li key={event._id} className="border p-2">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p className="italic text-sm">{event.category}</p>
          <button onClick={() => deleteEvent(event._id)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}
