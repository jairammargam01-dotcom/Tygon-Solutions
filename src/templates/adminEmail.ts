import type { ContactFormData } from "@/types/contact";
import {
  escapeHtml,
  formatSubmissionDate,
  safeValue,
} from "@/lib/utils";

export function adminEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Website Enquiry</title>
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:'Segoe UI',Roboto,Arial,sans-serif;color:#111827;">

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f4f7fb;padding:40px 16px;">
<tr>
<td align="center">

<table
role="presentation"
cellpadding="0"
cellspacing="0"
border="0"
width="100%"
style="
max-width:680px;
background:#ffffff;
border-radius:16px;
overflow:hidden;
border:1px solid #e5e7eb;
">

<!-- HEADER -->

<tr>

<td
style="
background:#1f2937;
padding:40px;
text-align:center;
">

<h1
style="
margin:0;
font-size:30px;
font-weight:700;
color:#ffffff;
">

Tygon Solutions

</h1>

<p
style="
margin:12px 0 0;
font-size:16px;
line-height:24px;
color:#d1d5db;
">

New Website Contact Form Submission

</p>

</td>

</tr>

<!-- HERO -->

<tr>

<td
style="
padding:36px 40px 20px;
">

<div
style="
display:inline-block;
background:#dbeafe;
color:#1d4ed8;
padding:8px 14px;
border-radius:999px;
font-size:13px;
font-weight:700;
">

NEW LEAD

</div>

<h2
style="
margin:22px 0 12px;
font-size:28px;
color:#111827;
font-weight:700;
">

A new enquiry has arrived

</h2>

<p
style="
margin:0;
font-size:15px;
line-height:26px;
color:#6b7280;
">

Someone submitted your website contact form. Below are the client's details and project requirements.

</p>

</td>

</tr>

<!-- SUMMARY -->

<tr>

<td style="padding:0 40px 32px;">

<table
role="presentation"
width="100%"
cellpadding="0"
cellspacing="0"
style="
background:#f8fafc;
border:1px solid #e5e7eb;
border-radius:12px;
">

<tr>

<td
colspan="2"
style="
padding:18px 22px;
font-size:18px;
font-weight:700;
color:#111827;
border-bottom:1px solid #e5e7eb;
">

Lead Summary

</td>

</tr>

<tr>

<td
style="
padding:16px 22px;
width:50%;
border-bottom:1px solid #eef2f7;
">

<div
style="
font-size:12px;
font-weight:600;
color:#6b7280;
text-transform:uppercase;
letter-spacing:.08em;
">

Client

</div>

<div
style="
margin-top:6px;
font-size:16px;
font-weight:600;
color:#111827;
">

${escapeHtml(data.name)}

</div>

</td>

<td
style="
padding:16px 22px;
border-bottom:1px solid #eef2f7;
">

<div
style="
font-size:12px;
font-weight:600;
color:#6b7280;
text-transform:uppercase;
letter-spacing:.08em;
">

Service

</div>

<div
style="
margin-top:6px;
font-size:16px;
font-weight:600;
color:#2563eb;
">

${escapeHtml(data.service)}

</div>

</td>

</tr>

<tr>

<td
style="
padding:16px 22px;
">

<div
style="
font-size:12px;
font-weight:600;
color:#6b7280;
text-transform:uppercase;
letter-spacing:.08em;
">

Budget

</div>

<div
style="
margin-top:6px;
font-size:16px;
font-weight:600;
color:#111827;
">

${safeValue(data.budget)}

</div>

</td>

<td
style="
padding:16px 22px;
">

<div
style="
font-size:12px;
font-weight:600;
color:#6b7280;
text-transform:uppercase;
letter-spacing:.08em;
">

Submitted

</div>

<div
style="
margin-top:6px;
font-size:16px;
font-weight:600;
color:#111827;
">

${formatSubmissionDate()}

</div>

</td>

</tr>

</table>

</td>

</tr>

<!-- CLIENT INFORMATION -->

<tr>

<td style="padding:0 40px 30px;">

<h3
style="
margin:0 0 16px;
font-size:20px;
color:#111827;
">

Client Information

</h3>

<table
role="presentation"
width="100%"
cellpadding="0"
cellspacing="0"
style="
border:1px solid #e5e7eb;
border-radius:12px;
">

<tr>

<td
style="
padding:16px 22px;
width:180px;
font-weight:600;
color:#374151;
border-bottom:1px solid #eef2f7;
">

Name

</td>

<td
style="
padding:16px 22px;
border-bottom:1px solid #eef2f7;
">

${escapeHtml(data.name)}

</td>

</tr>

<tr>

<td
style="
padding:16px 22px;
width:180px;
font-weight:600;
color:#374151;
border-bottom:1px solid #eef2f7;
">

Company

</td>

<td
style="
padding:16px 22px;
border-bottom:1px solid #eef2f7;
">

${safeValue(data.company)}

</td>

</tr>

<tr>

<td
style="
padding:16px 22px;
font-weight:600;
color:#374151;
border-bottom:1px solid #eef2f7;
">

Email

</td>

<td
style="
padding:16px 22px;
border-bottom:1px solid #eef2f7;
">

<a
href="mailto:${escapeHtml(data.email)}"
style="
color:#2563eb;
text-decoration:none;
font-weight:600;
">

${escapeHtml(data.email)}

</a>

</td>

</tr>
<tr>

<td
style="
padding:16px 22px;
font-weight:600;
color:#374151;
border-bottom:1px solid #eef2f7;
">

Phone

</td>

<td
style="
padding:16px 22px;
border-bottom:1px solid #eef2f7;
">

${
  data.phone
    ? `
<a
href="tel:${escapeHtml(data.phone)}"
style="
color:#2563eb;
text-decoration:none;
font-weight:600;
">

${escapeHtml(data.phone)}

</a>
`
    : `<span style="color:#9ca3af;">Not Provided</span>`
}

</td>

</tr>

</table>

</td>

</tr>

<!-- PROJECT INFORMATION -->

<tr>

<td style="padding:0 40px 30px;">

<h3
style="
margin:0 0 16px;
font-size:20px;
color:#111827;
">

Project Information

</h3>

<table
role="presentation"
width="100%"
cellpadding="0"
cellspacing="0"
style="
border:1px solid #e5e7eb;
border-radius:12px;
">

<tr>

<td
style="
padding:16px 22px;
width:180px;
font-weight:600;
color:#374151;
border-bottom:1px solid #eef2f7;
">

Requested Service

</td>

<td
style="
padding:16px 22px;
border-bottom:1px solid #eef2f7;
">

<span
style="
display:inline-block;
padding:8px 14px;
background:#dbeafe;
color:#1d4ed8;
border-radius:999px;
font-size:14px;
font-weight:600;
">

${escapeHtml(data.service)}

</span>

</td>

</tr>

<tr>

<td
style="
padding:16px 22px;
font-weight:600;
color:#374151;
">

Estimated Budget

</td>

<td
style="
padding:16px 22px;
">

<span
style="
display:inline-block;
padding:8px 14px;
background:#ecfdf5;
color:#047857;
border-radius:999px;
font-size:14px;
font-weight:700;
">

${safeValue(data.budget)}

</span>

</td>

</tr>

</table>

</td>

</tr>

<!-- DESCRIPTION -->

<tr>

<td style="padding:0 40px 30px;">

<h3
style="
margin:0 0 16px;
font-size:20px;
color:#111827;
">

Project Description

</h3>

<div
style="
background:#f8fafc;
border:1px solid #e5e7eb;
border-left:5px solid #2563eb;
border-radius:12px;
padding:24px;
font-size:15px;
line-height:28px;
color:#374151;
word-break:break-word;
">

${escapeHtml(data.description).replace(/\n/g, "<br>")}

</div>

</td>

</tr>

<!-- QUICK ACTIONS -->

<tr>

<td style="padding:0 40px 36px;">

<table
role="presentation"
width="100%"
cellpadding="0"
cellspacing="0">

<tr>

<td align="center">

<a
href="mailto:${escapeHtml(data.email)}"
style="
display:inline-block;
background:#2563eb;
color:#ffffff;
text-decoration:none;
padding:14px 26px;
border-radius:8px;
font-weight:600;
margin-right:10px;
">

Reply via Email

</a>

${
  data.phone
    ? `
<a
href="tel:${escapeHtml(data.phone)}"
style="
display:inline-block;
background:#111827;
color:#ffffff;
text-decoration:none;
padding:14px 26px;
border-radius:8px;
font-weight:600;
">

Call Client

</a>
`
    : ""
}

</td>

</tr>

</table>

</td>

</tr>
<!-- FOOTER -->

<tr>

<td
style="
background:#1f2937;
padding:34px 40px;
text-align:center;
">

<h3
style="
margin:0;
font-size:22px;
font-weight:700;
color:#ffffff;
">

Tygon Solutions

</h3>

<p
style="
margin:12px 0 0;
font-size:15px;
line-height:26px;
color:#d1d5db;
">

Building Intelligent Digital Solutions

</p>

<table
role="presentation"
width="100%"
cellpadding="0"
cellspacing="0"
style="
margin-top:30px;
border-top:1px solid rgba(255,255,255,.12);
padding-top:24px;
">

<tr>

<td
align="center"
style="
font-size:14px;
line-height:24px;
color:#9ca3af;
">

This notification was automatically generated from the
<strong style="color:#ffffff;">Tygon Solutions</strong>
website contact form.

<br><br>

Please reply directly to the client's email if you wish to continue the conversation.

</td>

</tr>

</table>

<p
style="
margin:30px 0 0;
font-size:13px;
color:#6b7280;
">

© ${new Date().getFullYear()} Tygon Solutions.
All rights reserved.

</p>

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