document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const tabs = document.querySelectorAll('.settings-tab');
  const panels = document.querySelectorAll('.settings-panel');
  const searchInput = document.querySelector('#settingsSearchInput');
  const statusFilter = document.querySelector('#settingsStatusFilter');
  const clearFiltersButton = document.querySelector('#clearSettingsFilters');
  const teamSearchInput = document.querySelector('#teamSearchInput');
  const teamStatusFilter = document.querySelector('#teamStatusFilter');
  const clearTeamFiltersButton = document.querySelector('#clearTeamFilters');
  const openNewUserModalButton = document.querySelector('#openNewUserModal');
  const openNewTeamModalButton = document.querySelector('#openNewTeamModal');
  const teamDetailModal = document.querySelector('#teamDetailModal');
  const closeTeamDetailModalButton = document.querySelector('#closeTeamDetailModal');
  const closeTeamDetailFooterButton = document.querySelector('#closeTeamDetailFooter');
  const teamEditModal = document.querySelector('#teamEditModal');
  const closeTeamEditModalButton = document.querySelector('#closeTeamEditModal');
  const closeTeamEditFooterButton = document.querySelector('#closeTeamEditFooter');
  const teamEditForm = document.querySelector('#teamEditForm');
  const newTeamModal = document.querySelector('#newTeamModal');
  const closeNewTeamModalButton = document.querySelector('#closeNewTeamModal');
  const closeNewTeamFooterButton = document.querySelector('#closeNewTeamFooter');
  const newTeamForm = document.querySelector('#newTeamForm');
  const teamDeleteConfirmModal = document.querySelector('#teamDeleteConfirmModal');
  const closeTeamDeleteConfirmModalButton = document.querySelector('#closeTeamDeleteConfirmModal');
  const cancelTeamDeleteConfirmButton = document.querySelector('#cancelTeamDeleteConfirm');
  const acceptTeamDeleteConfirmButton = document.querySelector('#acceptTeamDeleteConfirm');
  const teamDeleteConfirmMessage = document.querySelector('#teamDeleteConfirmMessage');
  const userDetailModal = document.querySelector('#userDetailModal');
  const closeUserDetailModalButton = document.querySelector('#closeUserDetailModal');
  const userEditModal = document.querySelector('#userEditModal');
  const closeUserEditModalButton = document.querySelector('#closeUserEditModal');
  const closeUserEditFooterButton = document.querySelector('#closeUserEditFooter');
  const userEditForm = document.querySelector('#userEditForm');
  const statusConfirmModal = document.querySelector('#statusConfirmModal');
  const closeStatusConfirmModalButton = document.querySelector('#closeStatusConfirmModal');
  const cancelStatusConfirmButton = document.querySelector('#cancelStatusConfirm');
  const acceptStatusConfirmButton = document.querySelector('#acceptStatusConfirm');
  const statusConfirmMessage = document.querySelector('#statusConfirmMessage');
  const teamDetailName = document.querySelector('#teamDetailName');
  const teamDetailArea = document.querySelector('#teamDetailArea');
  const teamDetailLead = document.querySelector('#teamDetailLead');
  const teamDetailCount = document.querySelector('#teamDetailCount');
  const teamDetailCreated = document.querySelector('#teamDetailCreated');
  const teamDetailMembers = document.querySelector('#teamDetailMembers');
  const teamDetailDescription = document.querySelector('#teamDetailDescription');
  const editTeamName = document.querySelector('#editTeamName');
  const editTeamDescription = document.querySelector('#editTeamDescription');
  const editTeamArea = document.querySelector('#editTeamArea');
  const editTeamLead = document.querySelector('#editTeamLead');
  const editTeamMembersList = document.querySelector('#editTeamMembersList');
  const editTeamMemberSelect = document.querySelector('#editTeamMemberSelect');
  const addTeamMemberButton = document.querySelector('#addTeamMemberButton');
  const editTeamCreated = document.querySelector('#editTeamCreated');
  const editTeamMembersCount = document.querySelector('#editTeamMembersCount');
  const newTeamName = document.querySelector('#newTeamName');
  const newTeamDescription = document.querySelector('#newTeamDescription');
  const newTeamArea = document.querySelector('#newTeamArea');
  const newTeamLead = document.querySelector('#newTeamLead');
  const newTeamMemberSelect = document.querySelector('#newTeamMemberSelect');
  const addNewTeamMemberButton = document.querySelector('#addNewTeamMemberButton');
  const newTeamMembersList = document.querySelector('#newTeamMembersList');
  const newTeamPreviewEmpty = document.querySelector('#newTeamPreviewEmpty');
  const newTeamStatus = document.querySelector('#newTeamStatus');
  const newUserModal = document.querySelector('#newUserModal');
  const closeNewUserModalButton = document.querySelector('#closeNewUserModal');
  const closeNewUserFooterButton = document.querySelector('#closeNewUserFooter');
  const newUserForm = document.querySelector('#newUserForm');
  const userDetailName = document.querySelector('#userDetailName');
  const userDetailEmail = document.querySelector('#userDetailEmail');
  const userDetailRole = document.querySelector('#userDetailRole');
  const userDetailStatus = document.querySelector('#userDetailStatus');
  const userDetailCreated = document.querySelector('#userDetailCreated');
  const userDetailPhone = document.querySelector('#userDetailPhone');
  const userDetailArea = document.querySelector('#userDetailArea');
  const userDetailAccess = document.querySelector('#userDetailAccess');
  const editUserName = document.querySelector('#editUserName');
  const editUserEmail = document.querySelector('#editUserEmail');
  const editUserPhone = document.querySelector('#editUserPhone');
  const editUserArea = document.querySelector('#editUserArea');
  const editUserTeam = document.querySelector('#editUserTeam');
  const editUserRole = document.querySelector('#editUserRole');
  const editUserStatus = document.querySelector('#editUserStatus');
  const editUserCreated = document.querySelector('#editUserCreated');
  const editUserAccess = document.querySelector('#editUserAccess');
  const newUserName = document.querySelector('#newUserName');
  const newUserEmail = document.querySelector('#newUserEmail');
  const newUserPhone = document.querySelector('#newUserPhone');
  const newUserPassword = document.querySelector('#newUserPassword');
  const newUserPasswordConfirm = document.querySelector('#newUserPasswordConfirm');
  const newUserArea = document.querySelector('#newUserArea');
  const newUserTeam = document.querySelector('#newUserTeam');
  const newUserRole = document.querySelector('#newUserRole');
  const newUserStatus = document.querySelector('#newUserStatus');
  const collapseKey = 'erpSettingsSidebarCollapsed';
  let activeEditRow = null;
  let pendingStatusRow = null;
  let activeTeamEditRow = null;
  let activeTeamMembers = [];
  let newTeamMembers = [];
  let pendingTeamDeleteRow = null;

  const getUserRows = () => document.querySelectorAll('[data-settings-panel="usuarios"] .settings-table tbody tr');
  const getTeamRows = () => document.querySelectorAll('[data-settings-panel="equipos"] .settings-table tbody tr');

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

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.settingsTab;

      tabs.forEach((item) => item.classList.toggle('is-active', item === tab));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.settingsPanel !== target;
      });
    });
  });

  const applyUserFilters = () => {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const status = statusFilter ? statusFilter.value : 'all';

    getUserRows().forEach((row) => {
      const matchesQuery = !query || row.dataset.name.toLowerCase().includes(query);
      const matchesStatus = status === 'all' || row.dataset.status === status;
      row.hidden = !(matchesQuery && matchesStatus);
    });
  };

  const applyTeamFilters = () => {
    const query = teamSearchInput ? teamSearchInput.value.trim().toLowerCase() : '';
    const status = teamStatusFilter ? teamStatusFilter.value : 'all';

    getTeamRows().forEach((row) => {
      const matchesQuery = !query || row.dataset.teamName.toLowerCase().includes(query);
      const matchesStatus = status === 'all' || row.dataset.teamStatus === status;
      row.hidden = !(matchesQuery && matchesStatus);
    });
  };

  const openTeamDetailModal = (row) => {
    if (!teamDetailModal || !row) {
      return;
    }

    if (teamDetailName) {
      teamDetailName.textContent = row.dataset.teamName || '';
    }

    if (teamDetailArea) {
      teamDetailArea.textContent = row.dataset.teamArea || '';
    }

    if (teamDetailLead) {
      teamDetailLead.textContent = row.dataset.teamLead || '';
    }

    if (teamDetailCount) {
      teamDetailCount.textContent = row.dataset.teamMembersCount || '';
    }

    if (teamDetailCreated) {
      teamDetailCreated.textContent = row.dataset.teamCreated || '';
    }

    if (teamDetailDescription) {
      teamDetailDescription.textContent = row.dataset.teamDescription || '';
    }

    if (teamDetailMembers) {
      const members = (row.dataset.teamMembers || '')
        .split('|')
        .map((item) => item.trim())
        .filter(Boolean);

      teamDetailMembers.innerHTML = members
        .map((member) => {
          const [name, role] = member.split(' - ');
          return `<article class="settings-team-member-card"><strong>${name || ''}</strong><span>${role || ''}</span></article>`;
        })
        .join('');
    }

    teamDetailModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeTeamDetailModal = () => {
    if (!teamDetailModal || teamDetailModal.hidden) {
      return;
    }

    teamDetailModal.hidden = true;
    document.body.style.overflow = '';
  };

  const renderTeamEditMembers = () => {
    if (!editTeamMembersList || !editTeamMembersCount) {
      return;
    }

    editTeamMembersList.innerHTML = activeTeamMembers
      .map((member, index) => {
        const [name, role] = member.split(' - ');
        return `
          <article class="settings-team-edit-member">
            <div class="settings-team-edit-member-info">
              <strong>${name || ''}</strong>
              <span>${role || ''}</span>
            </div>
            <button type="button" class="settings-team-remove-button" data-team-member-index="${index}">Quitar</button>
          </article>
        `;
      })
      .join('');

    editTeamMembersCount.textContent = `${activeTeamMembers.length} integrantes`;

    editTeamMembersList.querySelectorAll('.settings-team-remove-button').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.teamMemberIndex);
        activeTeamMembers.splice(index, 1);
        renderTeamEditMembers();
      });
    });
  };

  const renderNewTeamMembers = () => {
    if (!newTeamMembersList || !newTeamPreviewEmpty) {
      return;
    }

    newTeamPreviewEmpty.hidden = newTeamMembers.length > 0;

    newTeamMembersList.innerHTML = newTeamMembers
      .map((member, index) => {
        const [name, role] = member.split(' - ');
        return `
          <article class="settings-team-edit-member">
            <div class="settings-team-edit-member-info">
              <strong>${name || ''}</strong>
              <span>${role || ''}</span>
            </div>
            <button type="button" class="settings-team-remove-button" data-new-team-member-index="${index}">Quitar</button>
          </article>
        `;
      })
      .join('');

    newTeamMembersList.querySelectorAll('.settings-team-remove-button').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.newTeamMemberIndex);
        newTeamMembers.splice(index, 1);
        renderNewTeamMembers();
      });
    });
  };

  const openTeamEditModal = (row) => {
    if (!teamEditModal || !row) {
      return;
    }

    activeTeamEditRow = row;
    activeTeamMembers = (row.dataset.teamMembers || '')
      .split('|')
      .map((item) => item.trim())
      .filter(Boolean);

    if (editTeamName) {
      editTeamName.value = row.dataset.teamName || '';
    }

    if (editTeamDescription) {
      editTeamDescription.value = row.dataset.teamDescription || '';
    }

    if (editTeamArea) {
      editTeamArea.value = row.dataset.teamArea || '';
    }

    if (editTeamLead) {
      editTeamLead.value = row.dataset.teamLead || '';
    }

    if (editTeamCreated) {
      editTeamCreated.textContent = row.dataset.teamCreated || '';
    }

    renderTeamEditMembers();
    teamEditModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeTeamEditModal = () => {
    if (!teamEditModal || teamEditModal.hidden) {
      return;
    }

    teamEditModal.hidden = true;
    document.body.style.overflow = '';
    activeTeamEditRow = null;
    activeTeamMembers = [];
  };

  const closeNewTeamModal = () => {
    if (!newTeamModal || newTeamModal.hidden) {
      return;
    }

    newTeamModal.hidden = true;
    document.body.style.overflow = '';
    newTeamMembers = [];

    if (newTeamForm) {
      newTeamForm.reset();
    }

    renderNewTeamMembers();
  };

  const openTeamDeleteConfirmModal = (row) => {
    if (!teamDeleteConfirmModal || !row) {
      return;
    }

    pendingTeamDeleteRow = row;

    if (teamDeleteConfirmMessage) {
      teamDeleteConfirmMessage.textContent = `¿Seguro que deseas eliminar el equipo ${row.dataset.teamName}?`;
    }

    teamDeleteConfirmModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeTeamDeleteConfirmModal = () => {
    if (!teamDeleteConfirmModal || teamDeleteConfirmModal.hidden) {
      return;
    }

    teamDeleteConfirmModal.hidden = true;
    document.body.style.overflow = '';
    pendingTeamDeleteRow = null;
  };

  const updateStatusButtonLabel = (row) => {
    const toggleButton = row.querySelector('.settings-toggle-button');

    if (!toggleButton) {
      return;
    }

    toggleButton.textContent = row.dataset.status === 'activo' ? 'Desactivar' : 'Activar';
  };

  const updateRowStatusDisplay = (row) => {
    const statusCell = row.querySelector('.settings-status-pill');

    if (!statusCell) {
      return;
    }

    const isActive = row.dataset.status === 'activo';
    statusCell.textContent = isActive ? 'Activo' : 'Inactivo';
    statusCell.className = isActive
      ? 'settings-status-pill settings-status-pill-active'
      : 'settings-status-pill settings-status-pill-inactive';

    updateStatusButtonLabel(row);
  };

  if (searchInput) {
    searchInput.addEventListener('input', applyUserFilters);
  }

  if (statusFilter) {
    statusFilter.addEventListener('change', applyUserFilters);
  }

  if (clearFiltersButton) {
    clearFiltersButton.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
      }

      if (statusFilter) {
        statusFilter.value = 'all';
      }

      applyUserFilters();
    });
  }

  if (teamSearchInput) {
    teamSearchInput.addEventListener('input', applyTeamFilters);
  }

  if (teamStatusFilter) {
    teamStatusFilter.addEventListener('change', applyTeamFilters);
  }

  if (clearTeamFiltersButton) {
    clearTeamFiltersButton.addEventListener('click', () => {
      if (teamSearchInput) {
        teamSearchInput.value = '';
      }

      if (teamStatusFilter) {
        teamStatusFilter.value = 'all';
      }

      applyTeamFilters();
    });
  }

  if (openNewUserModalButton) {
    openNewUserModalButton.addEventListener('click', () => {
      if (!newUserModal) {
        return;
      }

      newUserModal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  }

  if (openNewTeamModalButton) {
    openNewTeamModalButton.addEventListener('click', () => {
      if (!newTeamModal) {
        return;
      }

      newTeamModal.hidden = false;
      document.body.style.overflow = 'hidden';
      renderNewTeamMembers();
    });
  }

  getUserRows().forEach((row) => updateRowStatusDisplay(row));

  const openUserDetailModal = (row) => {
    if (!userDetailModal || !row) {
      return;
    }

    if (userDetailName) {
      userDetailName.textContent = row.dataset.name || '';
    }

    if (userDetailEmail) {
      userDetailEmail.textContent = row.dataset.email || '';
    }

    if (userDetailRole) {
      userDetailRole.textContent = row.dataset.role || '';
    }

    if (userDetailCreated) {
      userDetailCreated.textContent = row.dataset.created || '';
    }

    if (userDetailPhone) {
      userDetailPhone.textContent = row.dataset.phone || '';
    }

    if (userDetailArea) {
      userDetailArea.textContent = row.dataset.area || '';
    }

    if (userDetailAccess) {
      userDetailAccess.textContent = row.dataset.access || '';
    }

    if (userDetailStatus) {
      const statusText = row.dataset.status === 'activo' ? 'Activo' : 'Inactivo';
      const statusClass =
        row.dataset.status === 'activo'
          ? 'settings-status-pill settings-status-pill-active'
          : 'settings-status-pill settings-status-pill-inactive';

      userDetailStatus.innerHTML = `<span class="${statusClass}">${statusText}</span>`;
    }

    userDetailModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeUserDetailModal = () => {
    if (!userDetailModal || userDetailModal.hidden) {
      return;
    }

    userDetailModal.hidden = true;
    document.body.style.overflow = '';
  };

  const openUserEditModal = (row) => {
    if (!userEditModal || !row) {
      return;
    }

    activeEditRow = row;

    if (editUserName) {
      editUserName.value = row.dataset.name || '';
    }

    if (editUserEmail) {
      editUserEmail.value = row.dataset.email || '';
    }

    if (editUserPhone) {
      editUserPhone.value = row.dataset.phone || '';
    }

    if (editUserArea) {
      editUserArea.value = row.dataset.area || '';
    }

    if (editUserTeam) {
      editUserTeam.value = row.dataset.team || '';
    }

    if (editUserRole) {
      editUserRole.value = row.dataset.role || '';
    }

    if (editUserStatus) {
      editUserStatus.value = row.dataset.status || 'activo';
    }

    if (editUserCreated) {
      editUserCreated.textContent = row.dataset.created || '';
    }

    if (editUserAccess) {
      editUserAccess.textContent = row.dataset.access || '';
    }

    userEditModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeUserEditModal = () => {
    if (!userEditModal || userEditModal.hidden) {
      return;
    }

    userEditModal.hidden = true;
    document.body.style.overflow = '';
    activeEditRow = null;
  };

  const openStatusConfirmModal = (row) => {
    if (!statusConfirmModal || !row) {
      return;
    }

    pendingStatusRow = row;
    const isActive = row.dataset.status === 'activo';

    if (statusConfirmMessage) {
      statusConfirmMessage.textContent = isActive
        ? `¿Quieres desactivar a ${row.dataset.name}?`
        : `¿Quieres activar a ${row.dataset.name}?`;
    }

    statusConfirmModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeStatusConfirmModal = () => {
    if (!statusConfirmModal || statusConfirmModal.hidden) {
      return;
    }

    statusConfirmModal.hidden = true;
    document.body.style.overflow = '';
    pendingStatusRow = null;
  };

  const closeNewUserModal = () => {
    if (!newUserModal || newUserModal.hidden) {
      return;
    }

    newUserModal.hidden = true;
    document.body.style.overflow = '';

    if (newUserForm) {
      newUserForm.reset();
    }

    if (newUserPasswordConfirm) {
      newUserPasswordConfirm.setCustomValidity('');
    }
  };

  const toggleRowStatus = (row) => {
    if (!row) {
      return;
    }

    row.dataset.status = row.dataset.status === 'activo' ? 'inactivo' : 'activo';
    updateRowStatusDisplay(row);
    applyUserFilters();
  };

  const attachRowActionHandlers = (row) => {
    const viewButton = row.querySelector('.settings-view-button');
    const editButton = row.querySelector('.settings-edit-button');
    const toggleButton = row.querySelector('.settings-toggle-button');

    if (viewButton && !viewButton.dataset.bound) {
      viewButton.dataset.bound = 'true';
      viewButton.addEventListener('click', () => {
        openUserDetailModal(row);
      });
    }

    if (editButton && !editButton.dataset.bound) {
      editButton.dataset.bound = 'true';
      editButton.addEventListener('click', () => {
        openUserEditModal(row);
      });
    }

    if (toggleButton && !toggleButton.dataset.bound) {
      toggleButton.dataset.bound = 'true';
      toggleButton.addEventListener('click', () => {
        openStatusConfirmModal(row);
      });
    }
  };

  getUserRows().forEach((row) => attachRowActionHandlers(row));
  getTeamRows().forEach((row) => {
    const teamViewButton = row.querySelector('.settings-team-view-button');
    const teamEditButton = row.querySelector('.settings-team-edit-button');
    const teamDeleteButton = row.querySelector('.settings-team-delete-button');

    if (teamViewButton && !teamViewButton.dataset.bound) {
      teamViewButton.dataset.bound = 'true';
      teamViewButton.addEventListener('click', () => {
        openTeamDetailModal(row);
      });
    }

    if (teamEditButton && !teamEditButton.dataset.bound) {
      teamEditButton.dataset.bound = 'true';
      teamEditButton.addEventListener('click', () => {
        openTeamEditModal(row);
      });
    }

    if (teamDeleteButton && !teamDeleteButton.dataset.bound) {
      teamDeleteButton.dataset.bound = 'true';
      teamDeleteButton.addEventListener('click', () => {
        openTeamDeleteConfirmModal(row);
      });
    }
  });

  if (closeUserDetailModalButton) {
    closeUserDetailModalButton.addEventListener('click', closeUserDetailModal);
  }

  if (userDetailModal) {
    userDetailModal.addEventListener('click', (event) => {
      if (event.target === userDetailModal) {
        closeUserDetailModal();
      }
    });
  }

  if (closeUserEditModalButton) {
    closeUserEditModalButton.addEventListener('click', closeUserEditModal);
  }

  if (closeUserEditFooterButton) {
    closeUserEditFooterButton.addEventListener('click', closeUserEditModal);
  }

  if (userEditModal) {
    userEditModal.addEventListener('click', (event) => {
      if (event.target === userEditModal) {
        closeUserEditModal();
      }
    });
  }

  if (userEditForm) {
    userEditForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (activeEditRow) {
        activeEditRow.dataset.name = editUserName ? editUserName.value.trim() : activeEditRow.dataset.name;
        activeEditRow.dataset.email = editUserEmail ? editUserEmail.value.trim() : activeEditRow.dataset.email;
        activeEditRow.dataset.phone = editUserPhone ? editUserPhone.value.trim() : activeEditRow.dataset.phone;
        activeEditRow.dataset.area = editUserArea ? editUserArea.value : activeEditRow.dataset.area;
        activeEditRow.dataset.team = editUserTeam ? editUserTeam.value : activeEditRow.dataset.team;
        activeEditRow.dataset.role = editUserRole ? editUserRole.value : activeEditRow.dataset.role;
        activeEditRow.dataset.status = editUserStatus ? editUserStatus.value : activeEditRow.dataset.status;

        const cells = activeEditRow.querySelectorAll('td');
        if (cells[0]) cells[0].textContent = activeEditRow.dataset.name;
        if (cells[1]) cells[1].textContent = activeEditRow.dataset.email;
        if (cells[2]) cells[2].textContent = activeEditRow.dataset.role;

        updateRowStatusDisplay(activeEditRow);
        applyUserFilters();
      }

      closeUserEditModal();
    });
  }

  if (closeStatusConfirmModalButton) {
    closeStatusConfirmModalButton.addEventListener('click', closeStatusConfirmModal);
  }

  if (cancelStatusConfirmButton) {
    cancelStatusConfirmButton.addEventListener('click', closeStatusConfirmModal);
  }

  if (acceptStatusConfirmButton) {
    acceptStatusConfirmButton.addEventListener('click', () => {
      if (pendingStatusRow) {
        toggleRowStatus(pendingStatusRow);
      }

      closeStatusConfirmModal();
    });
  }

  if (statusConfirmModal) {
    statusConfirmModal.addEventListener('click', (event) => {
      if (event.target === statusConfirmModal) {
        closeStatusConfirmModal();
      }
    });
  }

  if (closeNewUserModalButton) {
    closeNewUserModalButton.addEventListener('click', closeNewUserModal);
  }

  if (closeNewUserFooterButton) {
    closeNewUserFooterButton.addEventListener('click', closeNewUserModal);
  }

  if (newUserModal) {
    newUserModal.addEventListener('click', (event) => {
      if (event.target === newUserModal) {
        closeNewUserModal();
      }
    });
  }

  if (newUserForm) {
    newUserForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!newUserName || !newUserEmail || !newUserPassword || !newUserPasswordConfirm) {
        return;
      }

      if (newUserPassword.value !== newUserPasswordConfirm.value) {
        newUserPasswordConfirm.setCustomValidity('Las contrasenas no coinciden');
        newUserPasswordConfirm.reportValidity();
        return;
      }

      newUserPasswordConfirm.setCustomValidity('');

      const tableBody = document.querySelector('.settings-table tbody');

      if (!tableBody) {
        closeNewUserModal();
        return;
      }

      const row = document.createElement('tr');
      const createdDate = new Date().toLocaleDateString('es-PE');
      const statusValue = newUserStatus ? newUserStatus.value : 'activo';
      const statusText = statusValue === 'activo' ? 'Activo' : 'Inactivo';
      const statusClass =
        statusValue === 'activo'
          ? 'settings-status-pill settings-status-pill-active'
          : 'settings-status-pill settings-status-pill-inactive';

      row.dataset.name = newUserName.value.trim();
      row.dataset.status = statusValue;
      row.dataset.email = newUserEmail.value.trim();
      row.dataset.role = newUserRole ? newUserRole.value : 'Administrador';
      row.dataset.created = createdDate;
      row.dataset.phone = newUserPhone && newUserPhone.value.trim() ? newUserPhone.value.trim() : 'No registrado';
      row.dataset.area = newUserArea ? newUserArea.value : 'Marketing';
      row.dataset.team = newUserTeam ? newUserTeam.value : 'Liderazgo';
      row.dataset.access = 'Pendiente de primer acceso';

      row.innerHTML = `
        <td>${row.dataset.name}</td>
        <td>${row.dataset.email}</td>
        <td>${row.dataset.role}</td>
        <td><span class="${statusClass}">${statusText}</span></td>
        <td>${createdDate}</td>
        <td>
          <div class="settings-row-actions">
            <button type="button" class="settings-action-button settings-view-button">Ver</button>
            <button type="button" class="settings-action-button settings-edit-button">Editar</button>
            <button type="button" class="settings-action-button settings-toggle-button">${statusValue === 'activo' ? 'Desactivar' : 'Activar'}</button>
          </div>
        </td>
      `;

      tableBody.prepend(row);
      updateRowStatusDisplay(row);
      attachRowActionHandlers(row);
      applyUserFilters();
      closeNewUserModal();
    });
  }

  if (closeTeamDetailModalButton) {
    closeTeamDetailModalButton.addEventListener('click', closeTeamDetailModal);
  }

  if (closeTeamDetailFooterButton) {
    closeTeamDetailFooterButton.addEventListener('click', closeTeamDetailModal);
  }

  if (teamDetailModal) {
    teamDetailModal.addEventListener('click', (event) => {
      if (event.target === teamDetailModal) {
        closeTeamDetailModal();
      }
    });
  }

  if (closeTeamEditModalButton) {
    closeTeamEditModalButton.addEventListener('click', closeTeamEditModal);
  }

  if (closeTeamEditFooterButton) {
    closeTeamEditFooterButton.addEventListener('click', closeTeamEditModal);
  }

  if (addTeamMemberButton) {
    addTeamMemberButton.addEventListener('click', () => {
      if (!editTeamMemberSelect) {
        return;
      }

      const selectedMember = editTeamMemberSelect.value;

      if (selectedMember && !activeTeamMembers.includes(selectedMember)) {
        activeTeamMembers.push(selectedMember);
        renderTeamEditMembers();
      }
    });
  }

  if (teamEditModal) {
    teamEditModal.addEventListener('click', (event) => {
      if (event.target === teamEditModal) {
        closeTeamEditModal();
      }
    });
  }

  if (teamEditForm) {
    teamEditForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!activeTeamEditRow) {
        closeTeamEditModal();
        return;
      }

      activeTeamEditRow.dataset.teamName = editTeamName ? editTeamName.value.trim() : activeTeamEditRow.dataset.teamName;
      activeTeamEditRow.dataset.teamDescription = editTeamDescription ? editTeamDescription.value.trim() : activeTeamEditRow.dataset.teamDescription;
      activeTeamEditRow.dataset.teamArea = editTeamArea ? editTeamArea.value : activeTeamEditRow.dataset.teamArea;
      activeTeamEditRow.dataset.teamLead = editTeamLead ? editTeamLead.value : activeTeamEditRow.dataset.teamLead;
      activeTeamEditRow.dataset.teamMembers = activeTeamMembers.join('|');
      activeTeamEditRow.dataset.teamMembersCount = `${activeTeamMembers.length} integrantes`;

      const cells = activeTeamEditRow.querySelectorAll('td');
      if (cells[0]) {
        cells[0].textContent = activeTeamEditRow.dataset.teamName;
      }
      if (cells[1]) {
        const areaClassMap = {
          Marketing: 'settings-area-pill settings-area-pill-marketing',
          Ventas: 'settings-area-pill settings-area-pill-sales',
          Operaciones: 'settings-area-pill settings-area-pill-operations',
          Analisis: 'settings-area-pill settings-area-pill-analysis'
        };
        const areaClass = areaClassMap[activeTeamEditRow.dataset.teamArea] || 'settings-area-pill';
        cells[1].innerHTML = `<span class="${areaClass}">${activeTeamEditRow.dataset.teamArea}</span>`;
      }
      if (cells[2]) {
        cells[2].textContent = String(activeTeamMembers.length);
      }
      if (cells[3]) {
        cells[3].textContent = activeTeamEditRow.dataset.teamLead;
      }

      closeTeamEditModal();
    });
  }

  if (closeNewTeamModalButton) {
    closeNewTeamModalButton.addEventListener('click', closeNewTeamModal);
  }

  if (closeNewTeamFooterButton) {
    closeNewTeamFooterButton.addEventListener('click', closeNewTeamModal);
  }

  if (addNewTeamMemberButton) {
    addNewTeamMemberButton.addEventListener('click', () => {
      if (!newTeamMemberSelect) {
        return;
      }

      const selectedMember = newTeamMemberSelect.value;

      if (selectedMember && !newTeamMembers.includes(selectedMember)) {
        newTeamMembers.push(selectedMember);
        renderNewTeamMembers();
      }
    });
  }

  if (newTeamModal) {
    newTeamModal.addEventListener('click', (event) => {
      if (event.target === newTeamModal) {
        closeNewTeamModal();
      }
    });
  }

  if (newTeamForm) {
    newTeamForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const tableBody = document.querySelector('[data-settings-panel="equipos"] .settings-table tbody');

      if (!tableBody || !newTeamName || !newTeamArea || !newTeamLead || !newTeamStatus) {
        closeNewTeamModal();
        return;
      }

      const row = document.createElement('tr');
      const createdDate = new Date().toLocaleDateString('es-PE');
      const statusValue = newTeamStatus.value;
      const statusText = statusValue === 'activo' ? 'Activo' : 'Inactivo';
      const statusClass =
        statusValue === 'activo'
          ? 'settings-status-pill settings-status-pill-active'
          : 'settings-status-pill settings-status-pill-inactive';
      const areaClassMap = {
        Marketing: 'settings-area-pill settings-area-pill-marketing',
        Ventas: 'settings-area-pill settings-area-pill-sales',
        Operaciones: 'settings-area-pill settings-area-pill-operations',
        Analisis: 'settings-area-pill settings-area-pill-analysis'
      };
      const teamAreaValue = newTeamArea.value;
      const teamAreaClass = areaClassMap[teamAreaValue] || 'settings-area-pill';

      row.dataset.teamName = newTeamName.value.trim();
      row.dataset.teamStatus = statusValue;
      row.dataset.teamArea = teamAreaValue;
      row.dataset.teamMembersCount = `${newTeamMembers.length} integrantes`;
      row.dataset.teamLead = newTeamLead.value;
      row.dataset.teamCreated = createdDate;
      row.dataset.teamMembers = newTeamMembers.join('|');
      row.dataset.teamDescription = newTeamDescription && newTeamDescription.value.trim()
        ? newTeamDescription.value.trim()
        : 'Equipo creado recientemente para coordinar iniciativas del area.';

      row.innerHTML = `
        <td>${row.dataset.teamName}</td>
        <td><span class="${teamAreaClass}">${row.dataset.teamArea}</span></td>
        <td>${newTeamMembers.length}</td>
        <td>${row.dataset.teamLead}</td>
        <td><span class="${statusClass}">${statusText}</span></td>
        <td>${createdDate}</td>
        <td>
          <div class="settings-row-actions">
            <button type="button" class="settings-action-button settings-team-view-button">Ver</button>
            <button type="button" class="settings-action-button settings-team-edit-button">Editar</button>
            <button type="button" class="settings-action-button settings-team-delete-button">Eliminar</button>
          </div>
        </td>
      `;

      tableBody.prepend(row);

      const teamViewButton = row.querySelector('.settings-team-view-button');
      const teamEditButton = row.querySelector('.settings-team-edit-button');
      const teamDeleteButton = row.querySelector('.settings-team-delete-button');

      if (teamViewButton) {
        teamViewButton.addEventListener('click', () => {
          openTeamDetailModal(row);
        });
      }

      if (teamEditButton) {
        teamEditButton.addEventListener('click', () => {
          openTeamEditModal(row);
        });
      }

      if (teamDeleteButton) {
        teamDeleteButton.addEventListener('click', () => {
          openTeamDeleteConfirmModal(row);
        });
      }

      applyTeamFilters();
      closeNewTeamModal();
    });
  }

  if (closeTeamDeleteConfirmModalButton) {
    closeTeamDeleteConfirmModalButton.addEventListener('click', closeTeamDeleteConfirmModal);
  }

  if (cancelTeamDeleteConfirmButton) {
    cancelTeamDeleteConfirmButton.addEventListener('click', closeTeamDeleteConfirmModal);
  }

  if (acceptTeamDeleteConfirmButton) {
    acceptTeamDeleteConfirmButton.addEventListener('click', () => {
      if (pendingTeamDeleteRow) {
        pendingTeamDeleteRow.remove();
        applyTeamFilters();
      }

      closeTeamDeleteConfirmModal();
    });
  }

  if (teamDeleteConfirmModal) {
    teamDeleteConfirmModal.addEventListener('click', (event) => {
      if (event.target === teamDeleteConfirmModal) {
        closeTeamDeleteConfirmModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeUserDetailModal();
      closeTeamDetailModal();
      closeTeamEditModal();
      closeNewTeamModal();
      closeTeamDeleteConfirmModal();
      closeUserEditModal();
      closeStatusConfirmModal();
      closeNewUserModal();
    }
  });
});
