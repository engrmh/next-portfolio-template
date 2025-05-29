import CardBoxContainer from "@/components/modules/CardBoxContainer";
import Image from "next/image";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { terminalBar } from "@/config/base/terminalBar";
import { siteConfig } from "@/config/site";

export default function Features() {
  return (
    <CardBoxContainer cmd={terminalBar.features} delay="100">
      <div className="grid grid-cols-2 grid-rows-1 gap-2">
        {siteConfig.features.map((f, i) => (
          <div className="myBorder" key={i}>
            <Image
              height={300}
              width={400}
              src={`/images/features/${f.image}`}
              alt={f.title}
              className="h-44 md:h-52 w-full"
            />
            <h2 className="my-3 overflow-hidden whitespace-nowrap text-ellipsis w-full px-2">
              {f.title}
            </h2>
            <div className="px-2 mb-2 flex justify-end">
              <AvatarGroup max={f.stacks.length}>
                {f.stacks.map((s, i) => (
                  <Avatar
                    key={i}
                    src={s}
                    classNames={{
                      base: "h-8 w-8 border border-gray-500",
                    }}
                  />
                ))}
              </AvatarGroup>
              {}
            </div>
          </div>
        ))}
      </div>
    </CardBoxContainer>
  );
}
