const loginForm = document.querySelector('#loginForm');
const passwordField = document.querySelector('#password');
const passwordToggle = document.querySelector('.password-toggle');
const validUser = 'ADTECH';
const validPassword = 'prototipo';

if (passwordField && passwordToggle) {
  passwordToggle.addEventListener('click', () => {
    const isHidden = passwordField.type === 'password';
    passwordField.type = isHidden ? 'text' : 'password';
    passwordToggle.setAttribute('aria-label', isHidden ? 'Ocultar contraseña' : 'Mostrar contraseña');
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (!email || !password) {
      alert('Por favor, ingresa usuario y contraseña.');
      return;
    }

    if (email !== validUser || password !== validPassword) {
      alert('Usuario o contraseña incorrectos. Usa ADTECH y prototipo.');
      return;
    }

    localStorage.setItem('erpPrototypeUser', email);
    window.location.href = 'modules.html';
  });
}
