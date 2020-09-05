function start() {
    var nav = document.getElementById("navbar");
    var rocket = document.getElementById("rocket");

    if (nav.getAttribute("visible") == "no") {
        nav.style.visibility = "visible";
        nav.setAttribute("visible", "yes");
        // rocket.style.transform = "rotate(-90deg)";
        return
    }

    if (nav.getAttribute("visible") == "yes") {
        nav.style.visibility = "hidden";
        nav.setAttribute("visible", "no");
        // rocket.style.transform = "rotate(-45deg)";
        return
    }
    
}