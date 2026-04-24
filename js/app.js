document.addEventListener('DOMContentLoaded', () => {
  const moduleButtons = document.querySelectorAll('.module-button');
  const languageSelect = document.querySelector('#languageSelect');
  const savedLanguage = localStorage.getItem('erpPrototypeLanguage');

  if (languageSelect) {
    if (savedLanguage) {
      languageSelect.value = savedLanguage;
    }

    languageSelect.addEventListener('change', () => {
      localStorage.setItem('erpPrototypeLanguage', languageSelect.value);
    });
  }

  moduleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const moduleName = button.dataset.module;

      if (moduleName === 'Marketing') {
        window.location.href = 'marketing.html';
        return;
      }

      if (moduleName === 'Ventas') {
        window.location.href = 'sales.html';
        return;
      }

      if (moduleName === 'Operaciones') {
        window.location.href = 'operations.html';
        return;
      }

      alert(`Has seleccionado el módulo de ${moduleName}.`);
    });
  });
});
