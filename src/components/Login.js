import React from "react";
import { useFormik } from "formik";
// import Dashboard from "./Dashboard";
import * as yup from "yup";
import { useHistory } from "react-router-dom";


const formValidationSchema = yup.object({
  email: yup.string().required("why not fill this email?"),
  password: yup
    .string()
    .required("Mandatory to fill password!!")
    .min(8, "need a longer password!!")
    .max(12, "password exceed longer!!"),
  name: yup.string().required("why not fill this field??"),
  phoneno : yup
  .string()
  .required("Need to fill this field")
  .max(10,"Phone no exceed longer!!")
});

export function Login() {
  const history=useHistory();
  const formik = useFormik({
    initialValues: { email: "", password: "", name: "",phoneno: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <form>
      <h1>Sign up</h1>
      <input
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Username"
      />
      <br></br>
      {/* {formik.errors.name} */}
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      <br></br>
      <input 
      type="tel"
      id="tel"
      name="tel"
      pattern="[0-9]*"
      value={formik.values.phoneno}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="PhoneNo"
      /><br></br>
      {formik.touched.tel && formik.errors.tel ? formik.errors.tel : ""}
      <br></br>
      <input 
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlurCapture={formik.handleBlur}
        placeholder="Email"
      />
      <br></br>
      {/* {formik.errors.email} */}
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br></br>
      <input
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Password"
        // minLength="8"
      />
      <br></br>
      {/* {formik.errors.password} */}
      {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
      <br></br>
      <button type="submit" 
      onClick={history.push('/dashboard')}>Register</button>
    </form>
  );
}

