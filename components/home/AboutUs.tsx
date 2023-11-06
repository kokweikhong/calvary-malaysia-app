import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const services = [
  "Flooring, decking, cladding, soffit.",
  "Stairs, rails, trellis, screens.",
  "Residential, commercial, government.",
];

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto mb-4 border-y-2 border-black py-1">
        <h2 className="uppercase">About Us</h2>
      </div>

      <div className="mb-4 space-y-4">
        <p>
          Avant-Garde woodworkers and visionaries forged from humble beginnings,
          Calvary is the timber expert for the next generation of property
          owners.
        </p>
        <p>
          Elevate spaces with premium timber flooring, exquisite ceilings, and
          innovative stairs. Unite beauty and function in every step.
        </p>
      </div>

      <div>
        <ul>
          {services.map((service) => (
            <li className="flex items-center text-[#805C00]">
              <ArrowLongRightIcon className="h-4 w-4" />
              <span className="ml-4">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
