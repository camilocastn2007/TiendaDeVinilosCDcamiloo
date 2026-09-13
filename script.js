document.addEventListener("DOMContentLoaded", () => {
  const contenedorHero = document.getElementById("discoDestacadoHero");
  
  if (catalogoDiscos.length > 0) {
    const indiceAzar = Math.floor(Math.random() * catalogoDiscos.length);
    const discoAzar = catalogoDiscos[indiceAzar];
    
    contenedorHero.innerHTML = `
      <article class="disco-card">
        <img src="${discoAzar.imagen}" alt="Portada de ${discoAzar.titulo}">
        <div class="disco-info">
          <h3>${discoAzar.titulo}</h3>
          <p>${discoAzar.artista}</p>
          <p class="disco-precio">$${discoAzar.precio.toLocaleString('es-CO')}</p>
        </div>
      </article>
    `;
  }

  const gridDiscos = document.getElementById("gridDiscos");
  
  const renderizarDiscos = (discos) => {
    gridDiscos.innerHTML = "";
    
    discos.forEach(disco => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "disco-card";
      tarjeta.innerHTML = `
        <img src="${disco.imagen}" alt="Portada de ${disco.titulo}">
        <div class="disco-info">
          <h3>${disco.titulo}</h3>
          <p>${disco.artista}</p>
          <p class="disco-precio">$${disco.precio.toLocaleString('es-CO')}</p>
        </div>
      `;
      gridDiscos.appendChild(tarjeta);
    });
  };

  renderizarDiscos(catalogoDiscos);

  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("mostrar");
    const expandido = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expandido);
  });

  const botonesFiltro = document.querySelectorAll(".filtro-btn");
  
  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (e) => {
      botonesFiltro.forEach(b => b.classList.remove("activo"));
      e.target.classList.add("activo");

      const generoSeleccionado = e.target.getAttribute("data-genero");
      
      if (generoSeleccionado === "todos") {
        renderizarDiscos(catalogoDiscos);
      } else {
        const discosFiltrados = catalogoDiscos.filter(disco => disco.genero === generoSeleccionado);
        renderizarDiscos(discosFiltrados);
      }
    });
  });

  const buscador = document.getElementById("buscadorDiscos");
  const datalist = document.getElementById("lista-discos-datalist");
  
  catalogoDiscos.forEach(disco => {
    const opcion = document.createElement("option");
    opcion.value = `${disco.artista} - ${disco.titulo}`;
    datalist.appendChild(opcion);
  });

  buscador.addEventListener("input", (e) => {
    const textoBuscado = e.target.value.toLowerCase();
    const discosBuscados = catalogoDiscos.filter(disco => 
      disco.artista.toLowerCase().includes(textoBuscado) || 
      disco.titulo.toLowerCase().includes(textoBuscado)
    );
    renderizarDiscos(discosBuscados);
  });

  const form = document.getElementById("formSugerencia");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(span => span.textContent = "");
    document.querySelectorAll(".input-error").forEach(input => input.classList.remove("input-error"));

    let esValido = true;

    const inputNombre = document.getElementById("nombre");
    if (inputNombre.value.trim().length < 3) {
      document.getElementById("errorNombre").textContent = "El nombre debe tener al menos 3 letras.";
      inputNombre.classList.add("input-error");
      esValido = false;
    }

    const inputEmail = document.getElementById("email");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(inputEmail.value.trim())) {
      document.getElementById("errorEmail").textContent = "Ingresa un correo electrónico válido.";
      inputEmail.classList.add("input-error");
      esValido = false;
    }

    const inputDisco = document.getElementById("discoSugerido");
    if (inputDisco.value.trim().length < 5) {
      document.getElementById("errorDiscoSugerido").textContent = "Escribe el nombre del artista y álbum (mín. 5 letras).";
      inputDisco.classList.add("input-error");
      esValido = false;
    }

    if (esValido) {
      document.getElementById("mensajeExito").hidden = false;
      form.reset();
      
      setTimeout(() => { 
        document.getElementById("mensajeExito").hidden = true; 
      }, 4000);
    }
  });
});