import Spiderman from '../../images/spiderman.png';
import { Link } from "react-router-dom";
import './booked.css';
import Navbar from '../../navbar';

const Product = () => {
  return (
    <div>
    <Navbar/>
    <div className="Booked">
      <img src={Spiderman} alt="spiderman"/>
      <h4>Spiderman ticket booked</h4>

      </div>
      <div className="Home">
        <Link to="/home">
        <button type="button" className="button" >
             Back to Home
        </button>
    </Link>
    </div>
      </div>
    
  );
};

export default Product;
