const pianoKeys=document.querySelectorAll(".piano-keys .key");
const volumeBar=document.getElementById("vol");
// const firstBtn=document.querySelector("#btn1");
// let track=audio.a.wav;
// firstBtn.addEventListener("click",()=>{
//     let audioEl=document.createElement("audio")
//     audioEl.src="tunes/a.wav";
//     audioEl.play();
// })

let track=new Audio(`tunes/a.wav`);
const playTune=key=>{
    track.src=`tunes/${key}.wav`;
    track.play();
}
    pianoKeys.forEach((key)=>{
        key.addEventListener("click",()=>{
            playTune(key.dataset.key);
            // console.log(key.dataset.key);
        })

    })

volumeBar.addEventListener("change",()=>{
    track.volume=volumeBar.value/100;
    // console.log(volumeBar.value);
})