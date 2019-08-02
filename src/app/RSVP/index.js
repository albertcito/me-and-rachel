import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import { Formik, Field } from 'formik';
import { RadioButtonGroup, RadioButton } from './RadioButtonGroup';
import Input from './Input';
import TextArea from './TextArea';
import './index.scss';

export default function RSVP({lang}) {

  const [response, setResponse] = useState({
    errors: null,
    sentSuccess: false,
  });

  const windowTitle = (lang === 'en') ? 'RSVP' : 'Confirme su presencia';
  useEffect(() => {
    document.title = windowTitle + ' | Albert <3 Rachel';
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [windowTitle]);

  const onSubmit = (values, { setSubmitting }) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const url = 'https://script.google.com/macros/s/AKfycbwleMZP-ZCFODL6pCzTCWfwSiX4XPAw-lmQG69kJpwp5dvrRp2C/exec';

    axios.get(url, {
      params: {
        ...values
      }
    }).then(function(payload) {
      if (payload.data.result === 'success') {
        setResponse({...response, sentSuccess: true});
      } else {
        alert(JSON.stringify(payload.data.result, null, 2));
      }
      setSubmitting(false);
    })
    .catch(function(error) {
      alert(JSON.stringify(error.message, null, 2));
      setSubmitting(false);
    });
  }

  return (<div className="container rsvp">
    <div className="image-left">
      <div className="image-fix"></div>
    </div>
    <div className="form-right">
      <h1>
        {windowTitle}
      </h1>
      {response.sentSuccess ?
        (lang === 'en') ? <TextEN /> : <TextES />
        :
        <Form onSubmit={onSubmit} lang={lang} />
      }
    </div>
  </div>);
}

const TextEN = () => <React.Fragment>
  Thank you for join us.
  We are really happy to know
  you are going be part of our wedding.
</React.Fragment>;

const TextES = () => <React.Fragment>
  Gracias por acompañarnos.
  Estamos muy contentos de saber
  Vas a ser parte de nuestra boda.
</React.Fragment>;


const Form = ({onSubmit, lang}) => {

  const t = (lang === 'en') ? getENLabels() : getESLabels();
  return <Formik
      initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      additionalGuests: '',
      guests: '',
      welcomeDinner: '',
      dinnerGuests: '',
      dinnerRestriction: '',
      ceremony: '',
      ceremonyGuests: '',
      ceremonyRestriction: '',
      commentary: '',
    }}
    validate={(values) => validation(values, lang)}
    onSubmit={onSubmit}
  >
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    dirty,
    handleSubmit,
    isSubmitting,
  }) => (
    <form onSubmit={handleSubmit}>
      {isSubmitting &&
        <div className="spinLoading">
          <div className="spinMsg">
            <div className="lds-heart"><div></div></div>
            <div>{t.sending}</div>
          </div>
        </div>
      }
      <Input
        label={t.firstName}
        type="text"
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
        errors={errors.firstName}
        touched={touched.firstName}
      />

      <Input
        label={t.lastName}
        type="text"
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
        errors={errors.lastName}
        touched={touched.lastName}
      />

      <Input
        label={t.email}
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        errors={errors.email}
        touched={touched.email}
      />

      <fieldset>
        <legend>{t.additionalGuests}:</legend>
        <RadioButtonGroup
          id="additionalGuests"
          className="form-item"
          label=""
          value={values.additionalGuests}
          error={(errors.additionalGuests && touched.additionalGuests) ? errors.additionalGuests : ''}
          touched={touched.additionalGuests}
        >
          <Field
            component={RadioButton}
            name="additionalGuests"
            id="Yes"
            label="Yes"
          />
          <Field
            component={RadioButton}
            name="additionalGuests"
            id="No"
            label="No"
          />
        </RadioButtonGroup>
        {values.additionalGuests === 'Yes' &&
          <TextArea
            name="guests"
            label={t.addAdditionalGuests}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.guests}
            errors={errors.guests}
            touched={touched.guests}
          />
        }
      </fieldset>

      <fieldset>
        <legend>{t.welcomeDinner}:</legend>
      <RadioButtonGroup
        id="welcomeDinner"
        className="form-item"
        label=""
        value={values.welcomeDinner}
        error={(errors.welcomeDinner && touched.welcomeDinner) ? errors.welcomeDinner : ''}
        touched={touched.welcomeDinner}
      >
        <Field
          component={RadioButton}
          name="welcomeDinner"
          id="Yes"
          label="Yes"
        />
        <Field
          component={RadioButton}
          name="welcomeDinner"
          id="No"
          label="No"
        />
      </RadioButtonGroup>

      {values.welcomeDinner === 'Yes' &&
        <React.Fragment>
          <Input
            name="dinnerGuests"
            label={t.numberGuests}
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dinnerGuests}
            errors={errors.dinnerGuests}
            touched={touched.dinnerGuests}
          />
          <TextArea
            name="dinnerRestriction"
            label={t.dietaryRestrictions}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dinnerRestriction}
            errors={errors.dinnerRestriction}
            touched={touched.dinnerRestriction}
          />
        </React.Fragment>
      }
      </fieldset>

      <fieldset>
        <legend>{t.ceremony}:</legend>
        <RadioButtonGroup
          id="ceremony"
          className="form-item"
          label=""
          value={values.ceremony}
          error={(errors.ceremony && touched.ceremony) ? errors.ceremony : ''}
          touched={touched.ceremony}
        >
          <Field
            component={RadioButton}
            name="ceremony"
            id="Yes"
            label="Yes"
          />
          <Field
            component={RadioButton}
            name="ceremony"
            id="No"
            label="No"
          />
        </RadioButtonGroup>

        {values.ceremony === 'Yes' &&
          <React.Fragment>
            <Input
              name="ceremonyGuests"
              label={t.numberGuests}
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ceremonyGuests}
              errors={errors.ceremonyGuests}
              touched={touched.ceremonyGuests}
            />
            <TextArea
              name="ceremonyRestriction"
              label={t.dietaryRestrictions}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ceremonyRestriction}
              errors={errors.ceremonyRestriction}
              touched={touched.ceremonyRestriction}
            />
          </React.Fragment>
        }
      </fieldset>

      <TextArea
        name="commentary"
        label={t.additionalComments}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.commentary}
        errors={errors.commentary}
        touched={touched.commentary}
      />

      <button
        type="submit"
        disabled={!dirty || isSubmitting}
      >
        {t.submit}
      </button>

    </form>
  )}
  </Formik>;
};

const getENLabels = () => ({
  sending: 'Sending....',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  additionalGuests: 'Additional guests?',
  addAdditionalGuests: 'Add the guest names separated by comma',
  welcomeDinner: 'I will attend the Welcome Dinner on January 18, 2020',
  numberGuests: 'Total number of guests',
  dietaryRestrictions: 'Dietary restrictions',
  ceremony: 'Ceremony and Reception: January 19, 2020 at Tupper Manor',
  additionalComments: 'Additional Comments',
  submit: 'Submit',
});
const getESLabels = () => ({
  sending: 'Enviando....',
  firstName: 'Nombre',
  lastName: 'Apellido',
  email: 'Email',
  additionalGuests: 'Invitados addicionales',
  addAdditionalGuests: 'Agregue los nombres de invitados adicionales separados por comas',
  welcomeDinner: 'Asistiré a la cena de bienvenida el 18 de enero de 2020',
  numberGuests: 'Total numbero de invitados',
  dietaryRestrictions: 'Restricciones dietarias',
  ceremony: 'Ceremonia y recepción: 19 de enero de 2020 en Tupper Manor',
  additionalComments: 'Comentarios Adicionales',
  submit: 'Enviar',
});

const validation = (values, lang) => {

  const requiredText = (lang === 'en') ? 'Required' : 'Requerido';
  let errors = {};
  if (!values.firstName || values.firstName.trim().length === 0) errors.firstName = requiredText;
  if (!values.lastName || values.lastName.trim().length === 0) errors.lastName = requiredText;
  if (!values.email || values.email.trim().length === 0) errors.email = requiredText;

  if (!values.additionalGuests) errors.additionalGuests = requiredText;
  if (values.additionalGuests && values.additionalGuests === 'Yes' && !values.guests) {
    errors.guests = requiredText;
  }

  if (!values.welcomeDinner) errors.welcomeDinner = requiredText;
  if (values.welcomeDinner && values.welcomeDinner === 'Yes') {
    if (!values.dinnerGuests) errors.dinnerGuests = requiredText;
  }

  if (!values.ceremony) errors.ceremony = requiredText;
  if (values.ceremony && values.ceremony === 'Yes') {
    if (!values.ceremonyGuests) errors.ceremonyGuests = requiredText;
  }

  return errors;
};