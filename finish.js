const openBtn = document.getElementById("openlast");
const closeBtn = document.getElementById("closelast");
const modal = document.getElementById("last");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
}); 