import React from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup';

function Forms() {

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: (data) => {
            console.log(data)
        },

        validationSchema: Yup.object({
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        })

    })








    return (
        <>
            <h1>Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Enter Email</label>
                <input type='text' placeholder="Email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email ? <h1 style={{ color: 'red' }}> {formik.errors.email}</h1> : ""}

                <label>Enter Password</label>

                <input type='text' placeholder="Password" id="password" value={formik.values.password} onChange={formik.handleChange} />
                <br />
                {formik.errors.password ? <h1 style={{ color: 'red' }}> {formik.errors.password}</h1> : ""}
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Forms