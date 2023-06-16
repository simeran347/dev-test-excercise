import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            {...formik.getFieldProps('email')}
            className={formik.errors.email ? 'error' : ''}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
            className={formik.errors.password ? 'error' : ''}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .error {
          border: 1px solid red;
        }

        .error-message {
          color: red;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
