"use client";
import CardBoxContainer from "@/components/modules/CardBoxContainer";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { Progress } from "@heroui/progress";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { terminalBar } from "@/config/base/terminalBar";
import { siteConfig } from "@/config/site";

export default function CodeTime() {
  return (
    <CardBoxContainer cmd={terminalBar.workTime} delay="200">
      <div className="">
        <div className="flex justify-stretch flex-col gap-y-2">
          {siteConfig.codeTimeSection.codeTime.map((t, i) => (
            <div className="myBorder p-2 flex items-center gap-x-3" key={i}>
              {t.icon}
              <div className="flex justify-between w-full">
                <h6 className="">{t.title}</h6>
                <h6 className="">{t.content}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="myBorder mt-3">
          <Tabs
            aria-label="Options"
            size="sm"
            radius="none"
            color="default"
            variant="bordered"
            fullWidth
            classNames={{
              tabContent: "font-bold",
              tabList: "border border-gray-600",
            }}
          >
            {siteConfig.codeTimeSection.tabs.map((c, i) => (
              <Tab key={i} title={c.title}>
                <Card className="bg-[#0000] rounded-none">
                  <CardBody className="bg-[#0000] !p-0 h-[7.63rem]">
                    <ScrollShadow hideScrollBar>
                      {c.items.map((o, ind) => (
                        <div
                          className="text-[10px] text-white mb-2 px-1"
                          key={ind}
                        >
                          <div className="flex justify-between items-center">
                            <span className="">{o.title}</span>
                            <span className="">{o.progress}%</span>
                          </div>
                          <Progress
                            aria-label="Progress"
                            size="sm"
                            value={o.progress}
                            classNames={{
                              track: "bg-gray-600 rounded-none",
                              indicator: "bg-gray-400 rounded-none",
                            }}
                          />
                          {/* <span className="">
                        </span> */}
                        </div>
                      ))}
                    </ScrollShadow>
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </CardBoxContainer>
  );
}
