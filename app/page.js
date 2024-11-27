"use client";

import Image from "next/image";
import { useState } from "react";

const travelCardDesigns = [
  {
    title: "Eiffel Tower Adventure",
    description: "Experience the iconic symbol of Paris",
    image: "https://placehold.co/400x200",
    date: "June 15, 2023",
    country: "France",
  },
  {
    title: "Tokyo Nights",
    description: "Explore the vibrant nightlife of Tokyo",
    image: "https://placehold.co/300",
    date: "July 22, 2023",
    country: "Japan",
  },
  {
    title: "Santorini Sunset",
    description: "Watch the sun dip into the Aegean Sea",
    image: "https://placehold.co/600x400",
    date: "August 5, 2023",
    country: "Greece",
  },
  {
    title: "New York City Lights",
    description: "Experience the city that never sleeps",
    image: "https://placehold.co/400x200",
    date: "September 10, 2023",
    country: "USA",
  },
  {
    title: "Machu Picchu Trek",
    description: "Discover the ancient Incan citadel",
    image: "https://placehold.co/80",
    date: "October 3, 2023",
    country: "Peru",
  },
  {
    title: "African Safari Adventure",
    description: "Witness the majesty of African wildlife",
    image: "https://placehold.co/600x400",
    date: "November 15, 2023",
    country: "Kenya",
  },
  {
    title: "Northern Lights Spectacle",
    description: "Chase the aurora in the Arctic Circle",
    image: "https://placehold.co/400x200",
    date: "December 21, 2023",
    country: "Iceland",
  },
  {
    title: "Venice Canals",
    description: "Glide through the historic waterways of Venice",
    image: "https://placehold.co/400x200",
    date: "February 14, 2024",
    country: "Italy",
  },
  {
    title: "Sydney Harbour Cruise",
    description: "Sail around the iconic Sydney Harbour",
    image: "https://placehold.co/100",
    date: "January 26, 2024",
    country: "Australia",
  },
  {
    title: "Rio Carnival Extravaganza",
    description: "Experience the world's biggest party",
    image: "https://placehold.co/400x300",
    date: "February 22, 2024",
    country: "Brazil",
  },
];

export default function TravelCardShowcase() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        isDarkMode
          ? "bg-[#1A2C32] text-[#F2F5F0]"
          : "bg-[#F2F5F0] text-[#1A2C32]"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="mb-8 px-4 py-2 bg-[#438E95] text-[#F2F5F0] rounded-lg hover:bg-[#5FAAB1] transition duration-300"
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <h1 className="text-4xl font-bold mb-8 text-center">
        Travel App Card Designs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelCardDesigns.map((card, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-lg ${
              isDarkMode ? "bg-[#325158]" : "bg-white"
            }`}
          >
            {index === 0 && (
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C32] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-[#F2F5F0] text-xl font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="text-[#D0EEF0]">{card.description}</p>
                </div>
              </div>
            )}
            {index === 1 && (
              <div className="flex flex-col md:flex-row">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="w-full md:w-1/2 h-48 md:h-auto object-cover"
                />
                <div className="p-4 md:w-1/2">
                  <h2 className="text-xl font-bold mb-2 text-[#438E95]">
                    {card.title}
                  </h2>
                  <p
                    className={`${
                      isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            )}
            {index === 2 && (
              <div className="relative h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C32] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-[#F2F5F0] text-xl font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="text-[#D0EEF0]">{card.description}</p>
                </div>
              </div>
            )}
            {index === 3 && (
              <>
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-[#438E95] text-[#F2F5F0] text-xs font-bold px-2 py-1 rounded">
                    Popular
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-[#438E95]">
                    {card.title}
                  </h2>
                  <p
                    className={`${
                      isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </>
            )}
            {index === 4 && (
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-[#438E95]">
                  {card.title}
                </h2>
                <p
                  className={`${
                    isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                  } mb-4`}
                >
                  {card.description}
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                      }`}
                    >
                      {card.date}
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                      }`}
                    >
                      {card.country}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {index === 5 && (
              <div className="relative h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A2C32] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-[#F2F5F0] text-xl font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="text-[#D0EEF0]">{card.description}</p>
                </div>
              </div>
            )}
            {index === 6 && (
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-[#438E95]">
                  {card.title}
                </h2>
                <p
                  className={`${
                    isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                  } mb-4`}
                >
                  {card.description}
                </p>
                <div className="relative h-48 mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={200}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-16 h-16 text-[#F2F5F0] opacity-75"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            {index === 7 && (
              <>
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1A2C32] opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-[#438E95] text-[#F2F5F0] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                      Romantic Getaway
                    </span>
                    <h2 className="text-[#F2F5F0] text-xl font-bold">
                      {card.title}
                    </h2>
                  </div>
                </div>
                <div className="p-4">
                  <p
                    className={`${
                      isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </>
            )}
            {index === 8 && (
              <>
                <div className="grid grid-cols-3 gap-2 p-2">
                  <Image
                    src={card.image}
                    alt={`${card.title} 1`}
                    width={100}
                    height={100}
                    className="w-full h-24 object-cover rounded"
                  />
                  <Image
                    src={card.image}
                    alt={`${card.title} 2`}
                    width={100}
                    height={100}
                    className="w-full h-24 object-cover rounded"
                  />
                  <Image
                    src={card.image}
                    alt={`${card.title} 3`}
                    width={100}
                    height={100}
                    className="w-full h-24 object-cover rounded"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-[#438E95]">
                    {card.title}
                  </h2>
                  <p
                    className={`${
                      isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </>
            )}
            {index === 9 && (
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C32] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h2 className="text-[#F2F5F0] text-xl font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="text-[#D0EEF0]">{card.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-sm text-[#D0EEF0]">{card.date}</p>
                      <p className="text-sm text-[#D0EEF0]">{card.country}</p>
                    </div>
                    <button className="px-4 py-2 bg-[#438E95] text-[#F2F5F0] rounded hover:bg-[#5FAAB1] transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )}
            {index !== 9 && (
              <div className="p-4">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                  }`}
                >
                  Date: {card.date}
                </p>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-[#D0EEF0]" : "text-[#325158]"
                  }`}
                >
                  Country: {card.country}
                </p>
                <button className="mt-4 w-full px-4 py-2 bg-[#438E95] text-[#F2F5F0] rounded hover:bg-[#5FAAB1] transition duration-300">
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
