import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Container,
  InputName,
  InputBox,
  SubmitBtn,
} from './Bookform-styled';

export const Bookform = ({ submitForm }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={submitForm}>
      <Container>
        <InputName>
          Name
          <InputBox
            type="text"
            name="name"
            required
            placeholder="jason Statham"
          />
        </InputName>
        <InputName>
          Number
          <InputBox
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+380991234567"
            required
          />
        </InputName>
        <SubmitBtn type="submit">Add constact</SubmitBtn>
      </Container>
    </Formik>
  );
};

Bookform.propTypes = {
  submitForm: PropTypes.func,
};