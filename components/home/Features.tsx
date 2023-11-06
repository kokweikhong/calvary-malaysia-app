import Image from "next/image";

import featureInterior from "@/public/images/feature_interior.png";
import featureExterior from "@/public/images/feature_exterior.png";
import featureMaintenance from "@/public/images/feature_maintenance.png";
import { StaticImageData } from "next/image";

type Feature = {
  name: string;
  description: string;
  image: {
    src: StaticImageData | string;
    alt: string;
    width?: number;
    height?: number;
  };
};

const features: Feature[] = [
  {
    name: "Interior",
    description:
      "Discover the Perfect Interior Piece: Explore a Range of Timbers, Colors, and Patterns at Kandinsky®",
    image: {
      src: featureInterior,
      alt: "Interior",
    },
  },
  {
    name: "Exterior",
    description:
      "Elevate Your Outdoor Projects with Premium Sustainable Materials: Accoya® and Bamboo, Trusted Choices of Architects and Landscapers",
    image: {
      src: featureExterior,
      alt: "Exterior",
    },
  },
  {
    name: "Maintenance",
    description:
      "Revitalize Your Timber: From Treatments to Restoration. Connect with Our Specialists for Lasting Transformation. Discover Silverwood®",
    image: {
      src: featureMaintenance,
      alt: "Maintenance",
    },
  },
];

export default function Features() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((feature) => (
        <li
          key={feature.name}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Image
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={feature.image.src}
              alt={feature.image.alt}
              width={128}
              height={128}
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {feature.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{feature.description}</dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
