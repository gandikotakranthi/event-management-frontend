"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Event Management Dashboard</h1>
      <EventForm setEvents={setEvents} />
      <Dashboard events={events} />
      <EventList events={events} setEvents={setEvents} />
    </div>
  );
}
