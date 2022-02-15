// 3WpPCmsMiCip2kElqstSmR-fsccqRSrk7I9biUSX5R0
// vpumRqQM11x9Ksij9vSDdijBDtI-MxvB7zK59SAcDWs
let url = 'https://api.unsplash.com/search/photos?query=girl&per_page=30&orientation=landscape&client_id=3WpPCmsMiCip2kElqstSmR-fsccqRSrk7I9biUSX5R0';

const main = document.querySelector('.main');
const gallery = document.querySelector('.container_main');
const searchWord = document.querySelector('.input_search');
const button = document.querySelector('.search_img');
const view = document.querySelector('.view');
const closeImg = document.querySelector('.close');

//получаю данные с сервера
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
}

//поиск и обновление
function inputClick(){
  // console.log(`${searchWord.value}`);
  url = `https://api.unsplash.com/search/photos?query=${searchWord.value}&per_page=15&orientation=landscape&client_id=3WpPCmsMiCip2kElqstSmR-fsccqRSrk7I9biUSX5R0`;
  // console.log(url);
  // getData(url);
  gallery.innerHTML = '';
  getData(url);
}

// заполнение фотографиями
function showData(data) {
  data.results.map((el) => {
    const picture = document.createElement('div');
    picture.classList.add('picture');
    picture.style.backgroundImage = `url('${el.urls.regular}')`;
    gallery.append(picture);

    picture.addEventListener('click', () => {
          view.style.backgroundImage = `url('${el.urls.regular}')`;
          view.classList.add('view_gal');
          closeImg.addEventListener('click', () => {
            view.classList.remove('view_gal');
          });
      });
  });
}

function enterClick() {
  searchWord.addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
      inputClick();
    }
  });
}
enterClick();

//события
getData();
button.addEventListener('click', inputClick);

const audio = document.querySelector('.audio');
const api = document.querySelector('.api_color');

// музыка на старте
function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function startSound() {
  if (audio.paused) {
    audio.play();
  }
  else {
    audio.pause();
  }
}

playAudio();

api.addEventListener('click', startSound);