import { useState } from 'react';
import classes from './AddNew.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddNew = () => {
  const [isFormShown, setIsFormShown] = useState(false);

  const initialValues = { type: 'income', title: '', amount: '', category: '' };

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

    category: Yup.string().required('Category required'),
  });

  const expandForm = () => {
    setIsFormShown(prevState => !prevState);
  };

  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div className={classes.addNewForm}>
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
          {({ values }) => (
            <Form className={classes.form}>
              <div className={classes.radioBtn} role='group'>
                <label>
                  <Field type='radio' name='type' value='income' />
                  Income
                </label>
                <label>
                  <Field type='radio' name='type' value='expense' />
                  Expense
                </label>
                <ErrorMessage name='type' />
              </div>
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
              {values.type === 'income' && (
                <div className={classes.formControl}>
                  <label htmlFor='category'>Category</label>
                  <Field className={classes.input} as='select' name='category'>
                    <option value=''>-- select an option --</option>
                    <option value='salary'>Salary</option>
                    <option value='gift'>Gift</option>
                    <option value='freelancing'>Freelancing</option>
                    <option value='savings'>Savings</option>
                    <option value='prize'>Prize</option>
                    <option value='trade'>Trade</option>
                    <option value='other'>Other</option>
                  </Field>
                  <ErrorMessage
                    className={classes.error}
                    component='small'
                    name='category'
                  />
                </div>
              )}
              {values.type === 'expense' && (
                <div className={classes.formControl}>
                  <label htmlFor='category'>Category</label>
                  <Field className={classes.input} as='select' name='category'>
                    <option value=''>-- select an option --</option>
                    <option value='food'>Food</option>
                    <option value='health'>Health</option>
                    <option value='insurance'>Insurance</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='gifts'>Gifts</option>
                    <option value='transport'>Transport</option>
                    <option value='shopping'>Shopping</option>
                    <option value='other'>Other</option>
                  </Field>
                  <ErrorMessage
                    className={classes.error}
                    component='small'
                    name='category'
                  />
                </div>
              )}

              <button
                type='submit'
                className={`${classes.btn} ${classes.btnSubmit}`}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default AddNew;
