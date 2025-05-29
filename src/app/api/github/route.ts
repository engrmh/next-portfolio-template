import { siteConfig } from "@/config/site";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const githubPublicData = await fetch(
      `https://api.github.com/users/${siteConfig.github_Username}`
    );
    if (!githubPublicData.ok) throw new Error("GitHub fetch failed");
    const data = await githubPublicData.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Server Error For Get Data From Github" },
      { status: 500 }
    );
  }
}
