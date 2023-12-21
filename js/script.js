const ourWork = document.querySelectorAll(".our-work .row div[data-work]");
const btnList = document.querySelector(".our-work ul");
const filterElem=function(name){
  ourWork.forEach((item) => {
    if (item.dataset.work !== name && name!=='All')
      item.parentElement.classList.add("d-none");
    else
      item.parentElement.classList.remove('d-none')
  });
}
btnList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    if (e.target.textContent === "All")
      filterElem('All')
    else if (e.target.textContent === "Design")
      filterElem('Design');
    else if (e.target.textContent === "Code")
      filterElem('Code');
    else if (e.target.textContent === "App")
      filterElem('Application');
    else if (e.target.textContent === "Photo")
      filterElem('Photo');
  }
});
