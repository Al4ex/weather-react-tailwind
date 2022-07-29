import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


const ClimaContext = createContext()

const ClimaProvider = ({children}) =>{
    const [result, setResult] = useState({})
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [{ciudad}, handleOnchange] = useForm({
        ciudad:''
    })
    
    

    const consultarClima = async datos => {
        try {
            setLoading(!loading)
            // setLoading(true)
            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${datos}&limit=5&appid=${appId}&lang=es`
            const {data} = await axios(url)
            if(data.length == 0){
                throw Error("No se encontro ninguna ciudad");
                
            }
            const {lat, lon} = data[0]
            
            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&lang=es&units=metric`
            const {data: clima} = await axios(url2)
            setResult(clima)

            const arrayWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=16&appid=${appId}&lang=es&units=metric`
            const {data: listDays} = await axios(arrayWeather)
            setForecast(listDays.list)
            setLoading(false)
            console.log(data)
            
        } catch (error) {
            setError("No se encontro ninguna ciudad")
            console.log(error)
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        consultarClima(ciudad)
    }
    return(
        <ClimaContext.Provider
        value={{
            ciudad,
            handleOnchange ,
            consultarClima,
            result,
            forecast,
            handleSubmit,
            loading,
            error
        }}>
        {children}
    </ClimaContext.Provider>
    )
}

export {ClimaProvider}
export default ClimaContext