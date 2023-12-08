import { useState } from "react"

export default function useForm(submitHandler, initialValues, validation) {

    const [values, setValues] = useState(initialValues);
    const [errMsg, setErrMsg] = useState('')

    const onChange = (e) => {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
     
        if(validation() === ''){
           submitHandler(values);
        }else{
            setErrMsg(validation());
        }
    }

    return {
        values,
        onChange,
        onSubmit,
        errMsg
    }
}