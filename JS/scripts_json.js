const h2 = document.querySelector(".card__list__descripcion__h2")
const p = document.querySelector(".card__list__descripcion__p")
const img = document.querySelector(".card__list__img")
let jsonData = []
let currentFilter = "all"

function imprimirCards(data)
{
    const card__main = document.querySelector(".card__main")
    card__main.innerHTML = ""
    data.forEach((dato, i) =>
    {
        // Creación del primer div con la información de la cards
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

        // Creación del segundo div con los botones de las cards
        const button__check = document.createElement("div")
        button__check.classList.add("button__check")
        const button__check__remove = document.createElement("button")
        button__check__remove.classList.add("button__check__remove")
        button__check__remove.textContent = "Remove"
        button__check__remove.addEventListener("click", () =>
        {
            extensions__list.remove()
        })
        
        const form__check = document.createElement("div")
        form__check.classList.add("form-check", "form-switch")
        const form__check__input = document.createElement("input")
        form__check__input.classList.add("form-check-input")
        form__check__input.type = "checkbox"
        form__check__input.role = "switch"
        form__check__input.id = `switchCheckChecked${i+1}`
        form__check__input.checked = dato.isActive
        form__check__input.addEventListener("change", () =>
        {
            data[i].isActive = form__check__input.checked
            // data[i].isActive = form__check__input.checked
            const filtered__data = currentFilter === "all"
            ? data
            : data.filter(item =>
            // ? jsonData
            // : jsonData.filter(item =>
            {
            if (currentFilter === "active") return item.isActive === true;
            if (currentFilter === "inactive") return item.isActive === false;
            });
            imprimirCards(filtered__data)
        })
        
        const form__check__label = document.createElement("label")
        form__check__label.classList.add("form-check-label")
        form__check__label.setAttribute("for", form__check__input.id)

        button__check.appendChild(button__check__remove)
        form__check.appendChild(form__check__input)
        form__check.appendChild(form__check__label)
        button__check.appendChild(form__check)
        extensions__list.appendChild(button__check)
    });
}

// Filtrado de las cards por condición de estado
const nav__links = document.querySelectorAll(".nav-link")
nav__links.forEach(button =>
{
    button.addEventListener("click", (e)=>
    {
        nav__links.forEach(btn => btn.classList.remove("active"))
        e.currentTarget.classList.add("active")
        const filter = e.currentTarget.dataset.filter
        currentFilter = filter
        const filtered__data = currentFilter === "all" ? jsonData : jsonData.filter(item =>
        {
            if (currentFilter === "active") return item.isActive === true;
            if (currentFilter === "inactive") return item.isActive === false;
        })
        imprimirCards(filtered__data)
    })
})

// Mostrar las cards al inicio de la página
fetch("data.json")
    .then(response => response.json())
    .then(data =>
    {
        jsonData = data
        imprimirCards(jsonData)
    })