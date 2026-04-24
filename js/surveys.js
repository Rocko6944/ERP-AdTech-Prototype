document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const logoutButton = document.querySelector('#logoutButton');
  const backButton = document.querySelector('[data-back-target]');
  const surveySearchInput = document.querySelector('#surveySearchInput');
  const surveyStatusFilter = document.querySelector('#surveyStatusFilter');
  const surveyTypeFilter = document.querySelector('#surveyTypeFilter');
  const clearSurveyFiltersButton = document.querySelector('#clearSurveyFilters');
  const surveysTableBody = document.querySelector('#surveysTableBody');
  const surveyPaginationLabel = document.querySelector('#surveyPaginationLabel');
  const prevSurveyPage = document.querySelector('#prevSurveyPage');
  const nextSurveyPage = document.querySelector('#nextSurveyPage');
  const surveyPageButtons = document.querySelectorAll('[data-survey-page]');
  const newSurveyButton = document.querySelector('#newSurveyButton');
  const surveyDetailModal = document.querySelector('#surveyDetailModal');
  const surveyCreateModal = document.querySelector('#surveyCreateModal');
  const closeSurveyDetailModal = document.querySelector('#closeSurveyDetailModal');
  const closeSurveyDetailFooter = document.querySelector('#closeSurveyDetailFooter');
  const closeSurveyCreateModal = document.querySelector('#closeSurveyCreateModal');
  const cancelSurveyCreate = document.querySelector('#cancelSurveyCreate');
  const saveSurveyCreate = document.querySelector('#saveSurveyCreate');
  const surveyDetailName = document.querySelector('#surveyDetailName');
  const surveyDetailStatus = document.querySelector('#surveyDetailStatus');
  const surveyDetailMeta = document.querySelector('#surveyDetailMeta');
  const surveyDetailStars = document.querySelector('#surveyDetailStars');
  const surveyDetailScore = document.querySelector('#surveyDetailScore');
  const surveyDetailSatisfaction = document.querySelector('#surveyDetailSatisfaction');
  const surveyDetailExperience = document.querySelector('#surveyDetailExperience');
  const surveyDetailRecommendation = document.querySelector('#surveyDetailRecommendation');
  const surveyDetailComment = document.querySelector('#surveyDetailComment');
  const surveyDetailSentAt = document.querySelector('#surveyDetailSentAt');
  const surveyDetailAnsweredAt = document.querySelector('#surveyDetailAnsweredAt');
  const surveyDetailChannel = document.querySelector('#surveyDetailChannel');
  const surveyCreateName = document.querySelector('#surveyCreateName');
  const surveyCreateClient = document.querySelector('#surveyCreateClient');
  const surveyCreateType = document.querySelector('#surveyCreateType');
  const surveyCreateRelation = document.querySelector('#surveyCreateRelation');
  const surveyCreateEmail = document.querySelector('#surveyCreateEmail');
  const surveyCreateSubject = document.querySelector('#surveyCreateSubject');
  const surveyCreateDate = document.querySelector('#surveyCreateDate');
  const surveyCreateTime = document.querySelector('#surveyCreateTime');
  const surveyChannelEmail = document.querySelector('#surveyChannelEmail');
  const surveyChannelWhatsapp = document.querySelector('#surveyChannelWhatsapp');
  const surveyTemplateGrid = document.querySelector('#surveyTemplateGrid');
  const surveyQuestionList = document.querySelector('#surveyQuestionList');
  const addSurveyQuestion = document.querySelector('#addSurveyQuestion');
  const surveyQuestionOne = document.querySelector('#surveyQuestionOne');
  const surveyQuestionTwo = document.querySelector('#surveyQuestionTwo');
  const surveyQuestionThree = document.querySelector('#surveyQuestionThree');
  const surveyQuestionFour = document.querySelector('#surveyQuestionFour');
  const collapseKey = 'erpOperationsSidebarCollapsed';

  const surveyTemplates = {
    project: [
      'Que tan satisfecho estas con el servicio recibido?',
      'Como calificarias la atencion del equipo?',
      'Volverias a trabajar con nosotros?',
      'Comentarios adicionales'
    ],
    support: [
      'Que tan satisfecho estas con la resolucion del ticket?',
      'Como calificarias el tiempo de respuesta?',
      'El soporte resolvio tu necesidad?',
      'Comentarios adicionales'
    ],
    delivery: [
      'Que tan satisfecho estas con el entregable recibido?',
      'El entregable cumplio el alcance acordado?',
      'Como calificarias la calidad del entregable?',
      'Comentarios adicionales'
    ],
    team: [
      'Como calificarias la atencion del equipo?',
      'El equipo se comunico de forma clara?',
      'Volverias a trabajar con nosotros?',
      'Comentarios adicionales'
    ],
    manual: ['', '', '', '']
  };
  let extraQuestionCount = 0;

  const surveys = [
    {
      name: 'Satisfaccion - Proyecto Renovacion Tech',
      client: 'Tech Solutions Inc.',
      type: 'Proyecto',
      relation: 'Proyecto Renovacion Tech',
      status: 'Enviada',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '5 / 5',
      recommendation: 'Si',
      comment: 'El servicio fue bueno, pero podria mejorar el tiempo de respuesta.',
      answeredAt: '18/06/2024',
      channel: 'Correo'
    },
    {
      name: 'Feedback - Ticket #202001',
      client: 'Carlos',
      type: 'Ticket',
      relation: 'Ticket #202001',
      status: 'Respondida',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '5 / 5',
      recommendation: 'Si',
      comment: 'La atencion fue clara y resolvieron el ticket dentro del plazo esperado.',
      answeredAt: '18/06/2024',
      channel: 'Correo'
    },
    {
      name: 'Feedback - Ticket #202001',
      client: 'Darlo',
      type: 'Ticket',
      relation: 'Ticket #202001',
      status: 'Respondida',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '4 / 5',
      recommendation: 'Si',
      comment: 'Buen seguimiento del caso, con oportunidad de mejorar la comunicacion inicial.',
      answeredAt: '18/06/2024',
      channel: 'WhatsApp'
    },
    {
      name: 'Evaluacion - Entregable Q3 Report',
      client: 'Tech',
      type: 'Entregable',
      relation: 'Ticket #202001',
      status: 'Enviada',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '5 / 5',
      recommendation: 'Si',
      comment: 'Pendiente de respuesta del cliente.',
      answeredAt: 'Sin respuesta',
      channel: 'Correo'
    },
    {
      name: 'Feedback - Ticket #202001',
      client: 'Carlos',
      type: 'Ticket',
      relation: 'Ticket #202001',
      status: 'Enviada',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '4 / 5',
      recommendation: 'Si',
      comment: 'Pendiente de respuesta del cliente.',
      answeredAt: 'Sin respuesta',
      channel: 'Correo'
    },
    {
      name: 'Feedback - Ticket #202001',
      client: 'Darlo',
      type: 'Ticket',
      relation: 'Ticket #202001',
      status: 'Enviada',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '4 / 5',
      recommendation: 'Si',
      comment: 'Pendiente de respuesta del cliente.',
      answeredAt: 'Sin respuesta',
      channel: 'Correo'
    },
    {
      name: 'Evaluacion - Entregable Q3 Report',
      client: 'Tech Solution',
      type: 'Entregable',
      relation: 'Ticket #202001',
      status: 'Enviada',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '5 / 5',
      recommendation: 'Si',
      comment: 'Pendiente de respuesta del cliente.',
      answeredAt: 'Sin respuesta',
      channel: 'Correo'
    },
    {
      name: 'Evaluacion - Entregable Q3 Report',
      client: 'Hana',
      type: 'Entregable',
      relation: 'Ticket #202001',
      status: 'Respondida',
      date: '15/06/2024',
      score: '4/5',
      satisfaction: '4 / 5',
      experience: '5 / 5',
      recommendation: 'Si',
      comment: 'El entregable cumplio con el alcance acordado.',
      answeredAt: '18/06/2024',
      channel: 'Correo'
    },
    {
      name: 'Pulso de servicio mensual',
      client: 'San Dianzo',
      type: 'Proyecto',
      relation: 'Proyecto SEO Q3',
      status: 'Respondida',
      date: '16/06/2024',
      score: '5/5',
      satisfaction: '5 / 5',
      experience: '5 / 5',
      recommendation: 'Si',
      comment: 'Excelente servicio y comunicacion constante durante el proyecto.',
      answeredAt: '19/06/2024',
      channel: 'Correo'
    },
    {
      name: 'Cierre de soporte API',
      client: 'Tech',
      type: 'Ticket',
      relation: 'Ticket #202003',
      status: 'Enviada',
      date: '16/06/2024',
      score: '3/5',
      satisfaction: '3 / 5',
      experience: '4 / 5',
      recommendation: 'Si',
      comment: 'Pendiente de respuesta del cliente.',
      answeredAt: 'Sin respuesta',
      channel: 'Correo'
    }
  ];

  let currentPage = 1;
  const pageSize = 8;

  const escapeHTML = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const getStatusClass = (status) => (status === 'Respondida' ? 'is-answered' : 'is-sent');

  const getScoreNumber = (score) => {
    const scoreNumber = Number(String(score).split('/')[0]);
    return Number.isNaN(scoreNumber) ? 0 : Math.max(0, Math.min(5, scoreNumber));
  };

  const getStars = (score) => {
    const scoreNumber = getScoreNumber(score);
    return '*'.repeat(scoreNumber) + '*'.repeat(5 - scoreNumber);
  };

  const hideSurveyDetailModal = () => {
    if (surveyDetailModal) {
      surveyDetailModal.hidden = true;
    }
  };

  const setManualQuestions = (isManual) => {
    [surveyQuestionOne, surveyQuestionTwo, surveyQuestionThree, surveyQuestionFour].forEach((input) => {
      if (input) {
        input.readOnly = !isManual;
        input.placeholder = isManual ? 'Escribe una pregunta...' : '';
      }
    });
  };

  const applySurveyTemplate = (templateKey) => {
    const questions = surveyTemplates[templateKey] || surveyTemplates.project;
    const questionInputs = [surveyQuestionOne, surveyQuestionTwo, surveyQuestionThree, surveyQuestionFour];

    questionInputs.forEach((input, index) => {
      if (input) {
        input.value = questions[index] || '';
      }
    });

    setManualQuestions(templateKey === 'manual');
  };

  const clearExtraSurveyQuestions = () => {
    if (!surveyQuestionList) {
      return;
    }

    surveyQuestionList.querySelectorAll('[data-extra-question]').forEach((row) => row.remove());
    extraQuestionCount = 0;
  };

  const createSurveyQuestionRow = () => {
    if (!surveyQuestionList) {
      return;
    }

    extraQuestionCount += 1;

    const row = document.createElement('label');
    row.className = 'survey-question-row';
    row.dataset.extraQuestion = 'true';
    row.innerHTML = `
      <input type="text" placeholder="Escribe una pregunta..." autocomplete="off" />
      <select aria-label="Tipo de respuesta para pregunta ${extraQuestionCount}">
        <option>Escala 1-5</option>
        <option>Escala 1-5 estrellas</option>
        <option>Si / No</option>
        <option>Respuesta abierta</option>
      </select>
    `;

    surveyQuestionList.appendChild(row);

    const input = row.querySelector('input');
    if (input) {
      input.focus();
    }
  };

  const resetSurveyCreateForm = () => {
    if (surveyCreateName) surveyCreateName.value = '';
    if (surveyCreateClient) surveyCreateClient.value = '';
    if (surveyCreateType) surveyCreateType.value = 'Proyecto';
    if (surveyCreateRelation) surveyCreateRelation.value = '';
    if (surveyCreateEmail) surveyCreateEmail.value = '';
    if (surveyCreateSubject) surveyCreateSubject.value = '';
    if (surveyCreateDate) surveyCreateDate.value = '';
    if (surveyCreateTime) surveyCreateTime.value = '';
    if (surveyChannelEmail) surveyChannelEmail.checked = true;
    if (surveyChannelWhatsapp) surveyChannelWhatsapp.checked = false;
    clearExtraSurveyQuestions();

    if (surveyTemplateGrid) {
      surveyTemplateGrid.querySelectorAll('.survey-template-option').forEach((button) => {
        button.classList.toggle('is-selected', button.dataset.template === 'project');
      });
    }

    applySurveyTemplate('project');
  };

  const openSurveyCreateModal = () => {
    if (!surveyCreateModal) {
      return;
    }

    resetSurveyCreateForm();
    surveyCreateModal.hidden = false;

    if (surveyCreateName) {
      surveyCreateName.focus();
    }
  };

  const hideSurveyCreateModal = () => {
    if (surveyCreateModal) {
      surveyCreateModal.hidden = true;
    }
  };

  const openSurveyDetailModal = (index) => {
    const survey = surveys[index];

    if (!survey || !surveyDetailModal) {
      return;
    }

    if (surveyDetailName) surveyDetailName.textContent = survey.name;

    if (surveyDetailStatus) {
      surveyDetailStatus.textContent = survey.status;
      surveyDetailStatus.className = 'survey-detail-status';
      if (survey.status !== 'Respondida') {
        surveyDetailStatus.classList.add('is-sent');
      }
    }

    if (surveyDetailMeta) {
      surveyDetailMeta.textContent = `Cliente: ${survey.client} | Relacion: ${survey.relation}`;
    }

    if (surveyDetailStars) surveyDetailStars.textContent = getStars(survey.score);
    if (surveyDetailScore) surveyDetailScore.textContent = `(${survey.score})`;
    if (surveyDetailSatisfaction) surveyDetailSatisfaction.textContent = survey.satisfaction;
    if (surveyDetailExperience) surveyDetailExperience.textContent = survey.experience;
    if (surveyDetailRecommendation) surveyDetailRecommendation.textContent = survey.recommendation;
    if (surveyDetailComment) surveyDetailComment.textContent = survey.comment;
    if (surveyDetailSentAt) surveyDetailSentAt.textContent = survey.date;
    if (surveyDetailAnsweredAt) surveyDetailAnsweredAt.textContent = survey.answeredAt;
    if (surveyDetailChannel) surveyDetailChannel.textContent = survey.channel;

    surveyDetailModal.hidden = false;
  };

  const getFilteredSurveys = () => {
    const query = surveySearchInput ? surveySearchInput.value.trim().toLowerCase() : '';
    const status = surveyStatusFilter ? surveyStatusFilter.value : 'Todos';
    const type = surveyTypeFilter ? surveyTypeFilter.value : 'Todos';

    return surveys.filter((survey) => {
      const matchesQuery =
        !query ||
        `${survey.name} ${survey.client} ${survey.type} ${survey.relation}`.toLowerCase().includes(query);
      const matchesStatus = status === 'Todos' || survey.status === status;
      const matchesType = type === 'Todos' || survey.type === type;
      return matchesQuery && matchesStatus && matchesType;
    });
  };

  const renderSurveys = () => {
    if (!surveysTableBody) {
      return;
    }

    const filteredSurveys = getFilteredSurveys();
    const totalPages = Math.max(1, Math.ceil(filteredSurveys.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);

    const startIndex = (currentPage - 1) * pageSize;
    const pagedSurveys = filteredSurveys.slice(startIndex, startIndex + pageSize);

    surveysTableBody.innerHTML = '';

    pagedSurveys.forEach((survey) => {
      const row = document.createElement('tr');
      row.dataset.surveyIndex = String(surveys.indexOf(survey));
      row.innerHTML = `
        <td>${escapeHTML(survey.name)}</td>
        <td>${escapeHTML(survey.client)}</td>
        <td>${escapeHTML(survey.type)}</td>
        <td>${escapeHTML(survey.relation)}</td>
        <td><span class="survey-status ${getStatusClass(survey.status)}">${escapeHTML(survey.status)}</span></td>
        <td>${escapeHTML(survey.date)}</td>
        <td class="survey-score"><span class="survey-stars">*****</span> ${escapeHTML(survey.score)}</td>
        <td>
          <span class="survey-actions">
            <button type="button" class="survey-action is-danger">Eliminar</button>
          </span>
        </td>
      `;
      surveysTableBody.appendChild(row);
    });

    if (surveyPaginationLabel) {
      const from = filteredSurveys.length ? startIndex + 1 : 0;
      const to = Math.min(startIndex + pageSize, filteredSurveys.length);
      surveyPaginationLabel.textContent = `Mostrando ${from}-${to} de ${filteredSurveys.length}`;
    }

    surveyPageButtons.forEach((button) => {
      button.classList.toggle('is-active', Number(button.dataset.surveyPage) === currentPage);
    });

    if (prevSurveyPage) {
      prevSurveyPage.disabled = currentPage === 1;
    }

    if (nextSurveyPage) {
      nextSurveyPage.disabled = currentPage === totalPages;
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

  if (surveySearchInput) {
    surveySearchInput.addEventListener('input', () => {
      currentPage = 1;
      renderSurveys();
    });
  }

  if (surveyStatusFilter) {
    surveyStatusFilter.addEventListener('change', () => {
      currentPage = 1;
      renderSurveys();
    });
  }

  if (surveyTypeFilter) {
    surveyTypeFilter.addEventListener('change', () => {
      currentPage = 1;
      renderSurveys();
    });
  }

  if (clearSurveyFiltersButton) {
    clearSurveyFiltersButton.addEventListener('click', () => {
      if (surveySearchInput) surveySearchInput.value = '';
      if (surveyStatusFilter) surveyStatusFilter.value = 'Todos';
      if (surveyTypeFilter) surveyTypeFilter.value = 'Todos';
      currentPage = 1;
      renderSurveys();
    });
  }

  if (newSurveyButton) {
    newSurveyButton.addEventListener('click', openSurveyCreateModal);
  }

  if (surveyTemplateGrid) {
    surveyTemplateGrid.addEventListener('click', (event) => {
      const option = event.target.closest('.survey-template-option');

      if (!option) {
        return;
      }

      surveyTemplateGrid.querySelectorAll('.survey-template-option').forEach((button) => {
        button.classList.toggle('is-selected', button === option);
      });

      applySurveyTemplate(option.dataset.template);
      clearExtraSurveyQuestions();
    });
  }

  if (addSurveyQuestion) {
    addSurveyQuestion.addEventListener('click', createSurveyQuestionRow);
  }

  if (saveSurveyCreate) {
    saveSurveyCreate.addEventListener('click', () => {
      const name = surveyCreateName ? surveyCreateName.value.trim() : '';
      const client = surveyCreateClient ? surveyCreateClient.value.trim() : '';
      const type = surveyCreateType ? surveyCreateType.value : 'Proyecto';
      const relation = surveyCreateRelation ? surveyCreateRelation.value.trim() : '';

      if (!name) {
        if (surveyCreateName) surveyCreateName.focus();
        return;
      }

      if (!relation) {
        if (surveyCreateRelation) surveyCreateRelation.focus();
        return;
      }

      const channel = surveyChannelWhatsapp && surveyChannelWhatsapp.checked ? 'WhatsApp' : 'Correo';
      const sentAt = surveyCreateDate && surveyCreateDate.value
        ? new Intl.DateTimeFormat('es-PE').format(new Date(`${surveyCreateDate.value}T00:00:00`))
        : new Intl.DateTimeFormat('es-PE').format(new Date());

      surveys.unshift({
        name,
        client: client || 'Cliente sin asignar',
        type,
        relation,
        status: 'Enviada',
        date: sentAt,
        score: '0/5',
        satisfaction: 'Pendiente',
        experience: 'Pendiente',
        recommendation: 'Pendiente',
        comment: 'Pendiente de respuesta del cliente.',
        answeredAt: 'Sin respuesta',
        channel
      });

      currentPage = 1;
      renderSurveys();
      hideSurveyCreateModal();
    });
  }

  if (surveysTableBody) {
    surveysTableBody.addEventListener('click', (event) => {
      if (event.target.closest('.survey-action')) {
        return;
      }

      const row = event.target.closest('[data-survey-index]');

      if (!row) {
        return;
      }

      const surveyIndex = Number(row.dataset.surveyIndex);

      if (Number.isNaN(surveyIndex)) {
        return;
      }

      openSurveyDetailModal(surveyIndex);
    });
  }

  if (prevSurveyPage) {
    prevSurveyPage.addEventListener('click', () => {
      currentPage = Math.max(1, currentPage - 1);
      renderSurveys();
    });
  }

  if (nextSurveyPage) {
    nextSurveyPage.addEventListener('click', () => {
      const totalPages = Math.max(1, Math.ceil(getFilteredSurveys().length / pageSize));
      currentPage = Math.min(totalPages, currentPage + 1);
      renderSurveys();
    });
  }

  surveyPageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentPage = Number(button.dataset.surveyPage) || 1;
      renderSurveys();
    });
  });

  if (closeSurveyDetailModal) {
    closeSurveyDetailModal.addEventListener('click', hideSurveyDetailModal);
  }

  if (closeSurveyDetailFooter) {
    closeSurveyDetailFooter.addEventListener('click', hideSurveyDetailModal);
  }

  if (closeSurveyCreateModal) {
    closeSurveyCreateModal.addEventListener('click', hideSurveyCreateModal);
  }

  if (cancelSurveyCreate) {
    cancelSurveyCreate.addEventListener('click', hideSurveyCreateModal);
  }

  if (surveyDetailModal) {
    surveyDetailModal.addEventListener('click', (event) => {
      if (event.target === surveyDetailModal) {
        hideSurveyDetailModal();
      }
    });
  }

  if (surveyCreateModal) {
    surveyCreateModal.addEventListener('click', (event) => {
      if (event.target === surveyCreateModal) {
        hideSurveyCreateModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && surveyDetailModal && !surveyDetailModal.hidden) {
      hideSurveyDetailModal();
    }

    if (event.key === 'Escape' && surveyCreateModal && !surveyCreateModal.hidden) {
      hideSurveyCreateModal();
    }
  });

  renderSurveys();
});
