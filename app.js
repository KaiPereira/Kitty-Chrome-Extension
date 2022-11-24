async function getData() {
    let images = document.getElementsByTagName('img');
    const url = 'https://api.thecatapi.com/v1/images/search';
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < images.length; i++) {;
        images[i].src = data[0].url;
    }
}
getData();
setInterval(getData, 2000);