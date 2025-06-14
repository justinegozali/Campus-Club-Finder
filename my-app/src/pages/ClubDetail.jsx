// ClubDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clubs } from '../Data';

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(sessionStorage.getItem('joinedClubs')) || [];
    setJoined(joinedClubs.includes(clubId));
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(sessionStorage.getItem('joinedClubs')) || [];
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId);
      sessionStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setJoined(true);
      alert(`You've joined the ${club.name}!`);
    }
  };

  if (!club) return <p className="p-4">Club not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <img
        src={club.image}
        alt={club.name}
        className="w-full rounded shadow mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
      <p className="mb-4">{club.description}</p>

      <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
      <ul className="list-disc list-inside mb-4">
        {club.events.map((event, idx) => (
          <li key={idx}>{event.name} – {event.date}</li>
        ))}
      </ul>

      {!joined ? (
        <button
          onClick={handleJoin}
          className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-yellow-500 hover:text-gray-800"
        >
          Join Club
        </button>
      ) : (
        <p className="text-gray-800 font-medium">You have joined this club!</p>
      )}
    </div>
  );
}