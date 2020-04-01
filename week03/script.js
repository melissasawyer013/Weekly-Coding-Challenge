function changeBugImage() {
    let image = document.getElementById("thisImage");
    if (image.getAttribute('src') == "./closedBug.png") {
        image.src = "./freeBug.png";
    } else {
        image.src = "./closedBug.png";
    }
}


// function changeBugImage() {
//     let image = document.getElementById("thisImage");
//     if (image.src = "./closedBug.png") {
//         image.src = "./freeBug.png";
//         console.log ("changed");
//     } else if (image.src = "./freeBug.png"){
//         image.src = "./closedBug.png";
//         console.log ("changed back");
//     }
// }
// function changeBugImage() {
//     if (document.getElementById("thisImage").src = "./closedBug.png") {
//         document.getElementById("thisImage").src = "./freeBug.png";
//         console.log("changed")
//     } else {
//         document.getElementById("thisImage").src = "./closedBug.png";
//         console.log("changed back");
//     }
// }
// function changeBugImage() {
//     if (image.src = "./closedBug.png") {
//         image.src = "./freeBug.png"
//     } else {
//         image.src = "./closedBug.png";
//     }
// };


// function changeBugImage() {
//     let image = document.getElementById('myImage');
//     if (image.src.match("freeBug")) {
//         image.src = "closedBug.png"
//     } 
//     else {
//         image.src = "freeBug.png";
//     }
// }

