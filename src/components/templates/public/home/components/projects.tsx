"use client";
import CardBoxContainer from "@/components/modules/CardBoxContainer";
import { terminalBar } from "@/config/base/terminalBar";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import Link from "next/link";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Skeleton } from "@heroui/skeleton";
import { siteConfig } from "@/config/site";

export default function Projects() {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <CardBoxContainer cmd={terminalBar.projects} delay="400">
      <div className="flex flex-col justify-between h-[18rem] md:h-[16.7rem] lg:h-[18rem]">
        <div className="">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className=""
          >
            {siteConfig.projects.map((p, i) => (
              <SwiperSlide className="" key={i}>
                <div className="relative w-full h-52">
                  {!loaded && (
                    <Skeleton className="">
                      <div className="h-52 bg-default-300" />
                    </Skeleton>
                  )}
                  <Image
                    width={200}
                    height={150}
                    alt={p.title}
                    src={`/images/projects/${p.img}`}
                    className={`!w-full !h-52 transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setLoaded(true)}
                  />
                  {/* <h1 className="mt-4 font-bold">{p.title}</h1> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link
          href="/projects"
          className="myBorder flex justify-center items-center gap-x-2 py-2"
        >
          Projects
          <ArrowSquareOutIcon size={16} className="text-gray-400" />
        </Link>
      </div>
    </CardBoxContainer>
  );
}
