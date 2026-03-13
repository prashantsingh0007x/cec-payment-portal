# 🗺️ Website Navigation Map - Code Tantra GCF Program

## User Journey Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     🎓 CODE TANTRA GCF PROGRAM WEBSITE                  │
│                         FOR BEGINNERS COURSE                            │
└─────────────────────────────────────────────────────────────────────────┘

                              LANDING PAGE
                              (index.html)
                                   │
                    ┌──────────────────────────────┐
                    │  Hero Section                │
                    │  • Course Title              │
                    │  • Subtitle (Parul Uni)      │
                    │  • "Register Now" Button     │
                    └──────────────────────────────┘
                                   │
                    ┌──────────────────────────────┐
                    │  Statistics Section          │
                    │  • 50,000+ Students          │
                    │  • 500+ Colleges             │
                    │  • 95% Satisfaction          │
                    └──────────────────────────────┘
                                   │
                    ┌──────────────────────────────┐
                    │  Placement Highlights        │
                    │  • 100% Placement Help       │
                    │  • Industry-Ready Skills     │
                    │  • Proven Track Record       │
                    │  • Competitive Packages      │
                    │  • Networking Opportunities  │
                    │  • Lifetime Support          │
                    └──────────────────────────────┘
                                   │
                    ┌──────────────────────────────┐
                    │  Benefits Section            │
                    │  • Career Acceleration       │
                    │  • Expert Instructors        │
                    │  • Practical Learning        │
                    │  • Certification             │
                    │  • Flexible Schedule         │
                    │  • Affordable & Accessible   │
                    └──────────────────────────────┘
                                   │
                    ┌──────────────────────────────┐
                    │  Footer                      │
                    │  • Copyright Info            │
                    │  • Partner Info              │
                    │  • Fee Display (₹10,000)     │
                    └──────────────────────────────┘
                                   │
                         ┌─────────┴─────────┐
                         │                   │
                    Click "Register"    Navigation Links
                    Now Button          (Smooth Scroll)
                         │                   │
                         ▼                   ▼
                   
              REGISTRATION PAGE          FEATURES
              (register.html)            DISPLAYED
                    │
    ┌───────────────────────────────────┐
    │  REGISTRATION FORM                │
    │  ┌─────────────────────────────┐  │
    │  │ Institute Name (Read-Only)  │  │
    │  │ [Parul Institute of ...]    │  │
    │  └─────────────────────────────┘  │
    │  ┌─────────────────────────────┐  │
    │  │ Enrollment Number (Required)│  │
    │  │ [_____________________]     │  │
    │  │ ❌ Error message (if empty) │  │
    │  └─────────────────────────────┘  │
    │  ┌─────────────────────────────┐  │
    │  │ Email (Optional)            │  │
    │  │ [_____________________]     │  │
    │  └─────────────────────────────┘  │
    │  ┌─────────────────────────────┐  │
    │  │ Phone (Optional)            │  │
    │  │ [_____________________]     │  │
    │  └─────────────────────────────┘  │
    │  ┌─────────────────────────────┐  │
    │  │ ☐ Accept Privacy Policy     │  │
    │  │   (Required)                │  │
    │  │ ❌ Error message (if unchecked)
    │  └─────────────────────────────┘  │
    │  ┌─────────────────────────────┐  │
    │  │ [Continue to Payment] btn   │  │
    │  │ [← Back to Home] link        │  │
    │  └─────────────────────────────┘  │
    └───────────────────────────────────┘
                    │
                    │ Form Valid ✓
                    ▼
              PAYMENT PAGE
              (payment.html)
                    │
    ┌───────────────────────────────────────┐
    │  PAYMENT SECTION                      │
    │  ┌─────────────────────────────────┐  │
    │  │  💳 COURSE FEE                  │  │
    │  │     ₹10,000                     │  │
    │  └─────────────────────────────────┘  │
    │  ┌─────────────────────────────────┐  │
    │  │  SELECT UPI APP:                │  │
    │  │  [📱 Google Pay]  [💳 PhonePe]  │  │
    │  │  [🏦 Paytm]                     │  │
    │  │  (Click to select)              │  │
    │  └─────────────────────────────────┘  │
    │  ┌─────────────────────────────────┐  │
    │  │  SCAN QR CODE TO PAY            │  │
    │  │  ┌───────────────────────────┐  │  │
    │  │  │                           │  │  │
    │  │  │    [QR CODE IMAGE]        │  │  │
    │  │  │    (images/qr.png)        │  │  │
    │  │  │                           │  │  │
    │  │  └───────────────────────────┘  │  │
    │  │  "Scan the QR code using any    │  │
    │  │   UPI app to complete payment"  │  │
    │  └─────────────────────────────────┘  │
    │  ┌─────────────────────────────────┐  │
    │  │  ✨ IMPORTANT NOTE:             │  │
    │  │  "After completing the payment, │  │
    │  │   please keep the transaction   │  │
    │  │   screenshot for verification." │  │
    │  └─────────────────────────────────┘  │
    │  ┌─────────────────────────────────┐  │
    │  │  [Complete Payment] button      │  │
    │  │  [Contact Support] link         │  │
    │  │  [← Back to Registration] link  │  │
    │  └─────────────────────────────────┘  │
    └───────────────────────────────────────┘
                    │
                    │ Payment Complete
                    ▼
              📧 CONFIRMATION
              (via Email/SMS)
              Save Screenshot!
```

---

## File Architecture Diagram

```
📦 gcf-program-website2/
│
├─ 📄 HTML PAGES (User-Facing)
│  ├─ 🌍 index.html
│  │  └─ Landing page with hero, stats, features
│  │
│  ├─ 📝 register.html
│  │  └─ Registration form with validation
│  │
│  └─ 💳 payment.html
│     └─ Payment page with QR code
│
├─ 🎨 STYLING & LOGIC (Behind-the-Scenes)
│  ├─ 🎨 style.css
│  │  └─ All CSS styling (responsive design)
│  │
│  └─ ⚙️ script.js
│     └─ Form validation & interactivity
│
├─ 🖼️ ASSETS (Resources)
│  └─ 📁 images/
│     └─ qr.png (Payment QR code)
│
└─ 📚 DOCUMENTATION (Learning Resources)
   ├─ 📋 START_HERE.md ⭐ BEGIN HERE
   ├─ 📖 README.md (Complete guide)
   ├─ 🚀 QUICKSTART.md (5-min setup)
   ├─ 💡 TIPS_AND_TRICKS.md (Customization)
   ├─ 🧪 TESTING_GUIDE.md (QA checklist)
   ├─ ✅ IMPLEMENTATION_CHECKLIST.md (Verification)
   └─ 🗺️ INDEX.md (Navigation)
```

---

## Feature Map

```
┌─────────────────────────────────────────────────────────────────────┐
│                        FEATURE OVERVIEW                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  INDEX.HTML (LANDING PAGE)                                          │
│  ├─ ✓ Gradient Hero Section                                         │
│  ├─ ✓ Statistics Cards (3 items)                                    │
│  ├─ ✓ Placement Highlights (6 cards)                                │
│  ├─ ✓ Benefits Section (6 cards)                                    │
│  ├─ ✓ Sticky Navigation Header                                      │
│  ├─ ✓ Smooth Scroll Navigation                                      │
│  ├─ ✓ Responsive Grid Layouts                                       │
│  └─ ✓ Professional Footer                                           │
│                                                                     │
│  REGISTER.HTML (REGISTRATION)                                       │
│  ├─ ✓ Pre-filled Institute Field (Read-only)                        │
│  ├─ ✓ Enrollment Number Input (Required)                            │
│  ├─ ✓ Email Input (Optional)                                        │
│  ├─ ✓ Phone Input (Optional)                                        │
│  ├─ ✓ Privacy Checkbox (Required)                                   │
│  ├─ ✓ Form Validation                                               │
│  ├─ ✓ Error Message Display                                         │
│  ├─ ✓ Navigation Links                                              │
│  └─ ✓ Mobile Responsive Forms                                       │
│                                                                     │
│  PAYMENT.HTML (PAYMENT PAGE)                                        │
│  ├─ ✓ Fee Display (₹10,000)                                         │
│  ├─ ✓ Gradient Fee Box                                              │
│  ├─ ✓ UPI App Selection (3 options)                                 │
│  ├─ ✓ Interactive UPI Buttons                                       │
│  ├─ ✓ QR Code Display                                               │
│  ├─ ✓ Payment Instructions                                          │
│  ├─ ✓ Important Note Section                                        │
│  ├─ ✓ Support & Help Links                                          │
│  └─ ✓ Mobile Responsive Layout                                      │
│                                                                     │
│  STYLE.CSS (STYLING)                                                │
│  ├─ ✓ CSS Variables for Theming                                     │
│  ├─ ✓ Responsive Design (3 breakpoints)                             │
│  ├─ ✓ Flexbox & Grid Layouts                                        │
│  ├─ ✓ Smooth Transitions & Animations                               │
│  ├─ ✓ Professional Color Scheme                                     │
│  ├─ ✓ Form Styling                                                  │
│  ├─ ✓ Button Hover Effects                                          │
│  ├─ ✓ Card Styling                                                  │
│  └─ ✓ Mobile Optimization                                           │
│                                                                     │
│  SCRIPT.JS (JAVASCRIPT)                                             │
│  ├─ ✓ Form Validation Function                                      │
│  ├─ ✓ Enrollment Number Validation                                  │
│  ├─ ✓ Privacy Checkbox Validation                                   │
│  ├─ ✓ Error Message Toggle                                          │
│  ├─ ✓ UPI App Selection Handler                                     │
│  ├─ ✓ Smooth Scrolling                                              │
│  ├─ ✓ Event Listeners                                               │
│  └─ ✓ Auto-focus on Load                                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Responsive Breakpoints

```
MOBILE-FIRST RESPONSIVE DESIGN
│
├─ 📱 SMALL MOBILE (< 320px)
│  ├─ Single column layout
│  ├─ Full-width buttons
│  ├─ Adjusted font sizes
│  └─ Optimized spacing
│
├─ 📱 MOBILE (320px - 479px)
│  ├─ Single column layout
│  ├─ Touch-friendly buttons
│  ├─ Readable text
│  └─ Responsive images
│
├─ 📱 TABLET (480px - 767px)
│  ├─ 2-column grid layouts
│  ├─ Better spacing
│  ├─ Navigation optimized
│  └─ Form improvements
│
├─ 💻 TABLET LANDSCAPE (768px - 1023px)
│  ├─ 2-3 column grids
│  ├─ Improved layouts
│  ├─ Full navigation
│  └─ Better font sizes
│
└─ 💻 DESKTOP (1024px+)
   ├─ 3-column grids
   ├─ Maximum 1200px width
   ├─ Full features
   └─ Optimal spacing
```

---

## Data Flow Diagram

```
USER INTERACTION FLOW
│
┌─────────────────────────────────────────────────┐
│  USER OPENS WEBSITE                             │
│  (index.html)                                   │
└──────────────┬──────────────────────────────────┘
               │
               ▼
        ┌──────────────┐
        │ Landing Page │  (View course info)
        │ Displayed    │
        └──────┬───────┘
               │
       Click "Register Now"
               │
               ▼
    ┌──────────────────────────────┐
    │  REGISTRATION PAGE           │
    │  (register.html loaded)      │
    └──────────┬───────────────────┘
               │
       ┌───────┴────────┐
       │                │
    Validation    Fill Form
    Happens        Inputs
       │                │
       └───────┬────────┘
               │
        ┌──────▼──────────┐
        │ Check           │
        │ Enrollment #    │
        │ Privacy?        │
        └──────┬──────────┘
               │
        ┌──────┴─────────┐
        │                │
       ✓ Valid      ✗ Invalid
        │                │
        │          Show Error
        │                │
        ▼          Try Again
    ┌─────────────────────────┐
    │ REDIRECT TO PAYMENT     │
    │ (payment.html)          │
    └──────┬──────────────────┘
           │
    ┌──────▼──────────────────┐
    │  PAYMENT PAGE LOADED    │
    │  • Fee displayed        │
    │  • QR Code shown        │
    │  • UPI options shown    │
    └──────┬──────────────────┘
           │
    Select UPI App & Scan QR
           │
           ▼
    ┌────────────────────────┐
    │  PAYMENT COMPLETE ✓    │
    │  Save Screenshot       │
    │  for Verification      │
    └────────────────────────┘
```

---

## Color & Style Guide

```
DESIGN SYSTEM
│
├─ 🎨 PRIMARY COLOR (Blue)
│  └─ #2563eb (Used for links, headers, accents)
│
├─ 🎨 SECONDARY COLOR (Dark Blue)
│  └─ #1e40af (Used for darker elements, hover states)
│
├─ 🎨 ACCENT COLOR (Gold)
│  └─ #f59e0b (Used for buttons, highlights)
│
├─ 📝 TEXT COLORS
│  ├─ Dark: #1f2937 (Main text)
│  └─ Light: #6b7280 (Secondary text)
│
├─ 📄 BACKGROUND COLORS
│  ├─ Light: #f9fafb (Page background)
│  └─ White: #ffffff (Component background)
│
├─ ➖ BORDER COLOR
│  └─ #e5e7eb (Form borders, dividers)
│
└─ ✅ SUCCESS COLOR
   └─ #10b981 (Confirmation messages)
```

---

## Page Components Breakdown

```
EVERY PAGE INCLUDES
│
├─ 🔝 HEADER
│  ├─ Logo
│  ├─ Navigation Links
│  └─ Sticky positioning
│
├─ 📄 MAIN CONTENT
│  ├─ (Varies by page)
│  └─ Responsive layout
│
└─ 🔻 FOOTER
   ├─ Copyright info
   ├─ Partner info
   └─ Course details
```

---

## Form Validation Logic

```
REGISTRATION FORM VALIDATION
│
├─ 🔍 ENROLLMENT NUMBER CHECK
│  ├─ Is field empty?
│  │  ├─ YES → Show error
│  │  └─ NO → Continue
│  └─ Validation passes
│
├─ 🔍 PRIVACY CHECKBOX CHECK
│  ├─ Is checkbox checked?
│  │  ├─ YES → Continue
│  │  └─ NO → Show error
│  └─ Validation passes
│
├─ 🔍 BOTH VALID?
│  ├─ YES → Allow form submission
│  │        Redirect to payment.html
│  │
│  └─ NO → Prevent submission
│          Display errors
│          Ask user to fix
```

---

## Summary: Site Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    CODE TANTRA WEBSITE                      │
│                    COMPLETE ARCHITECTURE                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FRONTEND (User Interface)                                  │
│  ├─ 3 HTML Pages (Landing, Registration, Payment)          │
│  ├─ 1 CSS File (Responsive styling)                        │
│  └─ 1 JS File (Validation & interactivity)                 │
│                                                             │
│  ASSETS (Resources)                                         │
│  └─ QR Code Image (Payment placeholder)                    │
│                                                             │
│  DOCUMENTATION (Learning)                                   │
│  ├─ 6 Markdown files (Complete guides)                     │
│  └─ Navigation index                                       │
│                                                             │
│  PERFORMANCE                                                │
│  ├─ Zero external dependencies                             │
│  ├─ Load time < 2 seconds                                  │
│  ├─ Fully responsive                                       │
│  ├─ Mobile optimized                                       │
│  └─ Accessible design                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

*Last Updated: March 13, 2026*
*This visual map helps you understand the complete website structure and flow*
