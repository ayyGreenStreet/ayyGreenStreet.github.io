var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                    videoId: '8_k5nKYOnyo',
                    width: 0,
                    height: 0,
                    playerVars: { 'autoplay': 1, 'controls': 0 , 'rel': 0, 'showinfo': 0, 'playsinline': 0, 'iv_load_policy': 3, 'loop': 1},

                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }

            function onPlayerReady(event) {
                event.target.setVolume(10);
                event.target.seekTo(5, false);

            }

            function onPlayerStateChange(event) {
                event.target.playVideo();
            }


            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });


            function write(text, id) {
                var timer;
                var charArray = text.split("");
                if (charArray.length > 0) {
                    document.getElementById(id).innerHTML += charArray.shift();
                }else{
                    clearTimeout(timer);
                    return false;
                }

                timer = setTimeout('write(\'' + text.substring(1, text.length) + '\',\'' + id + '\')', 100);
            }
