function changeBugImage() {
    let image = document.getElementById("thisImage");
    if (image.getAttribute('src') == "./closedBug.png") {
        image.src = "./freeBug.png";
    } else {
        image.src = "./closedBug.png";
    }
}