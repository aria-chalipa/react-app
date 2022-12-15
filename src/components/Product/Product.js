import "./Product.css"

function Product({product, onDelete}){

 return(
    <div className="Product">
        <div>{product.title}</div>
        <div>
            <button className="btn" onClick={() => onDelete(product.id)}>
                delete
                </button>
        </div>
    </div>
 )
}
export default Product