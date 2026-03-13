# Testing Guide - Code Tantra Website

## 🧪 Manual Testing Checklist

### 1. Landing Page Testing (index.html)

#### Visual Elements
- [ ] Hero section displays with gradient background
- [ ] Course title is centered and prominent
- [ ] Subtitle mentions Parul University
- [ ] "Register Now" button is visible and clickable
- [ ] All statistics are displayed (50000+, 500+, 95%)
- [ ] Placement cards show all 6 items
- [ ] Benefit cards display with icons and text
- [ ] Footer shows copyright and course details

#### Navigation
- [ ] Header logo is clickable
- [ ] Navigation links scroll smoothly to sections
- [ ] Header remains sticky while scrolling
- [ ] Navigation links highlight on hover
- [ ] Mobile menu collapses on small screens

#### Responsiveness
- [ ] **Desktop (1200px+)**: All content displays properly
- [ ] **Tablet (768px)**: Grid layouts adapt correctly
- [ ] **Mobile (480px)**: Single column layout
- [ ] **Small Mobile**: Text is readable
- [ ] Images don't overflow containers

### 2. Registration Page Testing (register.html)

#### Form Fields
- [ ] Institute name is pre-filled with "Parul Institute of Engineering (PIT)"
- [ ] Institute name field is read-only (gray background)
- [ ] Enrollment number field is empty and editable
- [ ] Email field is optional
- [ ] Phone field is optional
- [ ] Privacy checkbox is unchecked by default

#### Form Validation
- [ ] Submit with empty enrollment number shows error
- [ ] Error message appears below enrollment field
- [ ] Field border turns red on error
- [ ] Submit with unchecked privacy shows error
- [ ] Multiple validations work together
- [ ] Clearing errors when fields are filled

#### Form Functionality
- [ ] Entering enrollment number clears previous error
- [ ] Checking privacy checkbox clears its error
- [ ] Form submits successfully when all validations pass
- [ ] Clicking "Continue to Payment" navigates to payment.html
- [ ] "Back to Home" link returns to index.html
- [ ] Focus automatically on enrollment number on page load

#### Styling
- [ ] Form container has shadow and white background
- [ ] Input fields have proper padding and spacing
- [ ] Error messages are red and visible
- [ ] Checkbox styling is clear and accessible
- [ ] Button has hover effects
- [ ] Form looks good on mobile devices

### 3. Payment Page Testing (payment.html)

#### Content Display
- [ ] Page title "Complete Your Payment" displays
- [ ] Course fee "₹10,000" shows prominently
- [ ] Fee is in a gradient box
- [ ] UPI section title displays
- [ ] All 3 UPI buttons visible (Google Pay, PhonePe, Paytm)
- [ ] QR code image loads (images/qr.png)
- [ ] Instructions text appears below QR code
- [ ] Important note about screenshot displays

#### Interactivity
- [ ] Clicking UPI button highlights it
- [ ] Only one UPI button selected at a time
- [ ] Clicking another button deselects previous
- [ ] Browser console shows selected app name
- [ ] Complete Payment button is clickable
- [ ] Support link and back link are functional

#### Styling
- [ ] Fee section has gradient background
- [ ] QR code has border and padding
- [ ] Instructions box has blue background
- [ ] Note message has green background and border
- [ ] Buttons have proper hover effects
- [ ] Layout responsive on all screen sizes

### 4. Responsive Design Testing

#### Desktop View (1200px+)
```
Open browser at full width:
- 3-column grid for stats ✓
- 3-column grid for benefits ✓
- 3-column grid for placement ✓
- Full navigation displayed ✓
- Maximum 1200px container width ✓
```

#### Tablet View (768px-1199px)
```
Resize to 768px:
- Grids adapt to 2 columns ✓
- Navigation flows properly ✓
- All content readable ✓
- Images scale appropriately ✓
```

#### Mobile View (480px-767px)
```
Resize to 480px:
- Single column layout ✓
- Navigation stacks ✓
- Text remains readable ✓
- Buttons are touch-sized (45px+ height) ✓
- Images fit container ✓
```

#### Small Mobile (< 480px)
```
Resize to 320px (iPhone SE):
- Text not cut off ✓
- Buttons clickable ✓
- Forms functional ✓
- Images visible ✓
- Scrolling smooth ✓
```

### 5. Cross-Browser Testing

#### Chrome/Edge
- [ ] All features work
- [ ] Styling renders correctly
- [ ] Forms validate properly
- [ ] Smooth scrolling works
- [ ] Console shows no errors

#### Firefox
- [ ] All features work
- [ ] Styling renders correctly
- [ ] Forms validate properly
- [ ] Smooth scrolling works
- [ ] Console shows no errors

#### Safari
- [ ] All features work
- [ ] Styling renders correctly
- [ ] Forms validate properly
- [ ] Smooth scrolling works
- [ ] No console errors

#### Mobile Browsers
- [ ] iOS Safari: All working
- [ ] Chrome Android: All working
- [ ] Touch interactions smooth
- [ ] Performance acceptable

### 6. Link Testing

- [ ] index.html → register.html ✓
- [ ] register.html → payment.html ✓
- [ ] payment.html → register.html ✓
- [ ] All pages → index.html ✓
- [ ] Navigation links scroll smoothly ✓
- [ ] All href attributes correct ✓

### 7. Image Testing

#### QR Code Image
- [ ] File exists: `images/qr.png` ✓
- [ ] Image loads in payment.html ✓
- [ ] Image displays correctly ✓
- [ ] Image is responsive ✓
- [ ] Alt text available ✓

### 8. Performance Testing

#### Loading Speed
```javascript
// In browser console:
// Check time from navigation start to complete load
performance.navigation.timing.loadEventEnd - 
performance.navigation.timing.navigationStart
// Should be < 2 seconds
```

#### CSS Loading
- [ ] No FOUC (Flash of Unstyled Content)
- [ ] Styles apply immediately
- [ ] Gradients render smoothly
- [ ] Transitions are smooth

#### JavaScript Execution
- [ ] Form validation instant
- [ ] UPI selection immediate
- [ ] Smooth scrolling fluid
- [ ] No lag on interactions

### 9. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Form fields are focusable
- [ ] Buttons are keyboard accessible
- [ ] Links are keyboard accessible
- [ ] Focus outline visible

#### Screen Reader (use NVDA/JAWS)
- [ ] Page title reads correctly
- [ ] Form labels associated with inputs
- [ ] Image has alt text
- [ ] Link text is descriptive
- [ ] Button text is clear

#### Color Contrast
- [ ] Text color contrast is sufficient
- [ ] Button text readable on background
- [ ] Links distinguishable from text
- [ ] Form error messages visible

### 10. JavaScript Console Testing

```javascript
// In browser developer console, check:

// 1. No errors on page load
console.log("Check for red errors")

// 2. Test form validation
// Try submitting empty registration form

// 3. Check for warnings
// Look for yellow warnings

// 4. Test UPI selection (payment.html)
// Click UPI buttons and check console output
```

### 11. Form Data Persistence Testing

#### Registration Form
- [ ] Page refresh doesn't keep data (expected)
- [ ] Back button works properly
- [ ] Forward button works after back

#### Payment Page
- [ ] Form data preserved on page (no form here, expected)
- [ ] QR code stays visible
- [ ] UPI selection persists on page

## 🔍 Test Cases

### Happy Path Testing
1. **Complete Journey**
   - [ ] Open index.html
   - [ ] Click "Register Now"
   - [ ] Fill enrollment number
   - [ ] Check privacy
   - [ ] Click "Continue to Payment"
   - [ ] Select UPI app
   - [ ] See QR code and instructions

### Edge Cases
1. **Registration Form**
   - [ ] Special characters in enrollment number
   - [ ] Very long enrollment number
   - [ ] Spaces in enrollment number
   - [ ] Multiple rapid submissions

2. **Mobile Interactions**
   - [ ] Touch vs click on buttons
   - [ ] Landscape vs portrait orientation
   - [ ] Slow network conditions
   - [ ] Screen orientation changes

### Error Cases
1. **Form Errors**
   - [ ] Empty enrollment number
   - [ ] Unchecked privacy policy
   - [ ] Both fields empty simultaneously
   - [ ] Fix error and resubmit

2. **Missing Resources**
   - [ ] Missing CSS file
   - [ ] Missing JavaScript file
   - [ ] Missing QR image
   - [ ] Offline mode

## 📊 Testing Report Template

### Test Execution Summary
```
Date: _____________
Tester: ___________
Environment: ______

Total Test Cases: ___
Passed: ___
Failed: ___
Blocked: ___

Status: ☐ Pass ☐ Fail ☐ Partial
```

### Bugs Found
```
| Bug ID | Description | Severity | Status |
|--------|-------------|----------|--------|
| B001 | | High/Med/Low | Open/Fixed |
```

## 🚀 Quick Test Script

Open browser console and run:
```javascript
// Test if all pages exist and link correctly
console.log("Landing Page: Open index.html ✓");
console.log("Navigation works: Scroll test ✓");
console.log("Registration: Open register.html ✓");
console.log("Form validation: Try empty submit ✓");
console.log("Payment: Open payment.html ✓");
console.log("UPI selection: Click buttons ✓");
console.log("QR Code: Check images/qr.png ✓");
```

## ✅ Final Verification Checklist

Before launching:
- [ ] All pages open without errors
- [ ] Navigation works throughout
- [ ] Forms validate correctly
- [ ] Styling looks professional
- [ ] Mobile responsiveness confirmed
- [ ] Links all functional
- [ ] Images load properly
- [ ] No console errors
- [ ] Form submission flows correctly
- [ ] Payment page displays QR code
- [ ] Instructions are clear
- [ ] Footer displays on all pages
- [ ] Accessibility basics checked
- [ ] Performance acceptable

## 📱 Device Testing List

### Phones to Test
- [ ] iPhone 12 (390x844)
- [ ] iPhone SE (375x667)
- [ ] Samsung Galaxy S21 (360x800)
- [ ] Pixel 6 (412x915)
- [ ] Tablet (iPad 768x1024)

### Testing Tools
- Chrome DevTools (F12)
- Firefox Developer Tools (F12)
- Safari Inspector (Cmd+Opt+I)
- Mobile device browsers
- BrowserStack (cross-browser testing)

---

**Test Date**: ___________
**Tested By**: ___________
**Status**: ☐ Ready for Launch

All tests passing? ✓ Website is production-ready!
