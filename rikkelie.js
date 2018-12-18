//https://www.majabay.dk/kea/wordpress_rikke/wp-admin/index.php

//https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/

//https://majabay.dk/kea/rikkelie/

const template_concert = document.querySelector("#concertTemplate").content;

const main = document.querySelector("main");

function getConcerts() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/concerts?_embed")
        .then(res => res.json())
        .then(showConcerts)
}

function showConcerts(concertList) {
    concertList.forEach(showSingleConcert)
}

function showSingleConcert(concert) {
    const copy = template_concert.cloneNode(true);

    copy.querySelector(".title").textContent = concert.title.rendered;
    copy.querySelector(".venue").textContent = concert.acf.venue;
    copy.querySelector(".body").innerHTML = concert.content.rendered;
    copy.querySelector(".price").textContent = concert.acf.price + " Kr.";
    copy.querySelector(".date").textContent = "Dato: " + concert.acf.date;
    copy.querySelector(".time").textContent = "Kl. " + concert.acf.time;
    copy.querySelector("img").src = concert._embedded["wp:featuredmedia"]
    [0].media_details.sizes.medium.source_url;

    main.appendChild(copy)
}

getConcerts();

