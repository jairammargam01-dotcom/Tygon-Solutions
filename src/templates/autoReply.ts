import type { ContactFormData } from "@/types/contact";
import { escapeHtml } from "@/lib/utils";

export function autoReplyTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>

<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You</title>
</head>

<body
style="
margin:0;
padding:0;
background:#f5f7fb;
font-family:Arial,Helvetica,sans-serif;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="padding:40px 0;">

<tr>

<td align="center">

<table
width="650"
cellpadding="0"
cellspacing="0"
style="
background:#ffffff;
border-radius:14px;
overflow:hidden;
box-shadow:0 8px 30px rgba(0,0,0,.08);
">

<tr>

<td
style="
background:#1056e9;
padding:40px;
text-align:center;
color:white;
">

<h1
style="
margin:0;
font-size:30px;
font-weight:700;
">

Thank You!

</h1>

<p
style="
margin-top:12px;
font-size:17px;
color:#dfe9ff;
">

We've successfully received your enquiry.

</p>

</td>

</tr>

<tr>

<td style="padding:40px;">

<p
style="
margin:0 0 20px;
font-size:16px;
line-height:1.7;
">

Hello
<strong>${escapeHtml(data.name)}</strong>,

</p>

<p
style="
margin:0 0 20px;
font-size:16px;
line-height:1.7;
color:#4a5568;
">

Thank you for contacting <strong>Tygon Solutions.</strong> We appreciate your interest in working with us.

</p>

<p
style="
margin:0 0 20px;
font-size:16px;
line-height:1.7;
color:#4a5568;
">

We've received your enquiry for
<strong style="color:#1056e9;">${escapeHtml(data.service)}</strong>.

Our team is reviewing the information you submitted and will get in touch with you as soon as possible to discuss the next steps.

</p>

<p
style="
margin:0 0 20px;
font-size:16px;
line-height:1.7;
color:#4a5568;
">

If we need any additional information, we'll contact you using the details you provided.

</p>

<div
style="
margin:35px 0;
padding:25px;
background:#f7f9fc;
border-left:5px solid #1056e9;
border-radius:8px;
">

<strong
style="
display:block;
font-size:15px;
color:#1a202c;
margin-bottom:15px;
">

Project Details Submitted

</strong>

<p
style="
margin:0;
line-height:1.8;
color:#4a5568;
font-size:15px;
">

${escapeHtml(data.description).replace(/\n/g, "<br>")}

</p>

</div>

<p
style="
margin:0 0 20px;
font-size:16px;
line-height:1.7;
color:#4a5568;
">

If you'd like to add more information, share project files, or update your requirements, simply reply to this email. Our team will review everything before contacting you.

</p>

<p
style="
margin:0 0 20px;
font-size:16px;
line-height:1.7;
color:#4a5568;
">

At <strong>Tygon Solutions</strong>, we help businesses build AI-powered solutions, custom software, websites, mobile applications, and other digital products designed to support long-term business growth.

</p>

<p
style="
margin:0 0 20px;
font-size:16px;
line-height:1.7;
color:#4a5568;
">

Thank you for choosing <strong>Tygon Solutions.</strong> We look forward to speaking with you soon.

</p>

<p
style="
margin-top:40px;
font-size:16px;
line-height:1.7;
color:#2d3748;
">

Kind regards,

<br><br>

<strong style="color:#1a202c; font-size:17px;">The Tygon Solutions Team</strong>

<br>

<span style="color:#718096; font-size:14px;">Building Intelligent Digital Solutions</span>

</p>

</td>

</tr>

<tr>

<td
style="
background:#1a202c;
padding:35px 40px;
text-align:center;
">

<p
style="
margin:0 0 12px;
font-size:14px;
line-height:1.6;
color:#a0aec0;
">

This is an automated confirmation that we've successfully received your enquiry through the Tygon Solutions website.

</p>

<p
style="
margin:0 0 20px;
font-size:14px;
line-height:1.6;
color:#a0aec0;
">

If you did not submit this enquiry, you can safely ignore this email.

</p>

<div
style="
margin:20px 0;
border-top:1px solid #2d3748;
padding-top:20px;
">

<p
style="
margin:0 0 8px;
font-size:15px;
font-weight:600;
color:#e2e8f0;
">

Tygon Solutions

</p>

<p
style="
margin:0;
font-size:13px;
color:#718096;
">

© ${new Date().getFullYear()} Tygon Solutions. All rights reserved.

</p>

</div>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
}