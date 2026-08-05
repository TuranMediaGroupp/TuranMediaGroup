import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, artist_name } = await request.json();

    const data = await resend.emails.send({
      from: "Turan Media Group <onboarding@resend.dev>", // Öz domenini təsdiqləyəndən sonra buranı dəyişə bilərsən
      to: [email],
      subject: "Müraciətiniz qəbul olundu! - Turan Media Group",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Salam, ${artist_name}!</h2>
          <p>Demo müraciətiniz <b>Turan Media Group</b> komandasına uğurla çatdı.</p>
          <p>Mütəxəssislərimiz təqdim etdiyiniz musiqini dinləyib nəzərdən keçirəcək və qərar barədə sizə qısa zamanda geri dönüş edəcəklər.</p>
          <br/>
          <p>Hörmətlə,</p>
          <p><b>Turan Media Group Komandası</b></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}