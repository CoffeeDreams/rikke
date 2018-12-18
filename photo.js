const template_photo = document.querySelector("#photoTemplate").content;

const main = document.querySelector("main");


function getPhotos() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/photos?_embed")
        .then(res => res.json())
        .then(showPhotos)
}

function showPhotos(photoList) {
    photoList.forEach(showSinglePhoto)
}

function showSinglePhoto(photo) {
    const copy = template_photo.cloneNode(true);

    copy.querySelector(".photographer").textContent = photo.acf.photographer;
    copy.querySelector(".description").innerHTML = photo.acf.description;

    copy.querySelector("img").src = photo._embedded["wp:featuredmedia"]
    [0].media_details.sizes.medium.source_url;

    main.appendChild(copy)
}


getPhotos();
