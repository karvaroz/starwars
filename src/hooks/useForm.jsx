import { useState } from "react";

const useForm = () => {
    const [values, setValues] = useState({});
    
    const handleChange = ({ target }) => {
        setValues({
        ...values,
        [target.name]: target.value,
        });
    };

    const reset = () => {
        setValues({});
    }
    
    return {
        values,
        handleChange,
        reset
    };

}

export default useForm