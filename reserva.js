
const hoy = new Date();
const destino = document.getElementById("destinos");
    const fecha = document.getElementById("fecha");
    const presupuesto = document.getElementById("prespuesto");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");


    const exchTxt = document.getElementById("exch");
    var tasas;
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses en JS son 0-indexados, por lo que sumamos 1
    const dd = String(hoy.getDate()).padStart(2, '0');
    const fechaHoy = `${yyyy}-${mm}-${dd}`;
        fecha.setAttribute("min", fechaHoy);
    
fetch('https://open.er-api.com/v6/latest/USD')
    .then(response => response.json())
    .then(data => {
        tasas = data.rates;
        console.log('Tasas de cambio obtenidas:', tasas);
    })
    .catch(error => {
        console.error('Error al obtener las tasas de cambio:', error);
    });

    presupuesto.addEventListener('input',  ()=> {
        const moneda = destino.value;
        if (moneda) {
            exchTxt.textContent = tasas[moneda]*presupuesto.value + " "+ moneda;
        }
    });

    destino.addEventListener("change", ()=>{
        const moneda = destino.value;
        const bdgt = presupuesto.value;
        if(bdgt){
            exchTxt.textContent = tasas[moneda]*bdgt + " "+ moneda;

        }
    })
document.getElementById("reservaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let valid = true;


    

    if (nombre.value.length < 2 || !nombre.value) {
        nombre.classList.add("error")
     
        valid = false;
    }else{
        nombre.classList.remove("error");
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(correo.value)) {
        correo.classList.add("error");
        valid = false;
    }else{
        correo.classList.remove("error");
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(telefono.value)) {
        telefono.classList.add("error");
        valid = false;
    }else{
        telefono.classList.remove("error");
    }
    if (!destino.value) {
        destino.classList.add("error");
        valid = false;
    }else{
        destino.classList.remove("error");
    }

    if(!fecha.value){
        fecha.classList.add("error");
    }else{
        fecha.classList.remove("error");
    }

    if (!presupuesto.value) {
        presupuesto.classList.add("error");
    }else{
        presupuesto.classList.remove("error");
    }

    

    // Si todo es válido, se puede enviar el formulario
    if (valid) {
        Swal.fire('Gracias!', 'Tu información ha sido enviada', 'success');
    }
    else{
        Swal.fire('OOPS!', 'Parece que hubo un error', 'error');

    }
});
