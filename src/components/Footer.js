import React, { useEffect, useState } from "react";
import { BsInstagram, BsFacebook, BsPhoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { createClient } from "../prismicio";

async function getContacts() {
  const client = createClient();
  const contact = await client.getSingle("contact");
  return contact.data;
}
async function getHomePageData() {
  const client = createClient();
  const home = await client.getSingle("home");
  return home.data;
}

function Footer() {
  const [data, setData] = useState({});
  const [homePageData, setHomePageData] = useState({});

  useEffect(() => {
    getHomePageData().then((homePage) => {
      setHomePageData(homePage);
    });

    getContacts().then((contacts) => {
      setData(contacts);
    });
  }, []);

  return (
    <div className="w-full text-white flex-col md:flex-row bg-[rgb(31,31,31)] justify-center items-center h-[30rem] flex ">
      {/** LEFT */}
      <div className="md:h-full h-1/2 md:w-1/2 w-full text-base md:text-2xl text-center flex items-center justify-center">
        {homePageData.frase && homePageData.frase.split("\n")[0]}
        <br />
        {homePageData.frase && homePageData.frase.split("\n")[1]}
      </div>

      <div className="md:h-[80%] md:w-[0.1px] w-[80%] h-[0.3px] bg-white"></div>

      <div className="h-full flex justify-center md:justify-start md:w-1/2 w-full  px-[10%] ">
        <div className="text-lg text-center md:text-left flex justify-center flex-col items-start">
          <div className="flex flex-col w-full">
            <span className="font-bold">Email</span>
            {data.email}
          </div>
          <div className="mt-4 flex flex-col w-full md:w-auto">
            <span className="font-bold">Telefono</span>
            {data.tel}
          </div>

          <div className="mt-4 flex flex-col w-full md:w-auto ">
            <span className="font-bold">P. Iva</span>
            {data.partita_iva}
          </div>
          <div className="flex w-full justify-start mt-10 md:w-auto">
          <BsFacebook color="white" />
          <BsInstagram color="white" className="ml-5" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
/**
 *  <div className=" w-1/2 h-full">

      </div>

    <div className="w-[0.5px] h-full flex flex-col justify-center items-center">
      <div className="w-full h-[80%] bg-white "> 

      </div>
    </div>

    
      <div className=" text-white h-full w-full relative flex justify-center flex-col items-center px-[2rem] bg-red-300">
        <div className="w-full">
          <div className="">

          </div>
        </div>


      </div>
 */
