const noBtn = document.getElementById("noBtn");

if (noBtn) {
    function moveButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }

    // For computer (mouse)
    noBtn.addEventListener("mouseover", moveButton);

    // For mobile (touch)
    noBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveButton();
    });
}