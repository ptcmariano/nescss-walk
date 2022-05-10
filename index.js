var bulbasaur = document.getElementById("bulbasaur")
var progress = document.getElementById("progress")


var valorprogress = 1
setInterval(() => {
    valorprogress += 1
    progress.value = valorprogress
    bulbasaur.style = `
        left: ${valorprogress*10}px;
    `
}, 500)