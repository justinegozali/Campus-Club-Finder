export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About Campus Club Finder</h1>
      <p className="mb-4">
        <strong>Campus Club Finder</strong> is a web application designed to help students explore and connect with various clubs on campus.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Browse a list of active student clubs</li>
        <li>View club descriptions and event schedules</li>
        <li>Navigate easily with React Router</li>
        <li>Clean and responsive UI for all devices</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Tech Stack</h2>
      <ul className="list-disc list-inside">
        <li><strong>React.js:</strong> For building the user interface</li>
        <li><strong>React Router:</strong> For client-side routing</li>
        <li><strong>Tailwind CSS:</strong> For fast, responsive styling</li>
        <li><strong>JavaScript (ES6+):</strong> For app logic and interactivity</li>
        <li><strong>Vite / Webpack:</strong> For development and build process (depending on setup)</li>
      </ul>
    </div>
  );
}