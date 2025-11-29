import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "../constants/index";

type PillProps = {
label: string;
onClick?: () => void;
active?: boolean;
};

const filters = [
"Top Villa",
"Self Checkin",
"Free Reschedule",
"Countryside Homes",
"Beachfront",
"City View",
"Luxury Suites",
];

const filterLabels = [
"Top Villa",
"Self Checkin",
"Free Reschedule",
"Countryside Homes",
"Beachfront",
"City View",
"Luxury Suites",
];

export default function HomePage() {
  return (
    <div>
      <section className="relative w-full h-[90vh] flex items-center justify-center text-white">
      <Image
        src="/public/assets/house.png"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl font-light">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
      </section>
      <section className="w-full py-6 px-4 bg-white">
<div className="max-w-6xl mx-auto flex items-center gap-4 overflow-x-auto pb-2">
{filters.map((filter) => (
<span
key={filter}
className="px-4 py-2 bg-gray-100 border rounded-full text-sm font-medium cursor-pointer whitespace-nowrap hover:bg-blue-600 hover:text-white transition"
>
{filter}
</span>
))}
</div>
</section>

    </div>
  );
};

export function Pill({ label, onClick, active }: PillProps) {
return (
<button
onClick={onClick}
className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition cursor-pointer
${active ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white"}`}
>
{label}
</button>
);
};

export function PillFilterSection() {
return (
<section className="w-full py-6 px-4 bg-white">
<div className="max-w-6xl mx-auto flex items-center gap-4 overflow-x-auto pb-2">
{filterLabels.map((label) => (
<Pill key={label} label={label} />
))}
</div>
</section>
);
};

export function ListingSection() {
  return (
    <section className="w-full py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden border hover:shadow-lg transition cursor-pointer"
          >
            {/* Property Image */}
            <div className="relative w-full h-56">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{property.name}</h3>

              <div className="flex items-center justify-between">
                <p className="text-blue-600 font-bold text-lg">${property.price}</p>
                <p className="text-sm text-gray-600">⭐ {property.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

