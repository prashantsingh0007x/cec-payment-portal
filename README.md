# Code Tantra GCF Program Website

A modern, responsive website for the "Code Tantra GCF Program for Beginners" certification course offered by Code Tantra in collaboration with Parul University.

## Project Structure

```
gcf-program-website2/
├── index.html           # Landing page with hero section, stats, placements, and benefits
├── register.html        # Registration form page
├── payment.html         # Payment page with UPI options and QR code
├── style.css            # Modern responsive CSS styling
├── script.js            # Form validation and interactivity
└── images/
    └── qr.png           # Payment QR code placeholder
```

## Features

### 1. Landing Page (index.html)
- **Hero Section**: Eye-catching header with course title and call-to-action button
- **Statistics Section**: Display of key metrics
  - 50,000+ students enrolled across India
  - 500+ colleges partnered
  - 95% student satisfaction rate
- **Placement Highlights**: Cards showcasing placement and success stories
  - 100% Placement Assistance
  - Industry-Ready Skills
  - Proven Track Record
  - Competitive Packages
  - Networking Opportunities
  - Lifetime Support
- **Benefits Section**: Six benefit cards highlighting the course advantages
  - Career Acceleration
  - Expert Instructors
  - Practical Learning
  - Certification
  - Flexible Schedule
  - Affordable & Accessible
- **Navigation**: Sticky header with smooth scrolling

### 2. Registration Page (register.html)
- **Pre-filled Fields**: Institute name "Parul Institute of Engineering (PIT)" is read-only
- **Form Fields**:
  - Enrollment Number (required)
  - Email Address (optional)
  - Phone Number (optional)
  - Privacy Policy Checkbox (required)
- **Validation**:
  - Enrollment number must not be empty
  - Privacy policy checkbox must be checked
  - Real-time error display
- **CTA Button**: "Continue to Payment" button redirects to payment page

### 3. Payment Page (payment.html)
- **Fee Display**: Shows ₹10,000 course fee in an attractive gradient box
- **UPI Payment Options**: 
  - Google Pay
  - PhonePe
  - Paytm
- **Interactive Selection**: Click to select preferred UPI app (visual feedback)
- **QR Code**: Displays payment QR code for scanning
- **Instructions**: Clear instructions for payment process
- **Important Note**: Message about keeping transaction screenshot for verification

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and form handling
- **CSS3**: Modern styling with CSS variables, flexbox, grid, and animations
- **JavaScript**: Form validation, interactive elements, smooth scrolling

### Design Features
- **Responsive**: Mobile-first approach with breakpoints at 768px and 480px
- **Modern Gradient**: Primary blue gradient with accent gold color
- **Color Scheme**:
  - Primary: #2563eb (Blue)
  - Secondary: #1e40af (Dark Blue)
  - Accent: #f59e0b (Gold)
  - Text: #1f2937 (Dark Gray)
- **Typography**: Clean sans-serif font (Segoe UI) for readability
- **Animations**: Smooth transitions and hover effects on interactive elements

### Browser Compatibility
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Android)

## How to Use

### Opening Locally
1. Extract the project folder
2. Open `index.html` in a web browser
3. Navigate through the pages using buttons and links

### Form Validation
- **Registration Form**:
  - Enrollment number is required
  - Privacy checkbox must be checked
  - Validation happens on form submission
  - Error messages display inline

### Payment Flow
- Click "Register Now" on landing page
- Fill in the registration form
- Click "Continue to Payment" to proceed
- Select preferred UPI app
- Scan QR code with the selected app
- Complete payment and save transaction screenshot

## Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  /* ... other colors ... */
}
```

### Content
- Update text in HTML files for course details
- Replace placeholder QR code in `images/qr.png` with actual payment QR code
- Modify statistics and placement information as needed

### Fonts
Change the font family in `body` selector in `style.css`

## Form Validation Details

### JavaScript Functions
- `validateRegistrationForm(event)`: Validates registration form on submit
- `selectUPIApp(appName)`: Handles UPI app selection on payment page
- Smooth scrolling for navigation links

## Performance Optimizations
- Lightweight CSS with CSS variables for theming
- No external dependencies (no jQuery, Bootstrap, etc.)
- Optimized SVG QR code placeholder
- Efficient responsive design with CSS Grid and Flexbox

## Future Enhancements
- Backend integration for form submission
- Real payment gateway integration
- Email verification
- Student dashboard
- Course content pages
- Testimonials section
- Blog/resources section

## License
Created for Code Tantra in collaboration with Parul University & Parul Institute of Engineering (PIT).

---

**Course Fee**: ₹10,000
**Duration**: As per course structure
**Certification**: Code Tantra + Parul University
