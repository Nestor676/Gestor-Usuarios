document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const lista = document.getElementById("lista");
    let puede = true;

    if(nombre === "" || email === "" || !email.includes(".")){
        alert("Ingresa valores correctos");
        puede = false;
    }else {
        alert("¡¡Nuevo usuario!!");
    }

    if(puede == true){
        lista.innerHTML += `<li>${nombre} - ${email}</li>`;

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
    }
});

function usuariosRNG(){
    const nombres = ["Daniel", "Marcos", "Jose", "Nestor", "Laura", "Sofia", "Pedro", "Ana"];
    const emails = ["daniel@gmail.com", "marcos@gmail.com", "jose@gmail.com", "nestor@gmail.com", "laura@gmail.com", "sofia@gmail.com", "pedro@gmail.com", "ana@gmail.com"];
    const lista = document.getElementById("lista");

    for(let i = 1; i <= 3; i++){
        let num = Math.floor(Math.random() * 8);
        
        console.log(num);

        lista.innerHTML += `<li>${nombres[num]} - ${emails[num]}</li>`;
    }
}

