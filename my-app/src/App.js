import React from 'react';
import './App.css';

import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.png';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-semibold">HARI VISHVANATH</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        {/* Section 1 */}
        <section className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-xl font-semibold mb-2">WEB DEVELOPMENT</h2>
          <img src={image1} alt="Image 1" className="w-full rounded-lg mb-2" />
          <p>This includes the following:</p>
          <ol>
            <li>1. HTML</li>
            <li>2. CSS</li>
            <li>3. JavaScript</li>
            <li>4. Node JS, React JS</li>
            <li>5. Databases, APIs</li>
          </ol>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-lg shadow-md p-4 mb-8">
        <h2 className="text-xl font-semibold mb-2">MOBILE APP DEVELOPMENT</h2>
        <img src={image2} alt="Image 2" className="w-full rounded-lg mb-2" />
          <p>This includes the following:</p>
          <ol>
            <li>1. Flutter</li>
            <li>2. Dart</li>
            <li>3. Backend</li>
            <li>4. Firebase</li>
            <li>5. Figma UI</li>
          </ol>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Cloud Computing</h2>
        <img src={image3} alt="Image 3" className="w-full rounded-lg mb-2" />
          <p>This includes the following:</p>
          <ol>
            <li>1. SaaS</li>
            <li>2. PaaS</li>
            <li>3. IaaS</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default App;
