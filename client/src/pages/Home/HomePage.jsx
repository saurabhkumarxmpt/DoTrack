import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        {/* App Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Do<span className="text-indigo-600">Track</span>
        </h1>

        {/* Slogan */}
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          “Capture your thoughts. Organize your ideas. Boost your productivity.”
        </p>

        {/* About / Website Detail */}
        <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
          DoTrack is a simple and powerful note-taking web app where you can 
          quickly write, edit, and organize your daily notes. Whether you’re 
          brainstorming ideas, tracking tasks, or saving reminders — 
          DoTrack keeps everything safe and accessible from anywhere.
        </p>

        {/* Button */}
        <Link className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition" to='/signup'>
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
