// import { NextResponse, NextRequest } from "next/server";
import FormHandler from "@/components/formhandler";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server"; 
import nodemailer from "nodemailer"

const resend = new Resend(process.env.RESEND_API_KEY);
const email = process.env.EMAIL
const pass = process.env.PASSWORD
// export async function POST(req, res) {
//   const data = await req.json();
//   console.log(data, "DATTATATATATTATATTATATTA")
//   // return NextResponse.json(data);
//       try {
//         const data = await resend.emails.send({
//           from : "Abimbola <abimbolababajide6@gmail.com>",
//           to : "abimbolababajide6@gmail.com",
//           subject : "Test Mail",
//           html : "Happy birthday motherfucker"
//         });
//         return NextResponse.json(data)
//       } catch (error) {
//         return NextResponse.error()
//       }
//   }

export async function POST(req) {
  const data = await req.json();
  const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
      user : email,
      pass
    }
})

  const mailOptions = {
    from : email,
    to : email,
    // text : "This is a test string",
    subject : "Portfolio Email",
    html : `
    <h3 className="text-center text-2xl">Hello Abimbola</h3>
    <li className="text-xl">From ${data.email}</li>
    <li className="text-lg">Message: ${data.content}</li>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email Sent Successfully", status : 200 })
  } catch(error) {
    console.log(error)
    return NextResponse.json({ message : "Error Sending Email", status : 400 })
  }
}

// export async function GET(request) {
//   return NextResponse.json({message:"Hello from next js"},{ status : 200 })
// }