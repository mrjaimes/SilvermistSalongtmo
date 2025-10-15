// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente");
});

    document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".scroll-animado");

  const mostrarElemento = () => {
    elementos.forEach(el => {
      const posicion = el.getBoundingClientRect().top;
      const alturaPantalla = window.innerHeight;

      if (posicion < alturaPantalla - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", mostrarElemento);
  mostrarElemento(); // Ejecutar al cargar
});


document.addEventListener("DOMContentLoaded", () => {
  const contacto = document.querySelector("#contacto");

  const fijarContacto = () => {
    const scrollBottom = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollBottom >= pageHeight - 10) {
      contacto.classList.add("fijado");
    } else {
      contacto.classList.remove("fijado");
    }
  };

  window.addEventListener("scroll", fijarContacto);
});

document.addEventListener("DOMContentLoaded", () => {
  const contacto = document.querySelector("#contacto");
  const cerrarBtn = document.querySelector(".cerrar-contacto");

  const fijarContacto = () => {
    const scrollBottom = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollBottom >= pageHeight - 10 && !contacto.classList.contains("cerrado")) {
      contacto.classList.add("fijado");
    } else {
      contacto.classList.remove("fijado");
    }
  };

  cerrarBtn.addEventListener("click", () => {
    contacto.classList.remove("fijado");
    contacto.classList.add("cerrado");
  });

  window.addEventListener("scroll", fijarContacto);
});

const fondo = document.getElementById("fondo-particulas");

for (let i = 0; i < 50; i++) {
  const p = document.createElement("div");
  p.classList.add("particula");
  p.style.left = Math.random() * 100 + "vw";
  p.style.top = Math.random() * 100 + "vh";
  p.style.animationDuration = (5 + Math.random() * 10) + "s";
  fondo.appendChild(p);
}
