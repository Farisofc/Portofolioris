function toggleMusic() {
      var music = document.getElementById("bg-music");
      var button = document.getElementById("music-button");
      if (music.paused) {
        music.play();
        button.innerHTML = "⏸ Pause Music";
      } else {
        music.pause();
        button.innerHTML = "🎵 Play Music";
      }
    }

    function visitAI() {
      window.open("https://aitechh.my.id", "_blank"); // Ganti dengan URL website AI kamu
    }
    
    function visitApI() {
        window.open("https://faris-apii.biz.id", "_blank")
    }
