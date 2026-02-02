# Profile Setup Guide

## Dark Theme ID Card

Your ID card now features a sleek dark theme with cyan accents, matching modern design standards.

## How to Replace the Profile Image

1. **Replace the dummy profile image:**
   - Navigate to `client/public/assets/`
   - Replace `profile-dark.svg` with your own image
   - Supported formats: `.jpg`, `.png`, `.svg`, `.webp`
   - Recommended size: 150x150 pixels (square)

2. **Update the image path in the code:**
   - Open `client/src/components/layout/Lanyard.jsx`
   - Find the line: `const profileTexture = new THREE.TextureLoader().load('/assets/profile-dark.svg');`
   - Change `profile-dark.svg` to your image filename (e.g., `profile.png`)

3. **Update your name and title:**
   - In the same file, find the HTML text overlays
   - Change `"Sandeep S S"` to your name
   - Change `"Frontend Developer"` to your title

## Current Dark Theme Features:
- ✅ **Dark Background**: Professional black/dark gray card
- ✅ **Cyan Accents**: Modern teal highlights and borders
- ✅ **Profile Image**: Circular photo with cyan border
- ✅ **White Text**: High contrast name display
- ✅ **Cyan Title**: "Frontend Developer" in accent color
- ✅ **Status Indicator**: Small cyan dot at top
- ✅ **Accent Bar**: Cyan highlight bar
- ✅ **Clean Layout**: Minimalist professional design

## Example:

```javascript
// Change this line to use your image
const profileTexture = new THREE.TextureLoader().load('/assets/your-photo.jpg');

// Change these text overlays
<div>Your Name Here</div>
<div>Your Title Here</div>
```

The ID card now has a modern dark theme with cyan accents, just like the reference image you provided!