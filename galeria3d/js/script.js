const imgContainerEl = document.querySelector(".container");
const prevEl = document.querySelector(".btn-prev");
const nextEl = document.querySelector(".btn-next");

let x = 0;
let timer = 0;

prevEl.addEventListener('click', ()=>{
    x = x + 45;
    clearTimeout(timer);
    updateContainer();
});

nextEl.addEventListener('click', ()=>{
    x = x -45;
    clearTimeout(timer);
    updateContainer();
});

function updateContainer() {
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x = x + 45;
        updateContainer();
    }, 2000);
}

updateContainer();