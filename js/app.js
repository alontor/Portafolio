(function () {
  function main() {
    addListeners();
  }

  function addListeners() {
    const boton1 = document.getElementById("btnTrabajo1");
    const boton2 = document.getElementById("btnTrabajo2");
    const boton3 = document.getElementById("btnTrabajo3");
    const boton4 = document.getElementById("btnTrabajo4");
    const botonesCerrar = document.querySelectorAll(".cerrar-popup");

    boton1.addEventListener("click", () => {
      mostrarPopup(1);
    });
    boton2.addEventListener("click", () => {
      mostrarPopup(2);
    });
    boton3.addEventListener("click", () => {
      mostrarPopup(3);
    });
    boton4.addEventListener("click", () => {
      mostrarPopup(4);
    });

    botonesCerrar.forEach((boton) => {
      boton.addEventListener("click", cerrarPopups);
    });
  }

  function mostrarPopup(popup) {
    const popups = document.getElementById("popups");
    
    popups.classList.remove("oculto");

    switch (popup) {
        case 1:
            const popup1 = document.getElementById('popup-trabajo1');
            popup1.classList.remove("oculto");            
            break;    
        case 2:
            const popup2 = document.getElementById('popup-trabajo2');
            popup2.classList.remove("oculto");            
            break;
        case 3:
            const popup3 = document.getElementById('popup-trabajo3');
            popup3.classList.remove("oculto");            
            break;
        case 4:
            const popup4 = document.getElementById('popup-trabajo4');
            popup4.classList.remove("oculto");            
            break;
    }
  }

  function cerrarPopups() {
    const popups = document.getElementById("popups");
    const popupsTrabajo = document.querySelectorAll(".popup-trabajo");

    popups.classList.remove("oculto");
    popups.classList.add("oculto");

    popupsTrabajo.forEach((popup) => {
      popup.classList.remove("oculto");
      popup.classList.add("oculto");
    });
  }
  main();
})();
