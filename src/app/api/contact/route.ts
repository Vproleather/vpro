import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "vpro@bellsouth.net";
const FROM_CONTACT = "contact@vprousa.com";
const FROM_NOREPLY = "noreply@vprousa.com";
const MAX_TOTAL_IMAGE_UPLOAD_BYTES = 4 * 1024 * 1024;
const MAX_REQUEST_BYTES = Math.floor(4.25 * 1024 * 1024);
const MAX_IMAGE_COUNT = 5;
const IMAGE_UPLOAD_LIMIT_LABEL = "4MB";
const TURNSTILE_ACTION = "contact-form";
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";
const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

type TurnstileVerification = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

async function verifyTurnstileToken(
  token: string,
  remoteIp: string | null
): Promise<TurnstileVerification> {
  const secretKey =
    process.env.TURNSTILE_SECRET_KEY ||
    (process.env.NODE_ENV !== "production" ? TURNSTILE_TEST_SECRET_KEY : "");

  if (!secretKey) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured");
  }

  const verificationBody = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  if (remoteIp) {
    verificationBody.set("remoteip", remoteIp);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: verificationBody,
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    throw new Error(`Turnstile Siteverify returned ${response.status}`);
  }

  return (await response.json()) as TurnstileVerification;
}

function getRequestIp(request: NextRequest) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    null
  );
}

// Service label mapping
const serviceLabels: Record<string, string> = {
  "leather-sofa": "Leather Sofa Repair",
  "leather-car": "Leather Car Seat Repair",
  "leather-furniture": "Leather Furniture Restoration",
  "leather-color": "Leather Color Restoration",
  "leather-cleaning": "Leather Cleaning & Conditioning",
  "leather-recoloring": "Leather Recoloring",
  "leather-scratch": "Leather Scratch Repair",
  "leather-tear": "Leather Tear Repair",
  "leather-dyeing": "Leather Dyeing",
  "commercial-leather": "Commercial Leather Repair",
  "aircraft-leather": "Aircraft Seat Repair",
  "marine-leather": "Marine Seat Repair",
  "commercial-upholstery": "Commercial Upholstery",
  "restaurant-upholstery": "Restaurant Seat Upholstery",
  "hospitality-upholstery": "Hospitality Upholstery",
  "health-club-upholstery": "Health Club/Gym Upholstery",
  "medical-upholstery": "Medical Seat Upholstery",
  "dining-chair-upholstery": "Dining Chair Upholstery",
  "marine-upholstery": "Marine Upholstery",
  "furniture-regluing": "Furniture Regluing",
  "loose-joint": "Loose Joint Repair",
  "recliner-repair": "Recliner Repair",
  "dining-chair-repair": "Dining Chair Repair",
  "kitchen-chair-repair": "Kitchen Chair Repair",
  "vintage-restoration": "Vintage Furniture Restoration",
  "water-damage": "Water Damaged Furniture Repair",
  "fire-damage": "Fire Damaged Furniture Repair",
  "pet-damage": "Pet Damage Repair",
  "other": "Other / Not Sure",
};

function buildOwnerEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  imageCount: number;
}) {
  const serviceLabel = serviceLabels[data.service] || data.service;
  const hasImages = data.imageCount > 0;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
          <!-- Header -->
          <tr>
            <td style="background-color:#000000;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#C9A327;font-size:24px;font-weight:700;letter-spacing:1px;">V-PRO LEATHER REPAIR</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.6);font-size:13px;letter-spacing:2px;text-transform:uppercase;">New Contact Form Submission</p>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr><td style="background-color:#C9A327;height:4px;"></td></tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 24px;color:#000000;font-size:20px;font-weight:700;">Customer Details</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:4px solid #C9A327;margin-bottom:8px;">
                    <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</p>
                    <p style="margin:0;color:#000;font-size:16px;font-weight:600;">${data.name}</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:4px solid #C9A327;">
                    <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                    <p style="margin:0;"><a href="mailto:${data.email}" style="color:#C9A327;font-size:16px;font-weight:600;text-decoration:none;">${data.email}</a></p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:4px solid #C9A327;">
                    <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Phone</p>
                    <p style="margin:0;"><a href="tel:${data.phone}" style="color:#C9A327;font-size:16px;font-weight:600;text-decoration:none;">${data.phone}</a></p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:4px solid #C9A327;">
                    <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Service Requested</p>
                    <p style="margin:0;color:#000;font-size:16px;font-weight:600;">${serviceLabel}</p>
                  </td>
                </tr>
              </table>

              <h3 style="margin:0 0 12px;color:#000000;font-size:16px;font-weight:700;">Message</h3>
              <div style="padding:16px;background-color:#fafafa;border-radius:8px;border:1px solid #e5e5e5;">
                <p style="margin:0;color:#333;font-size:14px;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
              </div>

              ${hasImages ? `
              <div style="margin-top:16px;padding:12px 16px;background-color:#fffbeb;border-radius:8px;border:1px solid #C9A327;">
                <p style="margin:0;color:#92751b;font-size:14px;"><strong>${data.imageCount} photo${data.imageCount === 1 ? "" : "s"} attached</strong> — see attachment${data.imageCount === 1 ? "" : "s"} below.</p>
              </div>
              ` : ""}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#000000;padding:24px 40px;text-align:center;">
              <p style="margin:0;color:rgba(255,255,255,0.4);font-size:12px;">This message was sent from the V-Pro website contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildCustomerConfirmationHtml(name: string, serviceValue: string) {
  const serviceLabel = serviceLabels[serviceValue] || serviceValue;
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
          <!-- Header -->
          <tr>
            <td style="background-color:#000000;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#C9A327;font-size:24px;font-weight:700;letter-spacing:1px;">V-PRO LEATHER REPAIR</h1>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr><td style="background-color:#C9A327;height:4px;"></td></tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;color:#000000;font-size:22px;font-weight:700;">Thank you, ${firstName}!</h2>
              <p style="margin:0 0 20px;color:#555;font-size:15px;line-height:1.7;">
                We've received your request for <strong style="color:#000;">${serviceLabel}</strong> and will get back to you within 24 hours.
              </p>

              <div style="padding:20px;background-color:#fafafa;border-radius:8px;border-left:4px solid #C9A327;margin-bottom:24px;">
                <p style="margin:0 0 8px;color:#000;font-size:15px;font-weight:600;">What happens next?</p>
                <ol style="margin:0;padding-left:20px;color:#555;font-size:14px;line-height:1.8;">
                  <li>We'll review your request and any photos you've sent.</li>
                  <li>A member of our team will reach out with a quote or to schedule a consultation.</li>
                  <li>We'll get your repair handled with expert care.</li>
                </ol>
              </div>

              <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;">
                Need faster help? Give us a call anytime:
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#C9A327;border-radius:50px;padding:14px 32px;text-align:center;">
                    <a href="tel:+17705924689" style="color:#000000;font-size:18px;font-weight:700;text-decoration:none;display:inline-block;">(770) 592-4689</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#000000;padding:32px 40px;text-align:center;">
              <p style="margin:0 0 8px;color:#C9A327;font-size:14px;font-weight:600;">V-Pro Leather Repair</p>
              <p style="margin:0 0 4px;color:rgba(255,255,255,0.5);font-size:13px;">298 N Briar Ridge, Woodstock, GA 30189</p>
              <p style="margin:0 0 16px;color:rgba(255,255,255,0.5);font-size:13px;">Mon–Fri 8AM–6PM &nbsp;|&nbsp; Sat 9AM–2PM</p>
              <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:16px;">
                <p style="margin:0;color:rgba(255,255,255,0.3);font-size:11px;">Licensed & Insured &nbsp;•&nbsp; 20+ Years Experience &nbsp;•&nbsp; Satisfaction Guaranteed</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        {
          error: `Photo uploads must be under ${IMAGE_UPLOAD_LIMIT_LABEL}. Please choose a smaller image.`,
        },
        { status: 413 }
      );
    }

    let name: string;
    let email: string;
    let phone: string;
    let service: string;
    let message: string;
    let turnstileToken: string;
    let files: File[] = [];
    const imageAttachments: { filename: string; content: Buffer }[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = formData.get("name") as string;
      email = formData.get("email") as string;
      phone = formData.get("phone") as string;
      service = formData.get("service") as string;
      message = formData.get("message") as string;
      turnstileToken = formData.get("cf-turnstile-response") as string;

      files = formData
        .getAll("images")
        .filter((value): value is File => value instanceof File && value.size > 0);
      const legacyFile = formData.get("image");
      if (legacyFile instanceof File && legacyFile.size > 0) {
        files.push(legacyFile);
      }

      if (files.length > MAX_IMAGE_COUNT) {
        return NextResponse.json(
          { error: `You can attach up to ${MAX_IMAGE_COUNT} photos` },
          { status: 400 }
        );
      }

      const totalImageBytes = files.reduce((total, file) => total + file.size, 0);
      if (totalImageBytes > MAX_TOTAL_IMAGE_UPLOAD_BYTES) {
        return NextResponse.json(
          {
            error: `Photo uploads must be under ${IMAGE_UPLOAD_LIMIT_LABEL} total`,
          },
          { status: 413 }
        );
      }

      for (const file of files) {
        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
          return NextResponse.json(
            { error: "Only JPEG, PNG, WebP, and HEIC images are accepted" },
            { status: 400 }
          );
        }
      }
    } else {
      const body = await request.json();
      name = body.name;
      email = body.email;
      phone = body.phone;
      service = body.service;
      message = body.message;
      turnstileToken = body["cf-turnstile-response"] || body.turnstileToken;
    }

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (
      !turnstileToken ||
      typeof turnstileToken !== "string" ||
      turnstileToken.length > 2048
    ) {
      return NextResponse.json(
        { error: "Please complete the verification and try again." },
        { status: 400 }
      );
    }

    let turnstileVerification: TurnstileVerification;
    try {
      turnstileVerification = await verifyTurnstileToken(
        turnstileToken,
        getRequestIp(request)
      );
    } catch (error) {
      console.error("Turnstile verification error:", error);
      return NextResponse.json(
        { error: "Verification is temporarily unavailable. Please try again." },
        { status: 503 }
      );
    }

    const requestHostname = request.nextUrl.hostname.toLowerCase();
    const verifiedHostname = turnstileVerification.hostname?.toLowerCase();
    if (
      !turnstileVerification.success ||
      turnstileVerification.action !== TURNSTILE_ACTION ||
      verifiedHostname !== requestHostname
    ) {
      console.warn("Turnstile verification rejected", {
        action: turnstileVerification.action,
        errorCodes: turnstileVerification["error-codes"],
        hostname: turnstileVerification.hostname,
      });
      return NextResponse.json(
        { error: "Verification failed or expired. Please try again." },
        { status: 400 }
      );
    }

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      imageAttachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const serviceLabel = serviceLabels[service] || service;

    // Build attachments array for owner email
    const attachments = imageAttachments.length > 0
      ? imageAttachments.map((imageAttachment) => ({
          filename: imageAttachment.filename,
          content: imageAttachment.content,
        }))
      : undefined;

    // Send notification email to owner
    await resend.emails.send({
      from: `V-Pro Contact Form <${FROM_CONTACT}>`,
      to: [OWNER_EMAIL],
      replyTo: email,
      subject: `New Inquiry: ${serviceLabel} — ${name}`,
      html: buildOwnerEmailHtml({
        name,
        email,
        phone,
        service,
        message,
        imageCount: imageAttachments.length,
      }),
      attachments,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: `V-Pro Leather Repair <${FROM_NOREPLY}>`,
      to: [email],
      subject: `We received your request — V-Pro Leather Repair`,
      html: buildCustomerConfirmationHtml(name, service),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}
