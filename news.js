const template_news = document.querySelector("#newsTemplate").content;

const main = document.querySelector("main");

function getNews() {
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/news?_embed")
        .then(res => res.json())
        .then(showNews)
}

function showNews(newsList) {
    newsList.forEach(showSingleNews)
}

function showSingleNews(news) {
    const copy = template_news.cloneNode(true);

    copy.querySelector(".title").textContent = news.title.rendered;

    copy.querySelector(".body").innerHTML = news.content.rendered;

    //copy.querySelector("img").src = concert._embedded["wp:featuredmedia"]
    //[0].media_details.sizes.medium.source_url;

    main.appendChild(copy)
}

getNews();
