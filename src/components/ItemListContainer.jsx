import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemListContainer = ({ productsData }) => {
  return (
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100vw', flexWrap: 'wrap'}}>
        {productsData.map((products) => {
          return (
            <Card key={products.id} style={{ width: "18rem", }}>
              <Link to={`/item/${products.id}`}> 
              <Card.Img variant="top" src={products.thumbnail} />
              </Link>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                {products.description}
                </Card.Text>
                <div>{products.price}</div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
  );
};

export default ItemListContainer;
