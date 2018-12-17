//https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/

//https://majabay.dk/kea/rikkelie/



function getData(){
    fetch("https://majabay.dk/kea/wordpress_rikke/wp-json/wp/v2/posts")
    .then(response => response.json())
    .then(showPosts)
}

function showPosts(posts){
    console.log(posts)
}

const photo = {}
