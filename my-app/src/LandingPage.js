import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-semibold">My Landing Page</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p>This is the first card.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p>This is the second card.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p>This is the third card.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
