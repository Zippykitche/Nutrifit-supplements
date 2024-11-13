import {useState, useEffect} from "react";
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
}, [url]);

    return (
 <div>
      <div className="page-header">
        <h1>Elevate Your Health</h1>
      </div>
        <div className="supplements-list row">
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
  );
}

  export default Home;
 