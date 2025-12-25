import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import { HeartFilledIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const list = [
  {
    title: "Sensoneo",
    img: "/sponsors/sensoneo.png",
    link: "https://www.sensoneo.com",
  },
  {
    title: "Needronix",
    img: "/sponsors/needronix.jpg",
    link: "https://www.needronix.com",
  },
  {
    title: "ZF",
    img: "/sponsors/zf.png",
    link: "https://www.zf.com",
  },
];

export default function SponsorPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "cyan" })}>SPONSOR &nbsp;</span>
          <span className={title({ color: "blue" })}>US&nbsp;</span>
          <HeartFilledIcon className={"text-danger size-16 mx-auto"} />
        </div>
        <Card>
          <CardHeader className="flex gap-3 font-bold text-xl">
            <p>Your support means a lot to us.</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-center">
            <p>
              If you are interested in collaborating, providing resources, or
              offering any form of assistance,
            </p>
            <p>please reach out to us via the links below.</p>
          </CardBody>
          <CardFooter className="justify-center flex flex-col md:flex-row gap-4">
            <Button
              showAnchorIcon
              as={Link}
              color="primary"
              href="mailto:team@adlerka.space"
              variant="solid"
            >
              Email
            </Button>
            <Button
              showAnchorIcon
              as={Link}
              color="secondary"
              href="https://www.instagram.com/adlerka_space/"
              variant="solid"
            >
              Instagram
            </Button>
            <Button
              showAnchorIcon
              as={Link}
              color="default"
              href="https://discordapp.com/users/404304818178621440"
              variant="solid"
            >
              Discord
            </Button>
          </CardFooter>
        </Card>
        <Divider />
        <span className={title({ className: "pt-8" })}>Our Sponsors</span>
        <Card className="flex flex-col items-center justify-center max-w-xl mx-auto">
          <Link href="https://www.nadaciatatrabanky.sk/">
            <Image className="" src="/sponsors/tatrabanka.jpg" />
          </Link>
          <CardFooter className="text-center justify-center">
            <b>Nadácia Tatrabanky</b>
          </CardFooter>
        </Card>
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-3 pt-10">
          {list.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              key={index}
              isPressable
              shadow="sm"
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Link href={item.link}>
                  <Image
                    alt={item.title}
                    className="w-full object-cover h-[13em]"
                    radius="lg"
                    shadow="sm"
                    src={item.img}
                    width="100%"
                  />
                </Link>
              </CardBody>
              <CardFooter className="text-small justify-center">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
