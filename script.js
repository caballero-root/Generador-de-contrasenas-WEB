//funcion para generar contraseñas
function generarContrasenas() {
    const largoDeContrasenia = document.getElementById('largoDeContrasenia').value;
    const resultadoInput = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultadoTexto');

    //caracteres para la contraseña


    //verificar que el usuario solo introduzca valores numericos
    if (!largoDeContrasenia || isNaN(largoDeContrasenia) || largoDeContrasenia < 16 || largoDeContrasenia > 32) {
        alert('La contraseña debe tener entre 16 y 32 caracteres');
        return;
    }

    // Asegurar al menos un carácter de cada tipo
    let contrasenia = '';
    contrasenia += letrasMin.charAt(Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] % letrasMin.length));
    contrasenia += letrasMay.charAt(Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] % letrasMay.length));
    contrasenia += numeros.charAt(Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] % numeros.length));
    contrasenia += simbolos.charAt(Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] % simbolos.length));

    // Completar el resto aleatoriamente
    const array = new Uint32Array(largo - 4);
    crypto.getRandomValues(array);
    for (let i = 0; i < array.length; i++) {
        contrasenia += todos.charAt(array[i] % todos.length);
    }

    // Mezclar (Fisher-Yates shuffle)
    contrasenia = contrasenia.split('');
    for (let i = contrasenia.length - 1; i > 0; i--) {
        const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
        [contrasenia[i], contrasenia[j]] = [contrasenia[j], contrasenia[i]];
    }
    contrasenia = contrasenia.join('');

    resultadoTexto.style.display = 'block';
    resultadoInput.value = contrasenia;
}

//funcion para limpiar el place holder
function limpiar() {
    document.getElementById('largoDeContrasenia').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('resultadoTexto').style.display = 'none';
}

//funcion para copiar la contraseña
function copiar() {
    const resultadoInput = document.getElementById('resultado');
    resultadoInput.select();
    resultadoInput.setSelectionRange(0, 99999); // Para celulares

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'Contraseña copiada' : 'Falló la copia';
        alert(msg);
    } catch (err) {
        alert('Falló la copia');
    }
}

//function para verificar la robustez de la contraseña
function verificarContrasena() {
    const resultadoInput = document.getElementById('resultado');
    const contrasenia = resultadoInput.value.trim();

    if (contrasenia) {
        window.open(`https://password.kaspersky.com/es/`, '_blank');
    } else {
        alert('Genera una contraseña primero para verificar su fuerza.');
    }
}

