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
      window.open("https://websiteai.com", "_blank"); // Ganti dengan URL website AI kamu
    }
    
    function visitApI() {
        window.open("https://faris.biz.id")
    }
