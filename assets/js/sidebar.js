function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("heading_holder").classList.toggle("sidebarOpenMain");
}
function updateTextInput(slider){
    var output=document.getElementById("currentValue");
    output.innerHTML=slider;
    slider.oninput=function(){
        output.innerHTML=this.value;
    }
}


