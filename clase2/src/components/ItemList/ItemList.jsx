
import Item from "../Item/Item"
const ItemList = ({productList}) => {
    
    return (
        <>
            {productList.map(producto => <Item key ={producto.id} prod = {producto} />)}
            
        </>
    );
}

export default ItemList;
