document.addEventListener('DOMContentLoaded', () => {
  const proposalModal = document.querySelector('#proposalDetailModal');
  const proposalViewModal = document.querySelector('#proposalViewModal');
  const newProposalModal = document.querySelector('#newProposalModal');
  const closeProposalModalButton = document.querySelector('#closeProposalDetailModal');
  const closeProposalViewModalButton = document.querySelector('#closeProposalViewModal');
  const closeNewProposalModalButton = document.querySelector('#closeNewProposalModal');
  const cancelProposalModalButton = document.querySelector('#cancelProposalDetailModal');
  const cancelProposalViewModalButton = document.querySelector('#cancelProposalViewModal');
  const cancelNewProposalModalButton = document.querySelector('#cancelNewProposalModal');
  const openNewProposalModalButton = document.querySelector('#openNewProposalModal');
  const proposalEditButtons = document.querySelectorAll('[data-open-proposal-modal]');
  const proposalViewRows = document.querySelectorAll('[data-open-proposal-view]');
  const proposalViewButtons = document.querySelectorAll('button[data-open-proposal-view]');
  const proposalDetailForm = document.querySelector('#proposalDetailForm');
  const newProposalForm = document.querySelector('#newProposalForm');

  const openProposalModal = () => {
    if (!proposalModal) {
      return;
    }

    proposalModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const openProposalViewModal = () => {
    if (!proposalViewModal) {
      return;
    }

    proposalViewModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const openNewProposalModal = () => {
    if (!newProposalModal) {
      return;
    }

    newProposalModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeProposalModal = () => {
    if (!proposalModal) {
      return;
    }

    proposalModal.hidden = true;
    document.body.style.overflow = '';
  };

  const closeProposalViewModal = () => {
    if (!proposalViewModal) {
      return;
    }

    proposalViewModal.hidden = true;
    document.body.style.overflow = '';
  };

  const closeNewProposalModal = () => {
    if (!newProposalModal) {
      return;
    }

    newProposalModal.hidden = true;
    document.body.style.overflow = '';
  };

  proposalViewRows.forEach((row) => {
    if (row.tagName === 'TR') {
      row.addEventListener('click', () => {
        openProposalViewModal();
      });

      row.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProposalViewModal();
        }
      });
    }
  });

  proposalViewButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      openProposalViewModal();
    });
  });

  proposalEditButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      openProposalModal();
    });
  });

  if (closeProposalModalButton) {
    closeProposalModalButton.addEventListener('click', closeProposalModal);
  }

  if (cancelProposalModalButton) {
    cancelProposalModalButton.addEventListener('click', closeProposalModal);
  }

  if (openNewProposalModalButton) {
    openNewProposalModalButton.addEventListener('click', openNewProposalModal);
  }

  if (closeProposalViewModalButton) {
    closeProposalViewModalButton.addEventListener('click', closeProposalViewModal);
  }

  if (cancelProposalViewModalButton) {
    cancelProposalViewModalButton.addEventListener('click', closeProposalViewModal);
  }

  if (closeNewProposalModalButton) {
    closeNewProposalModalButton.addEventListener('click', closeNewProposalModal);
  }

  if (cancelNewProposalModalButton) {
    cancelNewProposalModalButton.addEventListener('click', closeNewProposalModal);
  }

  if (proposalDetailForm) {
    proposalDetailForm.addEventListener('submit', (event) => {
      event.preventDefault();
      closeProposalModal();
    });
  }

  if (newProposalForm) {
    newProposalForm.addEventListener('submit', (event) => {
      event.preventDefault();
      closeNewProposalModal();
    });
  }

  if (proposalModal) {
    proposalModal.addEventListener('click', (event) => {
      if (event.target === proposalModal) {
        closeProposalModal();
      }
    });
  }

  if (proposalViewModal) {
    proposalViewModal.addEventListener('click', (event) => {
      if (event.target === proposalViewModal) {
        closeProposalViewModal();
      }
    });
  }

  if (newProposalModal) {
    newProposalModal.addEventListener('click', (event) => {
      if (event.target === newProposalModal) {
        closeNewProposalModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && proposalModal && !proposalModal.hidden) {
      closeProposalModal();
    }

    if (event.key === 'Escape' && proposalViewModal && !proposalViewModal.hidden) {
      closeProposalViewModal();
    }

    if (event.key === 'Escape' && newProposalModal && !newProposalModal.hidden) {
      closeNewProposalModal();
    }
  });
});
