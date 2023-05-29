// Add JavaScript code to handle the click events for "Login" "Forgot Password" and "Sign Up" links

document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'block';
  });
  
  document.getElementById('loginPopup').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
  
  document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();
    // Add your logic for the "Forgot Password" functionality
    alert('Forgot Password clicked');
  });
  
  document.getElementById('signUp').addEventListener('click', function(e) {
    e.preventDefault();
    // Add your logic for the "Sign Up" functionality
    alert('Sign Up clicked');
  });



// database connection in the backend code

const db = require('./db.js');

// Example query
db.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Error executing the query:', err);
    return;
  }
  console.log('Results:', results);
});
