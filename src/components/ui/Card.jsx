import RatingIcon from "../svgicon/RatingIcon";

const Card = ({ data }) => {
  //media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/fa5bf4f1-3569-4423-b2c8-0e7fb470616b_611682.JPG

  
  const discount = data?.info?.aggregatedDiscountInfoV3;

  return (
    <>
      <div className="w-78">
        <div className=" w-78 h-48 rounded-2xl overflow-hidden relative text-[rgba(255,255,255,0.92)] font-bold text-xl tracking-[-0.03125rem]">
          <img
            className="w-full h-full object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info?.cloudinaryImageId}`}
            alt=""
          />
          {discount && (
            <div className="px-4 pt-8 absolute z-5 bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent">
              {discount.header && <span>{discount.header}</span>}
              {discount.subHeader && <span> {discount.subHeader}</span>}
              
            </div>
          )}
        </div>
        <div className="p-2 py-2">
          <div className="text-xl font-semibold truncate ">{data?.info?.name}</div>
          <div className="flex gap-1 font-semibold text-lg text-[rgba(2,6,12,0.92)]">
            <RatingIcon />
            {data?.info?.avgRating} . {data?.info?.sla.slaString}
          </div>
          <div className="truncate text-[rgba(2,6,12,0.6)] text-lg font-medium">
            {data?.info?.cuisines.join(",")}
          </div>
          

          <div className="text-[rgba(2,6,12,0.6)] text-lg font-medium">{`${data?.info?.areaName}`}</div>
        </div>
      </div>
    </>
  );
};
export default Card;
