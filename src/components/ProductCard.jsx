import './ProductCard.css'



const ProductCard = (props) => {
  const { product } = props
  const { imageUrl, title, brand, price, rating } = product 
    return (
        <li className="productcard">
            <img src={imageUrl} alt={title} className="productimage" />         
            <h1 className="producttitle">{title}</h1>
            <p className="productbrand">{brand}</p>
            <div className="priceandrating">
                <p className="productprice">${price}</p>
                <p className="productrating">⭐ {rating}</p>
            </div>
        </li>
    )
}   








export default ProductCard