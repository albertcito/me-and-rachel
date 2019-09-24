import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import { Formik, Field } from 'formik';
import { RadioButtonGroup, RadioButton } from './RadioButtonGroup';
import Input from './Input';
import TextArea from './TextArea';
import './index.scss';

const uniqueID = uuidv4();
export default function RSVP({lang}) {

  const [response, setResponse] = useState({
    errors: null,
    sentSuccess: false,
  });

  const resetResponse = () => {
    setResponse({
      errors: null,
      sentSuccess: false,
    })
  };

  const windowTitle = (lang === 'en') ? 'RSVP' : 'Confirme su presencia';
  useEffect(() => {
    document.title = windowTitle + ' | Albert <3 Rachel';
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [windowTitle]);

  const onSubmit = (values, { setSubmitting }) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const url = 'https://script.google.com/macros/s/AKfycbwleMZP-ZCFODL6pCzTCWfwSiX4XPAw-lmQG69kJpwp5dvrRp2C/exec';

    values.uniqueID = uniqueID;
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
        (lang === 'en') ? <TextEN onClick={resetResponse} /> : <TextES  onClick={resetResponse} />
        :
        <Form onSubmit={onSubmit} lang={lang} />
      }
    </div>
  </div>);
}

const TextEN = ({onClick}) => <div className="thank-text">
  Thank you for joining us.
  We are really happy to know
  you are going be part of our wedding.
  <button onClick={onClick} className="blue">
    Add a new guest
  </button>
</div>;

const TextES = ({onClick}) => <div className="thank-text">
  Gracias por acompañarnos.
  Estamos muy contentos de saber que
  vas a ser parte de nuestra boda.
  <button onClick={onClick} className="blue">
    Agregar un nuevo invitado
  </button>
</div>;


const Form = ({onSubmit, lang}) => {

  const t = (lang === 'en') ? getENLabels() : getESLabels();
  return <Formik
      initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      welcomeDinner: '',
      ceremony: '',
      mealChoice: '',
      dietNeeds: '',
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
          id="yesWelcomeDinner"
          label={t.yes}
        />
        <Field
          component={RadioButton}
          name="welcomeDinner"
          id="noWelcomeDinner"
          label={t.no}
        />
      </RadioButtonGroup>
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
            label={t.yes}
          />
          <Field
            component={RadioButton}
            name="ceremony"
            id="No"
            label={t.no}
          />
        </RadioButtonGroup>

        {values.ceremony === 'Yes' &&
          <React.Fragment>
            <fieldset>
              <legend>{t.mealChoice}</legend>
              <RadioButtonGroup
                id="mealChoice"
                className="form-item"
                label=""
                value={values.mealChoice}
                error={(errors.mealChoice && touched.mealChoice) ? errors.mealChoice : ''}
                touched={touched.mealChoice}
              >
                <Field
                  component={RadioButton}
                  name="mealChoice"
                  id="Beef"
                  label={t.beef}
                />
                <Field
                  component={RadioButton}
                  name="mealChoice"
                  id="Fish"
                  label={t.fish}
                />
                <Field
                  component={RadioButton}
                  name="mealChoice"
                  id="Vegetarian"
                  label={t.vegetarian}
                />
              </RadioButtonGroup>
            </fieldset>
            <TextArea
              name="dietNeeds"
              label={t.dietaryRestrictions}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dietNeeds}
              errors={errors.dietNeedsº}
              touched={touched.dietNeeds}
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
        className="blue"
        disabled={!dirty || isSubmitting}
      >
        {t.submit}
      </button>

        {(Object.keys(errors).length > 0) &&
        <div className="form-item-error">{t.requiredFields}</div>
        }

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
  beef: 'Beef',
  vegetarian: 'Vegetarian',
  fish: 'Fish',
  yes: 'Yes',
  no: 'No',
  mealChoice: 'Select your meal choice',
  requiredFields: "Please, fill required fields",
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
  beef: 'Carne',
  vegetarian: 'Vegetariano',
  fish: 'Pescado',
  yes: 'Sí',
  no: 'No',
  mealChoice: 'Selecciona tu la opción para la cena',
  requiredFields: "Por favor, complete los campos requeridos",
});

const validation = (values, lang) => {

  const requiredText = (lang === 'en') ? 'Required' : 'Requerido';
  let errors = {};
  if (!values.firstName || values.firstName.trim().length === 0) errors.firstName = requiredText;
  if (!values.lastName || values.lastName.trim().length === 0) errors.lastName = requiredText;

  if (!values.welcomeDinner) errors.welcomeDinner = requiredText;

  if (!values.ceremony) errors.ceremony = requiredText;
  if (values.ceremony && values.ceremony === 'Yes') {
    if (!values.mealChoice) errors.mealChoice = requiredText;
  }

  return errors;
};

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (char) => {
    const shiftVal = (15 >> (char/4));
    const randValue = crypto.getRandomValues(new Uint8Array(1))[0];
    const param = randValue & shiftVal;
    return (char ^ param).toString(16);
  });
}
