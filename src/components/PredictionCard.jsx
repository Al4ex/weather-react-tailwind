import { CloudIcon } from "@heroicons/react/solid";
import React from "react";
import { fechaNueva } from "../helpers";

const PredictionCard = ({ dt_txt, temp, icon }) => {
    const fecha = fechaNueva(dt_txt)
    const urlIcon = `http://openweathermap.org/img/wn/${icon}.png`
  return (
    <div className=" text-center px-4 mr-3 bg-blue-300 bg-opacity-50 rounded-md ">
      <p className="text-black font-semibold text-sm">{fecha}</p>
      <span>
        <img className="mx-auto w-12 text-black" src={urlIcon}/>
      </span>
      <span className="text-black font-semibold">{temp}°C</span>
    </div>
  );
};

export default PredictionCard;
