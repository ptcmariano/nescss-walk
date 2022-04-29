var bulbasaur = document.getElementById("bulbasaur")
var progress = document.getElementById("progress")


var valorprogress = 1
setInterval(() => {
    valorprogress += 1
    progress.value = valorprogress
    bulbasaur.style = `
    //     transition: left .5s .5s, transform .5s;
        left: ${valorprogress*10}px;
    //     transform: rotate(0)
    `
}, 500)