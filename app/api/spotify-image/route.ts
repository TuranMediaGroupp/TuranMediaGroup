import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new NextResponse("URL tələb olunur", { status: 400 });
  }

  try {
    const response = await fetch(url);
    const blob = await response.blob();

    return new NextResponse(blob, {
      headers: {
        "Content-Type": response.headers.get("content-type") || "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return new NextResponse("Şəkil yüklənərkən xəta baş verdi", { status: 500 });
  }
}