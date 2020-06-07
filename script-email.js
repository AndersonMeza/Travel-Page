

function sendEmail() 
{
    var byClass_sugerencia = document.getElementsByClassName("sugerencias-grande")[0].value;
    var byClass_name = document.getElementsByClassName("input-texto")[0].value;
    var byClass_mail = document.getElementsByClassName("input-texto")[1].value;

	Email.send(
        {
            SecureToken : "b98a77ae-6e40-4988-ab81-295f5c38fd7e",
            To : "andersonmeza175@gmail.com",
            From : "andyys06@gmail.com",
            Subject : "Sugerencias Pagina de viajes",
            Body : "Hola, soy " + byClass_name + " mi correo electrónico es "+byClass_mail+", esta es mi sugerencia: " + byClass_sugerencia
    	}).then(
		message => alert("¡Mail sent successfully!")
	);
}