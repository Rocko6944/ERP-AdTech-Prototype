document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const clickableRows = document.querySelectorAll('.clickable-row');
  const backButton = document.querySelector('[data-back-target]');
  const clientModal = document.querySelector('#clientModal');
  const openClientModalButton = document.querySelector('#openClientModal');
  const closeClientModalButton = document.querySelector('#closeClientModal');
  const cancelClientModalButton = document.querySelector('#cancelClientModal');
  const clientForm = document.querySelector('#clientForm');
  const clientSaveToast = document.querySelector('#clientSaveToast');
  const collapseKey = 'erpSalesSidebarCollapsed';

  if (clientModal) {
    clientModal.hidden = true;
  }

  if (sidebar) {
    const savedState = localStorage.getItem(collapseKey);
    const isCollapsed = savedState === null ? true : savedState === 'true';
    sidebar.classList.toggle('is-collapsed', isCollapsed);
    sidebar.classList.toggle('is-expanded', !isCollapsed);
  }

  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      const collapsed = sidebar.classList.toggle('is-collapsed');
      sidebar.classList.toggle('is-expanded', !collapsed);
      sidebarToggle.setAttribute('aria-label', collapsed ? 'Expandir menú' : 'Contraer menú');
      localStorage.setItem(collapseKey, String(collapsed));
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('erpPrototypeUser');
      window.location.href = 'login.html';
    });
  }

  if (backButton) {
    backButton.addEventListener('click', () => {
      const fallbackTarget = backButton.dataset.backTarget;
      const sameOriginReferrer = document.referrer && new URL(document.referrer).origin === window.location.origin;

      if (sameOriginReferrer && window.history.length > 1) {
        window.history.back();
        return;
      }

      if (fallbackTarget) {
        window.location.href = fallbackTarget;
      }
    });
  }

  const hideClientModal = () => {
    if (clientModal) {
      clientModal.hidden = true;
    }
  };

  const showClientModal = () => {
    if (clientModal) {
      clientModal.hidden = false;
    }
  };

  if (openClientModalButton) {
    openClientModalButton.addEventListener('click', showClientModal);
  }

  if (closeClientModalButton) {
    closeClientModalButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      hideClientModal();
    });
  }

  if (cancelClientModalButton) {
    cancelClientModalButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      hideClientModal();
    });
  }

  if (clientForm) {
    clientForm.addEventListener('submit', (event) => {
      event.preventDefault();
      hideClientModal();

      if (clientSaveToast) {
        clientSaveToast.hidden = false;
        window.clearTimeout(window.clientSaveToastTimeout);
        window.clientSaveToastTimeout = window.setTimeout(() => {
          clientSaveToast.hidden = true;
        }, 2200);
      }
    });
  }

  if (clientModal) {
    clientModal.addEventListener('click', (event) => {
      if (event.target === clientModal) {
        hideClientModal();
      }
    });
  }

  clickableRows.forEach((row) => {
    const navigateToTarget = () => {
      const href = row.dataset.href;
      if (href) {
        window.location.href = href;
      }
    };

    row.addEventListener('click', () => {
      navigateToTarget();
    });

    row.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        navigateToTarget();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && clientModal && !clientModal.hidden) {
      hideClientModal();
    }
  });
});
