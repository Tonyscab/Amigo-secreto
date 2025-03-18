// Variable global para almacenar los nombres de los amigos
let amigos = [Luis, Alexandra, Kam];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo); // Añadir amigo a la lista
        inputAmigo.value = ''; // Limpiar el campo de entrada

        actualizarListaAmigos();
    } else {
        alert("Por favor ingresa un nombre único.");
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para sortear.");
        return;
    }

    // Crear una copia de la lista de amigos y barajarla
    let amigosBarajados = [...amigos];
    amigosBarajados = amigosBarajados.sort(() => Math.random() - 0.5);

    // Asignar amigos secretos
    let asignaciones = [];
    for (let i = 0; i < amigos.length; i++) {
        // Evitar que alguien se asigne a sí mismo
        const asignacion = {
            amigo: amigos[i],
            amigoSecreto: amigosBarajados[i === amigos.length - 1 ? 0 : i + 1]
        };
        asignaciones.push(asignacion);
    }

    mostrarResultados(asignaciones);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(asignaciones) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar los resultados previos

    asignaciones.forEach(asignacion => {
        const li = document.createElement('li');
        li.textContent = `${asignacion.amigo} tiene como amigo secreto a ${asignacion.amigoSecreto}`;
        resultado.appendChild(li);
    });
}
