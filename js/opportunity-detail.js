document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const followupModal = document.querySelector('#followupModal');
  const openFollowupModalButton = document.querySelector('#openFollowupModal');
  const closeFollowupModalButton = document.querySelector('#closeFollowupModal');
  const cancelFollowupModalButton = document.querySelector('#cancelFollowupModal');
  const followupForm = document.querySelector('#followupForm');
  const probabilityRange = document.querySelector('#probabilityRange');
  const probabilityValue = document.querySelector('#probabilityValue');
  const followupToast = document.querySelector('#followupToast');
  const markOpportunityWonButton = document.querySelector('#markOpportunityWon');
  const opportunityWonToast = document.querySelector('#opportunityWonToast');
  const collapseKey = 'erpSalesSidebarCollapsed';

  if (followupModal) {
    followupModal.hidden = true;
  }

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

  const hideFollowupModal = () => {
    if (followupModal) {
      followupModal.hidden = true;
    }
  };

  const showFollowupModal = () => {
    if (followupModal) {
      followupModal.hidden = false;
    }
  };

  if (openFollowupModalButton) {
    openFollowupModalButton.addEventListener('click', showFollowupModal);
  }

  if (closeFollowupModalButton) {
    closeFollowupModalButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      hideFollowupModal();
    });
  }

  if (cancelFollowupModalButton) {
    cancelFollowupModalButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      hideFollowupModal();
    });
  }

  if (followupForm) {
    followupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      hideFollowupModal();

      if (followupToast) {
        followupToast.hidden = false;
        window.clearTimeout(window.followupToastTimeout);
        window.followupToastTimeout = window.setTimeout(() => {
          followupToast.hidden = true;
        }, 2200);
      }
    });
  }

  if (markOpportunityWonButton) {
    markOpportunityWonButton.addEventListener('click', () => {
      if (opportunityWonToast) {
        opportunityWonToast.hidden = false;
        window.clearTimeout(window.opportunityWonToastTimeout);
        window.opportunityWonToastTimeout = window.setTimeout(() => {
          opportunityWonToast.hidden = true;
        }, 2600);
      }
    });
  }

  if (followupModal) {
    followupModal.addEventListener('click', (event) => {
      if (event.target === followupModal) {
        hideFollowupModal();
      }
    });
  }

  if (probabilityRange && probabilityValue) {
    probabilityRange.addEventListener('input', () => {
      probabilityValue.value = `${probabilityRange.value}%`;
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && followupModal && !followupModal.hidden) {
      hideFollowupModal();
    }
  });
});
