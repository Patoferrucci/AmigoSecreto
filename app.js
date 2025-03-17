// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios vacíos

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista en la página
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
