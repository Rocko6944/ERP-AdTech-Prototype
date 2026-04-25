document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const ticketSearchInput = document.querySelector('#ticketSearchInput');
  const ticketStatusFilter = document.querySelector('#ticketStatusFilter');
  const ticketPriorityFilter = document.querySelector('#ticketPriorityFilter');
  const clearTicketFiltersButton = document.querySelector('#clearTicketFilters');
  const openTicketCreateButton = document.querySelector('#openTicketCreateButton');
  const ticketsTable = document.querySelector('#supportTicketsTable');
  const paginationLabel = document.querySelector('#supportPaginationLabel');
  const prevPageButton = document.querySelector('#prevTicketsPage');
  const nextPageButton = document.querySelector('#nextTicketsPage');
  const pageButtons = document.querySelectorAll('[data-page]');
  const ticketsOpenCount = document.querySelector('#ticketsOpenCount');
  const ticketsProgressCount = document.querySelector('#ticketsProgressCount');
  const ticketsPendingCount = document.querySelector('#ticketsPendingCount');
  const ticketsClosedCount = document.querySelector('#ticketsClosedCount');
  const supportToast = document.querySelector('#supportToast');
  const ticketViewModal = document.querySelector('#ticketViewModal');
  const ticketEditModal = document.querySelector('#ticketEditModal');
  const ticketCreateModal = document.querySelector('#ticketCreateModal');
  const closeTicketViewModalButton = document.querySelector('#closeTicketViewModal');
  const closeTicketViewFooterButton = document.querySelector('#closeTicketViewFooter');
  const closeTicketEditModalButton = document.querySelector('#closeTicketEditModal');
  const closeTicketCreateModalButton = document.querySelector('#closeTicketCreateModal');
  const cancelTicketEditButton = document.querySelector('#cancelTicketEdit');
  const cancelTicketCreateButton = document.querySelector('#cancelTicketCreate');
  const deleteTicketEditButton = document.querySelector('#deleteTicketEdit');
  const saveTicketEditButton = document.querySelector('#saveTicketEdit');
  const saveTicketCreateButton = document.querySelector('#saveTicketCreate');
  const ticketViewModalTitle = document.querySelector('#ticketViewModalTitle');
  const ticketViewStatusPill = document.querySelector('#ticketViewStatusPill');
  const ticketViewClient = document.querySelector('#ticketViewClient');
  const ticketViewContact = document.querySelector('#ticketViewContact');
  const ticketViewPriorityPill = document.querySelector('#ticketViewPriorityPill');
  const ticketViewType = document.querySelector('#ticketViewType');
  const ticketViewOwner = document.querySelector('#ticketViewOwner');
  const ticketViewCreatedAt = document.querySelector('#ticketViewCreatedAt');
  const ticketViewInlineStatus = document.querySelector('#ticketViewInlineStatus');
  const ticketViewDescription = document.querySelector('#ticketViewDescription');
  const ticketViewFileName = document.querySelector('#ticketViewFileName');
  const ticketViewFileMeta = document.querySelector('#ticketViewFileMeta');
  const ticketEditSubject = document.querySelector('#ticketEditSubject');
  const ticketEditDescription = document.querySelector('#ticketEditDescription');
  const ticketEditClient = document.querySelector('#ticketEditClient');
  const ticketEditContact = document.querySelector('#ticketEditContact');
  const ticketEditType = document.querySelector('#ticketEditType');
  const ticketEditPriority = document.querySelector('#ticketEditPriority');
  const ticketEditNotes = document.querySelector('#ticketEditNotes');
  const ticketEditOwner = document.querySelector('#ticketEditOwner');
  const ticketEditStatus = document.querySelector('#ticketEditStatus');
  const ticketCreateSubject = document.querySelector('#ticketCreateSubject');
  const ticketCreateDescription = document.querySelector('#ticketCreateDescription');
  const ticketCreateClient = document.querySelector('#ticketCreateClient');
  const ticketCreateContact = document.querySelector('#ticketCreateContact');
  const ticketCreateType = document.querySelector('#ticketCreateType');
  const ticketCreatePriority = document.querySelector('#ticketCreatePriority');
  const ticketCreateOwner = document.querySelector('#ticketCreateOwner');
  const ticketCreateStatus = document.querySelector('#ticketCreateStatus');
  const ticketCreateFile = document.querySelector('#ticketCreateFile');
  const ticketCreateFileName = document.querySelector('#ticketCreateFileName');
  const collapseKey = 'erpOperationsSidebarCollapsed';
  let pendingTicketEditIndex = null;

  const tickets = [
    {
      code: '2020001',
      subject: 'Error en reporte de campañas',
      client: 'Tech Solutions Inc.',
      contact: 'Ana Garcia',
      type: 'Incidencia',
      priority: 'Alta',
      status: 'Abierto',
      createdAt: '15/06/2024',
      owner: 'Carlos Perez',
      description: 'Describe el problema o solicitud del cliente relacionada con la visualizacion de campañas y resultados.',
      fileName: 'Guia_Desarrollo_SEO_Q3.pdf',
      fileMeta: '1.2 MB · PDF'
    },
    {
      code: '2020002',
      subject: 'Duda sobre integración',
      client: 'Carlos',
      contact: 'Luisa Torres',
      type: 'Consulta',
      priority: 'Media',
      status: 'En proceso',
      createdAt: '15/06/2024',
      owner: 'Carlos',
      description: 'Consulta operativa sobre el flujo de integracion con herramientas externas y permisos asociados.',
      fileName: 'Detalle_Integracion.pdf',
      fileMeta: '940 KB · PDF'
    },
    {
      code: '2020003',
      subject: 'Duda sobre integración API',
      client: 'San Dianzo',
      contact: 'Mario Lujan',
      type: 'Consulta',
      priority: 'Media',
      status: 'Pendiente',
      createdAt: '15/06/2024',
      owner: 'Carlos',
      description: 'El cliente solicita claridad sobre endpoints, autenticacion y tiempos de respuesta del servicio.',
      fileName: 'API_Reference.pdf',
      fileMeta: '1.0 MB · PDF'
    },
    {
      code: '2020004',
      subject: 'Error en facturación',
      client: 'Carlos Perez',
      contact: 'Marta Velez',
      type: 'Incidencia',
      priority: 'Alta',
      status: 'Pendiente',
      createdAt: '15/06/2024',
      owner: 'Sariar',
      description: 'Existe una diferencia en el monto facturado y el detalle enviado al cliente final.',
      fileName: 'Factura_Observada.pdf',
      fileMeta: '780 KB · PDF'
    },
    {
      code: '2020005',
      subject: 'Error en facturación',
      client: 'Carlos Perezo',
      contact: 'Lucia Mena',
      type: 'Incidencia',
      priority: 'Alta',
      status: 'Cerrado',
      createdAt: '15/06/2024',
      owner: 'Retomoro',
      description: 'Caso resuelto luego de corregir la configuracion de impuestos y reenviar comprobantes.',
      fileName: 'Resolucion_Facturacion.pdf',
      fileMeta: '610 KB · PDF'
    },
    {
      code: '2020006',
      subject: 'Duda sobre integración API',
      client: 'San Dianzo',
      contact: 'Jorge Silva',
      type: 'Consulta',
      priority: 'Media',
      status: 'Cerrado',
      createdAt: '15/06/2024',
      owner: 'Carlos',
      description: 'Se atendio una consulta sobre autenticacion y limites de consumo para integraciones externas.',
      fileName: 'Respuesta_API.pdf',
      fileMeta: '870 KB · PDF'
    },
    {
      code: '2020007',
      subject: 'Duda sobre integración API',
      client: 'San Dianzo',
      contact: 'Claudia Rios',
      type: 'Consulta',
      priority: 'Media',
      status: 'Pendiente',
      createdAt: '15/06/2024',
      owner: 'Carlos',
      description: 'Solicitud pendiente de validacion tecnica para habilitar el entorno de pruebas de la API.',
      fileName: 'Checklist_API.docx',
      fileMeta: '520 KB · DOCX'
    }
  ];

  let currentPage = 1;
  const pageSize = 7;

  const showSupportToast = (message) => {
    if (!supportToast) {
      return;
    }

    supportToast.textContent = message;
    supportToast.hidden = false;
    window.clearTimeout(window.supportToastTimeout);
    window.supportToastTimeout = window.setTimeout(() => {
      supportToast.hidden = true;
    }, 2500);
  };

  const escapeHTML = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const getNextTicketCode = () => {
    const maxCode = tickets.reduce((max, ticket) => {
      const codeNumber = Number(ticket.code);
      return Number.isNaN(codeNumber) ? max : Math.max(max, codeNumber);
    }, 2020000);

    return String(maxCode + 1);
  };

  const formatTicketDate = () => {
    const date = new Date();
    return new Intl.DateTimeFormat('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  const getPriorityClass = (priority) => {
    if (priority === 'Alta') return 'is-high';
    if (priority === 'Media') return 'is-medium';
    return 'is-low';
  };

  const getStatusClass = (status) => {
    if (status === 'Abierto') return 'is-open';
    if (status === 'En proceso') return 'is-progress';
    if (status === 'Pendiente') return 'is-pending';
    return 'is-closed';
  };

  const hideTicketViewModal = () => {
    if (ticketViewModal) {
      ticketViewModal.hidden = true;
    }
  };

  const hideTicketEditModal = () => {
    if (ticketEditModal) {
      ticketEditModal.hidden = true;
    }

    pendingTicketEditIndex = null;
  };

  const resetTicketCreateForm = () => {
    if (ticketCreateSubject) ticketCreateSubject.value = '';
    if (ticketCreateDescription) ticketCreateDescription.value = '';
    if (ticketCreateClient) ticketCreateClient.value = '';
    if (ticketCreateContact) ticketCreateContact.value = '';
    if (ticketCreateType) ticketCreateType.value = 'Soporte tecnico';
    if (ticketCreatePriority) ticketCreatePriority.value = 'Alta';
    if (ticketCreateOwner) ticketCreateOwner.value = 'Carlos';
    if (ticketCreateStatus) ticketCreateStatus.value = 'Abierto';
    if (ticketCreateFile) ticketCreateFile.value = '';
    if (ticketCreateFileName) ticketCreateFileName.textContent = 'Adjunta evidencias o documentos relacionados';
  };

  const openTicketCreateModal = () => {
    if (!ticketCreateModal) {
      return;
    }

    resetTicketCreateForm();
    ticketCreateModal.hidden = false;

    if (ticketCreateSubject) {
      ticketCreateSubject.focus();
    }
  };

  const hideTicketCreateModal = () => {
    if (ticketCreateModal) {
      ticketCreateModal.hidden = true;
    }
  };

  const applyTicketStatus = (element, status) => {
    if (!element) {
      return;
    }

    element.textContent = status;
    element.className = element.id === 'ticketViewInlineStatus' ? 'ticket-view-inline-status' : 'ticket-view-status-pill';

    if (status === 'Abierto') {
      element.classList.add('is-open');
      return;
    }

    if (status === 'En proceso') {
      element.classList.add('is-progress');
      return;
    }

    if (status === 'Pendiente') {
      element.classList.add('is-pending');
      return;
    }

    element.classList.add('is-closed');
  };

  const applyTicketPriority = (priority) => {
    if (!ticketViewPriorityPill) {
      return;
    }

    ticketViewPriorityPill.textContent = priority;
    ticketViewPriorityPill.className = 'ticket-priority-pill';

    if (priority === 'Alta') {
      ticketViewPriorityPill.classList.add('is-high');
      return;
    }

    if (priority === 'Media') {
      ticketViewPriorityPill.classList.add('is-medium');
      return;
    }

    ticketViewPriorityPill.classList.add('is-low');
  };

  const openTicketViewModal = (index) => {
    const ticket = tickets[index];

    if (!ticket || !ticketViewModal) {
      return;
    }

    if (ticketViewModalTitle) {
      ticketViewModalTitle.textContent = ticket.subject;
    }

    if (ticketViewClient) {
      ticketViewClient.textContent = ticket.client;
    }

    if (ticketViewContact) {
      ticketViewContact.textContent = ticket.contact;
    }

    if (ticketViewType) {
      ticketViewType.textContent = ticket.type;
    }

    if (ticketViewOwner) {
      ticketViewOwner.textContent = ticket.owner;
    }

    if (ticketViewCreatedAt) {
      ticketViewCreatedAt.textContent = ticket.createdAt;
    }

    if (ticketViewDescription) {
      ticketViewDescription.textContent = ticket.description;
    }

    if (ticketViewFileName) {
      ticketViewFileName.textContent = ticket.fileName;
    }

    if (ticketViewFileMeta) {
      ticketViewFileMeta.textContent = ticket.fileMeta;
    }

    applyTicketStatus(ticketViewStatusPill, ticket.status);
    applyTicketStatus(ticketViewInlineStatus, ticket.status);
    applyTicketPriority(ticket.priority);
    ticketViewModal.hidden = false;
  };

  const openTicketEditModal = (index) => {
    const ticket = tickets[index];

    if (!ticket || !ticketEditModal) {
      return;
    }

    pendingTicketEditIndex = index;

    if (ticketEditSubject) {
      ticketEditSubject.value = ticket.subject;
    }

    if (ticketEditDescription) {
      ticketEditDescription.value = ticket.description;
    }

    if (ticketEditClient) {
      ticketEditClient.value = ticket.client;
    }

    if (ticketEditContact) {
      ticketEditContact.value = ticket.contact;
    }

    if (ticketEditType) {
      ticketEditType.value = ticket.type;
    }

    if (ticketEditPriority) {
      ticketEditPriority.value = ticket.priority;
    }

    if (ticketEditNotes) {
      ticketEditNotes.value = ticket.fileName || '';
    }

    if (ticketEditOwner) {
      ticketEditOwner.value = ticket.owner;
    }

    if (ticketEditStatus) {
      ticketEditStatus.value = ticket.status;
    }

    ticketEditModal.hidden = false;
  };

  const getFilteredTickets = () => {
    const query = ticketSearchInput ? ticketSearchInput.value.trim().toLowerCase() : '';
    const status = ticketStatusFilter ? ticketStatusFilter.value : 'Todos';
    const priority = ticketPriorityFilter ? ticketPriorityFilter.value : 'Todos';

    return tickets.filter((ticket) => {
      const matchesQuery =
        !query || `${ticket.code} ${ticket.subject} ${ticket.client} ${ticket.owner}`.toLowerCase().includes(query);
      const matchesStatus = status === 'Todos' || ticket.status === status;
      const matchesPriority = priority === 'Todos' || ticket.priority === priority;
      return matchesQuery && matchesStatus && matchesPriority;
    });
  };

  const updateTicketCounters = () => {
    if (ticketsOpenCount) {
      ticketsOpenCount.textContent = String(tickets.filter((ticket) => ticket.status === 'Abierto').length);
    }

    if (ticketsProgressCount) {
      ticketsProgressCount.textContent = String(tickets.filter((ticket) => ticket.status === 'En proceso').length);
    }

    if (ticketsPendingCount) {
      ticketsPendingCount.textContent = String(tickets.filter((ticket) => ticket.status === 'Pendiente').length);
    }

    if (ticketsClosedCount) {
      ticketsClosedCount.textContent = String(tickets.filter((ticket) => ticket.status === 'Cerrado').length);
    }
  };

  const renderTickets = () => {
    if (!ticketsTable) {
      return;
    }

    const filteredTickets = getFilteredTickets();
    const totalPages = Math.max(1, Math.ceil(filteredTickets.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);

    const startIndex = (currentPage - 1) * pageSize;
    const pagedTickets = filteredTickets.slice(startIndex, startIndex + pageSize);

    ticketsTable.innerHTML = '';

    pagedTickets.forEach((ticket) => {
      const row = document.createElement('div');
      row.className = 'support-table-row';
      row.innerHTML = `
        <span>${escapeHTML(ticket.code)}</span>
        <span>${escapeHTML(ticket.subject)}</span>
        <span>${escapeHTML(ticket.client)}</span>
        <span><span class="support-priority-pill ${getPriorityClass(ticket.priority)}">${escapeHTML(ticket.priority)}</span></span>
        <span><span class="support-status-pill ${getStatusClass(ticket.status)}">${escapeHTML(ticket.status)}</span></span>
        <span class="support-created-cell">${escapeHTML(ticket.createdAt)}</span>
        <span class="support-owner-cell">${escapeHTML(ticket.owner)}</span>
        <span class="support-actions">
          <button type="button" class="support-action" data-ticket-view-index="${tickets.indexOf(ticket)}">Ver ticket</button>
          <button type="button" class="support-action" data-ticket-edit-index="${tickets.indexOf(ticket)}">Editar</button>
          <button type="button" class="support-action" data-ticket-close-index="${tickets.indexOf(ticket)}">Cerrar ticket</button>
        </span>
      `;
      ticketsTable.appendChild(row);
    });

    if (paginationLabel) {
      const from = filteredTickets.length ? startIndex + 1 : 0;
      const to = Math.min(startIndex + pageSize, filteredTickets.length);
      paginationLabel.textContent = `Mostrando ${from}-${to} de ${filteredTickets.length}`;
    }

    pageButtons.forEach((button) => {
      button.classList.toggle('is-active', Number(button.dataset.page) === currentPage);
    });

    if (prevPageButton) {
      prevPageButton.disabled = currentPage === 1;
    }

    if (nextPageButton) {
      nextPageButton.disabled = currentPage === totalPages;
    }

    updateTicketCounters();
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

  if (ticketSearchInput) {
    ticketSearchInput.addEventListener('input', () => {
      currentPage = 1;
      renderTickets();
    });
  }

  if (ticketStatusFilter) {
    ticketStatusFilter.addEventListener('change', () => {
      currentPage = 1;
      renderTickets();
    });
  }

  if (ticketPriorityFilter) {
    ticketPriorityFilter.addEventListener('change', () => {
      currentPage = 1;
      renderTickets();
    });
  }

  if (clearTicketFiltersButton) {
    clearTicketFiltersButton.addEventListener('click', () => {
      if (ticketSearchInput) ticketSearchInput.value = '';
      if (ticketStatusFilter) ticketStatusFilter.value = 'Todos';
      if (ticketPriorityFilter) ticketPriorityFilter.value = 'Todos';
      currentPage = 1;
      renderTickets();
    });
  }

  if (openTicketCreateButton) {
    openTicketCreateButton.addEventListener('click', openTicketCreateModal);
  }

  if (ticketsTable) {
    ticketsTable.addEventListener('click', (event) => {
      const viewButton = event.target.closest('[data-ticket-view-index]');
      const editButton = event.target.closest('[data-ticket-edit-index]');
      const closeButton = event.target.closest('[data-ticket-close-index]');

      if (viewButton) {
        const viewIndex = Number(viewButton.dataset.ticketViewIndex);

        if (Number.isNaN(viewIndex) || !tickets[viewIndex]) {
          return;
        }

        openTicketViewModal(viewIndex);
        return;
      }

      if (closeButton) {
        const closeIndex = Number(closeButton.dataset.ticketCloseIndex);

        if (Number.isNaN(closeIndex) || !tickets[closeIndex]) {
          return;
        }

        if (tickets[closeIndex].status === 'Cerrado') {
          showSupportToast('Este ticket ya esta cerrado.');
          return;
        }

        tickets[closeIndex].status = 'Cerrado';
        renderTickets();
        showSupportToast('Ticket cerrado correctamente.');
        return;
      }

      if (!editButton) {
        return;
      }

      const editIndex = Number(editButton.dataset.ticketEditIndex);

      if (Number.isNaN(editIndex) || !tickets[editIndex]) {
        return;
      }

      openTicketEditModal(editIndex);
    });
  }

  if (closeTicketViewModalButton) {
    closeTicketViewModalButton.addEventListener('click', hideTicketViewModal);
  }

  if (closeTicketViewFooterButton) {
    closeTicketViewFooterButton.addEventListener('click', hideTicketViewModal);
  }

  if (closeTicketEditModalButton) {
    closeTicketEditModalButton.addEventListener('click', hideTicketEditModal);
  }

  if (cancelTicketEditButton) {
    cancelTicketEditButton.addEventListener('click', hideTicketEditModal);
  }

  if (closeTicketCreateModalButton) {
    closeTicketCreateModalButton.addEventListener('click', hideTicketCreateModal);
  }

  if (cancelTicketCreateButton) {
    cancelTicketCreateButton.addEventListener('click', hideTicketCreateModal);
  }

  if (ticketCreateFile) {
    ticketCreateFile.addEventListener('change', () => {
      if (!ticketCreateFileName) {
        return;
      }

      ticketCreateFileName.textContent = ticketCreateFile.files.length
        ? ticketCreateFile.files[0].name
        : 'Adjunta evidencias o documentos relacionados';
    });
  }

  if (saveTicketCreateButton) {
    saveTicketCreateButton.addEventListener('click', () => {
      const subject = ticketCreateSubject ? ticketCreateSubject.value.trim() : '';
      const client = ticketCreateClient ? ticketCreateClient.value.trim() : '';

      if (!subject) {
        if (ticketCreateSubject) ticketCreateSubject.focus();
        return;
      }

      if (!client) {
        if (ticketCreateClient) ticketCreateClient.focus();
        return;
      }

      const selectedFile = ticketCreateFile && ticketCreateFile.files.length ? ticketCreateFile.files[0] : null;

      tickets.unshift({
        code: getNextTicketCode(),
        subject,
        client,
        contact: ticketCreateContact ? ticketCreateContact.value.trim() || 'Sin contacto' : 'Sin contacto',
        type: ticketCreateType ? ticketCreateType.value : 'Soporte tecnico',
        priority: ticketCreatePriority ? ticketCreatePriority.value : 'Alta',
        status: ticketCreateStatus ? ticketCreateStatus.value : 'Abierto',
        createdAt: formatTicketDate(),
        owner: ticketCreateOwner ? ticketCreateOwner.value : 'Carlos',
        description: ticketCreateDescription
          ? ticketCreateDescription.value.trim() || 'Sin descripcion registrada.'
          : 'Sin descripcion registrada.',
        fileName: selectedFile ? selectedFile.name : 'Sin archivos adjuntos',
        fileMeta: selectedFile ? `${Math.max(1, Math.round(selectedFile.size / 1024))} KB` : 'No adjunto'
      });

      currentPage = 1;
      renderTickets();
      hideTicketCreateModal();
    });
  }

  if (deleteTicketEditButton) {
    deleteTicketEditButton.addEventListener('click', () => {
      if (pendingTicketEditIndex === null || !tickets[pendingTicketEditIndex]) {
        hideTicketEditModal();
        return;
      }

      tickets.splice(pendingTicketEditIndex, 1);
      renderTickets();
      hideTicketEditModal();
    });
  }

  if (saveTicketEditButton) {
    saveTicketEditButton.addEventListener('click', () => {
      if (pendingTicketEditIndex === null || !tickets[pendingTicketEditIndex]) {
        hideTicketEditModal();
        return;
      }

      const ticket = tickets[pendingTicketEditIndex];
      ticket.subject = ticketEditSubject ? ticketEditSubject.value.trim() || ticket.subject : ticket.subject;
      ticket.description = ticketEditDescription ? ticketEditDescription.value.trim() : ticket.description;
      ticket.client = ticketEditClient ? ticketEditClient.value.trim() || ticket.client : ticket.client;
      ticket.contact = ticketEditContact ? ticketEditContact.value.trim() || ticket.contact : ticket.contact;
      ticket.type = ticketEditType ? ticketEditType.value : ticket.type;
      ticket.priority = ticketEditPriority ? ticketEditPriority.value : ticket.priority;
      ticket.owner = ticketEditOwner ? ticketEditOwner.value : ticket.owner;
      ticket.status = ticketEditStatus ? ticketEditStatus.value : ticket.status;

      renderTickets();
      hideTicketEditModal();
    });
  }

  if (prevPageButton) {
    prevPageButton.addEventListener('click', () => {
      currentPage = Math.max(1, currentPage - 1);
      renderTickets();
    });
  }

  if (nextPageButton) {
    nextPageButton.addEventListener('click', () => {
      const totalPages = Math.max(1, Math.ceil(getFilteredTickets().length / pageSize));
      currentPage = Math.min(totalPages, currentPage + 1);
      renderTickets();
    });
  }

  pageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentPage = Number(button.dataset.page) || 1;
      renderTickets();
    });
  });

  if (ticketViewModal) {
    ticketViewModal.addEventListener('click', (event) => {
      if (event.target === ticketViewModal) {
        hideTicketViewModal();
      }
    });
  }

  if (ticketEditModal) {
    ticketEditModal.addEventListener('click', (event) => {
      if (event.target === ticketEditModal) {
        hideTicketEditModal();
      }
    });
  }

  if (ticketCreateModal) {
    ticketCreateModal.addEventListener('click', (event) => {
      if (event.target === ticketCreateModal) {
        hideTicketCreateModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (ticketViewModal && !ticketViewModal.hidden) {
        hideTicketViewModal();
      }

      if (ticketEditModal && !ticketEditModal.hidden) {
        hideTicketEditModal();
      }

      if (ticketCreateModal && !ticketCreateModal.hidden) {
        hideTicketCreateModal();
      }
    }
  });

  renderTickets();
});
