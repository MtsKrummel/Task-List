import { createContext, useState, useContext, useEffect} from "react";
import { loginRequest, registerRequest } from "../API/auth";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [isRegisted, setIsRegisted] = useState(false)

    const signup = async(user) =>{
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            // setIsAuthenticated(true)
            setIsRegisted(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response) // cambio 21:29 
            setErrors(error.response.data)
        }
    }

    useEffect(() => {
        if(errors.length > 0){
            setTimeout(()=>{
                setErrors([])
            }, 5000)
        }
    }, [errors])

    //En value podemos ponerle cualquier valor, pero por lo general se le pasa un objeto {} porque vamos a estar compartiendo varios datos

    //Ahora ya tengo un contexto en donde todos los componentes que estén adentro {children} van a poder llamar, tanto el dato del usuario como la función signup para hacer peticiones 
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            isRegisted,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}