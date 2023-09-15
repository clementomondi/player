let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


const music_list = [
    {
        img: 'https://unsplash.com/photos/9Thbhn-hbsk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTN8fHNpbmdlcnN8ZW58MHx8fHwxNjg3MzA5NTc2fDA&force=true&w=1920',
        name: 'Kangaroo',
        music: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
    },
    {
        img: 'https://unsplash.com/photos/9Thbhn-hbsk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTN8fHNpbmdlcnN8ZW58MHx8fHwxNjg3MzA5NTc2fDA&force=true&w=1920',
        name: 'Sevish_',
        music: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'
    },
    {
        img: 'https://unsplash.com/photos/9Thbhn-hbsk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTN8fHNpbmdlcnN8ZW58MHx8fHwxNjg3MzA5NTc2fDA&force=true&w=1920',
        name: 'Race',
        music: 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race2.ogg'
    },
    {
        img: 'https://unsplash.com/photos/9Thbhn-hbsk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTN8fHNpbmdlcnN8ZW58MHx8fHwxNjg3MzA5NTc2fDA&force=true&w=1920',
        name: 'Epo1',
        music: 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg'
    }
];