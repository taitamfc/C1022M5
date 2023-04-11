import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import UserModel from '../models/UserModel';

const rules = Yup.object().shape({
  name: Yup.string().required('Truong yeu cau').min(3, 'Toi thieu 3 ky tu').max(255, 'Toi da 255'),
});



function UserAdd(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: ''
  })
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (event) => {
    setFormData(
      {
        ...formData,
        [event.target.name]: event.target.value
      }
    )
  }
  const handleSubmit = (values) => {
    
    UserModel.store(values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });

    // Làm rỗng formik
  }

  return (
    <div>
      Name: {formData.name} <br />
      <Formik
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (<Form>
          Name
          <Field name="name" /> <br />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <button > Register </button>
        </Form>

        )}
      </Formik>
      <h1> UserAdd</h1>
    </div>
  );
}

export default UserAdd;