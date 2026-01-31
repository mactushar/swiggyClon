import React from "react";
import Carousel from "./Carousel";
import Restaurants from "./Restaurants";
import TopResTorants from "./TopRestorants";
import Restitle from "./Restitle";
import Sorter from "./Sorter";

//"swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza"
// pizza https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2307329&lng=72.856673&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null
// cake https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2307329&lng=72.856673&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null
const WIDGET_MAP = {
  "whats_on_your_mind": Carousel,
  "top_brands_for_you": TopResTorants,
  "popular_restaurants_title": Restitle,

  "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget":
    Sorter,
  "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget": Restaurants,
};

const WidgetRendrer = (data) => {
 
  

  const idOrType =data?.data?.card?.card.id || data?.data?.card?.card["@type"] ;

  

  const Component = WIDGET_MAP[idOrType];

  if (!Component) {
    return null;
  }

  return <Component data={data} />;

  
};

export default WidgetRendrer;
