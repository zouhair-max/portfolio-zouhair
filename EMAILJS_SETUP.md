# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form without a backend.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: Contact Form: {{from_name}}

You have a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Budget: {{budget}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section
3. Copy the Public Key

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual credentials
4. **Important**: Never commit `.env` to git (add it to `.gitignore`)

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email inbox for the message

## Fallback Behavior

If EmailJS is not configured (environment variables are missing), the form will automatically fall back to opening the user's default email client with a pre-filled mailto link. This ensures the contact form always works, even without EmailJS setup.

## Troubleshooting

### Emails not sending?
- Check that all environment variables are set correctly
- Verify your EmailJS service is connected properly
- Check the browser console for any error messages
- Make sure your EmailJS account is verified

### Template variables not working?
- Ensure your template uses the exact variable names: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{budget}}`, `{{message}}`
- Check that the template ID matches your template

### Still having issues?
- Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Review the EmailJS dashboard for any error messages

## Security Notes

- The public key is safe to expose in client-side code
- Never share your private keys
- EmailJS free tier includes 200 emails/month
- Consider upgrading if you expect more traffic

