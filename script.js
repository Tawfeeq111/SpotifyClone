let songArr = [
    { songName: 'True Love', filePath: "10.mp3", coverPath: "10.jpg" },
    { songName: 'Trap', filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: 'They Mad', filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: 'Rick the Kid', filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: 'Song Title', filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: 'Safety Dance', filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: 'Back it up', filePath: "6.mp3", coverPath: "7.jpg" },
    { songName: 'Bella Dance', filePath: "6.mp3", coverPath: "9.jpg" },
];
let audioElement = new Audio('1.mp3');
//audioElement.pause();
let progessBar = document.getElementById('range');
let timeStamp = 0;
let play1 = document.getElementsByClassName('i');
let gif = document.getElementById('giif');
let play = document.getElementById('play');
let index = 1;
let songName1 = document.getElementById('songName1');

play.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        songName1.innerText = songArr[index - 1].songName;
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        let tar = (index + 10).toString();
        let sub = document.getElementById(tar);
        sub.innerHTML = `5:02 <i class="fa-regular play-pause fa-circle-pause" id="${index - 10}"></i>`;
    }
    else {
        audioElement.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        pauseAll();
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    console.log('Time update');
    let progess1 = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progessBar.value = progess1;
});

progessBar.addEventListener('change', () => {
    audioElement.currentTime = ((progessBar.value * audioElement.duration) / 100);
});

pauseAll = () => {
    Array.from(document.getElementsByClassName('play-pause')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('play-pause')).forEach((element) => {
    element.addEventListener('click', (e) => {
        pauseAll();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        index = parseInt(e.target.id);
        audioElement.src = `${index}.mp3`;
        audioElement.play();
        songName1.innerText = songArr[index - 1].songName;
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    });
});

document.getElementById('prev').addEventListener('click', () => {
    if (index == 1) {
        index = 8;
    }
    else {
        index = index - 1;
    }
    audioElement.src = `${index}.mp3`;
    audioElement.play();
    songName1.innerText = songArr[index - 1].songName;
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    pauseAll();
    let tar = (index + 10).toString();
    let sub = document.getElementById(tar);
    sub.innerHTML = `5:02 <i class="fa-regular play-pause fa-circle-pause" id="${index - 10}"></i>`;
});

document.getElementById('next').addEventListener('click', () => {
    if (index == 8) {
        index = 1;
    }
    else {
        index = index + 1;
    }
    audioElement.src = `${index}.mp3`;
    audioElement.play();
    songName1.innerText = songArr[index - 1].songName;
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    pauseAll();
    let tar = (index + 10).toString();
    let sub = document.getElementById(tar);
    sub.innerHTML = `5:02 <i class="fa-regular play-pause fa-circle-pause" id="${index - 10}"></i>`;
});