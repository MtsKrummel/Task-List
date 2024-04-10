//useForm proporciona una forma eficiente y fácil de manejar la validación y el seguimiento del estado de los formularios en aplicaciones React.

//register devuelve un objeto que contiene los atributos necesarios para que React Hook Form funcione correctamente con el campo de entrada, como el nombre del campo y las reglas de validación
import { useForm, handleSubmit } from 'react-hook-form'
import { registerRequest } from '../api/auth.js'

function RegisterPage(){

    const {register} = useForm()

    return(
        <div>
            <form onSubmit={handleSubmit(async (values)=>{
                console.log(values)
                const res = await registerRequest(values)
                console.log(res)
            })} >
                <input type="text" 
                    {...register('username', {required: true})}
                />
                <input type="email"
                    {...register('email', {required: true})}
                />
                <input type="password"
                    {...register('password', {required: true})}
                />

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage