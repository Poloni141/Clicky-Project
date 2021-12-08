const producto1 = {
    marca: 'Clicky', 
    producto: 'Teclado', 
    precio: 600
}

const producto2 = {
    marca: 'Clicky', 
    producto: 'Switches', 
    precio: 200
}

const producto3 = {
    marca: 'Clicky', 
    producto: 'Keycaps', 
    precio: 150
}

const productos = [producto1, producto2, producto3];

let opcion = prompt('Seleccione una de las opciones: 1- Teclado, 2- Switches, 3- Keycaps. Para ingresar opcion ingrese el numero correspondiente a la opcion')

function opciones(opcion) {
    let seleccion = 0;
    switch (opcion) {
        case 1:
            seleccion = productos[0];
            break;
        case 2:
            seleccion = productos[1];
            break;
        case 3:
            seleccion = productos[2];
            break;
        default:
            alert('Debe elegir una de las opciones con numeros 1, 2 o 3')
            break;
        }
    return seleccion
}

alert(`Usted selecciono la opcion ${opciones(opcion)}`)
