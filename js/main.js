
// Control Display Navbar 
document.getElementsByClassName("icon_container")[0].onclick = function () {
    let navbar_links_container = document.querySelector(".navbar_links_container")
    
    if (navbar_links_container.style.display == "none") {
        navbar_links_container.style.display = "flex"
    } else {
        navbar_links_container.style.display = "none"

    }
    console.log(navbar_links_container)
}
