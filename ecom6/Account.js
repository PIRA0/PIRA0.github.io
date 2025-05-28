window.onload = function() {

    let user = document.getElementById('User');
    user.textContent = localStorage.getItem('user') || 'N/D';

    let password = document.getElementById('Password');
    password.textContent = localStorage.getItem('password') || 'N/D';
};
