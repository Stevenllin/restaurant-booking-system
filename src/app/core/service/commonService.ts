import moment from 'moment';

const multiply = (number1: number, number2: number) => number1 * number2

const convertAge = (birthday: string) => {
  return moment().diff(birthday, 'years');
}

const checkBirthday = (birthday: string) => {
  const todayMonth = moment().month() + 1
  const birthdayMonth = moment(birthday).month() + 1;
  return todayMonth === birthdayMonth
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  multiply,
  convertAge,
  checkBirthday
}