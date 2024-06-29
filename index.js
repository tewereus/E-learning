// const carousel = document.querySelector(".carousel"),
// firstImg =  document.querySelectorAll(".wrappp img")[0],
// arrowIcons =  document.querySelectorAll(".wrappp a");

// let isDragStart = false,prevPageX,prevScrollLeft;

// arrowIcons.forEach(icon =>{
//     icon.addEventListener("click", ()=>{
//         console.log(icon)
//     })
// })

// const dragStart = (e) =>{
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) =>{
//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () =>{
//     isDragStart = false;
// }

// carousel.addEventListener("mousedown", dragStart)
// carousel.addEventListener("mousemove", dragging)
// carousel.addEventListener("mouseup", dragStop)


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function openSide() {
    document.getElementById("mySide").style.width = "30%";
}

function closeSide() {
    document.getElementById("mySide").style.width = "0%";
}