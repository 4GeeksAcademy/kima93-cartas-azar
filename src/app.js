import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCartaAleatoria() {
  const palos = [
    { nombre: "Corazones", icono: "♥", color: "red" },
    { nombre: "Picas", icono: "♠", color: "black" },
    { nombre: "Tréboles", icono: "♣", color: "black" },
    { nombre: "Diamantes", icono: "♦", color: "red" },
  ];
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return {
    valor: valorAleatorio,
    icono: paloAleatorio.icono,
    color: paloAleatorio.color,
  };
}

function mostrarCarta() {
  const cartaGenerada = generarCartaAleatoria();
  const topSuitIcon = document.getElementById("top-suit").querySelector("span");
  const cardValue = document.getElementById("card-value").querySelector("h1");
  const bottomSuitIcon = document.getElementById("bottom-suit").querySelector("span");

  topSuitIcon.textContent = cartaGenerada.icono;
  cardValue.textContent = cartaGenerada.valor;
  bottomSuitIcon.textContent = cartaGenerada.icono;

  topSuitIcon.style.color = cartaGenerada.color;
  cardValue.style.color = cartaGenerada.color;
  bottomSuitIcon.style.color = cartaGenerada.color;
}

// Llama a mostrarCarta() cada vez que se actualiza el sitio web
mostrarCarta();