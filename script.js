// Form Validation for Registration Page
function validateRegistrationForm(event) {
  event.preventDefault();

  const enrollmentNumber = document.getElementById('enrollmentNumber');
  const privacyCheckbox = document.getElementById('privacyCheckbox');
  const enrollmentError = document.getElementById('enrollmentError');
  const privacyError = document.getElementById('privacyError');

  // Reset error messages
  enrollmentError.classList.remove('show');
  privacyError.classList.remove('show');
  enrollmentNumber.classList.remove('error');
  privacyCheckbox.parentElement.classList.remove('error');

  let isValid = true;

  // Validate enrollment number
  if (enrollmentNumber.value.trim() === '') {
    enrollmentError.textContent = 'Enrollment number is required';
    enrollmentError.classList.add('show');
    enrollmentNumber.classList.add('error');
    isValid = false;
  }

  // Validate privacy checkbox
  if (!privacyCheckbox.checked) {
    privacyError.textContent = 'Please confirm that you understand this payment is non-refundable';
    privacyError.classList.add('show');
    privacyCheckbox.parentElement.classList.add('error');
    isValid = false;
  }

  if (isValid) {
    // Redirect to payment page
    window.location.href = 'payment.html';
  }
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Auto-focus on first form field if registration form exists
  const enrollmentInput = document.getElementById('enrollmentNumber');
  if (enrollmentInput) {
    enrollmentInput.focus();
  }

  // Payment Timer for Payment Page
  const timerElement = document.getElementById('timerDisplay');
  if (timerElement) {
    startPaymentTimer();
  }
});

// Payment Timer Function
function startPaymentTimer() {
  let timeLeft = 5 * 60; // 5 minutes in seconds
  const timerDisplay = document.getElementById('timerDisplay');
  const timerSection = document.querySelector('.payment-timer-section');

  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    
    timerDisplay.textContent = formattedTime;

    // Add warning effect when less than 30 seconds remain
    if (timeLeft <= 30 && timeLeft > 0) {
      timerSection.classList.add('warning');
    } else if (timeLeft > 30) {
      timerSection.classList.remove('warning');
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Session expired - show alert and redirect
      alert('Payment request timed out');
      window.location.href = 'index.html';
    }

    timeLeft--;
  }, 1000);
}
