const audio = () => {
    const audiofile = "../audio/03 Vivaldi Sonata op.1 no.8 en r'e mineur RV6 - II. Corrente, allegro.mp3";

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

