export default function Dashboard({ events }) {
    const upcoming = events.filter(event => new Date(event.date) > new Date()).length;
    const past = events.length - upcoming;
    const categories = events.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {});
  
    return (
      <div className="p-4 bg-gray-200 rounded">
        <p>Total Events: {events.length}</p>
        <p>Upcoming: {upcoming} | Past: {past}</p>
        <h3>By Category:</h3>
        <ul>{Object.entries(categories).map(([key, value]) => <li key={key}>{key}: {value}</li>)}</ul>
      </div>
    );
  }
  