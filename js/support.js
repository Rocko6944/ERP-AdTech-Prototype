document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const ticketSearchInput = document.querySelector('#ticketSearchInput');
  const ticketStatusFilter = document.querySelector('#ticketStatusFilter');
  const ticketPriorityFilter = document.querySelector('#ticketPriorityFilter');
  const clearTicketFiltersButton = document.querySelector('#clearTicketFilters');
  const ticketsTable = document.querySelector('#supportTicketsTable');
  const paginationLabel = document.querySelector('#supportPaginationLabel');
  const prevPageButton = document.querySelector('#prevTicketsPage');
  const nextPageButton = document.querySelector('#nextTicketsPage');
  const pageButtons = document.querySelectorAll('[data-page]');
  const ticketViewModal = document.querySelector('#ticketViewModal');
  const ticketEditModal = document.querySelector('#ticketEditModal');
  const closeTicketViewModalButton = document.querySelector('#closeTicketViewModal');
  const closeTicketViewFooterButton = document.querySelector('#closeTicketViewFooter');
  const closeTicketEditModalButton = document.querySelector('#closeTicketEditModal');
  const cancelTicketEditButton = document.querySelector('#cancelTicketEdit');
  const deleteTicketEditButton = document.querySelector('#deleteTicketEdit');
  const saveTicketEditButton = document.querySelector('#saveTicketEdit');
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
        <span>${ticket.code}</span>
        <span>${ticket.subject}</span>
        <span>${ticket.client}</span>
        <span><span class="support-priority-pill ${getPriorityClass(ticket.priority)}">${ticket.priority}</span></span>
        <span><span class="support-status-pill ${getStatusClass(ticket.status)}">${ticket.status}</span></span>
        <span class="support-created-cell">${ticket.createdAt}</span>
        <span class="support-owner-cell">${ticket.owner}</span>
        <span class="support-actions">
          <button type="button" class="support-action" data-ticket-view-index="${tickets.indexOf(ticket)}">Ver ticket</button>
          <button type="button" class="support-action" data-ticket-edit-index="${tickets.indexOf(ticket)}">Editar</button>
          <button type="button" class="support-action">Cerrar ticket</button>
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

  if (ticketsTable) {
    ticketsTable.addEventListener('click', (event) => {
      const viewButton = event.target.closest('[data-ticket-view-index]');
      const editButton = event.target.closest('[data-ticket-edit-index]');

      if (viewButton) {
        const viewIndex = Number(viewButton.dataset.ticketViewIndex);

        if (Number.isNaN(viewIndex) || !tickets[viewIndex]) {
          return;
        }

        openTicketViewModal(viewIndex);
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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (ticketViewModal && !ticketViewModal.hidden) {
        hideTicketViewModal();
      }

      if (ticketEditModal && !ticketEditModal.hidden) {
        hideTicketEditModal();
      }
    }
  });

  renderTickets();
});
