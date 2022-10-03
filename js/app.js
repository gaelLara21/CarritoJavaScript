//Variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


let ListadoCarrito = [];


const agregarCurso = (e) => {
    //Capturar el evento
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        const infoCurso= {
            imagen: curso.querySelector('img').src,
            nombre: curso.querySelector('h4').textContend,
            precio: curso.querySelector('p.precio').textContend,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1
        }
    agregarCarrito(infoCurso);
    
    }

}

    //Función agregar carrito
    const agregarCarrito = curso =>{
        ListadoCarrito = [...ListadoCarrito, curso]
        console.log(ListadoCarrito);
    }

    //e.target.classlist.contains('agregar-carrito')
const cargarEventListener = ()=> {

    //Agregar finción de carga de cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventListener();