import { useParams } from "react-router-dom";
import { UseFetch } from "../utils/hooks/UseFetch";

const DetailCarasoul = () => {
    const {id,type} = useParams()
    
  const url =`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2307329&lng=72.856673&collection=${id}&tags=${type}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
  const data = UseFetch(url);
  console.log(data)

  console.log(useParams());
  return (
    <>
      <h1>all carasoule print here</h1>
    </>
  );
};

export default DetailCarasoul;
