function watchlist_button(event) {
    const container = event.currentTarget;
    if (parseInt(container.dataset.clicked)) {
        container.dataset.clicked = '0';
        container.querySelector(".material-symbols-outlined").textContent = "add"
    }
    else {
        container.dataset.clicked = '1';
        container.querySelector(".material-symbols-outlined").textContent = "done"
    }
}

function mostra_ancora() {

    const carousel = document.querySelector("#continua").cloneNode(true);  //non sapevo come implementare questa funzione nel sito che non sembra possederla, quindi ho fatto così per mostrare comunque di aver compreso l'utilizzo, anche se logicamente non ha senso aggiungere un carosello clonato
    carousel.addEventListener('mouseover', show);
    carousel.addEventListener('mouseout', hide);
    document.querySelector(".main").appendChild(carousel);
    const poster = carousel.querySelectorAll(".poster");
    for (const elem of poster) {
        elem.addEventListener('mouseover', display);
        elem.addEventListener('mouseout', un_display);
    }

}

function show(event, classe) {
    const target = event.currentTarget.querySelector(".vedi");
    target.classList.add("showing")
}

function hide(event, classe) {
    const target = event.currentTarget.querySelector(".vedi");
    target.classList.remove("showing");
}

function display(event) { 
    const target = event.currentTarget.querySelector(".poster_drop");
    target.classList.add("display");
}

function un_display(event) { 
    const target = event.currentTarget.querySelector(".poster_drop");
    target.classList.remove("display")
}

function img_gif(event) { 

    const target = event.currentTarget.querySelector("img");
    const string = target.src;

    switch (string.slice(-3)) {
        case "jpg":
            target.src = string.slice(0, -3).concat("gif");
            break;
        case "gif":
            target.src = string.slice(0, -3).concat("jpg");
            break;
        default:
            break;
    }

 }

const watchlist = document.querySelectorAll(".watchlist");
for (const elem of watchlist) {
    elem.addEventListener('click', watchlist_button);
}

const carousel = document.querySelectorAll(".carousel");
for (const elem of carousel) {
    elem.addEventListener('mouseover', show);
    elem.addEventListener('mouseout', hide);
}

for (const elem of carousel) {
    const poster = document.querySelectorAll(".poster");
    for (const elem of poster) {
        elem.addEventListener('mouseover', display);
        elem.addEventListener('mouseout', un_display);
        elem.addEventListener('click', img_gif)
    }
}

document.querySelector("#ancora").addEventListener('click', mostra_ancora);