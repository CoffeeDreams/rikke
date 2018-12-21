function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


//https://www.majabay.dk/kea/wordpress_rikke/wp-admin/index.php

//https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/

//https://majabay.dk/kea/rikkelie/



const template_about = document.querySelector("#aboutTemplate").content;

const main = document.querySelector("main");

function getAbout() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/about?_embed")
        .then(res => res.json())
        .then(showAbout)
}

function showAbout(aboutList) {
    aboutList.forEach(showSingleAbout)
}

function showSingleAbout(about) {
    const copy = template_about.cloneNode(true);

    copy.querySelector(".title").textContent = about.title.rendered;

    copy.querySelector(".body").innerHTML = about.content.rendered;

    //copy.querySelector("img").src = concert._embedded["wp:featuredmedia"]
    //[0].media_details.sizes.medium.source_url;

    main.appendChild(copy)
}

getAbout();
