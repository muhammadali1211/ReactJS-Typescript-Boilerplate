import React from 'react'
import { Col, Button, Row, Container, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { Form, Formik, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import SignupForm from './SignupForm'
import { useDispatch } from 'react-redux'
import { registerRequest } from '../redux/actions'
const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const signupUserSchema = Yup.object({
    first_name: Yup.string()
      .required('Please enter the first name')
      .max(50, 'First Name should be maximum 50 characters'),
    last_name: Yup.string()
      .required('Please enter the last name')
      .max(50, 'Last Name should be maximum 50 characters'),
    user_name: Yup.string()
      .required('Please enter the user name')
      .min(3, 'username must be greater than 3 characters'),
    password: Yup.string().required('Please enter the password'),
    email: Yup.string()
      .required('Please enter the email address')
      .email('email should be valid email address'),
  })
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      user_name: '',
      password: '',
      email: '',
    },
    validationSchema: signupUserSchema,
    onSubmit: async (values) => {
      dispatch(
        registerRequest({
          first_name: values.first_name,
          last_name: values.last_name,
          user_name: values.last_name,
          password: values.password,
          email: values.email,
        }),
      )
    },
  })
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Signup</h2>
                  <div className="mb-3">
                    <SignupForm formik={formik} />

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{' '}
                        <Link to={'/login'}>Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup
