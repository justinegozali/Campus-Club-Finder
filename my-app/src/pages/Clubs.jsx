import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clubs } from '../Data';

export default function Club() {
    const [sortOrder, setSortOrder] = useState('az');
    const [view, setView] = useState('grid');
    const [sortedClubs, setSortedClubs] = useState([]);

    useEffect(() => {
        const sorted = [...clubs].sort((a, b) => {
            if (sortOrder === 'az') return a.name.localeCompare(b.name);
            if (sortOrder === 'za') return b.name.localeCompare(a.name);
            return 0;
        });
        setSortedClubs(sorted);
    }, [sortOrder]);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <div>
                    <label className="mr-2 font-medium">Sort:</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border rounded shadow p-1 bg-white"
                    >
                        <option value="az">Name A-Z</option>
                        <option value="za">Name Z-A</option>
                    </select>
                </div>

                <div className='border rounded shadow px-2 p-1 bg-white'>
                    <button
                        onClick={() => setView('grid')}
                        className={`mr-2 ${view === 'grid' ? 'font-bold' : ''}`}
                    >
                        Grid View
                    </button>
                    <button
                        onClick={() => setView('list')}
                        className={view === 'list' ? 'font-bold' : ''}
                    >
                        List View
                    </button>
                </div>
            </div>

            <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
                {sortedClubs.map((club) => (
                    <div key={club.id} className="border rounded shadow p-4 bg-white flex flex-col md:flex-row items-center md:items-start">
                        <img src={club.image} alt={club.name} className="w-full md:w-32 h-32 object-cover rounded mr-4 mb-2 md:mb-0" />
                        <div>
                            <h2 className="text-xl font-bold">{club.name}</h2>
                            <p className="text-gray-600 mb-2">{club.shortDescription}</p>
                            <Link to={`/clubs/${club.id}`} className="text-blue-600 hover:underline">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
