//useForm proporciona una forma eficiente y fácil de manejar la validación y el seguimiento del estado de los formularios en aplicaciones React.

//register devuelve un objeto que contiene los atributos necesarios para que React Hook Form funcione correctamente con el campo de entrada, como el nombre del campo y las reglas de validación
import { useForm } from 'react-hook-form'

function RegisterPage(){

    const {register} = useForm()

    return(
        <div>
            <form action="">
                <input type="text" 
                    {...register('username', {required: true})}
                />
                <input type="email" name="email" />
                <input type="password" name="password" />
            </form>
        </div>
    )
}

export default RegisterPage