import React from 'react'
import Image from "next/image";

const Page = async ({params}) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang-en`;
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

  const main_data = data[0].details;
  return (
    <div>
         <div
        key={id}
        className="max-w-sm rounded mt-2 shadow-lg mx-auto "
      >
        <div className="relative h-40  ">
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            height={40}
            width={400}
          />
        </div>
        <div className="px-6 py-4 ">

          <div className="font-bold mt-[5rem] text-xl mb-2">{main_data.title}</div>
          <div className=" text-red-300 text-sm mb-2">{main_data.type}</div>
          <p className="text-gray-700 text-base">{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default Page;
