import { CgClose } from "react-icons/cg";
import { drawerRegistry } from "../utils/drawerRegistry";
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "../utils/RTK/drawerSlice";

const SideDrawer = () => {
  
  
 

  return (
    <>
      <div className=" bg-white fixed right-0  top-0 w-[36%] z-20 h-full p-8">
        <div className="mb-8">
          <CgClose className="text-[rgba(2,6,12,.5)] " size={25} />
        </div>
        <Component />
      </div>
    </>
  );
};

export default SideDrawer;
