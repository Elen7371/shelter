// запрос к сервверу unsplash

let url =
  "https://api.unsplash.com/search/photos?query=icecream&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw";

let photoList = document.querySelectorAll(".net-image");
let searchInput = document.querySelector("input");

// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();
// const results = data.results;
// showData(results);
//   showData(data);

//   console.log(data);
// }

// getData();

// function showData(results) {
//   for (let i = 0; i < results.length; i++) {
//     photoList[i].src = `${results[i].urls.regular}`;
//     photoList[i].alt = `${results[i].alt_description}`;
//   }
// }

function showData(data) {
  for (let i = 0; i < data.results.length; i++) {
    photoList[i].src = `${data.results[i].urls.regular}`;
    photoList[i].alt = `${data.results[i].alt_description}`;
  }
}

// function getUrls() {
//   if (searchValue.value === "") {
//     return url;
//   } else {
//     return (url = `https://api.unsplash.com/search/photos?query=${searchValue.value}&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw"`);
//   }
// }

// searchInput.addEventListener("input", function (event) {
//   if (event.target.value !== "") {
//     return url = `https://api.unsplash.com/search/photos?query=${searchValue.value}&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw"`;
//   }
// });

function getSearch(event) {
  event.preventDefault();
  if (searchInput.value !== "") {
    return (url = `https://api.unsplash.com/search/photos?query=${searchValue.value}&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw"`);
  } else {
    return url;
  }
}

async function getData(e) {
  const res = await fetch(getSearch(e));
  const data = await res.json();
  // const results = data.results;
  // showData(results);
  showData(data);

  console.log(data);
}

// getData();

// function alarmTest(event) {
//   alert("сщ мною вот что приключилось" + event.type);
// }

// searchInput.addEventListener("input", alarmTest);

// searchInput.addEventListener("submit", getData);
document.addEventListener("DOMContentLoaded", getData);

