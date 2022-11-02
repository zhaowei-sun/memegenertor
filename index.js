console.log(key);

const translateEndPoint = 'api.giphy.com/v1/gifs/translate';
const randomEndPoint = 'api.giphy.com/v1/gifs/random';
let translateQuery;

function getTranslateImage(string) {
    fetch(`https://${translateEndPoint}?api_key=${key}&s=${string}`, {
    method: 'GET',
    // mode: 'no-cors'
    // header: {
    //     'Access-Control-Allow-Origin': '*'
    // }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.data.images.downsized.url);
        const img = document.querySelector('img')
        img.setAttribute('crossorigin', 'anonymous');
        img.src = document.getElementById("img").src;
        img.src = data.data.images.downsized.url;
    })
}


// function loadImgAsBase64(url, callback) {
//     let canvas = document.createElement('CANVAS');
//     let img = document.createElement('img');
//     //img.setAttribute('crossorigin', 'anonymous');
//     img.src = url;
  
//     img.onload = () => {
//       canvas.height = img.height;
//       canvas.width = img.width;
//       let context = canvas.getContext('2d');
//       context.drawImage(img, 0, 0);
//       let dataURL = canvas.toDataURL('image/png');
//       canvas = null;
//       callback(dataURL);
//     };
//   }

function getRandomImage() {
    //https://api.giphy.com/v1/gifs/random?api_key=xoLLQ3MgTJPm4AJOWFgStfGUs5B1Zfd4
    fetch(`https://${randomEndPoint}?api_key=${key}&tag=meme`, {
    method: 'GET',
    // mode: 'no-cors'
    // header: {
    //     'Access-Control-Allow-Origin': '*'
    // }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.data.images.downsized.url);
        const img = document.querySelector('img')
        img.setAttribute('crossorigin', 'anonymous');
        img.src = document.getElementById("img").src;
        img.src = data.data.images.downsized.url;
    })
}

const myInput = document.getElementById('myInput');
const translateButton = document.getElementById('translate-btn');
const randomButton = document.getElementById('random-btn');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');


myInput.addEventListener('keydown', (e) => {
    translateQuery = e.target.value;
})

translateButton.addEventListener('click', () => {
    getTranslateImage(translateQuery);
});

randomButton.addEventListener('click', getRandomImage);

topText.addEventListener('keydown', () => {

});

bottomText.addEventListener('keydown', () => {

})
