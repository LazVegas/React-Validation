import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateLogin"
import "../styles/base.css";

const Form = () => {
    const {handleChange, handleSubmit, values, errors } = useForm(submit, validate);

    function submit() {
        console.log("Submitted Successfully");
    }

    return (
    <div id="container">
        <h1 id="title">Profile Form - All fields required</h1>
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <div className="label-name">
                    <label>Name</label>
                    {errors.name&& <p className="errors">{errors.name}</p>}
                </div>
                    <input
                        className={`${errors.name && "inputError"}`}           /* */
                        name="name"
                        placeholder="Michael"
                        type="text"
                        value={values.name}                                    /* */
                        onChange={handleChange}                                /* */
                    />
            </div>
            <div>
                <div className="label-name">
                    <label>Email</label>
                    {errors.email && <p className="errors">{errors.email}</p>}
                </div>
                    <input
                        className={`${errors.email && "inputError"}`}
                        name="email"
                        placeholder="email@test.com"
                        type="email"
                        value={values.email} 
                        onChange={handleChange}
                    />
            </div>
            <div>
                <div className="label-name">
                    <label>Username</label>
                    {errors.userName && <p className="errors">{errors.userName}</p>}
                </div>
                    <input
                        className={`${errors.userName && "inputError"}`}           /* */
                        name="userName"
                        placeholder="myusername"
                        type="text"
                        value={values.userName}                                    /* */
                        onChange={handleChange}
                    />
            </div>
            <div>
                <div className="label-name">
                    <label>Password</label>
                    {errors.password && <p className="errors">{errors.password}</p>}
                </div>
                    <input
                        className={`${errors.password && "inputError"}`}
                        name="password"
                        placeholder="&#8226;&#8226;&#8226;&#8226;"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                    />
            </div>
            <div id="confirmPassword">
                <div className="label-name">
                    <label>Confirm</label>
                    {errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}
                </div>
                    <input
                        className={`${errors.confirmPassword && "inputError"}`}        /* */
                        name="confirmPassword"
                        placeholder="&#8226;&#8226;&#8226;&#8226;"
                        type="password"
                        value={values.confirmPassword}                                 /* */
                        onChange={handleChange}

                    />

            </div>
            <div id="website">
                <div className="label-name">
                    <label>Website</label>
                    {errors.website && <p className="errors">{errors.website}</p>}
                </div>
                    <input
                        className={`${errors.website && "inputError"}`}        /* */
                        name="website"
                        placeholder="Website - Please enter a valid URL"
                        type="url"
                        value={values.website}                                 /* */
                        onChange={handleChange}
                    />
            </div>
            <div id="submitButton" >
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    );
};

    // form
    // label / input for email
    // label / input for password
    // signup button

    // handle changes
    // handle submit

    // create custom react hook

    // handle errors
    // show errors if there are errors

export default Form;