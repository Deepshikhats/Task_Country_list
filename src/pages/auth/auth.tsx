import Button from '@/components/button';
import Social from '@/components/social';
import { useAppDispatch } from '@/hooks/index';
import { setIsValidUser, setUserCred } from '@/store/slices/authSlice';
import authSchema from '@/utils/validationSchemas';
import { Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
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
          <Form noValidate onSubmit={handleSubmit} className="authBox_form">
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
  );
};

export default Auth;

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import * as formik from 'formik';
// import * as yup from 'yup';

// function FormExample() {
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//   });

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group>
//           {/* <Button type="submit">Submit form</Button> */}
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FormExample;
