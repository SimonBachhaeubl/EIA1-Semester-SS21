"use strict";
window.addEventListener("load", function () {
    document.querySelector("#b1").addEventListener("click", function (): void { playsample("A.mp3"); });
    document.querySelector("#b2").addEventListener("click", function (): void { playsample("C.mp3"); });
    document.querySelector("#b3").addEventListener("click", function (): void { playsample("F.mp3"); });
    document.querySelector("#b4").addEventListener("click", function (): void { playsample("G.mp3"); });
    document.querySelector("#b5").addEventListener("click", function (): void { playsample("hihat.mp3"); });
    document.querySelector("#b6").addEventListener("click", function (): void { playsample("kick.mp3"); });
    document.querySelector("#b7").addEventListener("click", function (): void { playsample("laugh-1.mp3"); });
    document.querySelector("#b8").addEventListener("click", function (): void { playsample("laugh-2.mp3"); });
    document.querySelector("#b9").addEventListener("click", function (): void { playsample("snare.mp3"); });
    document.querySelector("#play").addEventListener("click", playorstop);
    document.querySelector("#trash").addEventListener("click", deletebeat);
    document.querySelector("#record").addEventListener("click", recordBeat);
    document.querySelector("#remix").addEventListener("click", remixBeat);

    
    let beatInt = undefined;
    let beats = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    let recording = false;
    function recordBeat() {
        if (recording) {
            recording = false;
        }
        else {
            recording = true;
        }
    }
    function playsample(audios): void {
        if (recording) {
            beats.push(audios);
        }
        const sound = new Audio(audios);
        sound.play();
    }
    function playorstop(): void {
        let playorstopbtn = document.querySelector("#play");
        if (playorstopbtn.className == "fas fa-play") {
            playorstopbtn.className = "fas fa-stop";
            playbeat();
        }
        else {
            playorstopbtn.className = "fas fa-play";
            clearInterval(beatInt);
        }
    }
    function deletebeat(): void {
        beats = [];
    }
    function playbeat(): void {
        var index = 0;
        beatInt = setInterval(function () {
            playsample(beats[index]);
            index += 1;
            if (index >= beats.length) {
                index = 0;
            }
        }, 600);
    }

    function remixBeat(): void {


// Leider habe ich mich zeilich bisschen verkalkuliert und habe die Remix Funkion nicht rechtzeitig hinbekommen.
// Da ich Morgen zu meinen Großeltern fahre und vermutlich keine Zeit mehr habe mich nocheinmal daran zu versuchen, 
// werde ich die Remix Funktion bis Mittwoch nachreichen. Ich hoffe das passt. Schönen Sonntag - Gruß Simon 

    }
    
});

