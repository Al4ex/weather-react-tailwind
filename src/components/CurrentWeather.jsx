import React from 'react'
import img2 from '../img/img.jpg'

import {CloudIcon, LocationMarkerIcon} from '@heroicons/react/solid'
import useClima from '../hooks/useClima'
import { fechaActual } from '../helpers'


const CurrentWeather = () => {
    const {result} = useClima()
    const urlIcon = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png` 
  return (
    <>
      <div className="relative h-52 md:h-full md:w-1/3 ">
        <div className="absolute flex flex-col p-6 w-full h-full bg-opacity-50 bg-black">
          <div className="flex-grow">
            <p className=" text-white text-xl font-semibold opacity-100 flex">
              <LocationMarkerIcon className="w-6 h-6" />
              {result.name}
            </p>
            <p className="text-white">{fechaActual}</p>
          </div>
          <p className="text-white mt-4 md:mt-0 text-4xl">{result.main.temp}°C </p>
          
          <div className="flex items-center overflow-hidden">
          <img src={urlIcon} className="w-24   rounded-full" alt="" />
          <p className='text-white font-semibold capitalize '> {result.weather[0].description}</p>
          </div>
        </div>
        <img src={img2} alt="" className="object-cover w-full h-full" />
      </div>
    </>
  );
}

export default CurrentWeather