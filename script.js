window.addEventListener("load", function () {
    let container = document.getElementById("scrollContainer");

    // load images
    for (let i = 2; i <= 35; i++) {
        let img = document.createElement("img");
        img.src = `work/image1 (${i}).jpeg`;
        container.appendChild(img);
    }

    // duplicate for infinite scroll
    container.innerHTML += container.innerHTML;

    let scrollAmount = 0;
    let isPaused = false;

    // pause when mouse enters
    container.addEventListener("mouseenter", () => {
        isPaused = true;
    });

    // resume when mouse leaves
    container.addEventListener("mouseleave", () => {
        isPaused = false;
    });

    function autoScroll() {
        if (!isPaused) {
            scrollAmount += 0.5;
            container.scrollLeft = scrollAmount;

            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0;
            }
        }
    }

    setInterval(autoScroll, 10);
});