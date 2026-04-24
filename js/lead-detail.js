document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const followupModal = document.querySelector('#followupModal');
  const openFollowupModal = document.querySelector('#openFollowupModal');
  const closeFollowupModal = document.querySelector('#closeFollowupModal');
  const cancelFollowupModal = document.querySelector('#cancelFollowupModal');
  const saveFollowupChanges = document.querySelector('#saveFollowupChanges');
  const interactionModal = document.querySelector('#interactionModal');
  const openInteractionModal = document.querySelector('#openInteractionModal');
  const closeInteractionModal = document.querySelector('#closeInteractionModal');
  const cancelInteractionModal = document.querySelector('#cancelInteractionModal');
  const saveInteractionChanges = document.querySelector('#saveInteractionChanges');
  const convertOpportunityButton = document.querySelector('#convertOpportunityButton');
  const opportunityToast = document.querySelector('#opportunityToast');
  const customSelects = document.querySelectorAll('[data-select]');
  const backButton = document.querySelector('[data-back-target]');
  const collapseKey = 'erpMarketingSidebarCollapsed';

  if (sidebar) {
    const isCollapsed = localStorage.getItem(collapseKey) === 'true';
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

  const hideModal = () => {
    if (followupModal) {
      followupModal.hidden = true;
    }
  };

  const showModal = () => {
    if (followupModal) {
      followupModal.hidden = false;
    }
  };

  const hideInteractionModal = () => {
    if (interactionModal) {
      interactionModal.hidden = true;
    }
  };

  const showInteractionModal = () => {
    if (interactionModal) {
      interactionModal.hidden = false;
    }
  };

  if (openFollowupModal) {
    openFollowupModal.addEventListener('click', showModal);
  }

  if (closeFollowupModal) {
    closeFollowupModal.addEventListener('click', hideModal);
  }

  if (cancelFollowupModal) {
    cancelFollowupModal.addEventListener('click', hideModal);
  }

  if (saveFollowupChanges) {
    saveFollowupChanges.addEventListener('click', hideModal);
  }

  if (openInteractionModal) {
    openInteractionModal.addEventListener('click', showInteractionModal);
  }

  if (closeInteractionModal) {
    closeInteractionModal.addEventListener('click', hideInteractionModal);
  }

  if (cancelInteractionModal) {
    cancelInteractionModal.addEventListener('click', hideInteractionModal);
  }

  if (saveInteractionChanges) {
    saveInteractionChanges.addEventListener('click', hideInteractionModal);
  }

  if (convertOpportunityButton && opportunityToast) {
    convertOpportunityButton.addEventListener('click', () => {
      opportunityToast.hidden = false;
      window.clearTimeout(window.opportunityToastTimeout);
      window.opportunityToastTimeout = window.setTimeout(() => {
        opportunityToast.hidden = true;
      }, 2500);
    });
  }

  if (followupModal) {
    followupModal.addEventListener('click', (event) => {
      if (event.target === followupModal) {
        hideModal();
      }
    });
  }

  if (interactionModal) {
    interactionModal.addEventListener('click', (event) => {
      if (event.target === interactionModal) {
        hideInteractionModal();
      }
    });
  }

  const closeAllSelects = () => {
    customSelects.forEach((select) => {
      const trigger = select.querySelector('[data-select-trigger]');
      const menu = select.querySelector('.select-menu');
      select.classList.remove('is-open');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
      if (menu) {
        menu.hidden = true;
      }
    });
  };

  customSelects.forEach((select) => {
    const trigger = select.querySelector('[data-select-trigger]');
    const menu = select.querySelector('.select-menu');
    const valueHost = select.querySelector('[data-select-value]');
    const options = select.querySelectorAll('[data-select-option]');

    if (trigger && menu) {
      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = !select.classList.contains('is-open');
        closeAllSelects();
        select.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', String(willOpen));
        menu.hidden = !willOpen;
      });
    }

    options.forEach((option) => {
      option.addEventListener('click', () => {
        if (!valueHost) {
          return;
        }

        const chipClass = option.dataset.chipClass;
        const dotClass = option.dataset.dotClass;
        const value = option.dataset.value || '';
        const avatar = option.dataset.avatar;

        if (avatar) {
          valueHost.innerHTML = `<span class="owner"><span class="owner-avatar">${avatar}</span>${value}</span>`;
        } else {
          const dotClassText = dotClass ? ` ${dotClass}` : '';
          valueHost.innerHTML = `<span class="chip ${chipClass}"><span class="dot${dotClassText}"></span>${value}</span>`;
        }

        closeAllSelects();
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-select]')) {
      closeAllSelects();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && followupModal && !followupModal.hidden) {
      closeAllSelects();
      hideModal();
    }

    if (event.key === 'Escape' && interactionModal && !interactionModal.hidden) {
      closeAllSelects();
      hideInteractionModal();
    }
  });
});
