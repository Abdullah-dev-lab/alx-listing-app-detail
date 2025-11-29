import { PropertyProps, Review, Amenity, Host } from "@/interfaces/index";


export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
      description: "Luxurious beachfront villa with stunning ocean views and modern amenities. Perfect for families and groups looking for a premium vacation experience." 
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
      description: "Cozy mountain retreat with panoramic views and rustic charm. Ideal for nature lovers and adventure seekers."
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image2.jpg",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
      description: "Beautiful desert oasis with modern comforts and stunning landscape views. Perfect for a peaceful getaway."
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image3.jpg",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
      description: "Luxurious penthouse in the heart of the city with breathtaking skyline views and premium amenities."
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image4.jpg",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
      description: "Charming riverside cabin with rustic decor and modern amenities. Perfect for fishing enthusiasts and nature lovers."
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "https://example.com/image5.jpg",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
      description: "Sleek and modern villa located right on the beach, offering stunning sea views and luxurious amenities for a perfect vacation."
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://example.com/image6.jpg",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
      description: "Rustic lakeside chalet with breathtaking mountain views and direct access to hiking trails. Ideal for outdoor enthusiasts."
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image7.jpg",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
      description: "Beautiful villa surrounded by lush tropical gardens, offering a serene and private retreat with modern comforts."
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "https://example.com/image8.jpg",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
      description: "Chic urban loft located in the heart of the city, featuring modern design and easy access to cultural attractions and nightlife."
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image9.jpg",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
      description: "Peaceful forest cabin nestled among towering trees, offering a tranquil escape with modern amenities and outdoor activities."
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image10.jpg",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
      description: "Stunning cliffside villa with panoramic sea views, infinity pool, and luxurious amenities. Perfect for a romantic getaway or special occasion."
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image11.jpg",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
      description: "Spacious coastal villa with direct beach access, modern design, and family-friendly amenities. Ideal for a relaxing seaside vacation."
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image12.jpg",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
      description: "Charming historical villa with classic architecture, modern amenities, and beautiful gardens. Perfect for history buffs and culture enthusiasts."
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image13.jpg",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
      description: "Modern downtown apartment located in the heart of Tokyo, offering easy access to shopping, dining, and cultural attractions."
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "https://example.com/image14.jpg",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
      description: "Exclusive safari lodge offering luxurious accommodations, guided tours, and breathtaking views of the African wilderness."
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image15.jpg",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
      description: "Quaint countryside cottage surrounded by rolling hills and picturesque landscapes. Ideal for a peaceful retreat from city life."
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://example.com/image16.jpg",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
      description: "Opulent riverfront mansion with expansive gardens, private dock, and luxurious amenities. Perfect for large gatherings and special events."
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://example.com/image17.jpg",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
      description: "Charming ski chalet located near popular slopes, featuring cozy interiors and stunning mountain views. Ideal for winter sports enthusiasts."
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image18.jpg",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
      description: "Exclusive island villa offering private beach access, stunning ocean views, and luxurious amenities for an unforgettable tropical getaway."
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://example.com/image19.jpg",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
      description: "Breathtaking clifftop retreat with panoramic ocean views, modern design, and luxurious amenities. Perfect for a romantic escape or special occasion."
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: ""
  }
];