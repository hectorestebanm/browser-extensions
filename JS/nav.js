const nav__links = document.querySelectorAll(".nav-link")
nav__links.forEach(button =>
{
    button.addEventListener("click", function()
    {
        nav__links.forEach(btn => btn.classList.remove("active"))
        this.classList.add("active")
    })
})
