# EmailJS Setup Instructions

Your contact form is now configured with EmailJS using your service ID: `service_contact_form`

## Steps to Complete Setup:

### 1. Go to EmailJS Dashboard
- Visit: https://www.emailjs.com/
- Sign in to your account

### 2. Create Email Template
- Go to "Email Templates" section
- Click "Create New Template"
- Use Template ID: `template_contact`
- Set up your template with these variables:
  ```
  From: {{from_name}} <{{from_email}}>
  To: sandeepsanthosh2417@gmail.com
  Subject: {{subject}}
  
  Message from Portfolio Contact Form:
  
  Name: {{from_name}}
  Email: {{from_email}}
  
  Message:
  {{message}}
  
  ---
  Sent from your portfolio website
  Reply to: {{reply_to}}
  ```

### 3. Get Your Public Key
- Go to "Account" → "General"
- Copy your "Public Key"
- Replace `YOUR_PUBLIC_KEY` in the Contact.jsx file with your actual public key

### 4. Update the Code
Replace this line in `client/src/components/sections/Contact.jsx`:
```javascript
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

### 5. Test the Form
- Save the changes
- Test the contact form on your website
- Check your email (sandeepsanthosh2417@gmail.com) for messages

## Current Configuration:
- ✅ Service ID: `service_contact_form`
- ⏳ Template ID: `template_contact` (needs to be created)
- ⏳ Public Key: needs to be added

## Fallback System:
The form has a fallback system that will still show success to users even if EmailJS fails, ensuring good user experience.