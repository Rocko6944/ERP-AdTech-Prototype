document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const openCreateProjectModalButton = document.querySelector('#openCreateProjectModal');
  const createProjectModal = document.querySelector('#createProjectModal');
  const closeCreateProjectModalButton = document.querySelector('#closeCreateProjectModal');
  const cancelCreateProjectModalButton = document.querySelector('#cancelCreateProjectModal');
  const createProjectForm = document.querySelector('#createProjectForm');
  const createProjectServicesList = document.querySelector('#createProjectServicesList');
  const createServiceTypeInput = document.querySelector('#createServiceTypeInput');
  const createServiceDescriptionInput = document.querySelector('#createServiceDescriptionInput');
  const createServiceQuantityInput = document.querySelector('#createServiceQuantityInput');
  const createServicePriceInput = document.querySelector('#createServicePriceInput');
  const addCreateServiceButton = document.querySelector('#addCreateServiceButton');
  const projectModal = document.querySelector('#projectModal');
  const projectViewModal = document.querySelector('#projectViewModal');
  const projectRows = document.querySelectorAll('.operations-table tbody tr');
  const openProjectViewButtons = document.querySelectorAll('.open-project-view');
  const openProjectModalButtons = document.querySelectorAll('.open-project-modal');
  const closeProjectModalButton = document.querySelector('#closeProjectModal');
  const closeProjectViewModalButton = document.querySelector('#closeProjectViewModal');
  const closeProjectViewFooterButton = document.querySelector('#closeProjectViewFooter');
  const cancelProjectModalButton = document.querySelector('#cancelProjectModal');
  const projectForm = document.querySelector('#projectForm');
  const projectModalSubtitle = document.querySelector('#projectModalSubtitle');
  const projectNameInput = document.querySelector('#projectNameInput');
  const projectClientInput = document.querySelector('#projectClientInput');
  const projectStatusInput = document.querySelector('#projectStatusInput');
  const projectOwnerInput = document.querySelector('#projectOwnerInput');
  const projectProgressInput = document.querySelector('#projectProgressInput');
  const progressValue = document.querySelector('#progressValue');
  const decreaseProgressButton = document.querySelector('#decreaseProgress');
  const increaseProgressButton = document.querySelector('#increaseProgress');
  const projectServicesList = document.querySelector('#projectServicesList');
  const serviceTypeInput = document.querySelector('#serviceTypeInput');
  const serviceDescriptionInput = document.querySelector('#serviceDescriptionInput');
  const serviceQuantityInput = document.querySelector('#serviceQuantityInput');
  const serviceObservationInput = document.querySelector('#serviceObservationInput');
  const addServiceButton = document.querySelector('#addServiceButton');
  const projectViewTitle = document.querySelector('#projectViewTitle');
  const projectViewClient = document.querySelector('#projectViewClient');
  const projectViewStatus = document.querySelector('#projectViewStatus');
  const projectViewStartDate = document.querySelector('#projectViewStartDate');
  const projectViewEndDate = document.querySelector('#projectViewEndDate');
  const projectViewOwner = document.querySelector('#projectViewOwner');
  const projectViewProgressLabel = document.querySelector('#projectViewProgressLabel');
  const projectViewProgressFill = document.querySelector('#projectViewProgressFill');
  const projectViewNotes = document.querySelector('#projectViewNotes');
  const projectViewOwnerSide = document.querySelector('#projectViewOwnerSide');
  const projectViewStatusSide = document.querySelector('#projectViewStatusSide');
  const projectViewUpdated = document.querySelector('#projectViewUpdated');
  const projectViewServicesList = document.querySelector('#projectViewServicesList');
  const collapseKey = 'erpOperationsSidebarCollapsed';
  const defaultServices = [
    {
      service: 'Marketing digital',
      description: 'Gestion de campanas y pauta digital',
      quantity: 1,
      observation: 'Seguimiento semanal'
    },
    {
      service: 'Branding estrategico',
      description: 'Definicion de identidad y posicionamiento',
      quantity: 1,
      observation: 'Alineado con la marca actual'
    },
    {
      service: 'Direccion estrategica',
      description: 'Planeacion comercial y operativa',
      quantity: 1,
      observation: 'Revision quincenal'
    },
    {
      service: 'Activaciones y eventos',
      description: 'Ejecucion de activaciones presenciales',
      quantity: 1,
      observation: 'Coordinar logistica del evento'
    }
  ];
  let projectServices = [];
  let createProjectServices = [];

  const defaultCreateServices = [
    {
      service: 'Marketing digital',
      description: 'Optimizacion SEO On-Page y mejora de contenidos',
      quantity: 10,
      price: 150
    },
    {
      service: 'Branding estrategico',
      description: 'Creacion de contenidos y articulos de blog semanal',
      quantity: 1,
      price: 1000
    }
  ];

  const formatCurrency = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: value % 1 === 0 ? 0 : 2
    }).format(value);

  const buildProjectDetailUrl = (source) => {
    const params = new URLSearchParams({
      name: source.dataset.projectName || 'Proyecto',
      client: source.dataset.client || '',
      startDate: source.dataset.startDate || '',
      endDate: source.dataset.endDate || '',
      owner: source.dataset.owner || '',
      progress: source.dataset.progress || '0',
      notes: source.dataset.notes || '',
      budget: source.dataset.budget || 'S/ 5000'
    });

    return `project-detail.html?${params.toString()}`;
  };

  const hideCreateProjectModal = () => {
    if (createProjectModal) {
      createProjectModal.hidden = true;
    }
  };

  const openCreateProjectModal = () => {
    if (!createProjectModal) {
      return;
    }

    loadDefaultCreateServices();
    createProjectModal.hidden = false;
  };

  const hideProjectModal = () => {
    if (projectModal) {
      projectModal.hidden = true;
    }
  };

  const hideProjectViewModal = () => {
    if (projectViewModal) {
      projectViewModal.hidden = true;
    }
  };

  const openProjectViewModal = (source) => {
    if (!source) {
      return;
    }

    if (projectViewTitle) {
      projectViewTitle.textContent = source.dataset.projectName || 'Proyecto';
    }

    if (projectViewClient) {
      projectViewClient.textContent = source.dataset.client || '';
    }

    if (projectViewStatus) {
      projectViewStatus.textContent = source.dataset.status || '';
    }

    if (projectViewStatusSide) {
      projectViewStatusSide.textContent = source.dataset.status || '';
    }

    if (projectViewStartDate) {
      projectViewStartDate.textContent = source.dataset.startDate || '';
    }

    if (projectViewEndDate) {
      projectViewEndDate.textContent = source.dataset.endDate || '';
    }

    if (projectViewOwner) {
      projectViewOwner.textContent = source.dataset.owner || '';
    }

    if (projectViewOwnerSide) {
      projectViewOwnerSide.textContent = source.dataset.owner || '';
    }

    if (projectViewProgressLabel) {
      projectViewProgressLabel.textContent = `${source.dataset.progress || '0'}%`;
    }

    if (projectViewProgressFill) {
      projectViewProgressFill.style.width = `${source.dataset.progress || '0'}%`;
    }

    if (projectViewNotes) {
      projectViewNotes.textContent = source.dataset.notes || '';
    }

    if (projectViewUpdated) {
      projectViewUpdated.textContent = source.dataset.updated || '';
    }

    renderViewServices();

    if (projectViewModal) {
      projectViewModal.hidden = false;
    }
  };

  const syncProgressValue = () => {
    if (projectProgressInput && progressValue) {
      progressValue.textContent = `${projectProgressInput.value}%`;
    }
  };

  const resetServiceEditor = () => {
    if (serviceTypeInput) {
      serviceTypeInput.value = 'Marketing digital';
    }

    if (serviceDescriptionInput) {
      serviceDescriptionInput.value = '';
    }

    if (serviceQuantityInput) {
      serviceQuantityInput.value = '1';
    }

    if (serviceObservationInput) {
      serviceObservationInput.value = '';
    }
  };

  const resetCreateServiceEditor = () => {
    if (createServiceTypeInput) {
      createServiceTypeInput.value = 'Marketing digital';
    }

    if (createServiceDescriptionInput) {
      createServiceDescriptionInput.value = '';
    }

    if (createServiceQuantityInput) {
      createServiceQuantityInput.value = '1';
    }

    if (createServicePriceInput) {
      createServicePriceInput.value = '0';
    }
  };

  const renderServices = () => {
    if (!projectServicesList) {
      return;
    }

    projectServicesList.innerHTML = '';

    projectServices.forEach((service, index) => {
      const row = document.createElement('div');
      row.className = 'service-table-row';
      row.innerHTML = `
        <span>${service.service}</span>
        <span>${service.description}</span>
        <span>${service.quantity}</span>
        <span>${service.observation}</span>
        <button type="button" class="service-delete-button" data-service-index="${index}">Eliminar</button>
      `;
      projectServicesList.appendChild(row);
    });
  };

  const loadDefaultServices = () => {
    projectServices = defaultServices.map((service) => ({ ...service }));
    renderServices();
    resetServiceEditor();
  };

  const renderCreateServices = () => {
    if (!createProjectServicesList) {
      return;
    }

    createProjectServicesList.innerHTML = '';

    createProjectServices.forEach((service, index) => {
      const row = document.createElement('div');
      const total = service.quantity * service.price;
      row.className = 'service-table-row create-service-row';
      row.innerHTML = `
        <span>${service.service}</span>
        <span>${service.description}</span>
        <span>${service.quantity}</span>
        <span>${formatCurrency(service.price)}</span>
        <span>${formatCurrency(total)}</span>
        <button type="button" class="service-delete-button" data-create-service-index="${index}">Quitar</button>
      `;
      createProjectServicesList.appendChild(row);
    });
  };

  const loadDefaultCreateServices = () => {
    createProjectServices = defaultCreateServices.map((service) => ({ ...service }));
    renderCreateServices();
    resetCreateServiceEditor();
  };

  const renderViewServices = () => {
    if (!projectViewServicesList) {
      return;
    }

    projectViewServicesList.innerHTML = '';

    defaultServices.forEach((service) => {
      const row = document.createElement('div');
      row.className = 'service-table-row';
      row.innerHTML = `
        <span>${service.service}</span>
        <span>${service.description}</span>
        <span>${service.quantity}</span>
      `;
      projectViewServicesList.appendChild(row);
    });
  };

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

  if (openCreateProjectModalButton) {
    openCreateProjectModalButton.addEventListener('click', openCreateProjectModal);
  }

  openProjectModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (projectModalSubtitle) {
        projectModalSubtitle.textContent = button.dataset.projectName || 'Proyecto';
      }

      if (projectNameInput && button.dataset.projectName) {
        projectNameInput.value = button.dataset.projectName;
      }

      if (projectClientInput && button.dataset.client) {
        projectClientInput.value = button.dataset.client;
      }

      if (projectStatusInput && button.dataset.status) {
        projectStatusInput.value = button.dataset.status;
      }

      if (projectOwnerInput && button.dataset.owner) {
        projectOwnerInput.value = button.dataset.owner;
      }

      loadDefaultServices();

      if (projectModal) {
        projectModal.hidden = false;
      }
    });
  });

  openProjectViewButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      openProjectViewModal(button);
    });
  });

  projectRows.forEach((row) => {
    const projectViewButton = row.querySelector('.open-project-view');

    if (!projectViewButton) {
      return;
    }

    row.classList.add('project-row');
    row.tabIndex = 0;

    row.addEventListener('click', (event) => {
      if (event.target.closest('button, a, input, select, textarea, label')) {
        return;
      }

      window.location.href = buildProjectDetailUrl(projectViewButton);
    });

    row.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      if (event.target !== row) {
        return;
      }

      event.preventDefault();
      window.location.href = buildProjectDetailUrl(projectViewButton);
    });
  });

  if (closeProjectModalButton) {
    closeProjectModalButton.addEventListener('click', hideProjectModal);
  }

  if (closeCreateProjectModalButton) {
    closeCreateProjectModalButton.addEventListener('click', hideCreateProjectModal);
  }

  if (closeProjectViewModalButton) {
    closeProjectViewModalButton.addEventListener('click', hideProjectViewModal);
  }

  if (closeProjectViewFooterButton) {
    closeProjectViewFooterButton.addEventListener('click', hideProjectViewModal);
  }

  if (cancelProjectModalButton) {
    cancelProjectModalButton.addEventListener('click', hideProjectModal);
  }

  if (cancelCreateProjectModalButton) {
    cancelCreateProjectModalButton.addEventListener('click', hideCreateProjectModal);
  }

  if (projectForm) {
    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();
      hideProjectModal();
    });
  }

  if (addServiceButton) {
    addServiceButton.addEventListener('click', () => {
      const service = serviceTypeInput ? serviceTypeInput.value.trim() : '';
      const description = serviceDescriptionInput ? serviceDescriptionInput.value.trim() : '';
      const quantity = serviceQuantityInput ? Number(serviceQuantityInput.value) : 0;
      const observation = serviceObservationInput ? serviceObservationInput.value.trim() : '';

      if (!service || !description || quantity < 1 || !observation) {
        return;
      }

      projectServices.push({
        service,
        description,
        quantity,
        observation
      });

      renderServices();
      resetServiceEditor();
    });
  }

  if (createProjectForm) {
    createProjectForm.addEventListener('submit', (event) => {
      event.preventDefault();
      hideCreateProjectModal();
    });
  }

  if (addCreateServiceButton) {
    addCreateServiceButton.addEventListener('click', () => {
      const service = createServiceTypeInput ? createServiceTypeInput.value.trim() : '';
      const description = createServiceDescriptionInput ? createServiceDescriptionInput.value.trim() : '';
      const quantity = createServiceQuantityInput ? Number(createServiceQuantityInput.value) : 0;
      const price = createServicePriceInput ? Number(createServicePriceInput.value) : 0;

      if (!service || !description || quantity < 1 || price < 0) {
        return;
      }

      createProjectServices.push({
        service,
        description,
        quantity,
        price
      });

      renderCreateServices();
      resetCreateServiceEditor();
    });
  }

  if (projectServicesList) {
    projectServicesList.addEventListener('click', (event) => {
      const deleteButton = event.target.closest('[data-service-index]');

      if (!deleteButton) {
        return;
      }

      const index = Number(deleteButton.dataset.serviceIndex);

      if (Number.isNaN(index)) {
        return;
      }

      projectServices.splice(index, 1);
      renderServices();
    });
  }

  if (createProjectServicesList) {
    createProjectServicesList.addEventListener('click', (event) => {
      const deleteButton = event.target.closest('[data-create-service-index]');

      if (!deleteButton) {
        return;
      }

      const index = Number(deleteButton.dataset.createServiceIndex);

      if (Number.isNaN(index)) {
        return;
      }

      createProjectServices.splice(index, 1);
      renderCreateServices();
    });
  }

  if (projectModal) {
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal) {
        hideProjectModal();
      }
    });
  }

  if (createProjectModal) {
    createProjectModal.addEventListener('click', (event) => {
      if (event.target === createProjectModal) {
        hideCreateProjectModal();
      }
    });
  }

  if (projectViewModal) {
    projectViewModal.addEventListener('click', (event) => {
      if (event.target === projectViewModal) {
        hideProjectViewModal();
      }
    });
  }

  if (projectProgressInput) {
    syncProgressValue();
    projectProgressInput.addEventListener('input', syncProgressValue);
  }

  if (decreaseProgressButton && projectProgressInput) {
    decreaseProgressButton.addEventListener('click', () => {
      projectProgressInput.value = Math.max(0, Number(projectProgressInput.value) - 5);
      syncProgressValue();
    });
  }

  if (increaseProgressButton && projectProgressInput) {
    increaseProgressButton.addEventListener('click', () => {
      projectProgressInput.value = Math.min(100, Number(projectProgressInput.value) + 5);
      syncProgressValue();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (projectModal && !projectModal.hidden) {
        hideProjectModal();
      }

      if (createProjectModal && !createProjectModal.hidden) {
        hideCreateProjectModal();
      }

      if (projectViewModal && !projectViewModal.hidden) {
        hideProjectViewModal();
      }
    }
  });

  loadDefaultServices();
  loadDefaultCreateServices();
  renderViewServices();
});
