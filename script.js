var numero = 0;

function mostrarSeccion() {
    var diapositivas = document.querySelectorAll(".diapositiva");

    for (var i = 0; i < diapositivas.length; i++) {
        diapositivas[i].classList.remove("activa");
    }

    diapositivas[numero].classList.add("activa");

    document.getElementById("contador").textContent =
        " " + (numero + 1) + " / " + diapositivas.length + " ";
}

function siguiente() {
    var total = document.querySelectorAll(".diapositiva").length;

    if (numero < total - 1) {
        numero++;
        mostrarSeccion();
    }
}

function anterior() {
    if (numero > 0) {
        numero--;
        mostrarSeccion();
    }
}