import * as yup from 'yup';

export const emailListValidationSchema = yup.object().shape({
  email: yup.string().required(),
  client_id: yup.string().nullable(),
});
