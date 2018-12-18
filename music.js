function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



//https://www.majabay.dk/kea/wordpress_rikke/wp-admin/index.php

//https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/

//https://majabay.dk/kea/rikkelie/


const template_music = document.querySelector("#musicTemplate").content;

const main = document.querySelector("main");

function getMusic() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/music?_embed")
        .then(res => res.json())
        .then(showMusic)
}

function showMusic(musicList) {
    musicList.forEach(showSingleMusic)
}

function showSingleMusic(music) {
    const copy = template_music.cloneNode(true);

    copy.querySelector(".title").textContent = music.title.rendered;
    copy.querySelector(".body").innerHTML = music.content.rendered;
    //copy.querySelector("img").src = music._embedded["wp:featuredmedia"]
    //[0].media_details.sizes.medium.source_url;

    main.appendChild(copy)
}

getMusic();
