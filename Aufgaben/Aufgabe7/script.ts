window.addEventListener("load", function(): void {
  
  
  var sound1: HTMLAudioElement = new Audio("A.mp3");
  var sound2: HTMLAudioElement = new Audio("C.mp3");
  var sound3: HTMLAudioElement = new Audio("F.mp3");
  var sound4: HTMLAudioElement = new Audio("G.mp3");
  var sound5: HTMLAudioElement = new Audio("hihat.mp3");
  var sound6: HTMLAudioElement = new Audio("kick.mp3");
  var sound7: HTMLAudioElement = new Audio("laugh-1.mp3");
  var sound8: HTMLAudioElement = new Audio("laugh-2.mp3");
  var sound9: HTMLAudioElement = new Audio("snare.mp3");
  
  var sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
  

  function playSample(sound: HTMLAudioElement) {
      sound.play();
  }
  
  document.querySelector("#b1").addEventListener("click", function(): void { playSample(sounds[0]); });
  document.querySelector("#b2").addEventListener("click", function(): void { playSample(sounds[1]); });
  document.querySelector("#b3").addEventListener("click", function(): void { playSample(sounds[2]); });
  document.querySelector("#b4").addEventListener("click", function(): void { playSample(sounds[3]); });
  document.querySelector("#b5").addEventListener("click", function(): void { playSample(sounds[4]); });
  document.querySelector("#b6").addEventListener("click", function(): void { playSample(sounds[5]); });
  document.querySelector("#b7").addEventListener("click", function(): void { playSample(sounds[6]); });
  document.querySelector("#b8").addEventListener("click", function(): void { playSample(sounds[7]); });
  document.querySelector("#b9").addEventListener("click", function(): void { playSample(sounds[8]); });
  


  

  var beat = [sound6, sound9, sound5];

  function playBeat1() {
      beat [0].play();
  }

  function playBeat2() {
      beat [1].play();
  }

  
  function playBeat3() {
      beat [2].play();
  }

  function playBeat() {
  setTimeout(function(): void { playBeat1(); }, 1);
  setTimeout(function(): void { playBeat2(); }, 500);
  setTimeout(function(): void { playBeat3(); }, 1000);
  }

  document.querySelector("#playbutton").addEventListener("click", playBeat);

});