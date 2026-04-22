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
