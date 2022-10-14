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
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1
        }
    agregarCarrito(infoCurso);
    
    }

}

    //Función agregar carrito
    const agregarCarrito = curso =>{
       // console.log("curso a agregar")
       //console.log(curso.id)
       // console.log("listado de crusos")
     //  ListadoCarrito.forEach(curso => console.log(curso.id));
     if (ListadoCarrito.some(cursoIntCarrito => cursoIntCarrito.id == curso.id)){
     let carrito = ListadoCarrito.map( cursoIntCarrito => {
         if (cursoIntCarrito.id == curso.id) {
             cursoIntCarrito.cantidad++;
             return cursoIntCarrito; 
         } else {
             return cursoIntCarrito;
         }
     })
        ListadoCarrito = [...carrito];
    
      }  else {
          ListadoCarrito =  [...ListadoCarrito, curso];
        }

        console.log(ListadoCarrito);
        generaHTML();
    }

    const generaHTML = ()=> {
        vaciarCarrito();
        localStorage.setItem('carrito', JSON.stringify(ListadoCarrito));
        ListadoCarrito.forEach( curso =>{
            const row = document.createElement('tr');
            const cursoHTML =` 
            <td> <img src = "${curso.imagen}" width=100> </td>
            <td> ${curso.nombre}</td>
            <td> ${curso.precio}</td>
            <td> ${curso.cantidad}</td>
            <td> 
           <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
            </td>
        `;
            row.innerHTML = cursoHTML;
            contenedorCarrito.appendChild(row)
        });
    }

    const vaciarCarrito=() => {
        contenedorCarrito.innerHTML = '';
    }

    const eliminarCurso = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('borrar-curso')){
        let idCurso = e.target.getAttribute('data-id')
        let carrito = ListadoCarrito.filter(cursoInCarrito => cursoInCarrito.id !== idCurso)
        ListadoCarrito = [...carrito];
        generaHTML();
        }
    }


    //e.target.classlist.contains('agregar-carrito')
    const cargarEventListener = ()=> {
    //Agregar finción de carga de cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);

    contenedorCarrito.addEventListener('click',eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

const carritoInStorage = localStorage.getItem('carrito')
if(carritoInStorage){
    ListadoCarrito =JSON.parse(carritoInStorage);
    generaHTML();
}

cargarEventListener();