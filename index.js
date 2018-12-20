function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



const template_index = document.querySelector("#indexTemplate").content;

const main = document.querySelector("main");

function getIndex() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/posts?_embed")
        .then(res => res.json())
        .then(showIndex)
}

function showIndex(indexList) {
    indexList.forEach(showSingleIndex)
}

function showSingleIndex(post) {
    const copy = template_index.cloneNode(true);

    copy.querySelector(".title").textContent = posts.title.rendered;

    copy.querySelector(".body").innerHTML = posts.content.rendered;

    //copy.querySelector("img").src = concert._embedded["wp:featuredmedia"]
    //[0].media_details.sizes.medium.source_url;

    main.appendChild(copy)
}

getIndex();
