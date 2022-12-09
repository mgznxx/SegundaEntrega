import { Link } from "react-router-dom";

const Categorias = () => {
    return ( 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-link">
                    <button className='btn btn-secondary'><Link className="nav-link" to={"/"}>INSTITUTO ALFA</Link></button>
            </li>
            <li className="nav-link">
                
                    <button className='btn btn-secondary'><Link className="nav-link" to={"/category/1"}>Salud</Link></button>
                
            </li>
            <li className="nav-link">
                
                    <button className='btn btn-secondary'><Link className="nav-link" to={"/category/2"}>Idiomas</Link></button>
                
            </li>
            <li className="nav-link">
           
                    <button className='btn btn-secondary'><Link className="nav-link" to={"/category/3"}>Computacion</Link></button>
                
            </li>
            
        </ul>

);
}

export default Categorias;
