import NavIcon from "../ui/NavIcon";
import CarouselCard from "../ui/CarouselCard";

const Carousel = ({ data }) => {
  
  // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png

  return (
    <>
      <div>
        <div className="flex justify-between">
          <h2 className=" pb-2 pt-4">
            {data?.data?.card?.card?.header?.title}
          </h2>
          <NavIcon />
        </div>

        <div className="flex w-full gap-10 overflow-x-scroll scroll-smooth scrollbar-hide ">
          {data?.data?.card?.card?.imageGridCards?.info.map((e) => {
            return (
              <CarouselCard key={e.id} data={e}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
