function yes() {
    let text = document.querySelector("#text")
    let yes = document.querySelector("#yes")
    let no = document.querySelector("#no")
    no.checked = false
    if (yes.checked) {
        text.innerHTML="Умничка, всё верно!"
    }
     else {
         text.innerHTML=""
     }
}
function no() {
    let text = document.querySelector("#text")
    let yes = document.querySelector("#yes")
    let no = document.querySelector("#no")
    yes.checked = false
    if (no.checked) {
        text.innerHTML="Жди докс"
    }
    else {
        text.innerHTML=""
    }
    }
