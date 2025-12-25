import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Tooltip } from "@heroui/tooltip";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const list = [
  {
    title: "Šimon",
    img: "/headshot/simon.webp",
    description: "Web Dev, PR Manager",
  },
  {
    title: "Tibor",
    img: "/headshot/tibor.webp",
    description: "Structural Engineer, Return Systems ",
  },
  {
    title: "Samuel",
    img: "/headshot/samo.webp",
    description: "Team Leader, Electronics",
  },
  {
    title: "Adam",
    img: "/headshot/adam.webp",
    description: "Radio Communications",
  },
  {
    title: "Simona",
    img: "/headshot/simona.webp",
    description: "Programming",
  },
  {
    title: "Bruno",
    img: "/headshot/bruno.webp",
    description: "Programming Engineer",
  },
];

export default function DocsPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Meet our </h1>
          <span className={title({ color: "blue" })}>Team</span>
        </div>

        <div className="gap-5 grid grid-cols-2 sm:grid-cols-3">
          {list.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              key={index}
              isPressable
              shadow="sm"
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Tooltip
                  color="primary"
                  content={item.description}
                  offset={40}
                  placement="bottom"
                >
                  <Image
                    alt={item.title}
                    className="w-full object-cover h-[13em]"
                    radius="lg"
                    shadow="md"
                    src={item.img}
                    width="100%"
                  />
                </Tooltip>
              </CardBody>
              <CardFooter className="text-small justify-center">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Divider />
        <div className="p-10">
          <span className={title()}>About </span>
          <span className={title({ color: "blue" })}>US</span>
        </div>
        <div className="w-full md:w-3/4 mx-auto">
          <Card>
            <CardHeader className="text-xl">Who are we?</CardHeader>
            <Divider />
            <CardBody>
              <p className="pb-2">
                We are a team of high school electrical engineering students,
                aged 17 to 19, proudly representing Slovakia in the 2025 edition
                of the CanSat project. With a genuine passion for science and
                technology, we are excited to embark on our second project in
                the field of space exploration.
                <br />
                <br />
                Our first project focused on designing a simple and easily
                deployable way to monitor forest fires. During the construction
                of our first ever satellite, we gained a lot of hands on
                experience with sensors, thermal cameras, 3d printing and
                structural engineering.
                <br />
                <br />
                With our first ever satellite we managed to{" "}
                <strong>
                  win the National CanSat competition in Slovakia placing 1st.
                </strong>
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="pt-10 gap-5 grid grid-cols-1 sm:grid-cols-3 md:w-3/4">
          <Tooltip
            color="danger"
            content="Detected Fire on a Map"
            offset={5}
            placement="bottom"
          >
            <Image
              alt="Detected Fire on a Map"
              src="/aboutphoto/map_fire.png"
            />
          </Tooltip>

          <Tooltip
            color="secondary"
            content="Early CanSat Concept"
            offset={5}
            placement="bottom"
          >
            <Image
              alt="Early CanSat Concept"
              src="/aboutphoto/thermal_map_concept.png"
            />
          </Tooltip>

          <Tooltip
            color="danger"
            content="Semi-Final Design"
            offset={5}
            placement="bottom"
          >
            <Image
              alt="Early CanSat Concept"
              src="/aboutphoto/design_concept.png"
            />
          </Tooltip>
        </div>
        <Divider />
        <div className="p-10">
          <span className={title({ color: "blue" })}>FAQ</span>
        </div>
        <div className="w-full md:w-3/4 mx-auto">
          <Accordion className="max-w-15" variant="shadow">
            <AccordionItem
              key="1"
              aria-label="FAQ Page 1"
              title="What is CanSat?"
            >
              <p>
                CanSats in Europe, an initiative of the European Space Agency
                (ESA) supported by local organisations, gives students a unique
                opportunity to experience a real space project. A CanSat is a
                simulation of a satellite, built to fit within the volume of a
                soft drink can, containing systems like power, sensors, and
                communication. Students design, build, and test their CanSat,
                choose a mission, and launch it from a few hundred metres using
                a rocket, balloon, or platform, aiming to complete a scientific
                experiment and achieve a safe landing.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="FAQ Page 2"
              title="What makes your CanSat different from others?"
            >
              <p>
                Our CanSat was designed with a modular and interchangeable card
                system, where all the cards are connected through a passive
                motherboard. This allows us to make fast repairs or upgrades to
                the CanSat without affecting the rest of the satellite.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="FAQ Page 3"
              title="What is the significance of your mission?"
            >
              <p>
                In our mission, we are simulating the exploration of distant
                celestial bodies. We are using a thermal camera to locate gas
                vents with elevated heat signatures and will guide our CanSat
                toward one of these places using a paraglider wing-type
                parachute. After landing, we will analyze the gases near these
                hotspots to gain insights into the geothermal activity of the
                celestial body.
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="FAQ Page 4"
              title="What challenges do you anticipate?"
            >
              <p>
                One of the main challenges we anticipate is accurately guiding
                the CanSat to the selected hotspot using the paraglider wing, as
                wind conditions and limited control authority could affect the
                landing precision.
              </p>
              <p>
                Another difficulty will be ensuring reliable thermal imaging
                from a high-speed, moving CanSat during descent, which may
                impact the identification of gas vents. Additionally, analyzing
                gases after landing poses challenges in sensor calibration,
                contamination risks, and limited time for measurements before
                the CanSat powers down. Integrating all these systems within the
                small volume and weight constraints of the CanSat also remains a
                significant technical challenge.
              </p>
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="FAQ Page 6"
              title="How can I stay updated on your progress?"
            >
              <p>
                You can follow us on Instagram or watch our progress on our
                blog.
              </p>
              <Button
                showAnchorIcon
                as={Link}
                color="secondary"
                href="https://www.instagram.com/adlerka_space/"
                variant="solid"
              >
                Instagram
              </Button>{" "}
              <Button
                showAnchorIcon
                as={Link}
                color="primary"
                href="https://adlerka.space/blog"
                variant="solid"
              >
                Blog
              </Button>
            </AccordionItem>
            <AccordionItem
              key="7"
              aria-label="FAQ Page 7"
              title="Can we support your team in any way?"
            >
              <p>
                You can support us by following us on Instagram, or
                alternatively, if you&aposre looking to sponsor us, feel free to
                contact us via email.
                <Button
                  showAnchorIcon
                  as={Link}
                  color="default"
                  href="https://adlerka.space/sponsor"
                  variant="solid"
                />
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </DefaultLayout>
  );
}
