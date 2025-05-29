import CardBoxContainer from "@/components/modules/CardBoxContainer";
import { terminalBar } from "@/config/base/terminalBar";
import Image from "next/image";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { siteConfig } from "@/config/site";

export default function TechStacks() {
  return (
    <CardBoxContainer cmd={terminalBar.techStacks} delay="0">
      <ScrollShadow hideScrollBar className="h-[18rem] overflow-y-auto">
        {siteConfig.stacks.map((s, i) => (
          <div
            className="p-1 myBorder mb-2 flex items-center justify-between"
            key={i}
          >
            <div className="flex items-center gap-x-3">
              <Image
                width={30}
                height={30}
                alt={s.title}
                src={s.icon}
                className="rounded-full"
              />
              <h6 className="text-[0.9rem]">{s.title}</h6>
            </div>
            <p className="text-[0.65rem] border border-gray-500 bg-white-100 p-1 w-20 text-center hidde">
              {s.level}
            </p>
          </div>
        ))}
      </ScrollShadow>
    </CardBoxContainer>
  );
}
