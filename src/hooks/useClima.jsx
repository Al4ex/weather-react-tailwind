import { useContext } from "react"
import ClimaContext from "../context/ClimaProvier"

const useClima = () => {
    return useContext(ClimaContext)
}

export default useClima