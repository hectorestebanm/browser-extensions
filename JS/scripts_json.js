const h2 = document.querySelector(".card__list__descripcion__h2")
const p = document.querySelector(".card__list__descripcion__p")
const img = document.querySelector(".card__list__img")
fetch("data.json")
    .then(response => response.json())
        .then(datos =>
        {
            const card__main = document.querySelector(".card__main")
            datos.forEach(dato =>
            {
                const extensions__list = document.createElement("div")
                extensions__list.classList.add("extensions__list")
                const card__list = document.createElement("div")
                card__list.classList.add("card__list")
                const card__list__img = document.createElement("img")
                card__list__img.classList.add("card__list__img")
                card__list__img.src = dato.logo
                const card__list__descripcion = document.createElement("div")
                card__list__descripcion.classList.add("card__list__descripcion")
                const card__list__descripcion__h2 = document.createElement("h2")
                card__list__descripcion__h2.classList.add("card__list__descripcion__h2")
                card__list__descripcion__h2.textContent = dato.name
                const card__list__descripcion__p = document.createElement("p")
                card__list__descripcion__p.classList.add("card__list__descripcion__p")
                card__list__descripcion__p.textContent = dato.description
                card__list__descripcion.appendChild(card__list__descripcion__h2)
                card__list__descripcion.appendChild(card__list__descripcion__p)
                card__list.appendChild(card__list__img)
                card__list.appendChild(card__list__descripcion)
                extensions__list.appendChild(card__list)
                card__main.appendChild(extensions__list)
            });
            // img.src = `${datos[0].logo}`
            // h2.innerHTML = `${datos[0].name}`
            // p.innerHTML = `${datos[0].description}`
        })