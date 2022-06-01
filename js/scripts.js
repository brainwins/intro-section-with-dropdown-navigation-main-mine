document.querySelectorAll('.button-dropdown').forEach(item => {
  item.addEventListener('click', event => {
    Handleclick(item);
  })
})

function Handleclick (item){
  if (item.childNodes[3].style.display != "block") {
    item.childNodes[3].style.display = "block";
    item.childNodes[1].classList.add("active");
  }
  else {
    item.childNodes[3].style.display = "none";
    item.childNodes[1].classList.remove("active");
  }
}

mobileNavigation = document.querySelector(".nav-bar");
mobileNavButton = document.querySelector('.mobile-nav-toggle');

mobileNavButton.addEventListener('click', () => {
  navVisible = mobileNavigation.getAttribute("data-visible")
  if (navVisible == "true") {
    mobileNavigation.setAttribute("data-visible", "false")
    mobileNavButton.setAttribute("data-open", "true")
  }
  else {
    mobileNavigation.setAttribute("data-visible", "true")
    mobileNavButton.setAttribute("data-open", "false")
  }
})
