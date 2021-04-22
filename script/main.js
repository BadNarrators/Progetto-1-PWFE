function Change(x) {
  x.classList.toggle('change');
}

function openNav() {
  let sidebar = document.getElementById('sidebar-content');
  sidebar.style.width = '100%';
  sidebar.style.opacity = '1';
}

function closeNav() {
  let sidebar = document.getElementById('sidebar-content');
  sidebar.style.width = '0';
  sidebar.style.opacity = '0';
}

let opened = false;
function toggleNav(x) {
  Change(x);
  if (!opened) {
    openNav();
    opened = true;
  } else {
    closeNav();
    opened = false;
  }
}
