document.getElementById('signinForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate input fields
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }
  
    // Simulate user authentication
    const mockUser = {
      email: 'test@netflix.com',
      password: 'password123'
    };
  
    if (email === mockUser.email && password === mockUser.password) {
      alert('Sign In Successful! Redirecting to your account...');
      // Redirect to homepage (example)
      window.location.href = 'homepage.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
  