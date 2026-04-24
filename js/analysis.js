document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const filterClearButtons = document.querySelectorAll('.filter-clear');
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');
  const exportTriggerButtons = document.querySelectorAll('[data-export-trigger]');
  const exportModal = document.querySelector('#exportModal');
  const closeExportModalButton = document.querySelector('#closeExportModal');
  const cancelExportModalButton = document.querySelector('#cancelExportModal');
  const confirmExportModalButton = document.querySelector('#confirmExportModal');
  const exportFormatCards = document.querySelectorAll('[data-export-format]');
  const exportFilteredOnly = document.querySelector('#exportFilteredOnly');
  const collapseKey = 'erpAnalysisSidebarCollapsed';
  let selectedExportFormat = 'pdf';
  let currentExportSection = '';

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

  const activateTab = (target) => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tabTarget === target;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });

    tabPanels.forEach((panel) => {
      panel.hidden = panel.dataset.tabPanel !== target;
    });
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activateTab(button.dataset.tabTarget);
    });
  });

  filterClearButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.closest('.analysis-view');

      if (!view) {
        return;
      }

      const inputs = view.querySelectorAll('input[type="date"], select');
      inputs.forEach((input) => {
        if (input.tagName === 'SELECT') {
          input.selectedIndex = 0;
          return;
        }

        input.value = '';
      });
    });
  });

  const syncExportFormats = () => {
    exportFormatCards.forEach((card) => {
      const isSelected = card.dataset.exportFormat === selectedExportFormat;
      card.classList.toggle('is-selected', isSelected);
      card.setAttribute('aria-checked', String(isSelected));
    });
  };

  const hideExportModal = () => {
    if (exportModal) {
      exportModal.hidden = true;
    }
  };

  const showExportModal = (section) => {
    if (!exportModal) {
      return;
    }

    currentExportSection = section;
    selectedExportFormat = 'pdf';
    syncExportFormats();

    if (exportFilteredOnly) {
      exportFilteredOnly.checked = true;
    }

    exportModal.hidden = false;
  };

  exportTriggerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showExportModal(button.dataset.exportTrigger || '');
    });
  });

  exportFormatCards.forEach((card) => {
    card.addEventListener('click', () => {
      selectedExportFormat = card.dataset.exportFormat || 'pdf';
      syncExportFormats();
    });
  });

  if (closeExportModalButton) {
    closeExportModalButton.addEventListener('click', hideExportModal);
  }

  if (cancelExportModalButton) {
    cancelExportModalButton.addEventListener('click', hideExportModal);
  }

  if (exportModal) {
    exportModal.addEventListener('click', (event) => {
      if (event.target === exportModal) {
        hideExportModal();
      }
    });
  }

  if (confirmExportModalButton) {
    confirmExportModalButton.addEventListener('click', () => {
      const scope = exportFilteredOnly && exportFilteredOnly.checked ? 'segun filtros actuales' : 'con todos los datos';
      const sectionLabel = currentExportSection ? `de ${currentExportSection}` : 'del reporte';
      const formatLabel = selectedExportFormat === 'xlsx' ? 'Excel (.xlsx)' : 'PDF';

      hideExportModal();
      window.alert(`Se preparó la exportación ${sectionLabel} en formato ${formatLabel}, ${scope}.`);
    });
  }
});
