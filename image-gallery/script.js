// запрос к сервверу unsplash

let url =
  "https://api.unsplash.com/search/photos?query=icecream&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw";

let photoList = document.querySelectorAll(".net-image");

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  const results = data.results;
  showData(results);
}

getData();

function showData(results) {
  for (let i = 0; i < results.length; i++) {
    photoList[i].src = `${results[i].urls.regular}`;
    photoList[i].alt = `${results[i].alt_description}`;
  }
}

// грустная история о том, как я пыталась, но не смогла(((

// let userQuery = ''

// let input = document.querySelector("input");
// console.log(input.value)

//   input.onchange = function () {
//     url = `https://api.unsplash.com/search/photos?${input.value}&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw`;
// };

// let form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   let submitter = event.submitter;
//   let handler = submitter.id;

// }
// )

// const data = await getData()
// showData(data)

// await getData().then(showData);
