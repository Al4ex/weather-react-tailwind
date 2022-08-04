import img from "../img/img.jpg";
import {
  CloudIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import PredictionCard from "./PredictionCard";
import useClima from "../hooks/useClima";
import CurrentWeather from "./CurrentWeather";
import "spinkit/spinkit.min.css";

const All = () => {
  const { handleOnchange, handleSubmit, result, forecast, loading, error } =
    useClima();

  return (
    <div className="bg-gray-600 h-screen overflow-hidden">
      <div className="bg-black">
        <h2 className="text-white text-center text-2xl py-3 font-thin">
          Obtener el clima
        </h2>
      </div>
      <div className=" w-3/4 md:w-1/2 mx-auto flex flex-col mt-8 md:justify-center content-center h-full md:mt-0 md:h-4/5">
        <form action="" onSubmit={handleSubmit} className="flex shadow-lg">
          <input
            type="text"
            className="w-full block rounded-l-lg p-2 outline-none focus:outline-none"
            placeholder="Municipio, Estado"
            name="ciudad"
            onChange={handleOnchange}
          />
          <input
            type="submit"
            value="Enviar"
            className="bg-blue-700 text-white font-semibold p-2 rounded-r-lg hover:bg-blue-800 cursor-pointer"
          />
        </form>

        {Object.keys(result).length > 0 ? (
          loading ? (
            <div className="flex justify-center items-center content-center h-96 ">
              <div className="sk-grid">
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
              </div>
            </div>
          ) : (
            <div className="mt-5 block md:flex bg-gray-700 w-full justify-between md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <CurrentWeather />
              <div className="md:w-2/3 flex flex-col">
                <div className="border-b border-gray-400 h-1/2 p-4">
                  <p className="text-white text-lg">
                    Temperatura maxima: <span>{result.main.temp_max}°</span>
                  </p>
                  <p className="text-white text-lg">
                    Temperatura minima: <span>{result.main.temp_min}°</span>
                  </p>
                  <p className="text-white text-lg">
                    Sensacion Termica: <span>{result.main.feels_like}°</span>
                  </p>
                  <p className="text-white text-lg">
                    Humedad: <span>{result.main.humidity}%</span>
                  </p>
                  <p className="text-white text-lg">
                    Velocidad del Viento:{" "}
                    <span>{(result.wind.speed * 3.6).toFixed()} k/h</span>
                  </p>
                </div>
                <div className="mx-6 md:my-6 box-border md:pb-4  flex overflow-auto scrollbar scrollbar-hidden hover:scrollbar-auto">
                  {forecast.map((weather) => (
                    <PredictionCard
                      key={weather.dt_txt}
                      dt_txt={weather.dt_txt}
                      temp={weather.main.temp}
                      icon={weather.weather[0].icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        ) : error ? (
          <div
            className={`${
              error ? "opacity-100" : "opacity-0"
            } transition bg-gray-100 mt-12 p-4 text-center shadow-xl rounded-xl`}
          >
            <div className="flex text-red-700 font-semibold justify-center">
              <ExclamationIcon className="w-6" />
              <strong className=""> Error</strong>
            </div>
            <p className="font-bold">{error}</p>

            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          <p className="text-white text-center mt-6 animate-bounce text-4xl">
            Realiza una busqueda
          </p>
        )}
      </div>

      {/* <div className="flex h-4/5 flex-col items-center justify-center">
        <div className="">
          
        </div>
      </div> */}
    </div>
  );
};

export default All;
