import EventForm from "@/components/EventForm";
import EventList from "@/components/EventList";

export default function EventsPage() {
  const createEvent = async (form) => {
    await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };

  return (
    <div>
      <h1>Manage Events</h1>
      {/* <EventForm onSubmit={createEvent} /> */}
      <EventForm />

      <EventList />
    </div>
  );
}
