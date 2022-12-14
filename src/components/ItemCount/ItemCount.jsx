import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) 

    const agregarCarrito = () =>{
        onAdd(contador)
    } 

    const incrementar = () => contador < stock && setContador(contador + 1)
    const decrementar = () => contador > 1 && setContador(contador - 1)


    return (
        <>
            <button onClick={decrementar} className='boton_contador'>-</button>  
            {contador}      
            <button onClick={incrementar} className='boton_contador'>+</button> 
            <div className='contenedor_contador' >
                <button id='agregar' className=" btn ver_producto" onClick={agregarCarrito}>Agregar al Carrito</button>
                <button className="btn ver_producto"><Link className="nav_ver" to="/cart">Finalizar compra</Link></button>  
            </div>
        </>
    );
}

export default ItemCount;
// si no quiero trabajar con un <div></div> lo que debo hacer es sacarlos y trabajar con los piquitos que se llaman
//FRAGMENTS

//Aca trabajamos sólo con el contador
// Las arrow functions (funcion flecha) lo que garantiza es que no se ejecute la funcion en la primera ejecucion del código, se ejecuta sólo cuando se genere el evento
//el itemcount lo unico que va a hacer es enviarle al detalle producto cuanta cantidad de x producto quiere comprar mi usuario