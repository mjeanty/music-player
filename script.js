const musicContainer  = document.getElementById('music-container'),
    playBtn  = document.getElementById('play'),
    prevBtn = document.getElementById('prev'),
    nextBtn  = document.getElementById('next'),
    audio  = document.getElementById('audio'),
    progress  = document.getElementById('progress'),
    proessContainer  = document.getElementById('progress-container'),
    title  = document.getElementById('title'),
    cover  = document.getElementById('cover')



//titles of the songs

const songs = ['hey', 'summer', 'ukulele']


// tracking

let songIndex = 2

//  loading songs
loadSong(songs[songIndex])

//playsong
function playSong() {
    musicContainer.classList.add('play')//this adds play clas to container
    //these lines changes the button by removing it and changing it to pause
    playBtn.querySelector('i.fas').classList.remove('fa-play') 
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    //the audio api below will just play the song
    audio.play()
}

//pauseong
function pauseSong() {
    musicContainer.classList.remove('play')//this does the opposite of the code above
    playBtn.querySelector('i.fas').classList.add('fa-pause') 
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    //the audio api below will just pause the song
    audio.pause()
}


//Update song detils
function loadSong(song){
    title.innerText = song;
    audio.src =`music/${song}.mp3`
    cover.src =`images/${song}.jpg`
}


//event litener
// this chcks it the pay class is there... which we added in the playsong functon
playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})
