document.addEventListener('DOMContentLoaded', () => {
  const cancelButton = document.querySelector('#cancelLogoutButton');
  const confirmButton = document.querySelector('#confirmLogoutButton');
  const params = new URLSearchParams(window.location.search);
  const returnTo = params.get('returnTo') || sessionStorage.getItem('erpLogoutReturnTo') || 'modules.html';

  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      window.location.href = returnTo;
    });
  }

  if (confirmButton) {
    confirmButton.addEventListener('click', () => {
      localStorage.removeItem('erpPrototypeUser');
      sessionStorage.removeItem('erpLogoutReturnTo');
      window.location.href = 'login.html';
    });
  }
});
