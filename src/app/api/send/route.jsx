// import { NextResponse, NextRequest } from "next/server";
import FormHandler from "@/components/formhandler";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const data = await req.json();
  console.log(data, "DATTATATATATTATATTATATTA")
  // return NextResponse.json(data);
      try {
        const data = await resend.emails.send({
          from : "Abimbola <abimbolababajide6@gmail.com>",
          to : "abimbolababajide6@gmail.com",
          subject : "Test Mail",
          html : "Happy birthday motherfucker"
        });
        return NextResponse.json(data)
      } catch (error) {
        return NextResponse.error()
      }
  }
// export async function GET(request) {
//   return NextResponse.json({message:"Hello from next js"},{ status : 200 })
// }