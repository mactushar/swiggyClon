
import { UseFetch } from "../utils/hooks/UseFetch";
import WidgetRendrer from "../layout/WidgetRendrer";
import { useSelector } from "react-redux";

const Home = () => {
  const { data } = UseFetch("https://food-wagon-backend.onrender.com/api/restaurants?lat=19.2307&lng=72.8567");
        
  


  console.log(data)
  

  return (
    <>
    {data?.data?.data?.cards.map((e,i)=>{
      

      return <WidgetRendrer key={i} data={e}/>


    })}
      
        
  
    </>
  );
};

export default Home;
