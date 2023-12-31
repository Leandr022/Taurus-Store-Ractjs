import {useState} from "react"

export const formWhitValidation = (FormWrappedComponent) => {
    
    const NewFormWhitValidation = (props)=>{
        const [errors, setError] = useState({})
        const validateForm = () => {
            let newErrors = {}
            let isValid = true

            if (!props.formData.nombre){
                newErrors.nombre = 'El campo es obligatorio'
                isValid = false
            }
            if (!props.formData.email){
                newErrors.email = 'El campo es obligatorio'
                isValid = false
            }

            setError(newErrors)
            return isValid
        }
        return(
            <FormWrappedComponent
                {...props}
                errors = {errors}
                validateForm = {validateForm}
            />
        )
    }
    
    
    return NewFormWhitValidation
}
