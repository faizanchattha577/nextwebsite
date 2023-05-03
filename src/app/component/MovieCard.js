import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard(curElem) {
  const { id, title, synopsis } = curElem.jawSummary;

  const shortSynopsis = synopsis
    .split(" ")
    .slice(0, 20)
    .join(" ")
    .concat("...");

  return (
    <main>
      <div
        key={id}
        className="max-w-sm rounded mt-2 overflow-hidden shadow-lg mx-auto "
      >
        <div className="relative h-40  ">
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt={title}
            height={40}
            width={400}
          />
        </div>
        <div className="px-6 py-4 ">
          <div className="font-bold mt-5 text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{shortSynopsis}</p>

          <Link legacyBehavior href={`/movie/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
