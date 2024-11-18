let cuentas = [
{
    Usuario : "Kevin Buitrago",
    cedula : 1010101010,
    contraseña : 401412,
    confirmacion : 0
},
{
    Usuario : "Juan Agurre",
    cedula : 1212121212,
    contraseña : 401413,
    confirmacion : 0
},
{
    Usuario : "Steven Cardona",
    cedula : 1313131313,
    contraseña : 401414,
    confirmacion : 0
}
]
let sesion = parseInt(prompt("Ingrese cedula"))
let sesion1 = parseInt(prompt("Ingrese contraseña"))
let cuentaEncontrada = false;
for (let i = 0; i < cuentas.length; i++) {
    if (sesion === cuentas[i].cedula && sesion1 === cuentas[i].contraseña) {
        cuentaEncontrada = true;
        alert(`Inicio de sesión exitoso ${cuentas[i].Usuario}`);
        break;
    }
}

if (!cuentaEncontrada) {
    alert("Error al ingresar los datos para el inicio de sesión");
}

function registrarUsuario() {
    let nuevoUsuario = prompt("Ingrese su nombre de usuario:");
    let nuevaCedula = parseInt(prompt("Ingrese su cédula:"));
    let nuevaContraseña = parseInt(prompt("Ingrese su contraseña:"));

    
    if (!nuevoUsuario || isNaN(nuevaCedula) || isNaN(nuevaContraseña)) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let cedulaExistente = cuentas.some(cuenta => cuenta.cedula === nuevaCedula);
    if (cedulaExistente) {
        alert("La cédula ya está registrada. Intente con otra.");
        return;
    }
    
    cuentas.push({
        usuario: nuevoUsuario,
        cedula: nuevaCedula,
        contraseña: nuevaContraseña,
        confirmacion: 0
    });

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
}
