var page = document.getElementsByClassName("page");

var allAnimate = document.getElementsByClassName("");

function changePage(index) {
    for(var i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    page[index - 1].style.display = "block";
    window.scroll(0, 0);
}

function onScroll() {
    
}

window.scrollTo(0, 0);

changePage(1);