import React,{FC} from 'react'
import { Form, Formik, FormikProvider } from 'formik'
interface FuncProp {
    formik?: any
  }
const LoginForm:FC<FuncProp> = ({formik}) => {

  return (
    <>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <div className="col-sm-12">
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

export default LoginForm
