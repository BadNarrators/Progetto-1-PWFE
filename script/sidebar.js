function sidebar_push() {
    if(document.getElementById("sidebar-content").style.display == "none"){
        document.getElementById("sidebar-content").style.width = "100%";
        document.getElementById("sidebar-content").style.display = "block";
    }else{
        document.getElementById("sidebar-content").style.display = "none";
    }
}

