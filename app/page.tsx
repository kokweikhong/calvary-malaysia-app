import Image from "next/image";
import Features from "@/components/home/Features";
import AboutUs from "@/components/home/AboutUs";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1>My App</h1>
      <div className="my-4">
        <Features />
      </div>
      <AboutUs />
    </main>
  );
}
