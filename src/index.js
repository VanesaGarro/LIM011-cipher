document.getElementById("MenuBienvenida").classList.remove('ocultarp');


let btniniciar = document.getElementById('iniciar');
let btncifrar = document.getElementById('cifrado');
let btnenviar = document.getElementById('enviar');
let btndecifrar = document.getElementById('decifrado');
let btnlimpiar = document.getElementById('limpiar');
let btnlimpiard = document.getElementById('limpiard');
let btnguardar = document.getElementById('guardar');
let ndesplazamiento = document.getElementById('num');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let edad = document.getElementById('edad');
let dni = document.getElementById('dni');
let provincia = document.getElementById('provincia');
let direccion = document.getElementById('direccion');
let celular = document.getElementById('celular');
let monto = document.getElementById('monto');

btniniciar.addEventListener('click', iniciar);

function iniciar() { //
    document.getElementById("SolicitarPrestamo").classList.remove('ocultarp');
    document.getElementById("VerSolicitud").classList.add('ocultarp');
    document.getElementById("MenuBienvenida").classList.add('ocultarp');

}

function verSolicitud() {
    let nombrev = nombre.value;
    let apellidov = apellido.value;
    let edadv = edad.value;
    let dniv = dni.value;
    let provinciav = provincia.value;
    let direccionv = direccion.value;
    let celularv = celular.value;
    let montov = monto.value;
    let numv = parseInt(ndesplazamiento.value);
    if (numv == "" || nombrev == "" || apellidov == "" || edadv == "" || dniv == "" || provinciav == "" || direccionv == "" || celularv == "" || montov == "") {
        alert("Ingrese Todos Los Campos")
    } else {
        document.getElementById("VerSolicitud").classList.remove('ocultarp');
        document.getElementById("MenuBienvenida").classList.add('ocultarp');
        document.getElementById("SolicitarPrestamo").classList.add('ocultarp');
    }
}


btncifrar.addEventListener('click', validar);
btnenviar.addEventListener('click', verSolicitud);

function cifrado() {

    let nombreacifrar = nombre.value;
    let apellidoacifrar = apellido.value;
    let edadacifrar = edad.value;
    let dniacifrar = dni.value;
    let provinciaacifrar = provincia.value;
    let direccionacifrar = direccion.value;
    let celularacifrar = celular.value;
    let montoacifrar = monto.value;
    let datos = ("Nombres:" + " " + nombreacifrar + " \n" + "Apellidos:" + " " + apellidoacifrar + " \n" + "Edad:" + edadacifrar + "\n " + "Dni: " + " " + dniacifrar + "\n " + "Provincia: " + " " + provinciaacifrar + "\n " + "Direccion: " + direccionacifrar + "\n " + "Celular:" + celularacifrar + "\n " + "Monto:" + " " + montoacifrar);
    let num = parseInt(ndesplazamiento.value);
    let datoscifrados = window.cipher.encode(num, datos);
    document.getElementById('datoscifrados').value = datoscifrados;
    document.getElementById('datoscifrados2').value = datoscifrados;
}

let datosdecifradosv2 = document.getElementById('datoscifrados2');
btndecifrar.addEventListener('click', decifrado);

function decifrado() {
    let datosd = datosdecifradosv2.value;
    let num = parseInt(ndesplazamiento.value);
    let datosdecifrados = window.cipher.decode(num, datosd);
    document.getElementById('datosdecifrados').value = datosdecifrados;
}



function validar() {
    let nombrev = nombre.value;
    let apellidov = apellido.value;
    let edadv = edad.value;
    let dniv = dni.value;
    let provinciav = provincia.value;
    let direccionv = direccion.value;
    let celularv = celular.value;
    let montov = monto.value;
    let numv = parseInt(ndesplazamiento.value);

    if (numv == "" || nombrev == "" || apellidov == "" || dniv == "" || provinciav == "" || direccionv == "" || celularv == "" || montov == "") {
        alert("Ingrese Todos Los Campos")

    } else if (numv == 0) {
        alert("Ingrese Número de desplazamiento")

    } else if (celularv.length > 10) {
        alert("El celular debe de tener sólo 9 caracteres")

    } else if (dniv.length > 9) {
        alert("El dni debe de tener sólo 8 caracteres")

    } else if (montov.length > 6) {
        alert("Excede el monto permitido")

    } else if (edadv > 80) {
        alert("Excede la edad permitida")

    } else if (edadv < 19) {
        alert("No eres mayor de edad")

    } else if (isNaN(celularv)) {
        alert("El celular ingresado no es un número")

    } else if (isNaN(dniv)) {
        alert("El Dni ingresado no es un número")

    } else if (isNaN(montov)) {
        alert("El monto ingresado no es un número")

    } else if (isNaN(edadv)) {
        alert("La edad ingresada no es un número")

    } else {
        cifrado();
    }
}
btnlimpiar.addEventListener('click', limpiar);

function limpiar() {

    document.getElementById("num").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("provincia").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("datoscifrados").value = "";

    alert("Los datos se han limpiado!")
}
btnlimpiard.addEventListener('click', limpiardec);

function limpiardec() {

    document.getElementById("datoscifrados2").value = "";
    document.getElementById("datosdecifrados").value = "";

    alert("Los datos se han limpiado!")
}

btnguardar.addEventListener('click', guardar);

function guardar() {
    alert("Los Datos se han guardado exitosamente")

}