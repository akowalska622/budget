import { Fragment, useState } from 'react';
import classes from './AddNew.module.css';
import Button from '../UI/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddNew = () => {
  const [isFormShown, setIsFormShown] = useState(false);

  const initialValues = { type: '', title: '', amount: '' };

  const validation = Yup.object({
    title: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Title required'),

    amount: Yup.number()
      .required('Amount required')
      .moreThan(0, 'Amount must be greater than 0'),

    type: Yup.string()
      .oneOf(['income', 'expense'], 'Invalid type')
      .required('Type required'),
  });

  const expandForm = () => {
    setIsFormShown(prevState => !prevState);
  };

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Fragment>
      <button
        onClick={expandForm}
        className={`${classes.btn} ${classes.btnExpand}`}
      >
        {!isFormShown ? 'Add new' : 'Hide form'}
      </button>
      {isFormShown && (
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          <Form className={classes.form}>
            <div className={classes.formControl}>
              <label htmlFor='title'>Title</label>
              <Field className={classes.input} name='title' type='text' />
              <ErrorMessage
                className={classes.error}
                component='small'
                name='title'
              />
            </div>

            <div className={classes.formControl}>
              <label htmlFor='amount'>Amount</label>
              <Field className={classes.input} name='amount' type='number' />
              <ErrorMessage
                className={classes.error}
                component='small'
                name='amount'
              />
            </div>
            <button className={`${classes.btn} ${classes.btnSubmit}`}>
              Submit
            </button>
          </Form>
        </Formik>
      )}
    </Fragment>
  );
};

export default AddNew;
