function calcularEdad() {
    let dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Por favor, ingresa tu fecha de nacimiento.");
        return;
    }

    let fechaNacimiento = new Date(dob);
    let hoy = new Date();

    if (fechaNacimiento > hoy) {
        alert("La fecha de nacimiento no puede ser en el futuro.");
        return;
    }

    let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let meses = hoy.getMonth() - fechaNacimiento.getMonth();
    let días = hoy.getDate() - fechaNacimiento.getDate();

    if (días < 0) {
        meses--;
        días += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    document.getElementById('resultado').innerHTML = 'Tienes ' + años + ' años, ' + meses + ' meses, y ' + días + ' días.';
}
