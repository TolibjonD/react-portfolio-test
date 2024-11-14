import { NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";
import fetch from "node-fetch";

export async function GET(request: Request) {
  // Get IP address from headers
  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";

  // Check if the IP is localhost, and mock data for testing if so
  if (ip === "127.0.0.1" || ip.startsWith("::ffff:127.0.0.1")) {
    return NextResponse.json({
      ip,
      userAgent: request.headers.get("user-agent"),
      deviceInfo: {
        device: { type: "Desktop", model: "Unknown" },
        os: { name: "Linux", version: "x86_64" },
        browser: { name: "Firefox", version: "132.0" },
        cpu: { architecture: "amd64" },
      },
      geolocation: {
        country: "Unknown",
        region: "Unknown",
        city: "Unknown",
        isp: "Unknown",
        lat: "Unknown",
        lon: "Unknown",
      },
    });
  }

  // Get device information from the User-Agent header
  const userAgent = request.headers.get("user-agent");
  const parser = new UAParser(userAgent);
  const deviceInfo = parser.getResult();

  // Fetch geolocation data based on IP address (excluding localhost case)
  const geolocation = await fetch(
    `http://ip-api.com/json/${ip}?fields=country,region,city,isp,lat,lon`
  )
    .then((res) => res.json())
    .catch(() => ({
      country: "Unknown",
      region: "Unknown",
      city: "Unknown",
      isp: "Unknown",
      lat: "Unknown",
      lon: "Unknown",
    }));

  return NextResponse.json({
    ip,
    userAgent,
    deviceInfo,
    geolocation,
  });
}
