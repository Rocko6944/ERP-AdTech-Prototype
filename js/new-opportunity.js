document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const newOpportunityForm = document.querySelector('#newOpportunityForm');
  const cancelButton = document.querySelector('#cancelNewOpportunity');
  const saveToast = document.querySelector('#newOpportunityToast');
  const collapseKey = 'erpSalesSidebarCollapsed';

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

  const goBack = () => {
    const fallbackTarget = backButton?.dataset.backTarget;
    const sameOriginReferrer = document.referrer && new URL(document.referrer).origin === window.location.origin;

    if (sameOriginReferrer && window.history.length > 1) {
      window.history.back();
      return;
    }

    if (fallbackTarget) {
      window.location.href = fallbackTarget;
    }
  };

  if (backButton) {
    backButton.addEventListener('click', goBack);
  }

  if (cancelButton) {
    cancelButton.addEventListener('click', goBack);
  }

  if (newOpportunityForm) {
    newOpportunityForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (saveToast) {
        saveToast.hidden = false;
        window.clearTimeout(window.newOpportunityToastTimeout);
        window.newOpportunityToastTimeout = window.setTimeout(() => {
          saveToast.hidden = true;
          window.location.href = 'sales.html';
        }, 1400);
      } else {
        window.location.href = 'sales.html';
      }
    });
  }
});
