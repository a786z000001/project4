import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-indigo-900 mb-4">Welcome to qRide</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        A quality-first ride-sharing experience. Choose your role to begin.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-indigo-700 transition">
          I'm a Rider
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-700 transition">
          I'm a Driver
        </button>
      </div>
    </div>
  );
}

export default App;
