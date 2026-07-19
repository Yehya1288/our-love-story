window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2000);
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".8s";

    observer.observe(card);

});
