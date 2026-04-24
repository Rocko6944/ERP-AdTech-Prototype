document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const openEditClientModalButton = document.querySelector('#openEditClientModal');
  const editClientModal = document.querySelector('#editClientModal');
  const closeEditClientModalButton = document.querySelector('#closeEditClientModal');
  const cancelEditClientModalButton = document.querySelector('#cancelEditClientModal');
  const openProjectsModalButton = document.querySelector('#openProjectsModal');
  const projectsModal = document.querySelector('#projectsModal');
  const closeProjectsModalButton = document.querySelector('#closeProjectsModal');
  const cancelProjectsModalButton = document.querySelector('#cancelProjectsModal');
  const editClientForm = document.querySelector('#editClientForm');
  const clientHeading = document.querySelector('.client-heading h1');
  const clientCompanyTag = document.querySelector('.client-tags .tag:first-child');
  const clientStatusTag = document.querySelector('.client-tags .tag:last-child');
  const collapseKey = 'erpSalesSidebarCollapsed';

  const openEditClientModal = () => {
    if (!editClientModal) {
      return;
    }

    editClientModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeEditClientModal = () => {
    if (!editClientModal) {
      return;
    }

    editClientModal.hidden = true;
    document.body.style.overflow = '';
  };

  const openProjectsModal = () => {
    if (!projectsModal) {
      return;
    }

    projectsModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeProjectsModal = () => {
    if (!projectsModal) {
      return;
    }

    projectsModal.hidden = true;
    document.body.style.overflow = '';
  };

  if (sidebar) {
    const isCollapsed = localStorage.getItem(collapseKey) !== 'false';
    sidebar.classList.toggle('is-expanded', !isCollapsed);
  }

  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      const expanded = sidebar.classList.toggle('is-expanded');
      sidebarToggle.setAttribute('aria-label', expanded ? 'Contraer menú' : 'Expandir menú');
      localStorage.setItem(collapseKey, String(!expanded));
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

  if (openEditClientModalButton) {
    openEditClientModalButton.addEventListener('click', openEditClientModal);
  }

  if (closeEditClientModalButton) {
    closeEditClientModalButton.addEventListener('click', closeEditClientModal);
  }

  if (cancelEditClientModalButton) {
    cancelEditClientModalButton.addEventListener('click', closeEditClientModal);
  }

  if (editClientModal) {
    editClientModal.addEventListener('click', (event) => {
      if (event.target === editClientModal) {
        closeEditClientModal();
      }
    });
  }

  if (openProjectsModalButton) {
    openProjectsModalButton.addEventListener('click', openProjectsModal);
  }

  if (closeProjectsModalButton) {
    closeProjectsModalButton.addEventListener('click', closeProjectsModal);
  }

  if (cancelProjectsModalButton) {
    cancelProjectsModalButton.addEventListener('click', closeProjectsModal);
  }

  if (projectsModal) {
    projectsModal.addEventListener('click', (event) => {
      if (event.target === projectsModal) {
        closeProjectsModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && editClientModal && !editClientModal.hidden) {
      closeEditClientModal();
    }

    if (event.key === 'Escape' && projectsModal && !projectsModal.hidden) {
      closeProjectsModal();
    }
  });

  if (editClientForm) {
    editClientForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(editClientForm);
      const fieldMap = {
        name: formData.get('fullName'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        owner: formData.get('owner'),
        'lead-source': formData.get('leadSource'),
      };

      Object.entries(fieldMap).forEach(([fieldName, value]) => {
        const target = document.querySelector(`[data-client-field="${fieldName}"]`);

        if (target && typeof value === 'string') {
          target.textContent = value;
        }
      });

      if (clientHeading && typeof formData.get('fullName') === 'string') {
        clientHeading.textContent = formData.get('fullName');
      }

      if (clientCompanyTag && typeof formData.get('company') === 'string') {
        clientCompanyTag.textContent = formData.get('company');
      }

      if (clientStatusTag && typeof formData.get('status') === 'string') {
        clientStatusTag.textContent = `Estado: ${formData.get('status')}`;
      }

      const projectsName = document.querySelector('[data-client-field="projects-name"]');
      const projectsCompany = document.querySelector('[data-client-field="projects-company"]');
      const projectsStatus = document.querySelector('[data-client-field="projects-status"]');

      if (projectsName && typeof formData.get('fullName') === 'string') {
        projectsName.textContent = formData.get('fullName');
      }

      if (projectsCompany && typeof formData.get('company') === 'string') {
        projectsCompany.textContent = formData.get('company');
      }

      if (projectsStatus && typeof formData.get('status') === 'string') {
        projectsStatus.textContent = `Estado: ${formData.get('status')}`;
      }

      closeEditClientModal();
    });
  }
});
