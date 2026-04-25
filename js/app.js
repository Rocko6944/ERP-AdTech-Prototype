document.addEventListener('DOMContentLoaded', () => {
  const moduleButtons = document.querySelectorAll('.module-button');
  const moduleCards = document.querySelectorAll('.module-card');
  const languageSelect = document.querySelector('#languageSelect');
  const profileToggle = document.querySelector('#profileToggle');
  const profilePopover = document.querySelector('#profilePopover');
  const profileInitial = document.querySelector('#profileInitial');
  const profileName = document.querySelector('#profileName');
  const profileRole = document.querySelector('#profileRole');
  const profileUser = document.querySelector('#profileUser');
  const profileEmail = document.querySelector('#profileEmail');
  const savedLanguage = localStorage.getItem('erpPrototypeLanguage');
  const savedUser = localStorage.getItem('erpPrototypeUser') || 'ADTECH';

  const formatDisplayName = (user) => {
    if (!user) {
      return 'Usuario ERP';
    }

    return user.includes('@') ? user.split('@')[0] : user;
  };

  const buildEmail = (user) => {
    if (!user) {
      return 'sin-correo@empresa.com';
    }

    return user.includes('@') ? user : `${user.toLowerCase()}@empresa.com`;
  };

  if (profileName && profileUser && profileEmail && profileInitial && profileRole) {
    const displayName = formatDisplayName(savedUser);
    profileName.textContent = displayName.toUpperCase();
    profileUser.textContent = savedUser;
    profileEmail.textContent = buildEmail(savedUser);
    profileInitial.textContent = displayName.charAt(0).toUpperCase() || 'U';
    profileRole.textContent = 'Usuario autenticado';
  }

  if (languageSelect) {
    if (savedLanguage) {
      languageSelect.value = savedLanguage;
    }

    languageSelect.addEventListener('change', () => {
      localStorage.setItem('erpPrototypeLanguage', languageSelect.value);
    });
  }

  const closeProfilePopover = () => {
    if (!profilePopover || !profileToggle) {
      return;
    }

    profilePopover.hidden = true;
    profileToggle.setAttribute('aria-expanded', 'false');
  };

  const openProfilePopover = () => {
    if (!profilePopover || !profileToggle) {
      return;
    }

    profilePopover.hidden = false;
    profileToggle.setAttribute('aria-expanded', 'true');
  };

  if (profileToggle && profilePopover) {
    profileToggle.addEventListener('click', (event) => {
      event.stopPropagation();

      if (profilePopover.hidden) {
        openProfilePopover();
        return;
      }

      closeProfilePopover();
    });

    profilePopover.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    document.addEventListener('click', closeProfilePopover);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !profilePopover.hidden) {
        closeProfilePopover();
      }
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
