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

//Get the button
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
