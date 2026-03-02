import Field from "./forms/Field";
import Button from "../ui/Button";
import { useFocus } from "../utils/hooks/useFocus";
import { useRef } from "react";


const Register = () => {
   const {inputRef} = useFocus(true)
    
   
    

   

  return (
    <>
      <form className="p-6">
        <div
          className=" font-medium text-[rgba(2,6,12,.5)] text-lg border border-[rgba(2,6,12,.2)] divide-y divide-[rgba(2,6,12,.2)]"
        >
          <Field type={"tel"} label={"Phone number"} id={"phone"} ref={inputRef} autoComplete="tel" placeholder="" />
          <Field type={"text"} label={"Name"} name={"name"} id={"name"}  autoComplete="name" placeholder=""/>
          <Field type={"email"} label={"Email"} name={"email"} id={"email"}  autoComplete="email" placeholder=""/>
        </div>
        <Button
          type={"submit"}
          className="w-full text-white bg-[#ff5200] p-4 my-4 text-lg font-semibold uppercase"
        >
          continue
        </Button>
      </form>
    </>
  );
};

export default Register;
