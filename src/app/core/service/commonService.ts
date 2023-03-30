import moment from 'moment';

const multiply = (number1: number, number2: number) => number1 * number2

const convertAge = (birthday: string) => {
  return moment().diff(birthday, 'years');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  multiply,
  convertAge
}