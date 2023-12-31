import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FcBriefcase } from 'react-icons/fc';
import { TfiWorld } from 'react-icons/tfi';
import { FaMusic } from 'react-icons/fa';
import { PiFilmSlateBold } from 'react-icons/pi';

const test1 = () => {
  return (
    <div className="bg-scroll bg-no-repeat bg-my_bg_image h-[972px]">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 p-4 ml-4 float-right italic">
          <img
            src="/assets/images/Under-construction.png"
            alt="Image"
            className="w-50 h-80"
          />
        </div>
        <div className="sm:w-2/3">
          <div className="flex justify-center items-center mt-8">
            <div className="mr-4">
              <img
                src="/assets/images/Logo-TM.png"
                alt="Juza Logo"
                className="w-36 h-35 py-0 sm:w-42 sm:h-42"
              />
            </div>
          </div>
          <div className="max-w-md mx-auto sm:w-2/3 lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl sm:text-4xl text-center text-cyan-400 font-bold mb-4 sm:mb-6">
              Welcome to J-uza
            </h2>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
              Where Community Matters and Businesses Thrive! Connect, Trade, and
              Discover Exciting Opportunities
            </h3>
            <p className="text-black text-center leading-relaxed">
              With community trade at heart, J-uza not only enables you to post
              ads and connect with customers, but also enables and activates
              business sustenance and growth within its various ecosystems.
            </p>
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
        <div className="flex flex-col justify-center items-center mt-8 space-y-6 md:space-y-0 md:flex-row md:justify-center md:items-center md:space-x-8">
          <a
            href="mailto:Info@J-uza.com"
            className="flex items-center text-cyan-400"
          >
            <FiMail className="mr-2" />
            <p className="text-sm md:text-base">Info@J-uza.com</p>
          </a>
          <a href="tel:0113929769" className="flex items-center text-cyan-400">
            <FiPhone className="mr-2" />
            <p className="text-sm md:text-base">0113929769</p>
          </a>
          <div className="flex items-center text-cyan-400">
            <FiMapPin className="mr-2" />
            <p className="text-sm md:text-base">
              p.o.box 21474-00505, nairobi, Kenya
            </p>
          </div>
        </div>

        <div className="text-center mt-6 md:mt-8 pb-4">
          <p className="font-bold">
            &copy; {new Date().getFullYear()} App Town Technologies Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default test1;
