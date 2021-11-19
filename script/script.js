

document.addEventListener('DOMContentLoaded',function(){
    obtenerLocalStorage();
})
function capturarDatos(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let ciudad = document.getElementById("ciudad").value;
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let peliculapreferida = document.getElementById("peliculapreferida").value;


    let objeto ={
        nom: nombre,
        cor: correo,
        tel: telefono,
        ciu: ciudad,
        us: usuario,
        con: contrasena,
        peli: peliculapreferida,
    }
    localStorage.setItem('Persona',JSON.stringify(objeto)); 
}

function obtenerLocalStorage(){

    let objeto = localStorage.getItem('Persona');
    console.log(objeto);
}

