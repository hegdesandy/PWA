const container = document.querySelector(".container")
const teddy = [
  { name: "RealMe 2", image: "images/realme.jpeg" },
  { name: "LG W30 Pro", image: "images/lgw30.jpeg" },
  { name: "Xiaomi Mi A3", image: "images/mia3.jpeg" },

]
const showTeddy = () => {
    let output = ""
    teddy.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Buy</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showTeddy)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
