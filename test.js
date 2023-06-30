var sound = false;
var audio = new Audio('BOYAR_SOUND.mp3');
var btn = document.querySelector(".bbb");
if (btn) {
    btn.addEventListener("click", function () {
        if (sound === false) {
            btn.style.color = "green";
            sound = true;
            // Воспроизведение музыки
            audio.play();
        }
        else {
            sound = false;
            btn.style.color = "rgb(255, 75, 75)";
            audio.pause();
        }
    });
}
M.AutoInit();
