function sidebarPush(x) {
    x.classList.toggle('change');
}

function sidebarToggle() {
    let sidenav_button = document.getElementById('sidebar-button');
    let sidenav = document.getElementById('sidebar');
    sidebarPush(sidenav_button);
    sidebarPush(sidenav);
}