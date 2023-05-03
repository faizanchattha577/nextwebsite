import React from "react";
import MovieCard from "../component/MovieCard";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a870ba4014mshf00a31472f898f0p163027jsn43eacf3a566d",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
    url: url,
  };

  const res = await fetch(url, options);
  const data = await res.json();

  const main_data = data.titles;

  console.log(main_data);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {main_data.map((curElem) => {
          return <MovieCard key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default Movie;
