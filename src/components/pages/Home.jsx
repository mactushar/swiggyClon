
import { UseFetch } from "../utils/hooks/UseFetch";
import WidgetRendrer from "../layout/WidgetRendrer";

const Home = () => {
  const { data } = UseFetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2307329&lng=72.856673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        


  console.log(data)
  

  return (
    <>
    {data?.data?.cards.map((e,i)=>{

      return <WidgetRendrer key={i} data={e}/>


    })}
      
        
  
    </>
  );
};

export default Home;
