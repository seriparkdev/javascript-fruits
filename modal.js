const addBtn = document.getElementById("addButton");
const modal = document.getElementById("modal");
const xBtn = document.getElementById("xButton");

addBtn.onclick = () => {
    modal.style.display = "block";
}

xBtn.onclick = () => {
    modal.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
}
