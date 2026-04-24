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

  const openLogoutConfirmModal = () => {
    const existingModal = document.querySelector('#logoutConfirmOverlay');

    if (existingModal) {
      existingModal.hidden = false;
      return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'logoutConfirmOverlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.display = 'grid';
    overlay.style.placeItems = 'center';
    overlay.style.padding = '24px';
    overlay.style.background = 'rgba(15, 23, 42, 0.34)';
    overlay.style.backdropFilter = 'blur(6px)';
    overlay.style.zIndex = '9999';

    const modal = document.createElement('div');
    modal.style.width = 'min(100%, 420px)';
    modal.style.padding = '28px';
    modal.style.borderRadius = '24px';
    modal.style.background = '#ffffff';
    modal.style.boxShadow = '0 28px 64px rgba(15, 23, 42, 0.18)';

    const title = document.createElement('h2');
    title.textContent = 'Cerrar sesion';
    title.style.margin = '0';
    title.style.fontSize = '1.9rem';
    title.style.lineHeight = '1.05';
    title.style.color = '#111827';

    const message = document.createElement('p');
    message.textContent = 'Seguro que deseas cerrar sesion?';
    message.style.margin = '12px 0 0';
    message.style.color = '#556071';
    message.style.fontWeight = '600';
    message.style.lineHeight = '1.5';

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.justifyContent = 'flex-end';
    actions.style.gap = '12px';
    actions.style.marginTop = '22px';

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancelar';
    cancelButton.style.minHeight = '44px';
    cancelButton.style.padding = '0 18px';
    cancelButton.style.border = '1px solid #d5dde9';
    cancelButton.style.borderRadius = '12px';
    cancelButton.style.background = '#ffffff';
    cancelButton.style.color = '#435064';
    cancelButton.style.fontWeight = '700';
    cancelButton.style.cursor = 'pointer';

    const confirmButton = document.createElement('button');
    confirmButton.type = 'button';
    confirmButton.textContent = 'Cerrar sesion';
    confirmButton.style.minHeight = '44px';
    confirmButton.style.padding = '0 18px';
    confirmButton.style.border = 'none';
    confirmButton.style.borderRadius = '12px';
    confirmButton.style.background = '#2563eb';
    confirmButton.style.color = '#ffffff';
    confirmButton.style.fontWeight = '700';
    confirmButton.style.cursor = 'pointer';

    const closeModal = () => {
      overlay.hidden = true;
    };

    cancelButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeModal();
      }
    });

    confirmButton.addEventListener('click', () => {
      localStorage.removeItem('erpPrototypeUser');
      window.location.href = 'login.html';
    });

    actions.append(cancelButton, confirmButton);
    modal.append(title, message, actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  };

  if (logoutButton) {
    logoutButton.addEventListener('click', openLogoutConfirmModal);
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
