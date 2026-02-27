---
sidebar_position: 1
---

import { Image } from '@site/src/components/custom';

# Configure Multi-factor authentication (MFA)

## Navigation to Enablement

1. Login to Designer by clicking on the link below:

   [https://designer.quickintegrate.io/login](https://designer.quickintegrate.io/login)

2. **Locate the Account Icon:** Click your profile initials in the top-right corner of the integration platform.

<Image cls="border" src="/img/Account/account_icon.png" alt="Account icon" />

3. **Access Profile:** Select `Profile` from the dropdown menu.

<Image cls="border" src="/img/Account/account_dropdown.png" alt="Account dropdown" />

4. **Go to Contact Info:** On the Profile page, click the `Contact Info` tab.

<Image cls="border" src="/img/Account/contact_info.png" alt="Tab contact info" />

5. **Trigger the MFA Request:** Find the Multi-factor Authentication section and click `Enable`.

<Image cls="border" src="/img/Account/mfa_enable_alert.png" alt="MFA enable alert" />

## Set Up Your Authenticator App

Check your inbox for an email titled **"Multi-Factor Authentication enabled for Quickintegrate"**. This email contains the "Secret Key" and a QR code.

<Image cls="border" src="/img/Account/email_mfa_enable.png" alt="MFA enable email" />

### Using QR Code

Open your Authenticator App (Google, Microsoft, Okta) → Tap (+) → Select **Scan QR Code**.

### Using Secret Key

If the QR doesn't load, select **Enter Key Manually** in your app. Type the string of characters provided in the email.

## Finalizing the Connection (Activation)

1. **Logout:** Manually log out of your integration platform account immediately after scanning the QR code.
2. **Relogin:** Navigate back to the login page and enter your username and password as usual.
3. **MFA Redirection:** Instead of going to the dashboard, you will be redirected to a `Verification Page`.
4. **Enter the 6-Digit Code:** Open your Authenticator app, find the code for this account, and enter it into the field.
5. **Success:** Upon entering a valid code, you will be granted access to the platform. MFA is now fully active.

## ⚠️ Critical Security Precautions

- **Delete the Email:** Once MFA is successfully enabled, **delete the setup email** from your inbox. Leaving a QR code or Secret Key in your sent received mail is a major security risk.

## 💡 Pro-Tips for Users

- **The "Race" Against Time:** The 6-digit code in your app resets every **30 seconds**. If the timer is red or flashing, wait for a new code to appear before typing it in to avoid a "Login Failed" error.

- **Locked Out?** If your 6-digit code is consistently rejected, ensure your mobile device's **Time/Date settings** are set to **"Set Automatically"**. MFA relies on perfectly synced timestamps.
