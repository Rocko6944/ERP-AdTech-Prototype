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
