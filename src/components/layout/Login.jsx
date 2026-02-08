import Button from "../ui/Button";
import Field from "./forms/Field";
import { useFocus } from "../utils/hooks/useFocus";
import { useRef, useState } from "react";
import icon from '../../assets/images/swig.svg'
import { NavLink } from "react-router-dom";

const Login = () => {

  const [data,setData]=useState({
    email:"",
    password:""
  })

  


  const { inputRef } = useFocus(true);
  return (
    <>
      <div className="flex w-[80%] mx-auto my-auto mt-20">
        <div className="w-1/2 flex justify-center items-end">
          <img src={icon} alt="" className="w-[80%] h-[80%] object-contain"/>
        </div>
        <form className="p-6 w-1/2 ">
        <h1 className="font-bold text-3xl text-black">Login</h1>
         <p className="py-4"><span className="font-semibold text-lg">or</span> <NavLink className="font-semibold text-[#ff5200] " to={'/register'}>create an account</NavLink></p>
          <div className="font-medium text-[rgba(2,6,12,.5)] text-lg border border-[rgba(2,6,12,.2)] divide-y divide-[rgba(2,6,12,.2)]">
            <Field
              type={"email"}
              label={"Enter Email"}
              name={"email"}
              
              id={"email"}
              placeholder=""
              ref={inputRef}
            />
            <Field
              type={"password"}
              label={"Password"}
              name={"password"}
              id={"password"}
              
              placeholder=""
            />
          </div>
          <Button className="w-full text-white bg-[#ff5200] p-4 my-4 text-lg font-semibold uppercase">
            LOGIN
          </Button>
        <p className="text-[#02060c] text-sm font-semibold">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
          
        </form>
      </div>
    </>
  );
};

export default Login;
