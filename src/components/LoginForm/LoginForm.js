import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import classes from './LoginForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { username: '', password: '' };

  const validation = Yup.object({
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Username required'),

    password: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Password required'),
  });

  const handleSubmit = values => {
    const username = values.username;
    dispatch(authActions.login(username));
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form className={classes.form}>
          <div className={classes.formControl}>
            <label htmlFor='username'>Username</label>
            <Field className={classes.input} name='username' type='text' />
            <ErrorMessage
              className={classes.error}
              component='small'
              name='username'
            />
          </div>

          <div className={classes.formControl}>
            <label htmlFor='password'>Password</label>
            <Field className={classes.input} name='password' type='password' />
            <ErrorMessage
              className={classes.error}
              component='small'
              name='password'
            />
          </div>

          <Button type='submit'>Login</Button>
        </Form>
      </Formik>
    </Card>
  );
};

export default LoginForm;
