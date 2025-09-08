import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faRobot, faMobileAlt, faCloud, faShieldAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const Features: React.FC = () => {
  return (
    <section id="features" className="features py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Blog Features</h2>
          <p className="text-lg text-gray-600 mt-4">Stay updated with the latest in technology through our carefully curated blog features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="" className="hover:text-blue-500">Tech Tutorials</a>
            </h4>
            <p className="text-gray-600 text-center">Step-by-step guides to help you master the latest software, tools, and technologies.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="" className="hover:text-blue-500">AI and Robotics</a>
            </h4>
            <p className="text-gray-600 text-center">Insights and updates on artificial intelligence, robotics, and automation trends.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="" className="hover:text-blue-500">Gadget Reviews</a>
            </h4>
            <p className="text-gray-600 text-center">Unbiased reviews of the latest smartphones, laptops, and other tech gadgets.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faCloud} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="" className="hover:text-blue-500">Cloud Computing</a>
            </h4>
            <p className="text-gray-600 text-center">Exploring the world of cloud solutions and their impact on businesses and individuals.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="" className="hover:text-blue-500">Cybersecurity</a>
            </h4>
            <p className="text-gray-600 text-center">Tips and techniques to stay safe online and protect your digital assets.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="" className="hover:text-blue-500">Programming Tips</a>
            </h4>
            <p className="text-gray-600 text-center">Learn efficient coding practices and stay updated with the latest in software development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
