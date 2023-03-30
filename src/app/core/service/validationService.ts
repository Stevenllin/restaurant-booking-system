import * as Yup from 'yup';
import moment from 'moment';

const cellphoneNumbersRegExp = /[0]{1}[9]{1}[0-9]{8}/;

const cellphoneNumbersSchema = Yup.string()
  .max(10, 'the length of your phone number can not larger than 10')
  .matches(cellphoneNumbersRegExp, { message: 'phone format should be 09xxxxxxxx', excludeEmptyString: true });

const birthdaySchema = Yup.string()
  .test({
    name: 'beforeDateSchema',
    test: function (value) {
      const error = { message: '' };
      if (value && moment(value).isAfter()) {
        error.message = 'Your birthday can not be after system date';
      }
      return error.message ? this.createError({ message: error.message }) : true;
    }
  });

const onlyAfterDateSchema = Yup.string()
  .test({
    name: 'afterDateSchema',
    test: function (value) {
      const error = { message: '' };
      if (value && moment(value).isBefore()) {
        error.message = 'Your date can not be before system time';
      }
      return error.message ? this.createError({ message: error.message }) : true;
    }
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  cellphoneNumbersSchema,
  birthdaySchema,
  onlyAfterDateSchema
}
  