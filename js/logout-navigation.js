document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const sidebarToggle = document.querySelector('#sidebarToggle');

  const syncDesktopSidebarWidth = () => {
    if (!sidebar) {
      return;
    }

    if (window.innerWidth < 1024) {
      document.documentElement.style.removeProperty('--desktop-sidebar-width');
      return;
    }

    document.documentElement.style.setProperty('--desktop-sidebar-width', `${sidebar.offsetWidth}px`);
  };

  if (!sidebar || window.innerWidth >= 768) {
    syncDesktopSidebarWidth();
  } else {
    sidebar.classList.add('is-collapsed');
    sidebar.classList.remove('is-expanded');
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      window.setTimeout(syncDesktopSidebarWidth, 0);
    });
  }

  window.addEventListener('resize', syncDesktopSidebarWidth);
  syncDesktopSidebarWidth();
});

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
