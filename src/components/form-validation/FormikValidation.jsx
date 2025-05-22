import { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const validationSchema = Yup.object({
    username: Yup.string().required('username is required').min(8).max(15),
    password:Yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/, 'password must contain one alphabet, small, spl char, min 8 letters'),
    email: Yup.string().required('Email is required.').matches(!/\S+@\S+\.\S+/, 'invalid mail format')
})  

export default function FormikValidation() {
   
    function sendData()
    {
        // code to send data API
        // axios.post('')
        // .then()
    }

    return (
        <Formik
          initialValues={{ username: '',password:'', email: '' }}  validationSchema={validationSchema}
          onSubmit={(user) => {
            console.log(user);
            sendData();
          }} >
          {() => (
            <Form>
                <Field type="text" name="username" placeholder="Username"/>         
                <ErrorMessage name="username" component="span" style={{ color: 'red' }} /> <br></br>      
             
                <Field type="password" name="password" placeholder="Password" />         
                <ErrorMessage name="password" component="span" style={{ color: 'red' }} /> <br></br>
              
                <Field type="email" name="email" placeholder="email" /> 
                <ErrorMessage name="email" component="span" style={{ color: 'red' }} />  <br></br>  
              
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      );
    }