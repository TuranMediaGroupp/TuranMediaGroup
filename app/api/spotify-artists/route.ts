import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    // Sənin göndərdiyin artistlərin ID və Adları
    const artistsData = [
      { id: "0t1ZeNakprZWcGTggNP1Kl", name: "Kərimbəy Kərimov" },
      { id: "3tkBtX28HTUsk9YVHRtq7y", name: "Emil Bayramov" },
      { id: "2lfVSrQNpSLcPzzg5yOdui", name: "Ali Mamedov" },
      { id: "75xJzo86MPeerRbrfl4vQA", name: "BigSavage" },
      { id: "0v4WkcnwLruPja3MhfGXx1", name: "Kradol" },
      { id: "26raOxSupKv4hdxiPGUfaF", name: "Ramin Guseinov" },
      { id: "5HsoWPdV3zWwAd2zlJdLEz", name: "Mehdi Mammadov" },
      { id: "77iMopoVcb4UZSDkotOshR", name: "Zombio" },
      { id: "3tGXy5lrlFx0ehLZsa5bAI", name: "Rawin" },
    ];

    // Spotify Token alırıq
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return NextResponse.json({ error: "Spotify token alınmadı" }, { status: 400 });
    }

    // Hər bir artistin şəklini və məlumatını Spotify API-dən çəkirik
    const artistsPromises = artistsData.map(async (artist) => {
      const res = await fetch(`https://api.spotify.com/v1/artists/${artist.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();

      return {
        id: artist.id,
        name: artist.name,
        image: data.images?.[0]?.url || "", // Artistin şəkli
        songName: "Turan Media Group Artist", // İstəsən dəyişə bilərsən
        externalUrl: `https://open.spotify.com/artist/${artist.id}`,
      };
    });

    const resolvedArtists = await Promise.all(artistsPromises);

    return NextResponse.json({ success: true, artists: resolvedArtists });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Xəta baş verdi", details: error.message || error },
      { status: 500 }
    );
  }
}