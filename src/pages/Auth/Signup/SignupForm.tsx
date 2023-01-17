import React, { FC } from 'react'
import { Form, Formik, FormikProvider } from 'formik'
import { useHistory, Link } from 'react-router-dom'
interface FuncProp {
  formik?: any
}
const SignupForm: FC<FuncProp> = ({ formik }) => {
  return (
    <>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <div className="col-sm-12">
            <label className="">First Name</label>
            <input
              type="text"
              className="form-control input_color_login"
              name="first_name"
              placeholder="Enter the first name"
              value={formik.values && formik.values.first_name}
              onChange={formik.handleChange}
            />
            {formik.errors.first_name && formik.touched.first_name && (
              <span className="text-danger letterspacing">
                {formik.errors.first_name}
              </span>
            )}
            <br />
            <label className="">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="form-control input_color_login"
              name="last_name"
              value={formik.values && formik.values.last_name}
              onChange={formik.handleChange}
            />
            {formik.errors.last_name && formik.touched.last_name && (
              <span className="text-danger captchaErrors letterspacing">
                {formik.errors.last_name}
              </span>
            )}
            <br />
            <label className="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter the email"
              className="form-control input_color_login"
              value={formik.values && formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <span className="text-danger captchaErrors letterspacing">
                {formik.errors.email}
              </span>
            )}
            <br />
            <label className="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter the password"
              className="form-control input_color_login"
              value={formik.values && formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <span className="text-danger captchaErrors letterspacing">
                {formik.errors.password}
              </span>
            )}
            <div className="justify-content-center d-flex">
              <button
                className="text-center btn btn-primary pl-5 pr-5 rounded-pill mt-3"
                onClick={formik.handleSubmit}
                type="submit"
              >
                {' '}
                Submit{' '}
              </button>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default SignupForm
