import Hero from "@/components/shared/Hero";
import Team from "@/components/shared/Team";
import VideoSection from "@/components/shared/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <VideoSection />
      <Team />
    </main>
  );
}
