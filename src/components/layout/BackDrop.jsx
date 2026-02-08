import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const BackDrop = () => {

  const isOpen = useSelector((store) => store.drawer.isOpen);
 

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-10" onClick={onClose} />
    </>
  );
};

export default BackDrop;
