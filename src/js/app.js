window.addEventListener("load", function () {
    let web = document.querySelector("#web")
    let linkedin = document.querySelector("#linkedin")
    let github = document.querySelector("#github")
    const ventana = (url, nombre) => {window.open(url, nombre, "width=1200, height=720")}
    web.addEventListener("click", function () {swal("Oops!", "Sitio En Construcción", "error");});
    linkedin.addEventListener("click", function () {ventana("https://www.linkedin.com/in/alan-tamez", "Linkedin");});
    github.addEventListener("click", function () {ventana("https://github.com/Alane-Tc", "Github");
    });   
});