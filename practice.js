const grandparent = document.getElementById("grand")

const parents = Array.from(document.getElementsByClassName("parent"))

const children = Array.from(document.getElementsByClassName("child"))

children.forEach(changeColor)

function changeColor(element){
    element.style.backgroundColor = "#333"
}
