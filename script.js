console.log('satisfy welcomes you');
let audioElement = new Audio("song/1.mp3");
let songIndex = 0;
let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let nameOfSong = document.getElementById('nameOfSong');
let songItems = Array.from(document.getElementsByClassName('songsItem'));
let songs = [
    {songName:"mere sohneya", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Rata Lmbiyan", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Chand Baliyan", filePath:"song/3.mp3", coverPath:"covers/3.jfif"},
    {songName:"Tu Hi Hai", filePath:"song/4.mp3", coverPath:"covers/4.jfif"},
    {songName:"Main ki karan", filePath:"song/5.mp3", coverPath:"covers/5.jfif"},
    {songName:"Main Rahu Ya Na Rahu", filePath:"song/6.mp3", coverPath:"covers/6.jfif"}
];
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

play.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        play.classList.add('fa-circle-play');
        play.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime =progressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=> {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=> {
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        nameOfSong.innerText =songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play()
        gif.style.opacity = 1;
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex= 0 ;
    }else{
        songIndex += 1 ;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    nameOfSong.innerText =songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play() 
    gif.style.opacity = 1;
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
})

document.getElementById('previos').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex= 5 ;
    }else{
        songIndex -= 1 ;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    nameOfSong.innerText =songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play()
    gif.style.opacity = 1; 
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
})