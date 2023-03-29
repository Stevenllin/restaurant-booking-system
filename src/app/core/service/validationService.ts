import * as Yup from 'yup';

const cellphoneNumbersRegExp = /[0]{1}[9]{1}[0-9]{8}/;

const cellphoneNumbersSchema = Yup.string()
  .max(10, 'the length of your phone number can not larger than 10')
  .matches(cellphoneNumbersRegExp, { message: 'phone format should be 09xxxxxxxx', excludeEmptyString: true });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  cellphoneNumbersSchema
}
  