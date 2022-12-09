import {Link} from "react-router-dom";

const Item = ({prod}) => {
    return (
        <>
           <div className='card mb-3 cardProducto'> 
                <img src={`../img/${prod.img}`} className='card-img-top'  alt="..." />
                <div className='card-body cardBody'>
                <h5 className='card-title'>{prod.nombre} </h5>
                <p className='card-text'>{prod.marca}</p>
                <p className='card-text'>$ {new Intl.NumberFormat('de-DE').format(prod.valor)}</p>
                <button className='btn btn-dark'><Link className="nav-link" to={`/product/${prod.id}`}>Ver Producto</Link> </button>

                </div>            
            </div> 
        </>
    );
}

export default Item;
