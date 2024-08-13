function calcularEdad() {
    let dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Por favor, ingresa tu fecha de nacimiento.");
        return;
    }

    let fechaNacimiento = new Date(dob);
    let hoy = new Date();
    
    let a�os = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let meses = hoy.getMonth() - fechaNacimiento.getMonth();
    let d�as = hoy.getDate() - fechaNacimiento.getDate();
    
    if (d�as < 0) {
        meses--;
        d�as += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
    }
    
    if (meses < 0) {
        a�os--;
        meses += 12;
    }

    document.getElementById('resultado').innerHTML = 'Tienes ' + a�os + ' a�os, ' + meses + ' meses, y ' + d�as + ' d�as.';
}