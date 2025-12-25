import { Image } from "@heroui/image";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center">
          <h1 className={title({ color: "cyan" })}>Blog</h1>
        </div>

        <div className="grid gap-6 max-w-2xl w-full px-4">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <p className="text-base leading-relaxed text-center">
              This year, we are shooting for the stars! Our team is thrilled to
              introduce this year’s CanSat mission, where we are building a
              probe designed for space exploration. Inspired by NASA’s Dragonfly
              vehicle, which is set to explore Saturn&aposs moon Titan, our
              mission simulates the exploration of distant celestial bodies. We
              aim to gather valuable data to better understand geothermal
              activity on other planets and moons, just as Dragonfly is set to
              do on Titan.
            </p>
          </div>
          <Image
            className="object-cover"
            radius="lg"
            src="/aboutphoto/cansat_2025.png"
            width="100%"
          />
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <p className="text-base leading-relaxed text-center">
              At the heart of our mission is the use of a thermal camera to
              detect elevated heat signatures from gas vents on celestial
              bodies. By guiding our CanSat toward these hotspots, we hope to
              capture important data that can help us understand geothermal
              processes on distant worlds.
            </p>
          </div>
          <Image
            className="object-cover"
            radius="lg"
            src="/aboutphoto/cansat_doska.png"
            width="100%"
          />
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <p className="text-base leading-relaxed text-center">
              Our CanSat features a modular design with an interchangeable card
              system, which makes it easy to upgrade or replace individual
              components. This flexibility is key to ensuring our CanSat can
              adapt to any challenge during the mission. We’re also using a
              paraglider wing-type parachute to ensure a smooth, controlled
              descent and accurate landing near the target site.
            </p>
          </div>
          <Image
            className="object-cover"
            radius="lg"
            src="/aboutphoto/cansat_thermal.png"
            width="100%"
          />
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <p className="text-base leading-relaxed text-center">
              As we continue to develop our probe, we invite you to follow our
              journey on Instagram and track our progress through our blog. We
              can’t wait to share our adventure and discoveries with you as we
              reach for the stars!
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
