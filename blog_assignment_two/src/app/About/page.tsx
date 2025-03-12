import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faRobot, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Our Blog</h2>
          <p className="text-lg text-gray-600 mt-4">
            We are passionate about sharing the latest in technology, offering insightful tutorials, reviews, and news to keep you ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-blue-500 text-5xl mb-6">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Tech Tutorials</h4>
            <p className="text-gray-600 text-center">
              Our tutorials help beginners and pros alike. Learn the latest tools, software, and technologies through step-by-step guides.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-blue-500 text-5xl mb-6">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">AI and Robotics</h4>
            <p className="text-gray-600 text-center">
              Stay updated with the most recent advancements in artificial intelligence, robotics, and automation that are transforming the world.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-blue-500 text-5xl mb-6">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Gadget Reviews</h4>
            <p className="text-gray-600 text-center">
              Get honest, unbiased reviews of the latest gadgets, from smartphones to laptops, and everything in between.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-600 mb-4">
            We bring you curated content designed to inform, inspire, and educate. Whether you’re looking for deep dives into new technology or quick guides on using the latest tools, we have something for everyone.
          </p>
          <p className="text-lg text-gray-600">
            Our goal is to keep you at the forefront of tech innovation. Through our blog, we provide a platform for learners, professionals, and tech enthusiasts to stay updated and thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
