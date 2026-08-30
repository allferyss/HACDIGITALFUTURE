import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    // TODO production: persist to database via Prisma, e.g.
    // await prisma.contactMessage.create({ data: parsed.data });
    //
    // TODO production: send notification email via Resend, e.g.
    // await resend.emails.send({
    //   from: "HAC Digital Future <no-reply@hacdigitalfuture.com>",
    //   to: "halo@hacdigitalfuture.com",
    //   subject: `Pesan baru dari ${parsed.data.name}`,
    //   text: parsed.data.message,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
