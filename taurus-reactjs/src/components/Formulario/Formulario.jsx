import {useState} from "react"
import Form from "./Form.jsx"
import { formWhitValidation } from "./FormWhitValidation.jsx"

const FormWhitValidation = formWhitValidation (Form)


const Formulario = () => {

    const [formData, setFormData] = useState({
        nombre:'' ,
        email: ''
    })


    const handleOnChange = (evt) => {
        
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value 
        })
    }
    return (
        <FormWhitValidation 
            formData ={formData} 
            handleOnChange = {handleOnChange} 
        />
    )
}

export default Formulario