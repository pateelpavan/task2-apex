   
        function searchCollege() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const colleges = document.querySelectorAll('h3');
            colleges.forEach(college => {
                if (college.textContent.toLowerCase().includes(input)) {
                    college.style.display = 'block';
                } else {
                    college.style.display = 'none';
                }
            });
        }
        function resetSearch() {
            document.getElementById('searchInput').value = '';
            const colleges = document.querySelectorAll('h3');
            colleges.forEach(college => {
                college.style.display = 'block';
            });
        }
        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle('dark-mode');
            const button = document.querySelector('.dark-mode-toggle');
            button.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        }
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', searchCollege);
            const resetButton = document.getElementById('resetButton');
            resetButton.addEventListener('click', resetSearch);
            const darkModeToggle = document.querySelector('.dark-mode-toggle');
            darkModeToggle.addEventListener('click', toggleDarkMode);
        });
        function showMessage(message) {
            alert("thanks for visiting my page");
        }
        function buttonClicked() {
            alert("Button was clicked!");
            showMessage("Button was clicked!");
        }
        function register() {
            window.location.href = 'register.html';
            showMessage("Navigating to Register Page");
            const registerButton = document.querySelector('.register-button');
            registerButton.addEventListener('click', () => {
                alert("Navigating to Register Page");
            });
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            if (emailInput.value === '' || passwordInput.value === '') {
                alert("Please fill in all fields.");
            } else {
                alert("Registration successful!");
            }
            const forgotButton = document.querySelector('.forgot-button');
            forgotButton.addEventListener('click', () => {
                alert("Navigating to Forgot Password Page");
            });
            const loginButton = document.querySelector('.login-button');
            loginButton.addEventListener('click', () => {
                alert("Navigating to Login Page");
            });
        }
        function registerUser() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === '' || password === '') {
                alert("Please fill in all fields.");
            } else {
                alert("Registration successful!");
                window.location.href = 'login.html';
            }
        }
        function enterToLogin() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === '' || password === '') {
                alert("Please fill in all fields.");
            } else {
                alert("Login successful!");
                window.location.href = 'dashboard.html';
            }
        }
        function otpVerification() {
            const otp = document.getElementById('otp').value;
            if (otp === '') {
                alert("Please enter the OTP sent to your email.");
            } else {
                alert("OTP verified successfully!");
                window.location.href = 'dashboard.html';
            }
        }