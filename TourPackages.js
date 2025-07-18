
import React, { useState } from "react";

const packagesData = [
  {
    id: 1,
    city: "Pune",
    name: "Heritage Express",
    duration: "2 Days / 1 Night",
    places: ["Mahalaxmi Temple", "Rankala Lake", "Panhala Fort"],
    price: "₹2,999",
  },
  {
    id: 2,
    city: "Mumbai",
    name: "Cultural Explorer",
    duration: "3 Days / 2 Nights",
    places: ["Mahalaxmi", "Jyotiba", "Panhala", "Rankala"],
    price: "₹4,999",
  },
  {
    id: 3,
    city: "Sangli",
    name: "Day Tour Delight",
    duration: "1 Day",
    places: ["Mahalaxmi", "Misal Darshan", "Shalini Palace"],
    price: "₹1,499",
  },
  {
    id: 4,
    city: "Satara",
    name: "Weekend Escape",
    duration: "2 Days / 1 Night",
    places: ["Mahalaxmi Temple", "Food Walk", "Rankala"],
    price: "₹2,800",
  },
];

function TourPackages() {
  const [selectedCity, setSelectedCity] = useState("");

  const filteredPackages = selectedCity
    ? packagesData.filter((pkg) => pkg.city === selectedCity)
    : packagesData;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Select Departure City:
        </label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Cities</option>
          {[...new Set(packagesData.map((pkg) => pkg.city))].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-xl font-semibold text-red-600">{pkg.name}</h2>
            <p className="text-gray-700">{pkg.duration}</p>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
              {pkg.places.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
            <p className="mt-2 font-bold text-green-700">{pkg.price}</p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Book Now on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourPackages;
