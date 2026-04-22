/**
 * FreshBox Welcome Email Template
 *
 * Generates an HTML welcome email for new FreshBox subscribers.
 * Uses table-based layout and inline CSS for maximum email client compatibility.
 *
 * @param firstName - The first name of the new subscriber
 * @returns An HTML string representing the welcome email
 */
export function welcomeEmail(firstName: string): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>Welcome to FreshBox!</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #EFEFEF; font-family: Arial, Helvetica, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <!-- Outer wrapper table -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
    style="background-color: #EFEFEF; margin: 0; padding: 0;">
    <tr>
      <td align="center" style="padding: 32px 16px;">

        <!-- Email container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"
          style="max-width: 600px; width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.10);">

          <!-- ===== HEADER ===== -->
          <tr>
            <td align="center" bgcolor="#2D6A4F"
              style="background-color: #2D6A4F; padding: 36px 40px 32px 40px;">
              <!-- Logo mark -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <!-- Leaf icon (SVG inline for email) -->
                    <div style="display: inline-block; background-color: #52B788; border-radius: 50%; width: 56px; height: 56px; line-height: 56px; text-align: center; margin-bottom: 12px;">
                      <span style="font-size: 28px; line-height: 56px;">🌿</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 36px; font-weight: 700; letter-spacing: 2px; color: #FFFFFF;">
                      FreshBox
                    </h1>
                    <p style="margin: 6px 0 0 0; padding: 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; color: #B7E4C7;">
                      Farm&nbsp;&bull;&nbsp;to&nbsp;&bull;&nbsp;Door
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ===== PERSONALIZED GREETING BANNER ===== -->
          <tr>
            <td align="center" bgcolor="#40916C"
              style="background-color: #40916C; padding: 20px 40px;">
              <h2 style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: 400; color: #FFFFFF;">
                Welcome to FreshBox, ${firstName}!
              </h2>
            </td>
          </tr>

          <!-- ===== BODY ===== -->
          <tr>
            <td bgcolor="#F8F4E3" style="background-color: #F8F4E3; padding: 40px 48px 32px 48px;">

              <!-- Intro paragraph -->
              <p style="margin: 0 0 24px 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.7; color: #3D3022;">
                Thank you for joining FreshBox. Your first weekly box of fresh, locally sourced produce
                is just a few clicks away.
              </p>

              <!-- "What to look forward to" heading -->
              <p style="margin: 0 0 16px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 700; color: #2D6A4F;">
                Here is what you can look forward to:
              </p>

              <!-- Feature list table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="margin-bottom: 32px;">

                <!-- Feature 1 -->
                <tr>
                  <td width="32" valign="top" style="padding: 6px 12px 6px 0;">
                    <div style="width: 28px; height: 28px; background-color: #2D6A4F; border-radius: 50%; text-align: center; line-height: 28px; font-size: 15px; color: #FFFFFF;">
                      🌾
                    </div>
                  </td>
                  <td valign="top" style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #3D3022;">
                    <strong style="color: #2D6A4F;">Fresh produce</strong> harvested within 48 hours of delivery
                  </td>
                </tr>

                <!-- Divider row -->
                <tr>
                  <td colspan="2" style="padding: 2px 0;">
                    <div style="border-top: 1px solid #E4DCC8; margin: 0;"></div>
                  </td>
                </tr>

                <!-- Feature 2 -->
                <tr>
                  <td width="32" valign="top" style="padding: 6px 12px 6px 0;">
                    <div style="width: 28px; height: 28px; background-color: #2D6A4F; border-radius: 50%; text-align: center; line-height: 28px; font-size: 15px; color: #FFFFFF;">
                      📦
                    </div>
                  </td>
                  <td valign="top" style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #3D3022;">
                    <strong style="color: #2D6A4F;">Customizable box sizes</strong> for any household
                  </td>
                </tr>

                <!-- Divider row -->
                <tr>
                  <td colspan="2" style="padding: 2px 0;">
                    <div style="border-top: 1px solid #E4DCC8; margin: 0;"></div>
                  </td>
                </tr>

                <!-- Feature 3 -->
                <tr>
                  <td width="32" valign="top" style="padding: 6px 12px 6px 0;">
                    <div style="width: 28px; height: 28px; background-color: #2D6A4F; border-radius: 50%; text-align: center; line-height: 28px; font-size: 15px; color: #FFFFFF;">
                      🗺️
                    </div>
                  </td>
                  <td valign="top" style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #3D3022;">
                    <strong style="color: #2D6A4F;">Local farms</strong> within 150&nbsp;km of your home
                  </td>
                </tr>

                <!-- Divider row -->
                <tr>
                  <td colspan="2" style="padding: 2px 0;">
                    <div style="border-top: 1px solid #E4DCC8; margin: 0;"></div>
                  </td>
                </tr>

                <!-- Feature 4 -->
                <tr>
                  <td width="32" valign="top" style="padding: 6px 12px 6px 0;">
                    <div style="width: 28px; height: 28px; background-color: #2D6A4F; border-radius: 50%; text-align: center; line-height: 28px; font-size: 15px; color: #FFFFFF;">
                      🔄
                    </div>
                  </td>
                  <td valign="top" style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #3D3022;">
                    <strong style="color: #2D6A4F;">Flexible subscriptions</strong> — skip or pause anytime
                  </td>
                </tr>

              </table>

              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center"
                style="margin: 0 auto 8px auto;">
                <tr>
                  <td align="center" bgcolor="#E76F51"
                    style="background-color: #E76F51; border-radius: 6px;">
                    <a href="http://localhost:3000/pricing"
                      target="_blank"
                      style="display: inline-block; padding: 16px 40px; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 700; letter-spacing: 0.5px; color: #FFFFFF; text-decoration: none; border-radius: 6px; background-color: #E76F51;">
                      Start Your Subscription
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ===== FOOTER ===== -->
          <tr>
            <td bgcolor="#2D6A4F" style="background-color: #2D6A4F; padding: 28px 40px 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <!-- Tagline -->
                    <p style="margin: 0 0 12px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; font-style: italic; color: #B7E4C7; line-height: 1.5;">
                      Supporting local farmers. Delivering freshness to your door.
                    </p>
                    <!-- Divider -->
                    <div style="border-top: 1px solid #40916C; margin: 0 0 12px 0;"></div>
                    <!-- Copyright -->
                    <p style="margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #95D5B2;">
                      &copy; 2026 FreshBox. All rights reserved.
                    </p>
                    <!-- Contact -->
                    <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #95D5B2;">
                      Questions? Contact us at
                      <a href="mailto:hello@freshbox.ca"
                        style="color: #B7E4C7; text-decoration: underline;">hello@freshbox.ca</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- End email container -->

      </td>
    </tr>
  </table>
  <!-- End outer wrapper -->

</body>
</html>`;
}
