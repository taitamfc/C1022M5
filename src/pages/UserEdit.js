import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
import UserModel from '../models/UserModel';

const rules = Yup.object().shape({
  name: Yup.string().required('Truong yeu cau').min(3, 'Toi thieu 3 ky tu').max(255, 'Toi da 255'),
});
function UserEdit(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: ''
  })
  useEffect(() => {
    UserModel.find(id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
 

  const handleSubmit = (values) => {
    console.log(values);
    let data = {
      name : values.name
    }
    UserModel.update(id,data)
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
       enableReinitialize={true}
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
        <Form>
          Name
          <Field name="name" /> <br />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <button > Register </button>
        </Form>

        )}
      </Formik>
      <h1> UserEdit</h1>
    </div>
  );
}

export default UserEdit;