const yesbtn= document.querySelector("#yesbtn");

yesbtn.addEventListener("click", function() {
alert("sabia que ibas a poner que si, te quero mucho amiga")
});

const nobtn= document.querySelector("#nobtn");

nobtn.addEventListener("mouseover", function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty("top", randomY+"%");
    nobtn.style.setProperty("left", randomX+"%");
    nobtn.style.setProperty("transform", "translate(-${randomX}%, -${randomY}%)")
})
