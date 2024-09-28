// запрос к сервверу unsplash

let url =
  "https://api.unsplash.com/photos/?query=mountain&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw";
  // "https://api.unsplash.com/photos/random?query=spring&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw";
  // "https://api.unsplash.com/photos/?query=new&per_page=12&orientation=landscape&client_id=33p-DkyYtVILyrQwP2JZUVxMlu8DUMtaRLZ-dtqtWYw";

// собираем список изобрадений на экране

let photoList = document.querySelectorAll(".net-image");

// забираем данные и вставляем

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    photoList[i].src = `${data[i].urls.regular}`;
  }
}

getData();

