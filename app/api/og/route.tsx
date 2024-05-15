import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then(r => r.arrayBuffer())

export async function GET(request: NextRequest) {
  try {
    const fontBold = await interBold;
    const { searchParams } = request.nextUrl;
    const title = searchParams.get("title");
    if (!title) {
      return new Response("Missing title", { status: 500 })
    }
    const heading = title.length > 140 ? `{title.substring(0, 140)}...` : title;
    return new ImageResponse((
      <div tw="flex flex-col w-full h-full justify-center bg-white">
        <div tw="bg-gray-50 flex w-full">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
              <span>S.AI Blogs</span>
              <span tw="text-indigo-600">{heading}</span>
            </h2>
          </div>
        </div>
        
        <div tw="flex flex-col px-8 mt-20 justify-between text-indigo-600">
          <a tw="mb-4">{siteConfig.links.github}</a>
          <a >https://www.saicodes.dev/</a>
        </div>
        
      </div>
    ), {
      width: 1200,
      height: 630,
      fonts: [{
        name: "Inter",
        data: fontBold,
        style: "normal",
        weight: 700
      }]
    })
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 })
  }
}