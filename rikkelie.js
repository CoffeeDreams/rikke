//https://www.majabay.dk/kea/wordpress_rikke/wp-admin/index.php

//https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/

//https://majabay.dk/kea/rikkelie/

const template_concert = document.querySelector("#concert-template")

function getData(){
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/concerts")
    .then(response => response.json())
    .then(showPosts)
}

function showPosts(posts){
    console.log(posts)
}

const photo = {}
