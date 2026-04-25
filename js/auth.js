const loginForm = document.querySelector('#loginForm');
const passwordField = document.querySelector('#password');
const passwordToggle = document.querySelector('.password-toggle');
const validUser = 'ADTECH';
const validPassword = 'prototipo';

if (passwordField && passwordToggle) {
  passwordToggle.setAttribute('aria-label', 'Mostrar contrasena');
  passwordToggle.setAttribute('aria-pressed', 'false');
  passwordToggle.setAttribute('title', 'Mostrar contrasena');

  passwordToggle.addEventListener('click', () => {
    const isHidden = passwordField.type === 'password';
    passwordField.type = isHidden ? 'text' : 'password';
    passwordToggle.setAttribute('aria-label', isHidden ? 'Ocultar contrasena' : 'Mostrar contrasena');
    passwordToggle.setAttribute('aria-pressed', isHidden ? 'true' : 'false');
    passwordToggle.setAttribute('title', isHidden ? 'Ocultar contrasena' : 'Mostrar contrasena');
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (!email || !password) {
      alert('Por favor, ingresa usuario y contrasena.');
      return;
    }

    if (email !== validUser || password !== validPassword) {
      alert('Usuario o contrasena incorrectos. Usa ADTECH y prototipo.');
      return;
    }

    localStorage.setItem('erpPrototypeUser', email);
    window.location.href = 'modules.html';
  });
}
