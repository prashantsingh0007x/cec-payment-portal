# Quick Start Guide - Code Tantra GCF Program Website

## 📋 Project Overview
A complete, modern, and responsive website for the Code Tantra GCF Program certification course with landing page, registration, and payment sections.

## 🚀 Getting Started

### Option 1: Open in Web Browser
1. Navigate to the project folder
2. Right-click on `index.html`
3. Select "Open with" → Your preferred browser
4. Or drag and drop `index.html` into your browser

### Option 2: Using Local Server (Recommended)
For better experience, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then visit: `http://localhost:8000`

## 📄 Pages Overview

### 1. **index.html** - Landing Page
- Hero section with course title
- Statistics cards (students, colleges, satisfaction)
- Placement highlights section
- Benefits section with 6 benefit cards
- Responsive navigation header
- Call-to-action: "Register Now" button

**Features:**
- Smooth scrolling navigation
- Sticky header
- Responsive grid layouts
- Professional gradient backgrounds

### 2. **register.html** - Registration Page
- Pre-filled institute name field (read-only)
- Enrollment number input (required)
- Email address input (optional)
- Phone number input (optional)
- Privacy Policy checkbox (required)
- Form validation with error messages

**Features:**
- Form validation on submit
- Real-time error display
- Disabled/read-only field styling
- Back to home link

### 3. **payment.html** - Payment Page
- Course fee display (₹10,000)
- UPI app selection buttons:
  - Google Pay
  - PhonePe
  - Paytm
- QR code for payment
- Payment instructions
- Important note about transaction screenshot

**Features:**
- Interactive UPI app selection
- Visual feedback on selection
- Professional payment layout
- Support link and back button

## 🎨 Design & Styling

### Color Scheme
- **Primary Blue**: #2563eb
- **Secondary Blue**: #1e40af
- **Accent Gold**: #f59e0b
- **Text Dark**: #1f2937
- **Background Light**: #f9fafb

### Responsive Breakpoints
- Desktop: 1200px max-width
- Tablet: 768px breakpoint
- Mobile: 480px breakpoint

### Key CSS Features
- CSS Grid for layouts
- Flexbox for alignment
- CSS Variables for theming
- Smooth transitions and hover effects
- Mobile-first responsive design

## ✅ Validation Rules

### Registration Form
1. **Enrollment Number**: Must not be empty
   - Error: "Enrollment number is required"
   
2. **Privacy Policy**: Must be checked
   - Error: "Please accept the Privacy Policy"

### Error Handling
- Errors display below each field
- Field borders turn red on error
- Multiple validations prevent form submission
- Errors clear on successful submission

## 🔧 JavaScript Functions

### Form Validation
```javascript
validateRegistrationForm(event)
// Called on form submit
// Checks enrollment number and privacy checkbox
// Redirects to payment.html if valid
```

### UPI Selection
```javascript
selectUPIApp(appName)
// Called when clicking UPI app buttons
// Highlights selected app
// Shows selected app name in console
```

### Smooth Scrolling
```javascript
// Auto-initialized for all navigation links
// Smooth scroll to sections with #id
// Auto-focus on enrollment number field
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Flexible navigation (stacks on mobile)
- Grid layouts that adapt to screen size
- Readable font sizes on all devices
- Touch-friendly button sizes
- Optimized spacing for small screens

## 🎯 User Journey

1. **Landing Page** (index.html)
   - User views course information
   - Clicks "Register Now"

2. **Registration** (register.html)
   - User enters enrollment number
   - Accepts privacy policy
   - Clicks "Continue to Payment"

3. **Payment** (payment.html)
   - User selects UPI app
   - Scans QR code
   - Completes payment
   - Saves transaction screenshot

## 💡 Customization Tips

### Update Course Information
Edit `index.html`:
```html
<h1>Course Title</h1>
<p>Subtitle text</p>
```

### Change Colors
Edit `style.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
  --accent-color: #YOUR_COLOR;
}
```

### Update Statistics
Edit `index.html` stats section:
```html
<div class="stat-number">YOUR_NUMBER</div>
<div class="stat-label">YOUR_LABEL</div>
```

### Replace QR Code
Replace the placeholder `images/qr.png` with actual payment QR code

### Modify Form Fields
Edit `register.html` form sections:
```html
<div class="form-group">
  <!-- Your new field -->
</div>
```

## 🔐 Security Notes

- Privacy Policy checkbox is validated
- Read-only fields cannot be modified via UI
- Form validation happens client-side (add server-side validation for production)
- Use HTTPS in production
- Integrate with secure payment gateway

## 📦 File Structure
```
gcf-program-website2/
├── index.html          (Main landing page)
├── register.html       (Registration page)
├── payment.html        (Payment page)
├── style.css           (All styling)
├── script.js           (All JavaScript)
├── README.md           (Full documentation)
├── QUICKSTART.md       (This file)
└── images/
    └── qr.png          (QR code placeholder)
```

## ⚡ Performance Tips

- All CSS is in one file for faster loading
- All JavaScript is in one file
- Minimal dependencies (pure HTML/CSS/JS)
- Optimized SVG QR code
- CSS Grid used instead of heavy frameworks

## 🐛 Troubleshooting

### Form Not Validating
- Check browser console for JavaScript errors
- Ensure form IDs match JavaScript references
- Verify checkbox is unchecked initially

### Styling Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML
- Verify no CSS naming conflicts

### Links Not Working
- Check file paths in href attributes
- Ensure all HTML files are in the same folder
- Verify file names match exactly

### QR Code Not Showing
- Check that qr.png exists in images/ folder
- Verify image path in HTML: `images/qr.png`
- Try refreshing the page

## 📞 Support

For customization or technical issues:
1. Check the README.md for detailed documentation
2. Review the HTML comments in each file
3. Inspect CSS variables for color/style changes
4. Check browser console for JavaScript errors

## 📝 Notes

- Website is production-ready for frontend
- Backend integration needed for actual form submission
- Payment gateway integration required for real payments
- Add SSL certificate before deploying to production
- Implement proper error handling for production

---

**Created**: March 2026
**Course**: Code Tantra GCF Program for Beginners
**Fee**: ₹10,000
**Collaboration**: Parul University & Parul Institute of Engineering (PIT)
