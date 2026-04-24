document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const projectTitle = document.querySelector('#projectTitle');
  const projectClient = document.querySelector('#projectClient');
  const projectProgressCard = document.querySelector('#projectProgressCard');
  const projectStartDate = document.querySelector('#projectStartDate');
  const projectEndDate = document.querySelector('#projectEndDate');
  const projectOwner = document.querySelector('#projectOwner');
  const projectBudget = document.querySelector('#projectBudget');
  const projectProgressFill = document.querySelector('#projectProgressFill');
  const projectProgressLabel = document.querySelector('#projectProgressLabel');
  const projectNotes = document.querySelector('#projectNotes');
  const projectServicesTable = document.querySelector('#projectServicesTable');
  const deliverablesSearchInput = document.querySelector('#deliverablesSearchInput');
  const deliverablesStatusFilter = document.querySelector('#deliverablesStatusFilter');
  const deliverablesTypeFilter = document.querySelector('#deliverablesTypeFilter');
  const clearDeliverablesFiltersButton = document.querySelector('#clearDeliverablesFilters');
  const deliverablesTableBody = document.querySelector('#deliverablesTableBody');
  const projectTasksSearchInput = document.querySelector('#projectTasksSearchInput');
  const projectTasksStatusFilter = document.querySelector('#projectTasksStatusFilter');
  const projectTasksOwnerFilter = document.querySelector('#projectTasksOwnerFilter');
  const clearProjectTasksFiltersButton = document.querySelector('#clearProjectTasksFilters');
  const openTaskCreateModalButton = document.querySelector('#openTaskCreateModal');
  const taskEditModal = document.querySelector('#taskEditModal');
  const taskViewModal = document.querySelector('#taskViewModal');
  const taskCreateModal = document.querySelector('#taskCreateModal');
  const closeTaskEditModalButton = document.querySelector('#closeTaskEditModal');
  const closeTaskViewModalButton = document.querySelector('#closeTaskViewModal');
  const closeTaskCreateModalButton = document.querySelector('#closeTaskCreateModal');
  const saveTaskEditButton = document.querySelector('#saveTaskEdit');
  const deleteTaskEditButton = document.querySelector('#deleteTaskEdit');
  const saveTaskDraftButton = document.querySelector('#saveTaskDraft');
  const confirmTaskCreateButton = document.querySelector('#confirmTaskCreate');
  const taskEditProjectName = document.querySelector('#taskEditProjectName');
  const taskEditDeliverableName = document.querySelector('#taskEditDeliverableName');
  const taskEditName = document.querySelector('#taskEditName');
  const taskEditDescription = document.querySelector('#taskEditDescription');
  const taskEditNotes = document.querySelector('#taskEditNotes');
  const taskEditStatus = document.querySelector('#taskEditStatus');
  const taskEditDeliverableReadonly = document.querySelector('#taskEditDeliverableReadonly');
  const taskEditOwner = document.querySelector('#taskEditOwner');
  const taskEditStartDate = document.querySelector('#taskEditStartDate');
  const taskEditDueDate = document.querySelector('#taskEditDueDate');
  const taskEditProjectReadonly = document.querySelector('#taskEditProjectReadonly');
  const taskEditDeliverableSelect = document.querySelector('#taskEditDeliverableSelect');
  const taskEditReference = document.querySelector('#taskEditReference');
  const taskEditFileName = document.querySelector('#taskEditFileName');
  const taskEditFileMeta = document.querySelector('#taskEditFileMeta');
  const taskViewModalTitle = document.querySelector('#taskViewModalTitle');
  const taskViewStatusPill = document.querySelector('#taskViewStatusPill');
  const taskViewProject = document.querySelector('#taskViewProject');
  const taskViewOwner = document.querySelector('#taskViewOwner');
  const taskViewStartDate = document.querySelector('#taskViewStartDate');
  const taskViewDueDate = document.querySelector('#taskViewDueDate');
  const taskViewInlineStatus = document.querySelector('#taskViewInlineStatus');
  const taskViewFileName = document.querySelector('#taskViewFileName');
  const taskViewFileMeta = document.querySelector('#taskViewFileMeta');
  const taskCreateProjectName = document.querySelector('#taskCreateProjectName');
  const taskCreateDeliverableName = document.querySelector('#taskCreateDeliverableName');
  const taskCreateName = document.querySelector('#taskCreateName');
  const taskCreateDescription = document.querySelector('#taskCreateDescription');
  const taskCreateNotes = document.querySelector('#taskCreateNotes');
  const taskCreateStatus = document.querySelector('#taskCreateStatus');
  const taskCreateDeliverableReadonly = document.querySelector('#taskCreateDeliverableReadonly');
  const taskCreateOwner = document.querySelector('#taskCreateOwner');
  const taskCreateStartDate = document.querySelector('#taskCreateStartDate');
  const taskCreateDueDate = document.querySelector('#taskCreateDueDate');
  const taskCreateDeliverableSelect = document.querySelector('#taskCreateDeliverableSelect');
  const taskCreateReference = document.querySelector('#taskCreateReference');
  const tasksColumnPending = document.querySelector('#tasksColumnPending');
  const tasksColumnInProgress = document.querySelector('#tasksColumnInProgress');
  const tasksColumnInReview = document.querySelector('#tasksColumnInReview');
  const tasksColumnCompleted = document.querySelector('#tasksColumnCompleted');
  const tasksCountPending = document.querySelector('#tasksCountPending');
  const tasksCountInProgress = document.querySelector('#tasksCountInProgress');
  const tasksCountInReview = document.querySelector('#tasksCountInReview');
  const tasksCountCompleted = document.querySelector('#tasksCountCompleted');
  const openDeliverableCreateModalButton = document.querySelector('#openDeliverableCreateModal');
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
  const deliverableViewModal = document.querySelector('#deliverableViewModal');
  const closeDeliverableViewModalButton = document.querySelector('#closeDeliverableViewModal');
  const closeDeliverableViewFooterButton = document.querySelector('#closeDeliverableViewFooter');
  const deliverableViewModalTitle = document.querySelector('#deliverableViewModalTitle');
  const deliverableViewProjectName = document.querySelector('#deliverableViewProjectName');
  const deliverableViewStatusPill = document.querySelector('#deliverableViewStatusPill');
  const deliverableViewType = document.querySelector('#deliverableViewType');
  const deliverableViewOwner = document.querySelector('#deliverableViewOwner');
  const deliverableViewDueDate = document.querySelector('#deliverableViewDueDate');
  const deliverableViewDescription = document.querySelector('#deliverableViewDescription');
  const deliverableViewContent = document.querySelector('#deliverableViewContent');
  const deliverableViewProgress = document.querySelector('#deliverableViewProgress');
  const deliverableViewProgressValue = document.querySelector('#deliverableViewProgressValue');
  const deliverableViewStatusText = document.querySelector('#deliverableViewStatusText');
  const deliverableViewUpdated = document.querySelector('#deliverableViewUpdated');
  const deliverableDeleteModal = document.querySelector('#deliverableDeleteModal');
  const deliverableDeleteMessage = document.querySelector('#deliverableDeleteMessage');
  const cancelDeliverableDeleteButton = document.querySelector('#cancelDeliverableDelete');
  const confirmDeliverableDeleteButton = document.querySelector('#confirmDeliverableDelete');
  const deliverableCreateModal = document.querySelector('#deliverableCreateModal');
  const closeDeliverableCreateModalButton = document.querySelector('#closeDeliverableCreateModal');
  const saveDeliverableDraftButton = document.querySelector('#saveDeliverableDraft');
  const confirmDeliverableCreateButton = document.querySelector('#confirmDeliverableCreate');
  const deliverableCreateName = document.querySelector('#deliverableCreateName');
  const deliverableCreateType = document.querySelector('#deliverableCreateType');
  const deliverableCreateDescription = document.querySelector('#deliverableCreateDescription');
  const deliverableCreateContent = document.querySelector('#deliverableCreateContent');
  const deliverableCreateUrl = document.querySelector('#deliverableCreateUrl');
  const deliverableCreateOwner = document.querySelector('#deliverableCreateOwner');
  const deliverableCreateDueDate = document.querySelector('#deliverableCreateDueDate');
  const deliverableCreateStatus = document.querySelector('#deliverableCreateStatus');
  const teamLeadName = document.querySelector('#teamLeadName');
  const teamLeadEmail = document.querySelector('#teamLeadEmail');
  const teamMembersList = document.querySelector('#teamMembersList');
  const openTeamAddModalButton = document.querySelector('#openTeamAddModal');
  const teamDeleteModal = document.querySelector('#teamDeleteModal');
  const teamDeleteMessage = document.querySelector('#teamDeleteMessage');
  const cancelTeamDeleteButton = document.querySelector('#cancelTeamDelete');
  const confirmTeamDeleteButton = document.querySelector('#confirmTeamDelete');
  const teamEditModal = document.querySelector('#teamEditModal');
  const closeTeamEditModalButton = document.querySelector('#closeTeamEditModal');
  const cancelTeamEditButton = document.querySelector('#cancelTeamEdit');
  const saveTeamEditButton = document.querySelector('#saveTeamEdit');
  const deleteFromEditModalButton = document.querySelector('#deleteFromEditModal');
  const teamEditUserList = document.querySelector('#teamEditUserList');
  const teamEditRole = document.querySelector('#teamEditRole');
  const teamEditStatus = document.querySelector('#teamEditStatus');
  const teamPermissionAssignInline = document.querySelector('#teamPermissionAssignInline');
  const teamPermissionUploadInline = document.querySelector('#teamPermissionUploadInline');
  const teamPermissionEditTasks = document.querySelector('#teamPermissionEditTasks');
  const teamPermissionAssignTasks = document.querySelector('#teamPermissionAssignTasks');
  const teamPermissionUploadDeliverables = document.querySelector('#teamPermissionUploadDeliverables');
  const teamProfileModal = document.querySelector('#teamProfileModal');
  const closeTeamProfileModalButton = document.querySelector('#closeTeamProfileModal');
  const closeTeamProfileFooterButton = document.querySelector('#closeTeamProfileFooter');
  const teamProfileName = document.querySelector('#teamProfileName');
  const teamProfileRole = document.querySelector('#teamProfileRole');
  const teamProfileArea = document.querySelector('#teamProfileArea');
  const teamProfileEmail = document.querySelector('#teamProfileEmail');
  const teamProfilePhone = document.querySelector('#teamProfilePhone');
  const teamProfileAreaDetail = document.querySelector('#teamProfileAreaDetail');
  const teamProfileStatus = document.querySelector('#teamProfileStatus');
  const teamProfileRoleDetail = document.querySelector('#teamProfileRoleDetail');
  const teamProfileAssignedDate = document.querySelector('#teamProfileAssignedDate');
  const teamProfilePermissions = document.querySelector('#teamProfilePermissions');
  const teamProfileAssignedTasks = document.querySelector('#teamProfileAssignedTasks');
  const teamProfileCompletedTasks = document.querySelector('#teamProfileCompletedTasks');
  const teamProfileLastActivity = document.querySelector('#teamProfileLastActivity');
  const teamProfileProjects = document.querySelector('#teamProfileProjects');
  const teamAddModal = document.querySelector('#teamAddModal');
  const closeTeamAddModalButton = document.querySelector('#closeTeamAddModal');
  const cancelTeamAddButton = document.querySelector('#cancelTeamAdd');
  const confirmTeamAddButton = document.querySelector('#confirmTeamAdd');
  const teamAddSelectTrigger = document.querySelector('#teamAddSelectTrigger');
  const teamAddSelectedUserLabel = document.querySelector('#teamAddSelectedUserLabel');
  const teamAddDropdown = document.querySelector('#teamAddDropdown');
  const teamAddSearch = document.querySelector('#teamAddSearch');
  const teamAddUserList = document.querySelector('#teamAddUserList');
  const teamAddRole = document.querySelector('#teamAddRole');
  const teamAddStatus = document.querySelector('#teamAddStatus');
  const teamAddEditTasks = document.querySelector('#teamAddEditTasks');
  const teamAddAssignTasks = document.querySelector('#teamAddAssignTasks');
  const teamAddAssignTasksRight = document.querySelector('#teamAddAssignTasksRight');
  const teamAddUploadDeliverables = document.querySelector('#teamAddUploadDeliverables');
  const tabTriggers = document.querySelectorAll('[data-project-tab-trigger]');
  const tabPanels = document.querySelectorAll('[data-project-tab-panel]');
  const collapseKey = 'erpOperationsSidebarCollapsed';
  const params = new URLSearchParams(window.location.search);
  let pendingDeliverableEditIndex = null;
  let pendingDeliverableDeleteIndex = null;
  let pendingTaskEditIndex = null;
  let pendingDeleteIndex = null;
  let pendingEditIndex = null;
  let pendingAddUserId = null;

  const detail = {
    name: params.get('name') || 'Renovacion Licencias Tech',
    client: params.get('client') || 'Tech Solution Inc.',
    startDate: params.get('startDate') || '15/06/24',
    endDate: params.get('endDate') || '15/07/26',
    owner: params.get('owner') || 'Carlos P.',
    progress: params.get('progress') || '65',
    notes:
      params.get('notes') ||
      'Detalles internos del proyecto y analisis incluida la consultoria inicial y observaciones de seguimiento.',
    budget: params.get('budget') || 'S/ 5000'
  };

  const services = [
    { service: 'Consultoria', description: 'Analisis inicial', quantity: 1 },
    { service: 'Consultoria', description: 'Analisis inicial', quantity: 1 },
    { service: 'Implementacion', description: 'Puesta en marcha', quantity: 1 }
  ];

  let deliverables = [
    {
      name: 'Reporte de campaña junio',
      type: 'Documento',
      owner: 'Ana G.',
      dueDate: '30/06/2024',
      status: 'Entregado',
      description: 'Reporte consolidado del avance de campaña de junio.',
      content: 'Documento de seguimiento con KPIs, observaciones y cierre mensual.',
      progress: 100,
      updated: 'hace 2 días'
    },
    {
      name: 'Logo vectorizado',
      type: 'Multimedia',
      owner: 'Juan C.',
      dueDate: '15/07/2024',
      status: 'Pendiente',
      description: 'Archivo editable del logo aprobado.',
      content: 'Set de recursos visuales finales para exportación y uso comercial.',
      progress: 45,
      updated: 'hace 4 días'
    },
    {
      name: 'Link a dashboard de analitica',
      type: 'Software',
      owner: 'Carlos P.',
      dueDate: '01/08/2024',
      status: 'Aprobado',
      description: 'Acceso al dashboard compartido con analítica del proyecto.',
      content: 'Instancia configurada con paneles, métricas y accesos compartidos.',
      progress: 85,
      updated: 'hace 1 día'
    },
    {
      name: 'Informe de KPIs Q2',
      type: 'Documento',
      owner: 'Beatriz L.',
      dueDate: '10/08/2024',
      status: 'Entregado',
      description: 'Informe de desempeño del segundo trimestre.',
      content: 'Documento técnico con resumen ejecutivo y métricas comparativas.',
      progress: 100,
      updated: 'hace 3 días'
    },
    {
      name: 'Mockups de landing page',
      type: 'Multimedia',
      owner: 'Juan C.',
      dueDate: '20/08/2024',
      status: 'Aprobado',
      description: 'Mockups aprobados para la landing page principal.',
      content: 'Piezas visuales listas para revisión final y traspaso a desarrollo.',
      progress: 90,
      updated: 'hace 5 días'
    },
    {
      name: 'Guía de estilo de marca',
      type: 'Documento',
      owner: 'Pedro M.',
      dueDate: '05/09/2024',
      status: 'Pendiente',
      description: 'Documento con lineamientos visuales y tono comunicacional.',
      content: 'Manual interno para consistencia de marca y aplicación por equipos.',
      progress: 30,
      updated: 'hace 6 días'
    }
  ];

  let teamMembers = [
    {
      name: 'Luis G.',
      email: 'luis.g@adtech.com',
      phone: '+52 55 1234 5678',
      role: 'Marketing Specialist',
      area: 'Marketing',
      status: 'Activo',
      assignedDate: '01/01/2026',
      assignedTasks: 12,
      completedTasks: 8,
      lastActivity: 'Hace 2 dias',
      permissions: { editTasks: true, assignTasks: true, uploadDeliverables: true }
    },
    {
      name: 'Maria R.',
      email: 'maria.r@adtech.com',
      phone: '+52 55 2345 6789',
      role: 'Developer',
      area: 'Producto',
      status: 'Inactivo',
      assignedDate: '08/01/2026',
      assignedTasks: 7,
      completedTasks: 4,
      lastActivity: 'Hace 5 dias',
      permissions: { editTasks: true, assignTasks: false, uploadDeliverables: true }
    },
    {
      name: 'Juan C.',
      email: 'juan.c@adtech.com',
      phone: '+52 55 3456 7890',
      role: 'Analista',
      area: 'Analitica',
      status: 'Inactivo',
      assignedDate: '10/01/2026',
      assignedTasks: 5,
      completedTasks: 2,
      lastActivity: 'Hace 1 semana',
      permissions: { editTasks: false, assignTasks: false, uploadDeliverables: false }
    },
    {
      name: 'Andrea P.',
      email: 'andrea.p@adtech.com',
      phone: '+52 55 4567 8901',
      role: 'Project Manager',
      area: 'Operaciones',
      status: 'Activo',
      assignedDate: '03/01/2026',
      assignedTasks: 15,
      completedTasks: 11,
      lastActivity: 'Hace 1 dia',
      permissions: { editTasks: true, assignTasks: true, uploadDeliverables: true }
    }
  ];

  const availableUsers = [
    { id: 'luis-g', name: 'Luis G.', email: 'luis.g@adtech.com', area: 'Marketing' },
    { id: 'carlos-p', name: 'Carlos P.', email: 'carlos.p@adtech.com', area: 'Operaciones' },
    { id: 'maria-r', name: 'Maria R.', email: 'maria.r@adtech.com', area: 'Producto' },
    { id: 'juan-c', name: 'Juan C.', email: 'juan.c@adtech.com', area: 'Analitica' },
    { id: 'andrea-p', name: 'Andrea P.', email: 'andrea.p@adtech.com', area: 'Operaciones' }
  ];

  const projectTasks = [
    { name: 'Definir estructura de contenidos', owner: 'Carlos P.', dueDate: '12/07/2024', priority: 'Alta', status: 'Pendiente', progress: 22 },
    { name: 'Aprobar pauta de lanzamiento', owner: 'Ana G.', dueDate: '15/07/2024', priority: 'Alta', status: 'Pendiente', progress: 18 },
    { name: 'Ajustar copies para campaña', owner: 'Carlos P.', dueDate: '17/07/2024', priority: 'Media', status: 'En proceso', progress: 54 },
    { name: 'Subir piezas al gestor de anuncios', owner: 'Juan C.', dueDate: '18/07/2024', priority: 'Media', status: 'En proceso', progress: 63 },
    { name: 'Validar dashboard con analítica', owner: 'Beatriz L.', dueDate: '20/07/2024', priority: 'Baja', status: 'En revisión', progress: 78 },
    { name: 'Revisar feedback del cliente', owner: 'Carlos P.', dueDate: '21/07/2024', priority: 'Alta', status: 'En revisión', progress: 84 },
    { name: 'Entregar reporte mensual', owner: 'Carlos P.', dueDate: '22/07/2024', priority: 'Baja', status: 'Completado', progress: 100 },
    { name: 'Cerrar checklist de publicación', owner: 'Ana G.', dueDate: '23/07/2024', priority: 'Baja', status: 'Completado', progress: 100 }
  ];

  [
    {
      startDate: '05/07/2024',
      deliverable: 'Reporte de campaña junio',
      description: 'Definir la estructura base de contenidos y los mensajes principales para la entrega.',
      notes: 'Alinear con el entregable y con el objetivo comercial del trimestre.',
      reference: 'Brief de campaña junio',
      fileName: 'Guia_Desarrollo_SEO_Q3.pdf',
      fileMeta: 'Tamano: 1.2 MB'
    },
    {
      startDate: '08/07/2024',
      deliverable: 'Reporte de campaña junio',
      description: 'Validar presupuesto y alcance de la pauta antes del inicio de la campaña.',
      notes: 'Confirmar segmentacion con marketing y ventas.',
      reference: 'Checklist de lanzamiento',
      fileName: 'Pauta_Lanzamiento_Q3.xlsx',
      fileMeta: 'Tamano: 980 KB'
    },
    {
      startDate: '10/07/2024',
      deliverable: 'Reporte de campaña junio',
      description: 'Revisar y actualizar los copies segun feedback del cliente.',
      notes: 'Priorizar mensajes de conversion y claridad comercial.',
      reference: 'Feedback del cliente',
      fileName: 'Copies_Campana_v3.docx',
      fileMeta: 'Tamano: 540 KB'
    },
    {
      startDate: '11/07/2024',
      deliverable: 'Logo vectorizado',
      description: 'Cargar piezas visuales y revisar formatos para cada plataforma.',
      notes: 'Verificar calidad de exportacion final antes de publicar.',
      reference: 'Recursos visuales aprobados',
      fileName: 'Piezas_Ads_Final.zip',
      fileMeta: 'Tamano: 4.6 MB'
    },
    {
      startDate: '14/07/2024',
      deliverable: 'Link a dashboard de analitica',
      description: 'Corroborar que los widgets y las metricas del dashboard respondan al alcance definido.',
      notes: 'Revisar fuentes y actualizacion automatica.',
      reference: 'Especificacion de metricas',
      fileName: 'Dashboard_Q3_Spec.pdf',
      fileMeta: 'Tamano: 1.1 MB'
    },
    {
      startDate: '15/07/2024',
      deliverable: 'Informe de KPIs Q2',
      description: 'Ordenar observaciones del cliente y convertirlas en acciones claras para el equipo.',
      notes: 'Separar feedback urgente del complementario.',
      reference: 'Correo de revision del cliente',
      fileName: 'Feedback_Cliente_Julio.pdf',
      fileMeta: 'Tamano: 760 KB'
    },
    {
      startDate: '16/07/2024',
      deliverable: 'Reporte de campaña junio',
      description: 'Consolidar y enviar el reporte mensual final con resultados y recomendaciones.',
      notes: 'Ya fue enviado y validado con el cliente.',
      reference: 'Reporte final mensual',
      fileName: 'Reporte_Mensual_Junio.pdf',
      fileMeta: 'Tamano: 1.8 MB'
    },
    {
      startDate: '18/07/2024',
      deliverable: 'Logo vectorizado',
      description: 'Completar el cierre operativo de publicacion y documentar el proceso.',
      notes: 'Checklist terminado y archivado.',
      reference: 'Cierre de publicacion',
      fileName: 'Checklist_Publicacion.pdf',
      fileMeta: 'Tamano: 430 KB'
    }
  ].forEach((taskDetails, index) => {
    Object.assign(projectTasks[index], taskDetails);
  });

  const renderServices = () => {
    if (!projectServicesTable) {
      return;
    }

    projectServicesTable.innerHTML = '';

    services.forEach((service) => {
      const row = document.createElement('div');
      row.className = 'project-service-row';
      row.innerHTML = `
        <span>${service.service}</span>
        <span>${service.description}</span>
        <span>${service.quantity}</span>
      `;
      projectServicesTable.appendChild(row);
    });
  };

  const renderDeliverables = () => {
    if (!deliverablesTableBody) {
      return;
    }

    const query = deliverablesSearchInput ? deliverablesSearchInput.value.trim().toLowerCase() : '';
    const statusFilter = deliverablesStatusFilter ? deliverablesStatusFilter.value : 'Todos';
    const typeFilter = deliverablesTypeFilter ? deliverablesTypeFilter.value : 'Todos';

    const filteredDeliverables = deliverables.filter((deliverable) => {
      const matchesQuery = !query || `${deliverable.name} ${deliverable.owner}`.toLowerCase().includes(query);
      const matchesStatus = statusFilter === 'Todos' || deliverable.status === statusFilter;
      const matchesType = typeFilter === 'Todos' || deliverable.type === typeFilter;
      return matchesQuery && matchesStatus && matchesType;
    });

    deliverablesTableBody.innerHTML = '';

    filteredDeliverables.forEach((deliverable) => {
      const row = document.createElement('div');
      const statusClass =
        deliverable.status === 'Entregado'
          ? 'is-delivered'
          : deliverable.status === 'Pendiente'
            ? 'is-pending'
            : 'is-approved';

      row.className = 'deliverables-table-row';
      row.tabIndex = 0;
      row.innerHTML = `
        <span>${deliverable.name}</span>
        <span>${deliverable.type}</span>
        <span>${deliverable.owner}</span>
        <span>${deliverable.dueDate}</span>
        <span><span class="deliverable-status-pill ${statusClass}">${deliverable.status}</span></span>
        <span class="deliverable-actions">
          <button type="button" class="deliverable-action" data-deliverable-view-index="${deliverables.indexOf(deliverable)}">Ver</button>
          <button type="button" class="deliverable-action" data-deliverable-edit-index="${deliverables.indexOf(deliverable)}">Editar</button>
          <button type="button" class="deliverable-action" data-deliverable-delete-index="${deliverables.indexOf(deliverable)}">Eliminar</button>
        </span>
      `;
      row.dataset.deliverableDetailIndex = String(deliverables.indexOf(deliverable));
      deliverablesTableBody.appendChild(row);
    });
  };

  const renderProjectTasks = () => {
    const columns = {
      Pendiente: tasksColumnPending,
      'En proceso': tasksColumnInProgress,
      'En revisión': tasksColumnInReview,
      Completado: tasksColumnCompleted
    };

    const counters = {
      Pendiente: tasksCountPending,
      'En proceso': tasksCountInProgress,
      'En revisión': tasksCountInReview,
      Completado: tasksCountCompleted
    };

    const query = projectTasksSearchInput ? projectTasksSearchInput.value.trim().toLowerCase() : '';
    const statusFilter = projectTasksStatusFilter ? projectTasksStatusFilter.value : 'Todos';
    const ownerFilter = projectTasksOwnerFilter ? projectTasksOwnerFilter.value : 'Todos';

    Object.values(columns).forEach((column) => {
      if (column) {
        column.innerHTML = '';
      }
    });

    const filteredTasks = projectTasks.filter((task) => {
      const matchesQuery = !query || `${task.name} ${task.owner} ${task.priority}`.toLowerCase().includes(query);
      const matchesStatus = statusFilter === 'Todos' || task.status === statusFilter;
      const matchesOwner = ownerFilter === 'Todos' || task.owner === ownerFilter;
      return matchesQuery && matchesStatus && matchesOwner;
    });

    Object.entries(counters).forEach(([status, counter]) => {
      if (!counter) {
        return;
      }

      const count = filteredTasks.filter((task) => task.status === status).length;
      counter.textContent = `${count} ${count === 1 ? 'Tarea' : 'Tareas'}`;
    });

    filteredTasks.forEach((task) => {
      const column = columns[task.status];

      if (!column) {
        return;
      }

      const priorityClass =
        task.priority === 'Alta' ? 'is-high' : task.priority === 'Media' ? 'is-medium' : 'is-low';

      const card = document.createElement('article');
      card.className = 'task-card';
      card.innerHTML = `
        <strong class="task-card-title">${task.name}</strong>
        <div class="task-card-meta">
          <div>
            <span>Responsable</span>
            <p>${task.owner}</p>
          </div>
          <div>
            <span>Fecha limite</span>
            <p>${task.dueDate}</p>
          </div>
        </div>
        <div class="task-priority-row">
          <span class="task-priority-pill ${priorityClass}">${task.priority}</span>
          <div class="task-mini-progress" aria-label="Progreso ${task.progress}%">
            <span style="width: ${task.progress}%"></span>
          </div>
        </div>
        <div class="task-card-actions">
          <button type="button" class="task-card-action" data-task-view-index="${projectTasks.indexOf(task)}">Ver</button>
          <button type="button" class="task-card-action" data-task-edit-index="${projectTasks.indexOf(task)}">Editar</button>
        </div>
      `;

      column.appendChild(card);
    });
  };

  const hideTaskEditModal = () => {
    if (taskEditModal) {
      taskEditModal.hidden = true;
    }

    pendingTaskEditIndex = null;
  };

  const getTaskStatusLabel = (status) =>
    typeof status === 'string' && status.toLowerCase().includes('revisi') ? 'En revisión' : status;

  const applyTaskStatusPill = (element, status) => {
    if (!element) {
      return;
    }

    const normalizedStatus = getTaskStatusLabel(status);
    element.textContent = normalizedStatus;
    element.className = 'task-view-status-pill';

    if (normalizedStatus === 'Pendiente') {
      element.classList.add('is-pending');
      return;
    }

    if (normalizedStatus === 'En proceso') {
      element.classList.add('is-progress');
      return;
    }

    if (normalizedStatus === 'En revisión') {
      element.classList.add('is-review');
      return;
    }

    element.classList.add('is-completed');
  };

  const hideTaskViewModal = () => {
    if (taskViewModal) {
      taskViewModal.hidden = true;
    }
  };

  const resetTaskCreateModal = () => {
    if (taskCreateProjectName) {
      taskCreateProjectName.textContent = detail.name;
    }

    if (taskCreateDeliverableName) {
      taskCreateDeliverableName.textContent = 'Reporte de campaña junio';
    }

    if (taskCreateName) {
      taskCreateName.value = '';
    }

    if (taskCreateDescription) {
      taskCreateDescription.value = '';
    }

    if (taskCreateNotes) {
      taskCreateNotes.value = '';
    }

    if (taskCreateStatus) {
      taskCreateStatus.value = 'Pendiente';
    }

    if (taskCreateDeliverableReadonly) {
      taskCreateDeliverableReadonly.value = 'Reporte de campaña junio';
    }

    if (taskCreateOwner) {
      taskCreateOwner.value = 'Ana G.';
    }

    if (taskCreateStartDate) {
      taskCreateStartDate.value = '30/06/2026';
    }

    if (taskCreateDueDate) {
      taskCreateDueDate.value = '30/06/2026';
    }

    if (taskCreateDeliverableSelect) {
      taskCreateDeliverableSelect.value = 'Reporte de campaña junio';
    }

    if (taskCreateReference) {
      taskCreateReference.value = '';
    }
  };

  const hideTaskCreateModal = () => {
    if (taskCreateModal) {
      taskCreateModal.hidden = true;
    }
  };

  const openTaskCreateModal = () => {
    if (!taskCreateModal) {
      return;
    }

    resetTaskCreateModal();
    taskCreateModal.hidden = false;
  };

  const openTaskViewModal = (index) => {
    const task = projectTasks[index];

    if (!task || !taskViewModal) {
      return;
    }

    if (taskViewModalTitle) {
      taskViewModalTitle.textContent = task.name;
    }

    if (taskViewProject) {
      taskViewProject.textContent = detail.name;
    }

    if (taskViewOwner) {
      taskViewOwner.textContent = task.owner;
    }

    if (taskViewStartDate) {
      taskViewStartDate.textContent = task.startDate || '';
    }

    if (taskViewDueDate) {
      taskViewDueDate.textContent = task.dueDate || '';
    }

    applyTaskStatusPill(taskViewStatusPill, task.status);
    applyTaskStatusPill(taskViewInlineStatus, task.status);

    if (taskViewFileName) {
      taskViewFileName.textContent = task.fileName || 'Sin archivo';
    }

    if (taskViewFileMeta) {
      taskViewFileMeta.textContent = task.fileMeta || '';
    }

    taskViewModal.hidden = false;
  };

  const openTaskEditModal = (index) => {
    const task = projectTasks[index];

    if (!task || !taskEditModal) {
      return;
    }

    pendingTaskEditIndex = index;

    if (taskEditProjectName) {
      taskEditProjectName.textContent = detail.name;
    }

    if (taskEditDeliverableName) {
      taskEditDeliverableName.textContent = task.deliverable || 'Sin entregable';
    }

    if (taskEditName) {
      taskEditName.value = task.name;
    }

    if (taskEditDescription) {
      taskEditDescription.value = task.description || '';
    }

    if (taskEditNotes) {
      taskEditNotes.value = task.notes || '';
    }

    if (taskEditStatus) {
      taskEditStatus.value =
        typeof task.status === 'string' && task.status.toLowerCase().includes('revisi')
          ? 'En revision'
          : task.status;
    }

    if (taskEditDeliverableReadonly) {
      taskEditDeliverableReadonly.value = task.deliverable || '';
    }

    if (taskEditOwner) {
      taskEditOwner.value = task.owner;
    }

    if (taskEditStartDate) {
      taskEditStartDate.value = task.startDate || '';
    }

    if (taskEditDueDate) {
      taskEditDueDate.value = task.dueDate || '';
    }

    if (taskEditProjectReadonly) {
      taskEditProjectReadonly.value = detail.name;
    }

    if (taskEditDeliverableSelect) {
      taskEditDeliverableSelect.value = task.deliverable || 'Reporte de campaña junio';
    }

    if (taskEditReference) {
      taskEditReference.value = task.reference || '';
    }

    if (taskEditFileName) {
      taskEditFileName.textContent = task.fileName || 'Archivo no definido';
    }

    if (taskEditFileMeta) {
      taskEditFileMeta.textContent = task.fileMeta || '';
    }

    taskEditModal.hidden = false;
  };

  const buildDeliverableDetailUrl = (deliverable) => {
    const params = new URLSearchParams({
      name: deliverable.name,
      client: detail.client,
      project: detail.name,
      dueDate: deliverable.dueDate,
      owner: deliverable.owner,
      progress: String(deliverable.progress ?? 0),
      type: deliverable.type,
      description: deliverable.description || '',
      content: deliverable.content || '',
      status: deliverable.status,
      note: deliverable.status === 'Entregado' ? 'Entregado al cliente' : 'En seguimiento'
    });

    return `deliverable-detail.html?${params.toString()}`;
  };

  const syncDeliverableProgressValue = () => {
    if (deliverableEditProgress && deliverableEditProgressValue) {
      deliverableEditProgressValue.textContent = `${deliverableEditProgress.value}%`;
    }
  };

  const hideDeliverableEditModal = () => {
    if (deliverableEditModal) {
      deliverableEditModal.hidden = true;
    }

    pendingDeliverableEditIndex = null;
  };

  const resetDeliverableCreateModal = () => {
    if (deliverableCreateName) {
      deliverableCreateName.value = '';
    }

    if (deliverableCreateType) {
      deliverableCreateType.value = 'Documento';
    }

    if (deliverableCreateDescription) {
      deliverableCreateDescription.value = '';
    }

    if (deliverableCreateContent) {
      deliverableCreateContent.value = '';
    }

    if (deliverableCreateUrl) {
      deliverableCreateUrl.value = '';
    }

    if (deliverableCreateOwner) {
      deliverableCreateOwner.value = 'Ana G.';
    }

    if (deliverableCreateDueDate) {
      deliverableCreateDueDate.value = '30/06/2026';
    }

    if (deliverableCreateStatus) {
      deliverableCreateStatus.value = 'Pendiente';
    }

    const defaultAssignmentType = document.querySelector('input[name="deliverableAssignmentType"][value="Documento"]');

    if (defaultAssignmentType) {
      defaultAssignmentType.checked = true;
    }
  };

  const hideDeliverableCreateModal = () => {
    if (deliverableCreateModal) {
      deliverableCreateModal.hidden = true;
    }
  };

  const openDeliverableCreateModal = () => {
    if (!deliverableCreateModal) {
      return;
    }

    resetDeliverableCreateModal();
    deliverableCreateModal.hidden = false;
  };

  const hideDeliverableViewModal = () => {
    if (deliverableViewModal) {
      deliverableViewModal.hidden = true;
    }
  };

  const hideDeliverableDeleteModal = () => {
    if (deliverableDeleteModal) {
      deliverableDeleteModal.hidden = true;
    }

    pendingDeliverableDeleteIndex = null;
  };

  const openDeliverableEditModal = (index) => {
    const deliverable = deliverables[index];

    if (!deliverable || !deliverableEditModal) {
      return;
    }

    pendingDeliverableEditIndex = index;

    if (deliverableEditName) {
      deliverableEditName.value = deliverable.name;
    }

    if (deliverableEditDescription) {
      deliverableEditDescription.value = deliverable.description || '';
    }

    if (deliverableEditType) {
      deliverableEditType.value = deliverable.type;
    }

    if (deliverableEditContent) {
      deliverableEditContent.value = deliverable.content || '';
    }

    if (deliverableEditOwner) {
      deliverableEditOwner.value = deliverable.owner;
    }

    if (deliverableEditDueDate) {
      deliverableEditDueDate.value = deliverable.dueDate;
    }

    if (deliverableEditStatus) {
      deliverableEditStatus.value = deliverable.status;
    }

    if (deliverableEditProgress) {
      deliverableEditProgress.value = String(deliverable.progress ?? 0);
    }

    syncDeliverableProgressValue();
    deliverableEditModal.hidden = false;
  };

  const openDeliverableViewModal = (index) => {
    const deliverable = deliverables[index];

    if (!deliverable || !deliverableViewModal) {
      return;
    }

    if (deliverableViewModalTitle) {
      deliverableViewModalTitle.textContent = deliverable.name;
    }

    if (deliverableViewProjectName) {
      deliverableViewProjectName.textContent = detail.name;
    }

    if (deliverableViewStatusPill) {
      deliverableViewStatusPill.textContent = deliverable.status;
      deliverableViewStatusPill.className = `deliverable-status-pill ${
        deliverable.status === 'Entregado'
          ? 'is-delivered'
          : deliverable.status === 'Pendiente'
            ? 'is-pending'
            : 'is-approved'
      }`;
    }

    if (deliverableViewType) {
      deliverableViewType.textContent = deliverable.type;
    }

    if (deliverableViewOwner) {
      deliverableViewOwner.textContent = deliverable.owner;
    }

    if (deliverableViewDueDate) {
      deliverableViewDueDate.textContent = deliverable.dueDate;
    }

    if (deliverableViewDescription) {
      deliverableViewDescription.textContent = deliverable.description;
    }

    if (deliverableViewContent) {
      deliverableViewContent.textContent = deliverable.content;
    }

    if (deliverableViewProgress) {
      deliverableViewProgress.value = String(deliverable.progress ?? 0);
    }

    if (deliverableViewProgressValue) {
      deliverableViewProgressValue.textContent = `${deliverable.progress ?? 0}%`;
    }

    if (deliverableViewStatusText) {
      deliverableViewStatusText.textContent = deliverable.status;
    }

    if (deliverableViewUpdated) {
      deliverableViewUpdated.textContent = deliverable.updated || 'hace 2 días';
    }

    deliverableViewModal.hidden = false;
  };

  const openDeliverableDeleteModal = (index) => {
    const deliverable = deliverables[index];

    if (!deliverable || !deliverableDeleteModal || !deliverableDeleteMessage) {
      return;
    }

    pendingDeliverableDeleteIndex = index;
    deliverableDeleteMessage.textContent = `¿Deseas eliminar el entregable "${deliverable.name}"?`;
    deliverableDeleteModal.hidden = false;
  };

  const renderTeamMembers = () => {
    if (!teamMembersList) {
      return;
    }

    teamMembersList.innerHTML = '';

    teamMembers.forEach((member, index) => {
      const row = document.createElement('div');
      const statusClass = member.status === 'Activo' ? 'is-active' : 'is-inactive';
      row.className = 'team-member-row';
      row.innerHTML = `
        <span><img src="Images/IconoUsuarioNegro.png" alt="${member.name}" class="team-avatar" /></span>
        <span class="team-member-name">${member.name}</span>
        <span>${member.role}</span>
        <span>${member.area}</span>
        <span><span class="team-status-pill ${statusClass}">${member.status}</span></span>
        <span class="team-actions">
          <button type="button" class="team-action" data-team-edit-index="${index}">Editar</button>
          <button type="button" class="team-action" data-team-view-index="${index}">Ver</button>
          <button type="button" class="team-action team-action-delete" data-team-member-index="${index}">Eliminar del proyecto</button>
        </span>
      `;
      teamMembersList.appendChild(row);
    });
  };

  const hideEditModal = () => {
    if (teamEditModal) {
      teamEditModal.hidden = true;
    }

    pendingEditIndex = null;
  };

  const renderEditUserList = (selectedIndex) => {
    if (!teamEditUserList) {
      return;
    }

    teamEditUserList.innerHTML = '';

    teamMembers.forEach((member, index) => {
      const item = document.createElement('div');
      item.className = `team-user-list-item${index === selectedIndex ? ' is-selected' : ''}`;
      item.innerHTML = `
        <img src="Images/IconoUsuarioNegro.png" alt="${member.name}" class="team-avatar" />
        <div>
          <strong>${member.name}</strong>
          <span>${member.email}</span>
        </div>
      `;
      teamEditUserList.appendChild(item);
    });
  };

  const openEditModal = (index) => {
    const member = teamMembers[index];

    if (!member || !teamEditModal) {
      return;
    }

    pendingEditIndex = index;
    renderEditUserList(index);

    if (teamEditRole) {
      teamEditRole.value = member.role;
    }

    if (teamEditStatus) {
      teamEditStatus.value = member.status;
    }

    if (teamPermissionAssignInline) {
      teamPermissionAssignInline.checked = member.permissions.assignTasks;
    }

    if (teamPermissionUploadInline) {
      teamPermissionUploadInline.checked = member.permissions.uploadDeliverables;
    }

    if (teamPermissionEditTasks) {
      teamPermissionEditTasks.checked = member.permissions.editTasks;
    }

    if (teamPermissionAssignTasks) {
      teamPermissionAssignTasks.checked = member.permissions.assignTasks;
    }

    if (teamPermissionUploadDeliverables) {
      teamPermissionUploadDeliverables.checked = member.permissions.uploadDeliverables;
    }

    teamEditModal.hidden = false;
  };

  const hideProfileModal = () => {
    if (teamProfileModal) {
      teamProfileModal.hidden = true;
    }
  };

  const resetAddModal = () => {
    pendingAddUserId = availableUsers[0] ? availableUsers[0].id : null;

    if (teamAddSearch) {
      teamAddSearch.value = '';
    }

    if (teamAddRole) {
      teamAddRole.value = 'Project Manager';
    }

    if (teamAddStatus) {
      teamAddStatus.value = 'Activo';
    }

    if (teamAddEditTasks) {
      teamAddEditTasks.checked = false;
    }

    if (teamAddAssignTasks) {
      teamAddAssignTasks.checked = false;
    }

    if (teamAddAssignTasksRight) {
      teamAddAssignTasksRight.checked = false;
    }

    if (teamAddUploadDeliverables) {
      teamAddUploadDeliverables.checked = false;
    }
  };

  const syncAddSelectedUserLabel = () => {
    if (!teamAddSelectedUserLabel) {
      return;
    }

    const selectedUser = availableUsers.find((user) => user.id === pendingAddUserId);
    teamAddSelectedUserLabel.textContent = selectedUser ? selectedUser.name : 'Seleccionar usuario...';
  };

  const hideAddDropdown = () => {
    if (teamAddDropdown) {
      teamAddDropdown.hidden = true;
    }
  };

  const showAddDropdown = () => {
    if (teamAddDropdown) {
      teamAddDropdown.hidden = false;
    }
  };

  const renderAddUserList = () => {
    if (!teamAddUserList) {
      return;
    }

    const query = teamAddSearch ? teamAddSearch.value.trim().toLowerCase() : '';
    const filteredUsers = availableUsers.filter((user) =>
      !query ? true : `${user.name} ${user.email} ${user.area}`.toLowerCase().includes(query)
    );

    if (!pendingAddUserId && filteredUsers[0]) {
      pendingAddUserId = filteredUsers[0].id;
    }

    if (pendingAddUserId && !filteredUsers.some((user) => user.id === pendingAddUserId)) {
      pendingAddUserId = filteredUsers[0] ? filteredUsers[0].id : null;
    }

    teamAddUserList.innerHTML = '';

    filteredUsers.forEach((user) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = `team-user-list-item team-add-user-item${user.id === pendingAddUserId ? ' is-selected' : ''}`;
      item.dataset.teamAddUserId = user.id;
      item.innerHTML = `
        <img src="Images/IconoUsuarioNegro.png" alt="${user.name}" class="team-avatar" />
        <div>
          <strong>${user.name}</strong>
          <span>${user.email}</span>
        </div>
      `;
      teamAddUserList.appendChild(item);
    });

    syncAddSelectedUserLabel();
  };

  const hideAddModal = () => {
    if (teamAddModal) {
      teamAddModal.hidden = true;
    }

    hideAddDropdown();
  };

  const openAddModal = () => {
    if (!teamAddModal) {
      return;
    }

    resetAddModal();
    renderAddUserList();
    hideAddDropdown();
    teamAddModal.hidden = false;
  };

  const renderProfilePermissions = (member) => {
    if (!teamProfilePermissions) {
      return;
    }

    const permissionLabels = [
      { active: member.permissions.editTasks, label: 'Puede editar tareas' },
      { active: member.permissions.assignTasks, label: 'Puede asignar tareas' },
      { active: member.permissions.uploadDeliverables, label: 'Puede subir entregables' }
    ];

    teamProfilePermissions.innerHTML = '';

    permissionLabels
      .filter((permission) => permission.active)
      .forEach((permission) => {
        const item = document.createElement('li');
        item.textContent = permission.label;
        teamProfilePermissions.appendChild(item);
      });
  };

  const renderProfileProjects = (member) => {
    if (!teamProfileProjects) {
      return;
    }

    const projects = [
      { name: detail.name, status: params.get('status') || 'En curso' },
      { name: 'Proyecto Campana Q3', status: 'Planificado' }
    ];

    teamProfileProjects.innerHTML = '';

    projects.forEach((project) => {
      const row = document.createElement('div');
      row.className = 'team-profile-project-row';
      row.innerHTML = `
        <span>${project.name}</span>
        <strong>${project.status}</strong>
      `;
      teamProfileProjects.appendChild(row);
    });
  };

  const openProfileModal = (index) => {
    const member = teamMembers[index];

    if (!member || !teamProfileModal) {
      return;
    }

    if (teamProfileName) {
      teamProfileName.textContent = member.name;
    }

    if (teamProfileRole) {
      teamProfileRole.textContent = member.role;
    }

    if (teamProfileArea) {
      teamProfileArea.textContent = member.area;
    }

    if (teamProfileEmail) {
      teamProfileEmail.textContent = member.email;
    }

    if (teamProfilePhone) {
      teamProfilePhone.textContent = member.phone;
    }

    if (teamProfileAreaDetail) {
      teamProfileAreaDetail.textContent = member.area;
    }

    if (teamProfileStatus) {
      teamProfileStatus.textContent = member.status;
    }

    if (teamProfileRoleDetail) {
      teamProfileRoleDetail.textContent = member.role;
    }

    if (teamProfileAssignedDate) {
      teamProfileAssignedDate.textContent = member.assignedDate;
    }

    if (teamProfileAssignedTasks) {
      teamProfileAssignedTasks.textContent = String(member.assignedTasks);
    }

    if (teamProfileCompletedTasks) {
      teamProfileCompletedTasks.textContent = String(member.completedTasks);
    }

    if (teamProfileLastActivity) {
      teamProfileLastActivity.textContent = member.lastActivity;
    }

    renderProfilePermissions(member);
    renderProfileProjects(member);
    teamProfileModal.hidden = false;
  };

  const hideDeleteModal = () => {
    if (teamDeleteModal) {
      teamDeleteModal.hidden = true;
    }

    pendingDeleteIndex = null;
  };

  const openDeleteModal = (index) => {
    if (!teamDeleteModal || !teamDeleteMessage || !teamMembers[index]) {
      return;
    }

    pendingDeleteIndex = index;
    teamDeleteMessage.textContent = `¿Deseas eliminar a ${teamMembers[index].name} del proyecto?`;
    teamDeleteModal.hidden = false;
  };

  const activateTab = (tabName) => {
    tabTriggers.forEach((trigger) => {
      trigger.classList.toggle('is-active', trigger.dataset.projectTabTrigger === tabName);
    });

    tabPanels.forEach((panel) => {
      panel.hidden = panel.dataset.projectTabPanel !== tabName;
    });
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

  if (deliverablesSearchInput) {
    deliverablesSearchInput.addEventListener('input', renderDeliverables);
  }

  if (deliverablesStatusFilter) {
    deliverablesStatusFilter.addEventListener('change', renderDeliverables);
  }

  if (deliverablesTypeFilter) {
    deliverablesTypeFilter.addEventListener('change', renderDeliverables);
  }

  if (clearDeliverablesFiltersButton) {
    clearDeliverablesFiltersButton.addEventListener('click', () => {
      if (deliverablesSearchInput) {
        deliverablesSearchInput.value = '';
      }

      if (deliverablesStatusFilter) {
        deliverablesStatusFilter.value = 'Todos';
      }

      if (deliverablesTypeFilter) {
        deliverablesTypeFilter.value = 'Todos';
      }

      renderDeliverables();
    });
  }

  if (projectTasksSearchInput) {
    projectTasksSearchInput.addEventListener('input', renderProjectTasks);
  }

  if (projectTasksStatusFilter) {
    projectTasksStatusFilter.addEventListener('change', renderProjectTasks);
  }

  if (projectTasksOwnerFilter) {
    projectTasksOwnerFilter.addEventListener('change', renderProjectTasks);
  }

  if (clearProjectTasksFiltersButton) {
    clearProjectTasksFiltersButton.addEventListener('click', () => {
      if (projectTasksSearchInput) {
        projectTasksSearchInput.value = '';
      }

      if (projectTasksStatusFilter) {
        projectTasksStatusFilter.value = 'Todos';
      }

      if (projectTasksOwnerFilter) {
        projectTasksOwnerFilter.value = 'Todos';
      }

      renderProjectTasks();
    });
  }

  if (closeTaskEditModalButton) {
    closeTaskEditModalButton.addEventListener('click', hideTaskEditModal);
  }

  if (closeTaskViewModalButton) {
    closeTaskViewModalButton.addEventListener('click', hideTaskViewModal);
  }

  if (openTaskCreateModalButton) {
    openTaskCreateModalButton.addEventListener('click', openTaskCreateModal);
  }

  if (closeTaskCreateModalButton) {
    closeTaskCreateModalButton.addEventListener('click', hideTaskCreateModal);
  }

  if (saveTaskEditButton) {
    saveTaskEditButton.addEventListener('click', () => {
      if (pendingTaskEditIndex === null || !projectTasks[pendingTaskEditIndex]) {
        hideTaskEditModal();
        return;
      }

      const task = projectTasks[pendingTaskEditIndex];
      task.name = taskEditName ? taskEditName.value.trim() || task.name : task.name;
      task.description = taskEditDescription ? taskEditDescription.value.trim() : task.description;
      task.notes = taskEditNotes ? taskEditNotes.value.trim() : task.notes;
      task.status = taskEditStatus ? (taskEditStatus.value === 'En revision' ? 'En revisión' : taskEditStatus.value) : task.status;
      task.owner = taskEditOwner ? taskEditOwner.value : task.owner;
      task.startDate = taskEditStartDate ? taskEditStartDate.value.trim() || task.startDate : task.startDate;
      task.dueDate = taskEditDueDate ? taskEditDueDate.value.trim() || task.dueDate : task.dueDate;
      task.deliverable = taskEditDeliverableSelect ? taskEditDeliverableSelect.value : task.deliverable;
      task.reference = taskEditReference ? taskEditReference.value.trim() : task.reference;

      renderProjectTasks();
      hideTaskEditModal();
    });
  }

  if (deleteTaskEditButton) {
    deleteTaskEditButton.addEventListener('click', () => {
      if (pendingTaskEditIndex === null || !projectTasks[pendingTaskEditIndex]) {
        hideTaskEditModal();
        return;
      }

      projectTasks.splice(pendingTaskEditIndex, 1);
      renderProjectTasks();
      hideTaskEditModal();
    });
  }

  if (saveTaskDraftButton) {
    saveTaskDraftButton.addEventListener('click', hideTaskCreateModal);
  }

  if (confirmTaskCreateButton) {
    confirmTaskCreateButton.addEventListener('click', () => {
      const selectedStatus = taskCreateStatus ? taskCreateStatus.value : 'Pendiente';
      const normalizedStatus = selectedStatus === 'En revision' ? 'En revisión' : selectedStatus;

      projectTasks.unshift({
        name: taskCreateName ? taskCreateName.value.trim() || 'Nueva tarea' : 'Nueva tarea',
        owner: taskCreateOwner ? taskCreateOwner.value : 'Ana G.',
        startDate: taskCreateStartDate ? taskCreateStartDate.value.trim() || '30/06/2026' : '30/06/2026',
        dueDate: taskCreateDueDate ? taskCreateDueDate.value.trim() || '30/06/2026' : '30/06/2026',
        priority: normalizedStatus === 'Pendiente' ? 'Alta' : normalizedStatus === 'Completado' ? 'Baja' : 'Media',
        status: normalizedStatus,
        progress: normalizedStatus === 'Pendiente' ? 0 : normalizedStatus === 'En proceso' ? 45 : normalizedStatus === 'En revisión' ? 80 : 100,
        deliverable: taskCreateDeliverableSelect ? taskCreateDeliverableSelect.value : 'Reporte de campaña junio',
        description: taskCreateDescription ? taskCreateDescription.value.trim() : '',
        notes: taskCreateNotes ? taskCreateNotes.value.trim() : '',
        reference: taskCreateReference ? taskCreateReference.value.trim() : '',
        fileName: 'Archivo pendiente',
        fileMeta: 'Sin adjunto'
      });

      renderProjectTasks();
      hideTaskCreateModal();
    });
  }

  if (openDeliverableCreateModalButton) {
    openDeliverableCreateModalButton.addEventListener('click', openDeliverableCreateModal);
  }

  if (deliverablesTableBody) {
    deliverablesTableBody.addEventListener('click', (event) => {
      const row = event.target.closest('[data-deliverable-detail-index]');
      const viewButton = event.target.closest('[data-deliverable-view-index]');
      const editButton = event.target.closest('[data-deliverable-edit-index]');
      const deleteButton = event.target.closest('[data-deliverable-delete-index]');

      if (row && !viewButton && !editButton && !deleteButton) {
        const rowIndex = Number(row.dataset.deliverableDetailIndex);

        if (!Number.isNaN(rowIndex) && deliverables[rowIndex]) {
          window.location.href = buildDeliverableDetailUrl(deliverables[rowIndex]);
        }

        return;
      }

      if (viewButton) {
        const viewIndex = Number(viewButton.dataset.deliverableViewIndex);

        if (Number.isNaN(viewIndex) || !deliverables[viewIndex]) {
          return;
        }

        openDeliverableViewModal(viewIndex);
        return;
      }

      if (deleteButton) {
        const deleteIndex = Number(deleteButton.dataset.deliverableDeleteIndex);

        if (Number.isNaN(deleteIndex) || !deliverables[deleteIndex]) {
          return;
        }

        openDeliverableDeleteModal(deleteIndex);
        return;
      }

      if (!editButton) {
        return;
      }

      const index = Number(editButton.dataset.deliverableEditIndex);

      if (Number.isNaN(index) || !deliverables[index]) {
        return;
      }

      openDeliverableEditModal(index);
    });

    deliverablesTableBody.addEventListener('keydown', (event) => {
      const row = event.target.closest('[data-deliverable-detail-index]');

      if (!row || (event.key !== 'Enter' && event.key !== ' ')) {
        return;
      }

      event.preventDefault();

      const rowIndex = Number(row.dataset.deliverableDetailIndex);

      if (!Number.isNaN(rowIndex) && deliverables[rowIndex]) {
        window.location.href = buildDeliverableDetailUrl(deliverables[rowIndex]);
      }
    });
  }

  [tasksColumnPending, tasksColumnInProgress, tasksColumnInReview, tasksColumnCompleted].forEach((column) => {
    if (!column) {
      return;
    }

    column.addEventListener('click', (event) => {
      const viewButton = event.target.closest('[data-task-view-index]');
      const editButton = event.target.closest('[data-task-edit-index]');

      if (viewButton) {
        const viewIndex = Number(viewButton.dataset.taskViewIndex);

        if (Number.isNaN(viewIndex) || !projectTasks[viewIndex]) {
          return;
        }

        openTaskViewModal(viewIndex);
        return;
      }

      if (!editButton) {
        return;
      }

      const editIndex = Number(editButton.dataset.taskEditIndex);

      if (Number.isNaN(editIndex) || !projectTasks[editIndex]) {
        return;
      }

      openTaskEditModal(editIndex);
    });
  });

  if (deliverableEditProgress) {
    syncDeliverableProgressValue();
    deliverableEditProgress.addEventListener('input', syncDeliverableProgressValue);
  }

  if (closeDeliverableEditModalButton) {
    closeDeliverableEditModalButton.addEventListener('click', hideDeliverableEditModal);
  }

  if (cancelDeliverableEditButton) {
    cancelDeliverableEditButton.addEventListener('click', hideDeliverableEditModal);
  }

  if (saveDeliverableEditButton) {
    saveDeliverableEditButton.addEventListener('click', () => {
      if (pendingDeliverableEditIndex === null || !deliverables[pendingDeliverableEditIndex]) {
        hideDeliverableEditModal();
        return;
      }

      const deliverable = deliverables[pendingDeliverableEditIndex];
      deliverable.name = deliverableEditName ? deliverableEditName.value.trim() || deliverable.name : deliverable.name;
      deliverable.description = deliverableEditDescription ? deliverableEditDescription.value.trim() : deliverable.description;
      deliverable.type = deliverableEditType ? deliverableEditType.value : deliverable.type;
      deliverable.content = deliverableEditContent ? deliverableEditContent.value.trim() : deliverable.content;
      deliverable.owner = deliverableEditOwner ? deliverableEditOwner.value : deliverable.owner;
      deliverable.dueDate = deliverableEditDueDate ? deliverableEditDueDate.value.trim() || deliverable.dueDate : deliverable.dueDate;
      deliverable.status = deliverableEditStatus ? deliverableEditStatus.value : deliverable.status;
      deliverable.progress = deliverableEditProgress ? Number(deliverableEditProgress.value) : deliverable.progress;

      renderDeliverables();
      hideDeliverableEditModal();
    });
  }

  if (closeDeliverableViewModalButton) {
    closeDeliverableViewModalButton.addEventListener('click', hideDeliverableViewModal);
  }

  if (closeDeliverableViewFooterButton) {
    closeDeliverableViewFooterButton.addEventListener('click', hideDeliverableViewModal);
  }

  if (cancelDeliverableDeleteButton) {
    cancelDeliverableDeleteButton.addEventListener('click', hideDeliverableDeleteModal);
  }

  if (confirmDeliverableDeleteButton) {
    confirmDeliverableDeleteButton.addEventListener('click', () => {
      if (pendingDeliverableDeleteIndex === null || !deliverables[pendingDeliverableDeleteIndex]) {
        hideDeliverableDeleteModal();
        return;
      }

      deliverables.splice(pendingDeliverableDeleteIndex, 1);
      renderDeliverables();
      hideDeliverableDeleteModal();
    });
  }

  if (closeDeliverableCreateModalButton) {
    closeDeliverableCreateModalButton.addEventListener('click', hideDeliverableCreateModal);
  }

  if (saveDeliverableDraftButton) {
    saveDeliverableDraftButton.addEventListener('click', hideDeliverableCreateModal);
  }

  if (confirmDeliverableCreateButton) {
    confirmDeliverableCreateButton.addEventListener('click', () => {
      const selectedAssignmentType = document.querySelector('input[name="deliverableAssignmentType"]:checked');
      const selectedType = deliverableCreateType ? deliverableCreateType.value : 'Documento';
      const fallbackName = 'Nuevo entregable';

      deliverables.unshift({
        name: deliverableCreateName ? deliverableCreateName.value.trim() || fallbackName : fallbackName,
        type: selectedAssignmentType ? selectedAssignmentType.value : selectedType,
        owner: deliverableCreateOwner ? deliverableCreateOwner.value : 'Ana G.',
        dueDate: deliverableCreateDueDate ? deliverableCreateDueDate.value.trim() || '30/06/2026' : '30/06/2026',
        status: deliverableCreateStatus ? deliverableCreateStatus.value : 'Pendiente',
        description: deliverableCreateDescription ? deliverableCreateDescription.value.trim() : '',
        content:
          deliverableCreateContent && deliverableCreateContent.value.trim()
            ? deliverableCreateContent.value.trim()
            : deliverableCreateUrl && deliverableCreateUrl.value.trim()
              ? deliverableCreateUrl.value.trim()
              : '',
        progress: 0,
        updated: 'hace unos segundos'
      });

      renderDeliverables();
      hideDeliverableCreateModal();
    });
  }

  if (projectTitle) {
    projectTitle.textContent = detail.name;
  }

  if (projectClient) {
    projectClient.textContent = detail.client;
  }

  if (projectProgressCard) {
    projectProgressCard.textContent = `${detail.progress}%`;
  }

  if (projectStartDate) {
    projectStartDate.textContent = detail.startDate;
  }

  if (projectEndDate) {
    projectEndDate.textContent = detail.endDate;
  }

  if (projectOwner) {
    projectOwner.textContent = detail.owner;
  }

  if (teamLeadName) {
    teamLeadName.textContent = detail.owner;
  }

  if (teamLeadEmail) {
    const normalizedOwner = detail.owner
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '.');
    teamLeadEmail.textContent = `${normalizedOwner}@adtech.com`;
  }

  if (projectBudget) {
    projectBudget.textContent = detail.budget;
  }

  if (projectProgressFill) {
    projectProgressFill.style.width = `${detail.progress}%`;
  }

  if (projectProgressLabel) {
    projectProgressLabel.textContent = `${detail.progress}%`;
    projectProgressLabel.style.left = `min(calc(${detail.progress}% - 16px), calc(100% - 34px))`;
  }

  if (projectNotes) {
    projectNotes.textContent = detail.notes;
  }

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const tabName = trigger.dataset.projectTabTrigger;

      if (!tabName) {
        return;
      }

      activateTab(tabName);
    });
  });

  if (teamMembersList) {
    teamMembersList.addEventListener('click', (event) => {
      const editButton = event.target.closest('[data-team-edit-index]');
      const viewButton = event.target.closest('[data-team-view-index]');
      const deleteButton = event.target.closest('[data-team-member-index]');

      if (editButton) {
        const editIndex = Number(editButton.dataset.teamEditIndex);

        if (Number.isNaN(editIndex) || !teamMembers[editIndex]) {
          return;
        }

        openEditModal(editIndex);
        return;
      }

      if (viewButton) {
        const viewIndex = Number(viewButton.dataset.teamViewIndex);

        if (Number.isNaN(viewIndex) || !teamMembers[viewIndex]) {
          return;
        }

        openProfileModal(viewIndex);
        return;
      }

      if (!deleteButton) {
        return;
      }

      const index = Number(deleteButton.dataset.teamMemberIndex);

      if (Number.isNaN(index) || !teamMembers[index]) {
        return;
      }

      openDeleteModal(index);
    });
  }

  if (openTeamAddModalButton) {
    openTeamAddModalButton.addEventListener('click', openAddModal);
  }

  if (teamAddSelectTrigger) {
    teamAddSelectTrigger.addEventListener('click', () => {
      if (!teamAddDropdown) {
        return;
      }

      const willOpen = teamAddDropdown.hidden;
      teamAddDropdown.hidden = !teamAddDropdown.hidden;

      if (willOpen && teamAddSearch) {
        teamAddSearch.focus();
      }
    });
  }

  if (teamAddSearch) {
    teamAddSearch.addEventListener('input', renderAddUserList);
    teamAddSearch.addEventListener('focus', showAddDropdown);
  }

  if (teamAddUserList) {
    teamAddUserList.addEventListener('click', (event) => {
      const userButton = event.target.closest('[data-team-add-user-id]');

      if (!userButton) {
        return;
      }

      pendingAddUserId = userButton.dataset.teamAddUserId;
      renderAddUserList();
      hideAddDropdown();
    });
  }

  if (closeTeamEditModalButton) {
    closeTeamEditModalButton.addEventListener('click', hideEditModal);
  }

  if (cancelTeamEditButton) {
    cancelTeamEditButton.addEventListener('click', hideEditModal);
  }

  if (saveTeamEditButton) {
    saveTeamEditButton.addEventListener('click', () => {
      if (pendingEditIndex === null || !teamMembers[pendingEditIndex]) {
        hideEditModal();
        return;
      }

      if (teamEditRole) {
        teamMembers[pendingEditIndex].role = teamEditRole.value;
      }

      if (teamEditStatus) {
        teamMembers[pendingEditIndex].status = teamEditStatus.value;
      }

      teamMembers[pendingEditIndex].permissions = {
        editTasks: Boolean(teamPermissionEditTasks && teamPermissionEditTasks.checked),
        assignTasks: Boolean(teamPermissionAssignTasks && teamPermissionAssignTasks.checked),
        uploadDeliverables: Boolean(teamPermissionUploadDeliverables && teamPermissionUploadDeliverables.checked)
      };

      renderTeamMembers();
      hideEditModal();
    });
  }

  if (deleteFromEditModalButton) {
    deleteFromEditModalButton.addEventListener('click', () => {
      if (pendingEditIndex === null || !teamMembers[pendingEditIndex]) {
        hideEditModal();
        return;
      }

      const deleteIndex = pendingEditIndex;
      hideEditModal();
      openDeleteModal(deleteIndex);
    });
  }

  if (closeTeamAddModalButton) {
    closeTeamAddModalButton.addEventListener('click', hideAddModal);
  }

  if (cancelTeamAddButton) {
    cancelTeamAddButton.addEventListener('click', hideAddModal);
  }

  if (confirmTeamAddButton) {
    confirmTeamAddButton.addEventListener('click', () => {
      const selectedUser = availableUsers.find((user) => user.id === pendingAddUserId);

      if (!selectedUser) {
        hideAddModal();
        return;
      }

      const assignTasks = Boolean(
        (teamAddAssignTasks && teamAddAssignTasks.checked) ||
          (teamAddAssignTasksRight && teamAddAssignTasksRight.checked)
      );

      teamMembers.push({
        name: selectedUser.name,
        email: selectedUser.email,
        phone: '+52 55 0000 0000',
        role: teamAddRole ? teamAddRole.value : 'Project Manager',
        area: selectedUser.area,
        status: teamAddStatus ? teamAddStatus.value : 'Activo',
        assignedDate: '24/04/2026',
        assignedTasks: 0,
        completedTasks: 0,
        lastActivity: 'Hoy',
        permissions: {
          editTasks: Boolean(teamAddEditTasks && teamAddEditTasks.checked),
          assignTasks,
          uploadDeliverables: Boolean(teamAddUploadDeliverables && teamAddUploadDeliverables.checked)
        }
      });

      renderTeamMembers();
      hideAddModal();
    });
  }

  if (cancelTeamDeleteButton) {
    cancelTeamDeleteButton.addEventListener('click', hideDeleteModal);
  }

  if (confirmTeamDeleteButton) {
    confirmTeamDeleteButton.addEventListener('click', () => {
      if (pendingDeleteIndex === null || !teamMembers[pendingDeleteIndex]) {
        hideDeleteModal();
        return;
      }

      teamMembers.splice(pendingDeleteIndex, 1);
      renderTeamMembers();
      hideDeleteModal();
    });
  }

  if (teamDeleteModal) {
    teamDeleteModal.addEventListener('click', (event) => {
      if (event.target === teamDeleteModal) {
        hideDeleteModal();
      }
    });
  }

  if (closeTeamProfileModalButton) {
    closeTeamProfileModalButton.addEventListener('click', hideProfileModal);
  }

  if (closeTeamProfileFooterButton) {
    closeTeamProfileFooterButton.addEventListener('click', hideProfileModal);
  }

  if (teamProfileModal) {
    teamProfileModal.addEventListener('click', (event) => {
      if (event.target === teamProfileModal) {
        hideProfileModal();
      }
    });
  }

  if (teamAddModal) {
    teamAddModal.addEventListener('click', (event) => {
      if (event.target === teamAddModal) {
        hideAddModal();
      }
    });
  }

  if (deliverableEditModal) {
    deliverableEditModal.addEventListener('click', (event) => {
      if (event.target === deliverableEditModal) {
        hideDeliverableEditModal();
      }
    });
  }

  if (deliverableViewModal) {
    deliverableViewModal.addEventListener('click', (event) => {
      if (event.target === deliverableViewModal) {
        hideDeliverableViewModal();
      }
    });
  }

  if (deliverableDeleteModal) {
    deliverableDeleteModal.addEventListener('click', (event) => {
      if (event.target === deliverableDeleteModal) {
        hideDeliverableDeleteModal();
      }
    });
  }

  if (deliverableCreateModal) {
    deliverableCreateModal.addEventListener('click', (event) => {
      if (event.target === deliverableCreateModal) {
        hideDeliverableCreateModal();
      }
    });
  }

  if (taskEditModal) {
    taskEditModal.addEventListener('click', (event) => {
      if (event.target === taskEditModal) {
        hideTaskEditModal();
      }
    });
  }

  if (taskViewModal) {
    taskViewModal.addEventListener('click', (event) => {
      if (event.target === taskViewModal) {
        hideTaskViewModal();
      }
    });
  }

  if (taskCreateModal) {
    taskCreateModal.addEventListener('click', (event) => {
      if (event.target === taskCreateModal) {
        hideTaskCreateModal();
      }
    });
  }

  document.addEventListener('click', (event) => {
    if (!teamAddModal || teamAddModal.hidden || !teamAddDropdown || teamAddDropdown.hidden) {
      return;
    }

    if (
      event.target.closest('#teamAddDropdown') ||
      event.target.closest('#teamAddSelectTrigger')
    ) {
      return;
    }

    hideAddDropdown();
  });

  if (teamEditModal) {
    teamEditModal.addEventListener('click', (event) => {
      if (event.target === teamEditModal) {
        hideEditModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (teamDeleteModal && !teamDeleteModal.hidden) {
        hideDeleteModal();
      }

      if (teamEditModal && !teamEditModal.hidden) {
        hideEditModal();
      }

      if (teamProfileModal && !teamProfileModal.hidden) {
        hideProfileModal();
      }

      if (teamAddModal && !teamAddModal.hidden) {
        hideAddModal();
      }

      if (deliverableEditModal && !deliverableEditModal.hidden) {
        hideDeliverableEditModal();
      }

      if (deliverableViewModal && !deliverableViewModal.hidden) {
        hideDeliverableViewModal();
      }

      if (deliverableDeleteModal && !deliverableDeleteModal.hidden) {
        hideDeliverableDeleteModal();
      }

      if (deliverableCreateModal && !deliverableCreateModal.hidden) {
        hideDeliverableCreateModal();
      }

      if (taskEditModal && !taskEditModal.hidden) {
        hideTaskEditModal();
      }

      if (taskViewModal && !taskViewModal.hidden) {
        hideTaskViewModal();
      }

      if (taskCreateModal && !taskCreateModal.hidden) {
        hideTaskCreateModal();
      }
    }
  });

  renderServices();
  renderDeliverables();
  renderProjectTasks();
  renderTeamMembers();
  activateTab('summary');
});
