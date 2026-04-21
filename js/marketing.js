document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const clickableRows = document.querySelectorAll('.clickable-row');
  const backButton = document.querySelector('[data-back-target]');
  const openCampaignModalButton = document.querySelector('#openCampaignModal');
  const campaignModal = document.querySelector('#campaignModal');
  const closeCampaignModalButton = document.querySelector('#closeCampaignModal');
  const cancelCampaignModalButton = document.querySelector('#cancelCampaignModal');
  const campaignForm = document.querySelector('#campaignForm');
  const toggleAudienceCreatorButton = document.querySelector('#toggleAudienceCreator');
  const audienceCreator = document.querySelector('#audienceCreator');
  const audienceSelect = document.querySelector('#audienceSelect');
  const newAudienceName = document.querySelector('#newAudienceName');
  const saveAudienceButton = document.querySelector('#saveAudienceButton');
  const audienceLocation = document.querySelector('#audienceLocation');
  const audienceAgeRange = document.querySelector('#audienceAgeRange');
  const audienceInterests = document.querySelector('#audienceInterests');
  const campaignAssetInput = document.querySelector('#campaignAsset');
  const campaignAssetSummary = document.querySelector('#campaignAssetSummary');
  const campaignToast = document.querySelector('#campaignToast');
  const openCampaignLeadsModalButton = document.querySelector('#openCampaignLeadsModal');
  const campaignLeadsModal = document.querySelector('#campaignLeadsModal');
  const closeCampaignLeadsModalButton = document.querySelector('#closeCampaignLeadsModal');
  const closeCampaignLeadsFooterButton = document.querySelector('#closeCampaignLeadsFooter');
  const openEditCampaignModalButton = document.querySelector('#openEditCampaignModal');
  const openEditCampaignModalButtons = document.querySelectorAll('.open-edit-campaign-modal');
  const editCampaignModal = document.querySelector('#editCampaignModal');
  const closeEditCampaignModalButton = document.querySelector('#closeEditCampaignModal');
  const cancelEditCampaignModalButton = document.querySelector('#cancelEditCampaignModal');
  const editCampaignForm = document.querySelector('#editCampaignForm');
  const editCampaignToast = document.querySelector('#editCampaignToast');
  const automationCards = document.querySelectorAll('.automation-card');
  const openAutomationEditButtons = document.querySelectorAll('.open-automation-edit');
  const openAutomationDeleteButtons = document.querySelectorAll('.open-automation-delete');
  const automationEditModal = document.querySelector('#automationEditModal');
  const closeAutomationEditModalButton = document.querySelector('#closeAutomationEditModal');
  const cancelAutomationEditModalButton = document.querySelector('#cancelAutomationEditModal');
  const automationEditForm = document.querySelector('#automationEditForm');
  const automationEditName = document.querySelector('#automationEditName');
  const automationEditDescription = document.querySelector('#automationEditDescription');
  const automationEditArea = document.querySelector('#automationEditArea');
  const automationDeleteModal = document.querySelector('#automationDeleteModal');
  const closeAutomationDeleteModalButton = document.querySelector('#closeAutomationDeleteModal');
  const cancelAutomationDeleteModalButton = document.querySelector('#cancelAutomationDeleteModal');
  const confirmAutomationDeleteButton = document.querySelector('#confirmAutomationDelete');
  const automationDeleteName = document.querySelector('#automationDeleteName');
  const automationToast = document.querySelector('#automationToast');
  const automationDeleteToast = document.querySelector('#automationDeleteToast');
  const collapseKey = 'erpMarketingSidebarCollapsed';
  let activeAutomationCard = null;

  if (sidebar) {
    const isCollapsed = localStorage.getItem(collapseKey) === 'true';
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

  const hideCampaignModal = () => {
    if (campaignModal) {
      campaignModal.hidden = true;
    }
  };

  const showCampaignModal = () => {
    if (campaignModal) {
      campaignModal.hidden = false;
    }
  };

  const hideCampaignLeadsModal = () => {
    if (campaignLeadsModal) {
      campaignLeadsModal.hidden = true;
    }
  };

  const showCampaignLeadsModal = () => {
    if (campaignLeadsModal) {
      campaignLeadsModal.hidden = false;
    }
  };

  const hideEditCampaignModal = () => {
    if (editCampaignModal) {
      editCampaignModal.hidden = true;
    }
  };

  const showEditCampaignModal = () => {
    if (editCampaignModal) {
      editCampaignModal.hidden = false;
    }
  };

  const hideAutomationEditModal = () => {
    if (automationEditModal) {
      automationEditModal.hidden = true;
    }
  };

  const showAutomationEditModal = () => {
    if (automationEditModal) {
      automationEditModal.hidden = false;
    }
  };

  const hideAutomationDeleteModal = () => {
    if (automationDeleteModal) {
      automationDeleteModal.hidden = true;
    }
  };

  const showAutomationDeleteModal = () => {
    if (automationDeleteModal) {
      automationDeleteModal.hidden = false;
    }
  };

  if (openCampaignModalButton) {
    openCampaignModalButton.addEventListener('click', showCampaignModal);
  }

  if (closeCampaignModalButton) {
    closeCampaignModalButton.addEventListener('click', hideCampaignModal);
  }

  if (cancelCampaignModalButton) {
    cancelCampaignModalButton.addEventListener('click', hideCampaignModal);
  }

  if (campaignModal) {
    campaignModal.addEventListener('click', (event) => {
      if (event.target === campaignModal) {
        hideCampaignModal();
      }
    });
  }

  if (openCampaignLeadsModalButton) {
    openCampaignLeadsModalButton.addEventListener('click', showCampaignLeadsModal);
  }

  if (closeCampaignLeadsModalButton) {
    closeCampaignLeadsModalButton.addEventListener('click', hideCampaignLeadsModal);
  }

  if (closeCampaignLeadsFooterButton) {
    closeCampaignLeadsFooterButton.addEventListener('click', hideCampaignLeadsModal);
  }

  if (campaignLeadsModal) {
    campaignLeadsModal.addEventListener('click', (event) => {
      if (event.target === campaignLeadsModal) {
        hideCampaignLeadsModal();
      }
    });
  }

  if (openEditCampaignModalButton) {
    openEditCampaignModalButton.addEventListener('click', showEditCampaignModal);
  }

  openEditCampaignModalButtons.forEach((button) => {
    button.addEventListener('click', showEditCampaignModal);
  });

  if (closeEditCampaignModalButton) {
    closeEditCampaignModalButton.addEventListener('click', hideEditCampaignModal);
  }

  if (cancelEditCampaignModalButton) {
    cancelEditCampaignModalButton.addEventListener('click', hideEditCampaignModal);
  }

  if (editCampaignModal) {
    editCampaignModal.addEventListener('click', (event) => {
      if (event.target === editCampaignModal) {
        hideEditCampaignModal();
      }
    });
  }

  if (closeAutomationEditModalButton) {
    closeAutomationEditModalButton.addEventListener('click', hideAutomationEditModal);
  }

  if (cancelAutomationEditModalButton) {
    cancelAutomationEditModalButton.addEventListener('click', hideAutomationEditModal);
  }

  if (automationEditModal) {
    automationEditModal.addEventListener('click', (event) => {
      if (event.target === automationEditModal) {
        hideAutomationEditModal();
      }
    });
  }

  if (closeAutomationDeleteModalButton) {
    closeAutomationDeleteModalButton.addEventListener('click', hideAutomationDeleteModal);
  }

  if (cancelAutomationDeleteModalButton) {
    cancelAutomationDeleteModalButton.addEventListener('click', hideAutomationDeleteModal);
  }

  if (automationDeleteModal) {
    automationDeleteModal.addEventListener('click', (event) => {
      if (event.target === automationDeleteModal) {
        hideAutomationDeleteModal();
      }
    });
  }

  if (toggleAudienceCreatorButton && audienceCreator) {
    toggleAudienceCreatorButton.addEventListener('click', () => {
      const willShow = audienceCreator.hidden;
      audienceCreator.hidden = !willShow;
      toggleAudienceCreatorButton.textContent = willShow ? 'Ocultar nuevo público' : 'Crear nuevo público';

      if (newAudienceName) {
        newAudienceName.required = willShow;
      }
    });
  }

  if (saveAudienceButton && audienceSelect && newAudienceName) {
    saveAudienceButton.addEventListener('click', () => {
      const audienceName = newAudienceName.value.trim();

      if (!audienceName) {
        newAudienceName.required = true;
        newAudienceName.focus();
        newAudienceName.reportValidity();
        return;
      }

      const normalizedValue = audienceName.toLowerCase().replace(/\s+/g, '-');
      const existingOption = Array.from(audienceSelect.options).find((option) => option.value === normalizedValue);

      if (!existingOption) {
        const newOption = document.createElement('option');
        newOption.value = normalizedValue;
        newOption.textContent = audienceName;
        audienceSelect.appendChild(newOption);
      }

      audienceSelect.value = normalizedValue;
      audienceCreator.hidden = true;
      toggleAudienceCreatorButton.textContent = 'Crear nuevo público';
      newAudienceName.required = false;

      if (audienceLocation) {
        audienceLocation.value = '';
      }

      if (audienceAgeRange) {
        audienceAgeRange.value = '';
      }

      if (audienceInterests) {
        audienceInterests.value = '';
      }

      newAudienceName.value = '';
    });
  }

  if (campaignAssetInput && campaignAssetSummary) {
    campaignAssetInput.addEventListener('change', () => {
      const files = Array.from(campaignAssetInput.files || []);

      if (!files.length) {
        campaignAssetSummary.textContent = 'Sin archivos seleccionados';
        return;
      }

      campaignAssetSummary.textContent = files.map((file) => file.name).join(', ');
    });
  }

  if (campaignForm) {
    campaignForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!campaignForm.reportValidity()) {
        return;
      }

      if (audienceCreator && !audienceCreator.hidden && newAudienceName && !newAudienceName.value.trim()) {
        newAudienceName.focus();
        newAudienceName.reportValidity();
        return;
      }

      hideCampaignModal();
      campaignForm.reset();

      if (audienceCreator) {
        audienceCreator.hidden = true;
      }

      if (toggleAudienceCreatorButton) {
        toggleAudienceCreatorButton.textContent = 'Crear nuevo público';
      }

      if (newAudienceName) {
        newAudienceName.required = false;
      }

      if (campaignAssetSummary) {
        campaignAssetSummary.textContent = 'Sin archivos seleccionados';
      }

      if (campaignToast) {
        campaignToast.hidden = false;
        window.clearTimeout(window.campaignToastTimeout);
        window.campaignToastTimeout = window.setTimeout(() => {
          campaignToast.hidden = true;
        }, 2500);
      }
    });
  }

  if (editCampaignForm) {
    editCampaignForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!editCampaignForm.reportValidity()) {
        return;
      }

      hideEditCampaignModal();

      if (editCampaignToast) {
        editCampaignToast.hidden = false;
        window.clearTimeout(window.editCampaignToastTimeout);
        window.editCampaignToastTimeout = window.setTimeout(() => {
          editCampaignToast.hidden = true;
        }, 2500);
      }
    });
  }

  const populateAutomationForm = (card) => {
    if (!card) {
      return;
    }

    if (automationEditName) {
      automationEditName.value = card.dataset.automationName || '';
    }

    if (automationEditDescription) {
      automationEditDescription.value = card.dataset.automationDescription || '';
    }

    if (automationEditArea) {
      automationEditArea.value = card.dataset.automationArea || 'marketing';
    }

  };

  openAutomationEditButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.automation-card');
      activeAutomationCard = card;
      populateAutomationForm(card);
      showAutomationEditModal();
    });
  });

  openAutomationDeleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.automation-card');
      activeAutomationCard = card;

      if (automationDeleteName) {
        automationDeleteName.textContent = card?.dataset.automationName || 'esta automatización';
      }

      showAutomationDeleteModal();
    });
  });

  if (automationEditForm) {
    automationEditForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!automationEditForm.reportValidity() || !activeAutomationCard) {
        return;
      }

      const title = activeAutomationCard.querySelector('h2');
      const description = activeAutomationCard.querySelector('p');
      const switchInput = activeAutomationCard.querySelector('.automation-switch input');

      activeAutomationCard.dataset.automationName = automationEditName?.value.trim() || '';
      activeAutomationCard.dataset.automationDescription = automationEditDescription?.value.trim() || '';
      activeAutomationCard.dataset.automationArea = automationEditArea?.value || 'marketing';

      if (title && automationEditName) {
        title.textContent = automationEditName.value.trim();
      }

      if (description && automationEditDescription) {
        description.textContent = automationEditDescription.value.trim();
      }

      hideAutomationEditModal();

      if (automationToast) {
        automationToast.hidden = false;
        window.clearTimeout(window.automationToastTimeout);
        window.automationToastTimeout = window.setTimeout(() => {
          automationToast.hidden = true;
        }, 2500);
      }
    });
  }

  if (confirmAutomationDeleteButton) {
    confirmAutomationDeleteButton.addEventListener('click', () => {
      if (!activeAutomationCard) {
        return;
      }

      activeAutomationCard.remove();
      activeAutomationCard = null;
      hideAutomationDeleteModal();

      if (automationDeleteToast) {
        automationDeleteToast.hidden = false;
        window.clearTimeout(window.automationDeleteToastTimeout);
        window.automationDeleteToastTimeout = window.setTimeout(() => {
          automationDeleteToast.hidden = true;
        }, 2500);
      }
    });
  }

  clickableRows.forEach((row) => {
    const openTarget = () => {
      const href = row.dataset.href;
      if (href) {
        window.location.href = href;
      }
    };

    row.addEventListener('click', (event) => {
      const interactiveTarget = event.target.closest('button, a, input, select, img.action-icon-image');
      if (interactiveTarget) {
        return;
      }
      openTarget();
    });

    row.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openTarget();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && campaignModal && !campaignModal.hidden) {
      hideCampaignModal();
    }

    if (event.key === 'Escape' && campaignLeadsModal && !campaignLeadsModal.hidden) {
      hideCampaignLeadsModal();
    }

    if (event.key === 'Escape' && editCampaignModal && !editCampaignModal.hidden) {
      hideEditCampaignModal();
    }

    if (event.key === 'Escape' && automationEditModal && !automationEditModal.hidden) {
      hideAutomationEditModal();
    }

    if (event.key === 'Escape' && automationDeleteModal && !automationDeleteModal.hidden) {
      hideAutomationDeleteModal();
    }
  });
});
