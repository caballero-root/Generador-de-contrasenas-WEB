//funcion para generar contraseñas
function generarContrasenas() {
    const largoDeContrasenia = document.getElementById('largoDeContrasenia').value;
    const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_.,?';
    const resultadoInput = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultadoTexto');

    //verificar que el usuario solo introduzca valores numericos
    if (!largoDeContrasenia || isNaN(largoDeContrasenia) || largoDeContrasenia < 8 || largoDeContrasenia > 20) {
        alert('La contraseña debe tener minimo 8 caracteres');
        return;
    }

    let contrasenia = '';
    for (let i = 0; i < largoDeContrasenia; i++) {
        contrasenia += char.charAt(Math.floor(Math.random() * char.length));
    }
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
function copiar(){
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
function verificarContrasena(){
    const resultadoInput = document.getElementById('resultado');
    const contrasenia = resultadoInput.value.trim();

    if (contrasenia) {
        window.open(`https://password.kaspersky.com/es/`, '_blank');
    } else {
        alert('Genera una contraseña primero para verificar su fuerza.');
    }
}

