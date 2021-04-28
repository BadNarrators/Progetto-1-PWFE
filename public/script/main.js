/*
 * classList is a list of the CSS classes associated with x
 * toggle('y') adds y to the classes of classList if y does not already belong to classList, removes it if it's already present.
 */
function Change(x) {
  x.classList.toggle('change');
}

/*
 * openNav opens the sidebar.
 */
function openNav() {
  let sidebar = document.getElementById('sidebar-content');
  let body = document.getElementsByTagName('BODY')[0];
  sidebar.style.width = '100%';
  sidebar.style.opacity = '1';
  body.style.overflow = 'hidden';
}

/*
 * openNav closes the sidebar.
 */
function closeNav() {
  let sidebar = document.getElementById('sidebar-content');
  let body = document.getElementsByTagName('BODY')[0];
  sidebar.style.width = '0';
  sidebar.style.opacity = '0';
  body.style.overflow = 'scroll';
}

/*
 * By default the boolean open is set to false (by default the sidebar is closed when the page is first loaded).
 */
let opened = false;

/*
 * open and close sidebar.
 */
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
