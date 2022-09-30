//Variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const agregarCurso = (e) => {
    //Capturar el evento
    e.preventDefault();
    console.log(e.target.classlist);
    //e.target.classlist.contains('agregar-carrito')
    if (e.target.classlist.contains('agregar carrito')){
        console.log('Presionaaste el boton: ');
    }
}


const cargarEventListener = ()=> {

    //Agregar finción de carga de cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventListener();