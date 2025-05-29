"use client";
import CardBoxContainer from "@/components/modules/CardBoxContainer";
import { terminalBar } from "@/config/base/terminalBar";
import {
  GitBranchIcon,
  GitCommitIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { useHomeCtx } from "../context";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import { commands } from "@/config/base/myTerminalCommands";
import { Spinner } from "@heroui/spinner";
import { siteConfig } from "@/config/site";

export default function GihubReview() {
  const iconSize: number = 20;
  const { githubData } = useHomeCtx();

  const options = [
    {
      title: "Repos",
      content: githubData?.public_repos,
      icon: <GitBranchIcon size={iconSize} />,
    },
    {
      title: "Fallowers",
      content: githubData?.followers,
      icon: <UsersThreeIcon size={iconSize} />,
    },
    {
      title: "Follwoing",
      content: githubData?.following,
      icon: <GitCommitIcon size={iconSize} />,
    },
    // {
    //   title: "",
    //   content: "",
    //   icon: <></>,
    // },
  ];

  const welcomeMessage = (
    <div className="">
      <span className="text-green-500">$</span> git clone https://github.com/
      {siteConfig.github_Username} <br />
      remote: Enumerating objects: 1349, done. <br />
      remote: Counting objects: 100% (1349/1349), done. <br />
      remote: Compressing objects: 100% (612/612), done. <br />
      Receiving objects: 100% (1349/1349), 8.32 MiB | 5.21 MiB/s, done. <br />
      Resolving deltas: 100% (724/724), done.
      <br />
      <br />
      ## Welecome To My Portfolio ##
      <br />
      ---- Type help for show all commands ----
    </div>
  );
  return (
    <CardBoxContainer cmd={terminalBar.github} delay="0">
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-2 mb-0">
        {options.map((o, i) => (
          <div
            className="flex items-center gap-x-3 pl-3 myBorder self-stretch w-full"
            key={i}
          >
            {o.icon}
            <div className="h-14">
              <h6 className="">{o.title}</h6>
              {githubData ? (
                <h6 className="font-bold text-[1.3rem]">{o.content}</h6>
              ) : (
                <div className="leading-none">
                  <Spinner
                    variant="dots"
                    color="default"
                    className="-translate-y-3"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 h-[21.15rem]">
        <TerminalContextProvider>
          <ReactTerminal
            welcomeMessage={welcomeMessage}
            commands={commands}
            // style={{ fontSize: "14px" }}
            className="my-terminal"
            prompt="$"
            errorMessage={"Command Not Found!"}
            themes={{
              "my-theme": {
                themeBGColor: "#212529",
                themeToolbarColor: "#212529",
                themeColor: "#FFFEFC",
                themePromptColor: "oklch(62.7% 0.194 149.214)",
              },
            }}
            theme="my-theme"
          />
        </TerminalContextProvider>
      </div>
    </CardBoxContainer>
  );
}
