const musicContainer  = document.getElementById('music-container'),
    playBtn  = document.getElementById('play'),
    prevBtn = document.getElementById('prev'),
    nextBtn  = document.getElementById('next'),
    audio  = document.getElementById('audio'),
    progress  = document.getElementById('progress'),
    progressContainer  = document.getElementById('progress-container'),
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

//prevous song
function prevSong(){
    songIndex--
    if(songIndex < 0) {
    songIndex = songs.length -1

    }
    loadSong(songs[songIndex])
    playSong()
}
//next song
function nextSong(){
    songIndex ++
    if(songIndex > songs.length - 1) {
    songIndex = 0

    }
    loadSong(songs[songIndex])
    playSong()
}

//Update song detils
function loadSong(song){
    title.innerText = song;
    audio.src =`music/${song}.mp3`
    cover.src =`images/${song}.jpg`
}


//update progress
function updateProgress(e){
    const { duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width =`${progressPercent}%`
   
    
}

//setprogress
function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime =(clickX / width) * duration
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

//change songs
prevBtn.addEventListener('click', prevSong )
nextBtn.addEventListener('click', nextSong )


// update the progress
audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)

//song ends
audio.addEventListener('ended', nextSong)
