import React from "react";

export default function LargerMovieCard() {
  return (
    <div className="flex flex-col container cardWidth shadow p-6 items-center hover:shadow-lg">
      <div className="flex flex-row items-center">
        <div className="flex flex-col mr-10">
          <h1 className="text-2xl font-bold mb-2">
            The Lion King 2: Simba's Pride
          </h1>
          <h2 className="text-sm text-gray-800">1998</h2>
          <h3 className="text-sm text-gray-600">
            Director: Darrell Rooney, Rob LaDuca(co-director)
          </h3>
        </div>
        <div className="flex flex-col">
          <img
            className="w-24 h-22 shadow"
            src="https://m.media-amazon.com/images/M/MV5BY2Y3MTk2MDgtOTc1Yy00ZmFjLThlNTEtMDQ1Y2EzZmRjMzVjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
          />
        </div>
      </div>

      <div className="flex flex-row mt-4 w-full">
        <div className="flex flex-col flex-1">
          <h1 className="text-blue-500 text-center">Internet Movie Database</h1>
          <h1 className="text-center">6.5/10</h1>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-blue-500 text-center">Internet Movie Database</h1>
          <h1 className="text-center">6.5/10</h1>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-blue-500 text-center">Internet Movie Database</h1>
          <h1 className="text-center">6.5/10</h1>
        </div>
      </div>

      <div className="flex flex-col mt-4 w-full">
        <h1 className="font-bold">Movie Introduction</h1>
        <h1 className="text-gray-700 mt-2">
          Simba's daughter is the key to a resolution of a bitter feud between
          Simba's pride and the outcast pride led by the mate of Scar.
        </h1>
        <h1 className="font-bold mt-2">Actors</h1>
        <h1 className="text-gray-700 mt-2">
          Matthew Broderick, Neve Campbell, Andy Dick, Robert Guillaume
        </h1>
        <h1 className="font-bold mt-2">Awards</h1>
        <h1 className="text-gray-700 mt-2">3 wins & 3 nominations.</h1>
      </div>
    </div>
  );
}
