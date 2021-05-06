const audio = () => {
    const playButton = document.createElement('button');
    playButton.classList.add('btn');
    playButton.setAttribute('id', 'toogleAudio');
    playButton.innerHTML = '<i class="fa fa-volume-up"></i> Audio';
    
    const refNode = document.querySelector('.thm-breadcrumb') || document.querySelector('.slider-one__text');
    refNode.after(playButton);
    
    const audiofile = "../audio/Haydn-String-quartet-in-D-minor-op42.mp3";

    const audioEl = document.createElement('audio');
    audioEl.setAttribute('src', audiofile);
    audioEl.setAttribute('loop', true);
    document.body.appendChild(audioEl);

    const toggleEl = document.getElementById('toogleAudio');

    if(toggleEl){
        toggleEl.addEventListener('click', function() {
            audioEl.paused ? audioEl.play() : audioEl.pause();
        });
    }

    
    var promise = audioEl.play();

    if (promise !== undefined) {
        promise.then( _ => {
            console.log('Audio started')
        }).catch(error => {
            console.log('Cannot start audio')
        });
    }

};

audio();

