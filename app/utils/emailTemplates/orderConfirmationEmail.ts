/**
 * FreshBox Order Confirmation Email Template
 *
 * Generates an HTML order confirmation email to send to customers after subscribing/ordering.
 * Uses table-based layout and inline CSS for maximum email client compatibility.
 *
 * @param firstName - Customer's first name
 * @param boxSize - Size of the produce box ordered
 * @param deliveryDate - Next estimated delivery date
 * @param totalAmount - Total amount for the subscription order
 * @returns An HTML string representing the email
 */
export function orderConfirmationEmail(
  firstName: string,
  boxSize: string,
  deliveryDate: string,
  totalAmount: number
): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>Your FreshBox Order is Confirmed!</title>
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
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <h1 style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 36px; font-weight: 700; letter-spacing: 2px; color: #FFFFFF;">
                      FreshBox
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ===== GREETING & CONFIRMATION TARGET ===== -->
          <tr>
            <td align="center" bgcolor="#40916C"
              style="background-color: #40916C; padding: 20px 40px;">
              <h2 style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; font-weight: 400; color: #FFFFFF;">
                Your Order is Confirmed!
              </h2>
            </td>
          </tr>

          <!-- ===== BODY ===== -->
          <tr>
            <td bgcolor="#F8F4E3" style="background-color: #F8F4E3; padding: 40px 48px 32px 48px;">

              <!-- Introduction -->
              <p style="margin: 0 0 24px 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #3D3022;">
                Hi ${firstName}, great news! Your FreshBox order has been confirmed and is being prepared by our local farm partners.
              </p>

              <!-- Order Summary Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: #FFFFFF; border: 1px solid #E4DCC8; border-radius: 6px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 700; color: #2D6A4F; border-bottom: 1px solid #E4DCC8; padding-bottom: 8px;">
                      Order Summary
                    </p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #555555;">
                          <strong>Box Size:</strong>
                        </td>
                        <td align="right" style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #3D3022; font-weight: 600;">
                          ${boxSize}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #555555;">
                          <strong>Estimated Delivery:</strong>
                        </td>
                        <td align="right" style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #3D3022; font-weight: 600;">
                          ${deliveryDate}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #555555;">
                          <strong>Total:</strong>
                        </td>
                        <td align="right" style="padding: 12px 0 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #2D6A4F; font-weight: 700;">
                          $${totalAmount.toFixed(2)}/week
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Information Text -->
              <p style="margin: 0 0 32px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #3D3022;">
                Your produce will be harvested within 48 hours of your delivery date to guarantee maximum freshness. We will send you a notification when your box is on its way.
              </p>

              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                <tr>
                  <td align="center" bgcolor="#E76F51"
                    style="background-color: #E76F51; border-radius: 6px;">
                    <a href="http://localhost:3000/pricing"
                      target="_blank"
                      style="display: inline-block; padding: 16px 40px; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 700; letter-spacing: 0.5px; color: #FFFFFF; text-decoration: none; border-radius: 6px; background-color: #E76F51;">
                      Manage My Subscription
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
                    <p style="margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #95D5B2;">
                      &copy; 2026 FreshBox. All rights reserved.
                    </p>
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
