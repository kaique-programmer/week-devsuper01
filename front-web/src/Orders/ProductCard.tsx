import { ReactComponent as Pizza } from '../assets/pizzacalabresaacebolada1.svg';

function ProductCard() {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">Pizza calabresa</h3>
      <Pizza className="order-card-image"/>
      <h3 className="order-card-price">R$ 35,90</h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>Uma deliciosa pizza de calabresa acebolada com orégano previamente selecionado.</p>
      </div>
    </div>
  );
}

export default ProductCard;
