import Button from '@/components/button';
import Social from '@/components/social';
import { setIsValidUser } from '@/store/slices/authSlice';
import authSchema from '@/utils/validationSchemas';
import { Formik } from 'formik';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';

const Auth = () => {
  /******************** STORE ********************************** */
  const dispatch = useDispatch();

  /******************** HOOKS ********************************** */
  const [isLogin, setIsLogin] = useState<boolean>(false);

  /******************** FUNCTIONS ********************************** */
  const handleFormSubmit = () => {
    dispatch(setIsValidUser(true));
  };
  return (
    <div className="authBox">
      <Formik
        validationSchema={authSchema}
        onSubmit={handleFormSubmit}
        initialValues={{
          userName: '',
          password: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className="authBox_form">
            <Row>
              <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
            </Row>
            <Row className="newUser">
              <span>
                {isLogin ? 'New User? ' : 'Existing User? '}
                <a href="" className="">
                  {isLogin ? 'Create an account' : 'Login In'}
                </a>
              </span>
            </Row>
            <Row className="mb-3 d-flex flex-column gap-3">
              <Form.Group controlId="validationFormik01">
                <Form.Control
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  isValid={touched.userName && !errors.userName}
                  className="inputBox"
                />

                <Form.Control.Feedback type="invalid" className="d-block">
                  {errors.userName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik02">
                <Form.Control
                  type="text"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  className="inputBox"
                />

                <Form.Control.Feedback type="invalid" className="d-block">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="position-relative mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Keep me signed in"
                  onChange={handleChange}
                  // isInvalid={!!errors.terms}
                  // feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik106"
                  feedbackTooltip
                />
              </Form.Group>
            </Row>
            <Button className="w-100" type="submit">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>
      <div className="d-flex my-4 align-items-center gap-2">
        <hr className="divider" />
        <span>Or Sign In With</span>
        <hr className="divider" />
      </div>
      <Row>
        <Social />
      </Row>
    </div>
  );
};

export default Auth;
