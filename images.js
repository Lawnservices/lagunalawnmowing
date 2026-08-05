fetch("https://www.creantunegocio.com/api/images")
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("gallery");

    data.forEach(img => {
      const image = document.createElement("img");
      image.src = "https://www.creantunegocio.com/static/uploads/" + img.filename;
      gallery.appendChild(image);
    });
  })
  .catch(err => console.error(err));
 

 
let visitado = document.getElementById('guarda');
let visitas = localStorage.getItem('visitas');

if (!visitas) {
  localStorage.setItem('visitas', '1');
  visitado.textContent = "THE BEST PRICES IN THE AREA 👋";
} else {
  visitado.textContent = "Thanks for coming back 🌱";
  visitado.style.color = 'blue';
}

 