import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FcBriefcase } from 'react-icons/fc';
import { TfiWorld } from 'react-icons/tfi';
import { FaMusic } from 'react-icons/fa';
import { PiFilmSlateBold } from 'react-icons/pi';

const HoldingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-100">
        <div className="flex flex-col items-center justify-center p-4 sm:p-8">
          <img
            src="/assets/images/Logo-TM.png"
            alt="Juza Logo"
            className="w-20 h-20 sm:w-40 sm:h-40"
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row p-4 sm:p-8">
          <div className="w-full sm:w-1/2 pl-4">
            <h2 className="text-2xl sm:text-3xl text-cyan-400 font-bold mb-2 sm:mb-4">
              Welcome to J-uza
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              Where Community Matters and Businesses Thrive! Connect, Trade, and
              Discover Exciting Opportunities
            </h3>
            <p className="text-black">
              With community trade at heart, J-uza not only enables you to post
              ads and connect with customers, but also enables and activates
              business sustenance and growth within its various ecosystems.
            </p>
          </div>
          <div className="w-full sm:w-1/2 pr-0 sm:pr-4 mt-4 sm:mt-0">
            <img
              src="/assets/images/Under-construction.png"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-lg text-center text-cyan-400 font-bold mb-4 ">
        Key Features
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <FcBriefcase />
          <h2 className="text-base sm:text-lg font-semibold">
            J-uza Classified
          </h2>
          <p className="text-sm sm:text-base text-black mt-2">
            Discover a wide range of products and services posted by individuals
            and businesses near you. Find what you need with ease.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <TfiWorld />
          <h2 className="text-base sm:text-lg font-semibold">
            J-uza Community
          </h2>
          <p className="text-sm sm:text-base text-black mt-2">
            Join diverse communities centred around business, entrepreneurship
            and innovation. Connect with like-minded individuals, industry
            experts, and potential partners.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <FaMusic />
          <h2 className="text-base sm:text-lg font-semibold">J-uza Tunes</h2>
          <p className="text-sm sm:text-base text-black mt-2">
            Explore a diverse catalog of tracks, spanning various genres and
            languages. Engage with musicians, singers, and producers from across
            the continent.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <PiFilmSlateBold />
          <h2 className="text-base sm:text-lg font-semibold">J-uza Film</h2>
          <p className="text-sm sm:text-base text-black mt-2">
            Immerse yourself in a diverse collection of films, within a myriad
            of genres and narratives. Share your short films, documentaries, and
            creative projects with a global audience.
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-cyan-400 font-bold mb-4">
        Sustainable Development Goals
      </p>

      <footer>
        <div className="flex justify-center items-center mt-8">
          <div className="mr-4">
            <img
              src="/assets/images/ATL-Logo.png"
              alt="Footer Logo 1"
              className="w-16 h-16"
            />
          </div>
          <div>
            <img
              src="/assets/images/SDG-17.png"
              alt="Footer Logo 2"
              className="w-16 h-16"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 space-y-4 md:space-y-0 md:flex-row md:justify-center md:items-center md:space-x-8">
          <div className="flex items-center text-cyan-400">
            <FiMail className="mr-2" />
            <p className="text-sm md:text-base">Info@J-uza.com</p>
          </div>
          <div className="flex items-center text-cyan-400">
            <FiPhone className="mr-2" />
            <p className="text-sm md:text-base">0113929769</p>
          </div>
          <div className="flex items-center text-cyan-400">
            <FiMapPin className="mr-2" />
            <p className="text-sm md:text-base">
              p.o.box 21474-00505, nairobi, Kenya
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="font-bold ">
            &copy; {new Date().getFullYear()} App Town Technologies Ltd
          </p>
        </div>
      </footer>
    </section>
  );
};

export default HoldingPage;
