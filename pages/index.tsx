import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center ">
          <span className={title()}>Adlerka Space Program</span>
          <span className={subtitle({})}>
            “The only limit to our realization of tomorrow will be our doubts of
            today.”
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <Card className="">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={80}
                radius="sm"
                src="/coloradl.svg"
                width={80}
              />
              <div className="flex flex-col">
                <p className="text-xl font-bold">Who are we?</p>
                <p className="text-small text-default-500">adlerka.sk</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="text-xl">
              <p>
                We are a team of talented and ambitious high school students
                from Adlerka electrical engineering school, representing
                Slovakia in the European Space Agency’s CanSat project.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="/about" target="_self">
                Learn more About Us.
              </Link>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={80}
                radius="sm"
                src="/canasthehe.svg"
                width={80}
              />
              <div className="flex flex-col">
                <p className="text-xl font-bold">About CanSat</p>
                <p className="text-small text-default-500">
                  spaceoffice.sk/cansat
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="text-xl">
              <p>
                The CanSat project is an educational competition that combines
                the fields of aerospace engineering and technology. It involves
                designing and building a small satellite, no larger than a soda
                can, which is then launched into the atmosphere to collect data
                and perform various tasks.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://cansat.esa.int/about-cansat/cansat-project/"
                target="_self"
              >
                Learn more about CanSat.
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Card className="">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={80}
                radius="sm"
                src="/trophy.png"
                width={80}
              />
              <div className="flex flex-col">
                <p className="text-xl font-bold">Our Achievements</p>
                <p className="text-small text-default-500">
                  1st place in Cansat Slovakia 2024
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="text-xl">
              <p className="pt-5">
                Our student engineering team achieved first place at the 2024
                CanSat Competition, trough our shared knowledge we designed and
                build a satellite capable of detecting and reporting forest
                fires from the troposphere.
              </p>
              <p className="pt-5">
                Partner with us in our next innovative space project and
                showcase your company&apos;s commitment to fostering young
                talent in aerospace engineering.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link showAnchorIcon href="/sponsor" target="_self">
                Sponsor our next Achievement
              </Link>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                What We Do
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/whatwedo.png"
            />
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
