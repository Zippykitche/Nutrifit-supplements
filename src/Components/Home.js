import react, {useState, useEffect} from "react";
import SupplementCard from "./SupplementCard";

function Home() {
const [supplements, setSupplements] = useState([]);
const url = process.env.NODE_ENV === 'development' 
    ? "http://localhost:4000/supplements" 
    : "https://my-json-server.typicode.com/Zippykitche/Nutrifit-supplements/supplements";


useEffect(() => {
    fetch (url)
    .then((response) => response.json())
    .then((data) => setSupplements (data))
    .catch((error)=> console.error('error fetching supplements:', error));
}, []);

    return (
    <div className="Supplements-List">
        <h2>Elevate Your Health</h2>
        <div className="container">
        <div className="row">
          {supplements.map((supplement) => (
            <div key={supplement.id} className="col-sm-4 col-md-4 col-lg-3">
              <SupplementCard
                name={supplement.name}
                description={supplement.description}
                image={supplement.image}
                price={supplement.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
);
  }
  
  export default Home;
  