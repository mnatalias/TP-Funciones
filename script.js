/*variables*/
var msjErrVacio = "Este campo no debe estar vacio";
var msjErrorTel = "El número debe tener entre 5 y 9 dígitos"
var msjErrorEdad = "Debe ser mayor de edad para registrarte"
var msjMailIncorrecto = "Inserte una dirección de email válida (ejemplo@email.com)"


/*funcion general que valida el formulario una vez que se presione "enviar"*/
function validar(){
	var valNom = valNombre();   
	var valApe = valApellido();
	var valTel = valNumero();
	var valMayor = valEdad();
	var email = valEmail();
	var ident = identificador();
};


// funcion para validar nombre
function valNombre(){
	var nombre = document.getElementById('nombre').value;
	if(nombre != ''){
		document.getElementById('nombreError').innerHTML = '';
		console.log(nombre);
		return nombre;
	}else{
		document.getElementById('nombreError').innerHTML = msjErrVacio;
		return false;   
	}
};


// Función para validar apellido
function valApellido() {

	var apellido = document.getElementById('apellido').value;

	if (apellido != '') {
		document.getElementById('apellidoError').innerHTML = '';
		console.log(apellido);
		return apellido;
	} else {
		document.getElementById('apellidoError').innerHTML = msjErrVacio;
		return false;
	}
};


//Función que valida longitud de # teléfono 
function valNumero() {

	var numTel = document.getElementById('telefono').value;

	if (numTel.length > 5 && numTel.length < 9) {
		document.getElementById('telError').innerHTML = '';
		console.log(numTel);
		return numTel;
	} else if (numTel == '') {
		document.getElementById('telError').innerHTML = msjErrVacio;
		return false;
	} else {
		document.getElementById('telError').innerHTML = msjErrorTel;
		return false;
	}
};


//Función que valida edad 
function valEdad() {

	var edad = parseInt(document.getElementById('edad').value);

	if (edad >= 18) {
		document.getElementById('edadError').innerHTML = '';
		console.log(edad);
		return edad;
	} else if (edad == '') {
		document.getElementById('edadError').innerHTML = msjErrVacio;
		return false;
	} else {
		document.getElementById('edadError').innerHTML = msjErrorEdad;
		return false;
	}
};


//Función que valida email 
function valEmail(){

	var email = document.getElementById('email').value;

	if(email != ''){
		document.getElementById('emailError').innerHTML = '';
		console.log(email);
		return email;
	}else{
		document.getElementById('emailError').innerHTML = msjErrVacio;
		return false;
	}
};


//Función que genera la identificación
function identificador(nombre,apellido,esMayor) {

	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var esMayor = parseInt(document.getElementById("edad").value);

	if (esMayor <= 36 && esMayor >= 20) {
		document.getElementById("identificacion").value = nombre + apellido + 'GRUPO1';
	} else if (esMayor <= 55 && esMayor >36) {
		document.getElementById("identificacion").value = nombre + apellido + 'GRUPO2';
	} else if (esMayor > 55){
		document.getElementById("identificacion").value = nombre + apellido + 'GRUPO3';
	} 	else {
		return false; 
	} 

	document.getElementById('nombre').value = '';
	document.getElementById('apellido').value = '';
	document.getElementById('edad').value = '';
	document.getElementById('telefono').value = '';
	document.getElementById('email').value = '';

}; 
