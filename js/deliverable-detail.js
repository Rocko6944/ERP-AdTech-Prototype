document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const title = document.querySelector('#deliverableTitle');
  const client = document.querySelector('#deliverableClient');
  const project = document.querySelector('#deliverableProject');
  const markDeliverableDeliveredButton = document.querySelector('#markDeliverableDelivered');
  const openDeliverableEditModalButton = document.querySelector('#openDeliverableEditModal');
  const dueDateCard = document.querySelector('#deliverableDueDateCard');
  const ownerCard = document.querySelector('#deliverableOwnerCard');
  const progressCard = document.querySelector('#deliverableProgressCard');
  const typeCard = document.querySelector('#deliverableTypeCard');
  const description = document.querySelector('#deliverableDescription');
  const content = document.querySelector('#deliverableContent');
  const statePill = document.querySelector('#deliverableStatePill');
  const stateNote = document.querySelector('#deliverableStateNote');
  const progressLabel = document.querySelector('#deliverableProgressLabel');
  const progressFill = document.querySelector('#deliverableProgressFill');
  const deliverableEditModal = document.querySelector('#deliverableEditModal');
  const closeDeliverableEditModalButton = document.querySelector('#closeDeliverableEditModal');
  const cancelDeliverableEditButton = document.querySelector('#cancelDeliverableEdit');
  const saveDeliverableEditButton = document.querySelector('#saveDeliverableEdit');
  const deliverableEditName = document.querySelector('#deliverableEditName');
  const deliverableEditDescription = document.querySelector('#deliverableEditDescription');
  const deliverableEditType = document.querySelector('#deliverableEditType');
  const deliverableEditContent = document.querySelector('#deliverableEditContent');
  const deliverableEditOwner = document.querySelector('#deliverableEditOwner');
  const deliverableEditDueDate = document.querySelector('#deliverableEditDueDate');
  const deliverableEditStatus = document.querySelector('#deliverableEditStatus');
  const deliverableEditProgress = document.querySelector('#deliverableEditProgress');
  const deliverableEditProgressValue = document.querySelector('#deliverableEditProgressValue');
  const deliverableStatusToast = document.querySelector('#deliverableStatusToast');
  const collapseKey = 'erpOperationsSidebarCollapsed';
  const params = new URLSearchParams(window.location.search);
  let toastTimeoutId = null;

  const detail = {
    name: params.get('name') || 'Reporte campaña junio',
    client: params.get('client') || 'Tech Solution Inc.',
    project: params.get('project') || 'Renovación Tech',
    dueDate: params.get('dueDate') || '30/06/26',
    owner: params.get('owner') || 'Carlos P.',
    progress: params.get('progress') || '65',
    type: params.get('type') || 'Documento',
    description:
      params.get('description') ||
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, et sodala euismod nonigium.',
    content: params.get('content') || 'Docu-typeStructured',
    status: params.get('status') || 'Entregado',
    note: params.get('note') || 'Entregado al cliente'
  };

  const renderDetail = () => {
    if (title) {
      title.textContent = detail.name;
    }

    if (client) {
      client.textContent = detail.client;
    }

    if (project) {
      project.textContent = detail.project;
    }

    if (dueDateCard) {
      dueDateCard.textContent = detail.dueDate;
    }

    if (ownerCard) {
      ownerCard.textContent = detail.owner;
    }

    if (progressCard) {
      progressCard.textContent = `${detail.progress}%`;
    }

    if (typeCard) {
      typeCard.textContent = detail.type;
    }

    if (description) {
      description.textContent = detail.description;
    }

    if (content) {
      content.textContent = detail.content;
    }

    if (statePill) {
      statePill.textContent = detail.status;
    }

    if (stateNote) {
      stateNote.textContent = detail.note;
    }

    if (progressLabel) {
      progressLabel.textContent = `${detail.progress}%`;
    }

    if (progressFill) {
      progressFill.style.width = `${detail.progress}%`;
    }
  };

  const syncEditProgressValue = () => {
    if (deliverableEditProgress && deliverableEditProgressValue) {
      deliverableEditProgressValue.textContent = `${deliverableEditProgress.value}%`;
    }
  };

  const hideDeliverableEditModal = () => {
    if (deliverableEditModal) {
      deliverableEditModal.hidden = true;
    }
  };

  const openDeliverableEditModal = () => {
    if (!deliverableEditModal) {
      return;
    }

    if (deliverableEditName) {
      deliverableEditName.value = detail.name;
    }

    if (deliverableEditDescription) {
      deliverableEditDescription.value = detail.description;
    }

    if (deliverableEditType) {
      deliverableEditType.value = detail.type;
    }

    if (deliverableEditContent) {
      deliverableEditContent.value = detail.content;
    }

    if (deliverableEditOwner) {
      deliverableEditOwner.value = detail.owner;
    }

    if (deliverableEditDueDate) {
      deliverableEditDueDate.value = detail.dueDate;
    }

    if (deliverableEditStatus) {
      deliverableEditStatus.value = detail.status;
    }

    if (deliverableEditProgress) {
      deliverableEditProgress.value = detail.progress;
    }

    syncEditProgressValue();
    deliverableEditModal.hidden = false;
  };

  const showStatusToast = () => {
    if (!deliverableStatusToast) {
      return;
    }

    if (toastTimeoutId) {
      clearTimeout(toastTimeoutId);
    }

    deliverableStatusToast.hidden = false;
    toastTimeoutId = window.setTimeout(() => {
      deliverableStatusToast.hidden = true;
    }, 2400);
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
      sidebarToggle.setAttribute('aria-label', collapsed ? 'Expandir menu' : 'Contraer menu');
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

  if (markDeliverableDeliveredButton) {
    markDeliverableDeliveredButton.addEventListener('click', () => {
      detail.status = 'Entregado';
      detail.note = 'Entregado al cliente';
      renderDetail();
      showStatusToast();
    });
  }

  if (openDeliverableEditModalButton) {
    openDeliverableEditModalButton.addEventListener('click', openDeliverableEditModal);
  }

  if (deliverableEditProgress) {
    syncEditProgressValue();
    deliverableEditProgress.addEventListener('input', syncEditProgressValue);
  }

  if (closeDeliverableEditModalButton) {
    closeDeliverableEditModalButton.addEventListener('click', hideDeliverableEditModal);
  }

  if (cancelDeliverableEditButton) {
    cancelDeliverableEditButton.addEventListener('click', hideDeliverableEditModal);
  }

  if (saveDeliverableEditButton) {
    saveDeliverableEditButton.addEventListener('click', () => {
      if (deliverableEditName) {
        detail.name = deliverableEditName.value.trim() || detail.name;
      }

      if (deliverableEditDescription) {
        detail.description = deliverableEditDescription.value.trim() || detail.description;
      }

      if (deliverableEditType) {
        detail.type = deliverableEditType.value;
      }

      if (deliverableEditContent) {
        detail.content = deliverableEditContent.value.trim() || detail.content;
      }

      if (deliverableEditOwner) {
        detail.owner = deliverableEditOwner.value;
      }

      if (deliverableEditDueDate) {
        detail.dueDate = deliverableEditDueDate.value.trim() || detail.dueDate;
      }

      if (deliverableEditStatus) {
        detail.status = deliverableEditStatus.value;
      }

      if (deliverableEditProgress) {
        detail.progress = deliverableEditProgress.value;
      }

      renderDetail();
      hideDeliverableEditModal();
    });
  }

  if (deliverableEditModal) {
    deliverableEditModal.addEventListener('click', (event) => {
      if (event.target === deliverableEditModal) {
        hideDeliverableEditModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && deliverableEditModal && !deliverableEditModal.hidden) {
      hideDeliverableEditModal();
    }
  });

  renderDetail();
});
