import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className='flex-col max-w-4xl mx-auto p-6 justify-between justify-items-center align-middle text-gray-800'>
            <h1 className='text-4xl font-bold mb-4 text-center'>
                Campus Club Finder
            </h1>
            <p className='text-2xl mb-4 text-justify '>
                Hello, welcome to Campus Club Finder. In this website, students can explore and connect with various clubs on campus
            </p>
            <img
                src="/images/coding.jpg"
                alt="Coding club"
                className="w-full h-auto rounded-lg shadow-md mb-6"
            />
            <button className='text-2xl font-bold px-4 py-2 rounded-xl bg-gray-800 hover:bg-yellow-500 text-white hover:text-gray-800'
                onClick={() => navigate('/clubs')}>
                Find Club
            </button>
        </div>
    );
}