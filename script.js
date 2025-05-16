
// Preencher os números de 1 a 100
const container = document.getElementById("numeros");
for (let i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    container.appendChild(div);
}

// Copiar chave PIX
function copiarPix() {
    navigator.clipboard.writeText("leticiaketlin.o@icloud.com");
    alert("Chave PIX copiada!");
}

// Contador regressivo
const sorteioData = new Date("2025-05-20T00:00:00").getTime();
const contador = document.getElementById("contador");

function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = sorteioData - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contador.innerHTML = `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
