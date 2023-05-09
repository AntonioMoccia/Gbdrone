import React, { useEffect } from "react";
import { BsInstagram, BsFacebook,BsPhoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { createClient } from "../prismicio";

function Footer() {
  useEffect(() => {}, []);
  return (
    <div className="w-full bg-[rgb(31,31,31)] flex justify-around flex-col items-cente bg- min-h-[18rem] ">
     {/*  <div>
        <div className=" w-full mt-10 flex flex-col lg:flex-row justify-center items-center">
          <div className=" bg-red-300 p-50% w-full flex items-center justify-start mb-6 text-xl ">
            <BsPhoneFill color="white" className="mr-2" />
            telefono
          </div>
          <div className="flex w-52 items-center  justify-start mb-6 text-xl ">
            <AiOutlineMail color="white" className="mr-1  min-w-10" />
            email
          </div>
          <div className="flex w-52 items-center justify-start mb-6 text-xl ">
            <span className="mr-2">P.I.</span>
            Partita iva
          </div>
        </div>
      </div>
 */}
      <div className="w-full flex justify-around lg:justify-center items-center text-2xl px-24 ">
        <BsFacebook color="white" />
        <BsInstagram color="white" className=" ml-5" />
      </div>
    </div>
  );
}

export default Footer;
