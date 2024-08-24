import Button from '@/components/button';
import Social from '@/components/social';
import { useAppDispatch } from '@/hooks/index';
import { setIsValidUser, setUserCred } from '@/store/slices/authSlice';
import authSchema from '@/utils/validationSchemas';
import { Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Auth = () => {
  /******************** STORE ********************************** */
  const dispatch = useAppDispatch();

  /******************** HOOKS ********************************** */
  const [isLogin, setIsLogin] = useState<boolean>(false);

  /******************** FUNCTIONS ********************************** */
  const handleFormSubmit = (
    payload: TUserCred,
    actions: FormikHelpers<TUserCred>
  ) => {
    if (isLogin) {
      dispatch(setIsValidUser(payload));
    } else {
      dispatch(setUserCred(payload));
      setIsLogin(true);
      actions.resetForm();
      alert('SIGNUP SUCCESSFULL, Login using same credentials to continue');
    }
  };
  return (
    <Container className="h-100 py-5">
      <Row className="h-100">
        <Col className="my-auto">
          <div className="authBox">
            <Formik
              validationSchema={authSchema}
              onSubmit={handleFormSubmit}
              initialValues={{
                userName: '',
                password: '',
                keepMeSignIn: false,
              }}
            >
              {({ handleSubmit, handleChange, resetForm, values, errors }) => (
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="authBox_form"
                >
                  <Row>
                    <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
                  </Row>
                  <Row className="newUser">
                    <span>
                      {isLogin ? 'New User? ' : 'Existing User? '}
                      <span
                        className="link"
                        onClick={() => {
                          setIsLogin((cv) => !cv);
                          resetForm();
                        }}
                      >
                        {isLogin ? 'Create an account' : 'Login In'}
                      </span>
                    </span>
                  </Row>
                  <Row className="mb-3 d-flex flex-column gap-3">
                    <Form.Group controlId="validationFormik01">
                      <Form.Control
                        type="text"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                        // isValid={touched.userName && !errors.userName}
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
                        // isValid={touched.password && !errors.password}
                        className="inputBox"
                      />

                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  {isLogin && (
                    <Row>
                      <Form.Group className="position-relative mb-3">
                        <Form.Check
                          name="keepMeSignIn"
                          label="Keep me signed in"
                          onChange={handleChange}
                          checked={values.keepMeSignIn}
                          isInvalid={!!errors.keepMeSignIn}
                          feedback={errors.keepMeSignIn}
                          feedbackType="invalid"
                          id="validationFormik0"
                        />
                      </Form.Group>
                    </Row>
                  )}
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
        </Col>
        <Col className="d-none d-lg-block">image</Col>
      </Row>
    </Container>
  );
};

export default Auth;
