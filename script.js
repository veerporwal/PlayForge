document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirect to login page
    });

    signupBtn.addEventListener('click', function() {
        window.location.href = 'signup.html'; // Redirect to signup page
    });
});