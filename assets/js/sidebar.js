function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("main").classList.toggle("center");
}
function updateTextInput(slider){
    var output=document.getElementById("currentValue");
    output.innerHTML=slider;
    slider.oninput=function(){
        output.innerHTML=this.value;
    }
}


