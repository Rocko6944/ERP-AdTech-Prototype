document.addEventListener(
  'click',
  (event) => {
    const panelGeneralLink = event.target.closest('.sidebar-link[href="modules.html"]');

    if (panelGeneralLink) {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = 'modules.html';
      return;
    }

    const logoutTrigger = event.target.closest('#logoutButton');

    if (!logoutTrigger) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const currentPage =
      `${window.location.pathname.split('/').pop() || 'modules.html'}${window.location.search}${window.location.hash}`;

    sessionStorage.setItem('erpLogoutReturnTo', currentPage);
    window.location.href = `logout.html?returnTo=${encodeURIComponent(currentPage)}`;
  },
  true
);
