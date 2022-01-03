// Float Side Bar 
function getYPosition(height){
    var top  = window.pageYOffset || document.documentElement.scrollTop
    return window.innerHeight + top - height;
}
const sidebar = document.querySelector('.sidebar');
const sidebarRect = sidebar.getBoundingClientRect();
const sidebarHeight = window.innerHeight * 0.5 + sidebarRect.height * 0.5;
sidebar.style.top = `${getYPosition(sidebarHeight)}px`;
window.onscroll = ()=>{
    sidebar.style.top = `${getYPosition(sidebarHeight)}px`;
}
function collapsion(){
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
    else{
        sidebar.classList.add('active');
    }
}