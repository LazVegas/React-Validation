import { useState, useEffect} from "react";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({ name: "", email: "", userName: "", password: "", confirmPassword: "", website: ""});                                     {/* values object*/}
    const [errors, setErrors] = useState({});                               {/* errors object*/}
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value 
        });
    };

    const handleSubmit = event => {
        event.preventDefault();                     {/* prevents browser from refreshing */}
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;
