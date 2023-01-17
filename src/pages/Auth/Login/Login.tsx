import React from 'react'
import { Col, Button, Row, Container, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { Formik, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import LoginForm from './LoginForm'
import { useDispatch } from 'react-redux'
import { loginRequest } from '../redux/actions'
const Login = () => {
  const dispatch = useDispatch()
  const history= useHistory();
  const loginUserSchema = Yup.object({
    password: Yup.string().required('Please enter the password'),
    email: Yup.string()
      .required('Please enter the email address')
      .email('email should be valid email address'),
  })
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: loginUserSchema,
    onSubmit: async (values) => {
      dispatch(
        loginRequest({
          email: values.email,
          password: values.password,
          history: history
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
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <div className="mb-3">
                    <LoginForm formik={formik} />

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Dont have an account? <Link to={'/signup'}>Signup</Link>
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

export default Login
