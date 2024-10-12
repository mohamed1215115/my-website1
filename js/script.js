const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click" , () => {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
})
 
const home = document.getElementById("home");
const lessons = document.getElementById("lessons");
const about = document.getElementById("about");
const contactus = document.getElementById("contactus");

home.addEventListener("click" , () =>{
    menu.classList.remove("is-active");
    actions.classList.remove("is-active");
})

lessons.addEventListener("click" , () =>{
    menu.classList.remove("is-active");
    actions.classList.remove("is-active");
})

about.addEventListener("click" , () =>{
    menu.classList.remove("is-active");
    actions.classList.remove("is-active");
})

contactus.addEventListener("click" , () =>{
    menu.classList.remove("is-active");
    actions.classList.remove("is-active");
})
