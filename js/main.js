const menubtn = document.getElementById("menubtn");
const menubar = document.getElementById("menubar");

menubtn.addEventListener ('click' , ()=>{
    menubtn.classList.toggle("is-active");
    if( menubtn.classList.contains("is-active"))
    {
        menubar.style.right = "0px";
    }
    else{
        menubar.style.right = "-100%";
    }
})
window.onscroll = ()=>{
    menubar.style.right = "-100%";
    menubtn.classList.remove("is-active");
}