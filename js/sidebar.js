function toggleSidebar(){
    let navBar = document.getElementById("navbar");

    if(navBar.className ==="navbar"){
        navBar.className += " navbar-mobile";
    }else{
        navBar.className = "navbar";
    }
}