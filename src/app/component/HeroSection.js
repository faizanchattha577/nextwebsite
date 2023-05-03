import React from "react";

export default function HeroSection() {
  return (
    <main className="flex  flex-col lg:flex-row lg:mt-[-8rem] sm:mt-4 items-center justify-center h-screen">
      <div className="max-w-md mx-auto md:m-auto">
        <h1 className="text-4xl mt-6 lg:mt-0 md:text-4xl font-bold text-gray-900">
          Hi, I'm <span className="text-indigo-600">Movie</span> Website
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          After you’ve finished writing your latest Hollywood smash and put your
          pen down (or shut your computer), you might think your work’s done.
          But there’s one thing left to do: write a film synopsis.
        </p>
        <button className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Explore More
        </button>
      </div>
      <div className="flex  justify-center md:justify-end lg:[] w-[full] max-w-3xl">
        <img
          src="https://media.istockphoto.com/id/1162040662/vector/vector-superhero-silhouette-with-sunburst-effect-background.jpg?s=612x612&w=0&k=20&c=NyvKS97BiIyoZ4Z75Sd7Iptc9BTckQQNep91MGhuRmo="
          alt="Movie Website"
          className="w-full md:w-[40rem] mr-5 h-[25em]"
        />
      </div>
    </main>
  );
}
