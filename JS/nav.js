const jsonData =
[
    {
        id: 1,
        name: "Tarjeta A",
        status: "active",
        selected: false
    },
    {
        id: 2,
        name: "Tarjeta B",
        status: "inactive",
        selected: true
    },
    {
        id: 3,
        name: "Tarjeta C",
        status: "active",
        selected: false
    },
    {
        id: 4,
        name: "Tarjeta D",
        status: "inactive",
        selected: false
    }
];

const nav__links = document.querySelectorAll(".nav-link")
nav__links.forEach(button =>
{
    button.addEventListener("click", (e) =>
    {
        nav__links.forEach(btn => btn.classList.remove("active"))
        e.currentTarget.classList.add("active")
        const filter = e.currentTarget.dataset.filter
        const filtered__data = filter === "all" ? jsonData : jsonData.filter(item => item.status === filter)
        console.log(filtered__data)
    })
})
