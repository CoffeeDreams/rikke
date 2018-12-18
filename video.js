const template_video = document.querySelector("#videoTemplate").content;


const main = document.querySelector("main");


function getVideos() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/videos?_embed")
        .then(res => res.json())
        .then(showVideos)
}

function showVideos(videoList) {
    videoList.forEach(showSingleVideo)
}

function showSingleVideo(video) {
    const copy = template_video.cloneNode(true);

    copy.querySelector(".title").textContent = video.title.rendered;
    copy.querySelector(".photographer").textContent = video.acf.photographer;
    copy.querySelector(".body").innerHTML = video.content.rendered;


    main.appendChild(copy)
}


getVideos();
