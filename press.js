function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}





const template_press = document.querySelector("#pressTemplate").content;

const main = document.querySelector("main");

function getPress() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/press?_embed")
        .then(res => res.json())
        .then(showPress)
}

function showPress(pressList) {
    pressList.forEach(showSinglePress)
}

function showSinglePress(press) {
    const copy = template_press.cloneNode(true);

    copy.querySelector(".title").textContent = press.title.rendered;

    copy.querySelector(".body").innerHTML = press.content.rendered;

    //copy.querySelector("img").src = concert._embedded["wp:featuredmedia"]
    //[0].media_details.sizes.medium.source_url;

    main.appendChild(copy)
}

getPress();
