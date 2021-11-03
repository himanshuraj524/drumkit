window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    key.addEventListener("transitionend", (e) => {
        if (!e.propertyName == "transform") return;
        key.classList.remove("playing")
    });
})

let keys = document.querySelectorAll(".key")
keys.forEach(key => {
    key.addEventListener("click", (e) => {
        const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
        const key = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        key.addEventListener("transitionend", (e) => {
            if (!e.propertyName == "transform") return;
            key.classList.remove("playing")
        });
    })
})