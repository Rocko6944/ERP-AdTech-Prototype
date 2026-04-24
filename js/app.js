document.addEventListener('DOMContentLoaded', () => {
  const moduleButtons = document.querySelectorAll('.module-button');
  const moduleCards = document.querySelectorAll('.module-card');
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

  const navigateToModule = (moduleName) => {
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

    if (moduleName === 'Análisis') {
      window.location.href = 'analysis.html';
      return;
    }

    alert(`Has seleccionado el módulo de ${moduleName}.`);
  };

  moduleButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      navigateToModule(button.dataset.module);
    });
  });

  moduleCards.forEach((card) => {
    const button = card.querySelector('.module-button');

    if (!button) {
      return;
    }

    card.addEventListener('click', () => {
      navigateToModule(button.dataset.module);
    });
  });
});
