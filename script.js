function yes() {
    let yes = document.querySelector("#yes")
    let no = document.querySelector("#no")
    let text = document.querySelector("#text")
    if (yes.checked) {
        no.checked = false
        text.innerHTML = "Умничка, всё верно!"
    }
    else {
        text.innerHTML = ""
    }
}
function no() {
    let yes = document.querySelector("#yes")
    let no = document.querySelector("#no")
    let text = document.querySelector("#text")
    if (no.checked) {
        yes.checked = false
        text.innerHTML = "Жди докс"
    }
    else {
        text.innerHTML = ""
    }
}
function game() {
    window.location.href = "miroshkin0207.github.io/otziv"
}
