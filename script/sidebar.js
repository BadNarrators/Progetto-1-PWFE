function sidebarPush() {
    sidebar.classList.toggle('is-closed');
}

function Change(x) {
  x.classList.toggle('change');
}

// FIXME: ordinare e ripulire
function sidebarToggle(x) {
  Change(x);
  let sidenav_button = document.getElementById('menu');
  let main = document.getElementById('main');
  let sidenav = document.getElementById('sidebar-content');
  sidenav.classList.toggle('change');
  sidebarPush();
}