const modal_open = document.getElementById("modal_open")
const modal_bg = document.getElementById("modal_bg")
const modal_close = document.getElementById("cancelar")


modal_open.addEventListener("click", () => {
    modal_bg.style.display = 'flex';
})

modal_close.addEventListener("click", () => {
    modal_bg.style.display = 'none';
})

window.onclick = function(e) {

    if(e.target == modal_bg){
        modal_bg.style.display = 'none';
    }
}