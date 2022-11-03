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

const myInput = document.getElementById('my-input');
const translateButton = document.getElementById('translate-btn');
const randomButton = document.getElementById('random-btn');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const memeTopText = document.getElementById('top-text');
const memeBottomText = document.getElementById('bottom-text');
const eraseButton = document.getElementById('erase');
const imgWrapper = document.getElementById('img-wrapper');
const resetButton = document.getElementById('reset-btn');

myInput.addEventListener('keydown', (e) => {
    translateQuery = e.target.value;
})

translateButton.addEventListener('click', () => {
    getTranslateImage(translateQuery);
});

randomButton.addEventListener('click', getRandomImage);

topText.addEventListener('keyup', (e) => {
    if (document.getElementById('top-t')) {
        imgWrapper.removeChild(document.getElementById('top-t'));
    }
    const topT = document.createElement('p');
    topT.setAttribute('id', 'top-t');
    topT.innerText = e.target.value;
    imgWrapper.append(topT);
});

bottomText.addEventListener('keyup', (e) => {
    if (document.getElementById('bottom-t')) {
        imgWrapper.removeChild(document.getElementById('bottom-t'));
    }
    const bottomT = document.createElement('p');
    bottomT.setAttribute('id', 'bottom-t');
    bottomT.innerText = e.target.value;
    imgWrapper.append(bottomT);
})

eraseButton.addEventListener('click', () => {
    myInput.value = '';
    myInput.focus();
})

resetButton.addEventListener('click', () => {
    console.log('hi');
    document.getElementById('top-t').innerText = '';
    document.getElementById('bottom-t').innerText = '';
    topText.value = '';
    bottomText.value = '';
    topText.focus();
    
})

