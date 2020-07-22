//Importo mi reproductor
import MediaPlayer from "./mediaPlayer.js";

const $video = document.querySelector("video");
const $playButton = document.querySelector("#playButton");

const playerButton = new MediaPlayer({ elemento: $video });

$playButton.onclick = () => playerButton.play();
