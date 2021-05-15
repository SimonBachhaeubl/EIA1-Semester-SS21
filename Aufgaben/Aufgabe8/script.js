"use strict";
window.addEventListener("load", function () {
    document.querySelector("#b1").addEventListener("click", function () { playsample("A.mp3"); });
    document.querySelector("#b2").addEventListener("click", function () { playsample("C.mp3"); });
    document.querySelector("#b3").addEventListener("click", function () { playsample("F.mp3"); });
    document.querySelector("#b4").addEventListener("click", function () { playsample("G.mp3"); });
    document.querySelector("#b5").addEventListener("click", function () { playsample("hihat.mp3"); });
    document.querySelector("#b6").addEventListener("click", function () { playsample("kick.mp3"); });
    document.querySelector("#b7").addEventListener("click", function () { playsample("laugh-1.mp3"); });
    document.querySelector("#b8").addEventListener("click", function () { playsample("laugh-2.mp3"); });
    document.querySelector("#b9").addEventListener("click", function () { playsample("snare.mp3"); });
    document.querySelector("#play").addEventListener("click", playorstop);
    document.querySelector("#trash").addEventListener("click", deletebeat);
    document.querySelector("#record").addEventListener("click", recordBeat);
    document.querySelector("#remix").addEventListener("click", remixBeat);
    var beatInt = undefined;
    var beats = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var recording = false;
    function recordBeat() {
        if (recording) {
            recording = false;
        }
        else {
            recording = true;
        }
    }
    function playsample(audios) {
        if (recording) {
            beats.push(audios);
        }
        var sound = new Audio(audios);
        sound.play();
    }
    function playorstop() {
        var playorstopbtn = document.querySelector("#play");
        if (playorstopbtn.className == "fas fa-play") {
            playorstopbtn.className = "fas fa-stop";
            playbeat();
        }
        else {
            playorstopbtn.className = "fas fa-play";
            clearInterval(beatInt);
        }
    }
    function deletebeat() {
        beats = [];
    }
    function playbeat() {
        var index = 0;
        beatInt = setInterval(function () {
            playsample(beats[index]);
            index += 1;
            if (index >= beats.length) {
                index = 0;
            }
        }, 600);
    }
    function remixBeat() {
        // Leider habe ich mich zeilich bisschen verkalkuliert und habe die Remix Funkion nicht rechtzeitig hinbekommen.
        // Da ich Morgen zu meinen Großeltern fahre und vermutlich keine Zeit mehr habe mich nocheinmal daran zu versuchen, 
        // werde ich die Remix Funktion bis Mittwoch nachreichen. Ich hoffe das passt. Schönen Sonntag - Gruß Simon 
    }
});
//# sourceMappingURL=script.js.map