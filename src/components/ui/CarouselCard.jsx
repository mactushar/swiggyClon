import { Link } from "react-router-dom";

const CarouselCard = ({ data }) => {
  //collection=80425&tags=layout_BAU_Contextual%2Cvada
  //"https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2"

  const params = new URLSearchParams(data?.action?.link.split("?")[1]);

  const collectionId = params.get("collection_id");
  const tag = params.get("tags");
  

  return (
    <>
      <Link to={`collection/${collectionId}/${tag}`}>
        <div className=" w-38 aspect-1/1.2 shrink-0">
          <img
            className="w-full h-full object-cove"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${data.imageId}`}
          />
        </div>
      </Link>
    </>
  );
};

export default CarouselCard;
