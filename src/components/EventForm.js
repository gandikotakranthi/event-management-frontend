"use client";
import { useState } from "react";
import axios from "axios";

export default function EventForm({ setEvents }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:5000/events", { title, description, date });
    setEvents(prev => [...prev, data]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="text" placeholder="Event Title" onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
      <input type="date" onChange={(e) => setDate(e.target.value)} required />
      <button type="submit" className="bg-blue-500 text-white p-2">Create Event</button>
    </form>
  );
}
