import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import InputTextField from 'app/common/components/Form/InputTextField/InputTextField';
import DatePickerField from 'app/common/components/Form/DatePickerField';
import SelectField from 'app/common/components/Form/SelectField';
import validationService from 'app/core/service/validationService';
import { CalendarModeValuesEnum } from 'app/core/enum/common/calendarModeValuesEnum';
import { ErrorMessage } from '@hookform/error-message';
import ErrorMsg from '../../../Form/ErrorMsg';
import { AiOutlinePlusCircle, AiFillDelete } from 'react-icons/ai'; 
import { BookingStep1Form, BookingStep1Props } from './types';

const BookingStep1: React.FC<BookingStep1Props> = (props) => {
  const selectOptions = [{
      text: '17:00',
      value: '17:00',
    }, {
      text: '18:00',
      value: '18:00',
    }, {
      text: '19:00',
      value: '19:00',
    }, {
      text: '20:00',
      value: '20:00',
    }
  ]

  const { getValues, setValue } = useFormContext<BookingFormValues>();

  const schema = Yup.object().shape({
    date: Yup.string().required(),
    time: Yup.string().required(),
    period: Yup.string().concat(validationService.onlyAfterDateSchema),
    booker: Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().required().concat(validationService.cellphoneNumbersSchema),
      birthday: Yup.string().required().concat(validationService.birthdaySchema)
    }),
    others: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required(),
        birthday: Yup.string().required().concat(validationService.birthdaySchema)
      })
    ),
  });

  const reactHookForm = useForm<BookingStep1Form>({
    defaultValues: {
      date: getValues('date'),
      time: getValues('time'),
      booker: {
        id: getValues('booker.id'),
        name: getValues('booker.name'),
        birthday: getValues('booker.birthday'),
        phone: getValues('booker.phone')
      },
      others: []
    },
    /** @ts-ignore */
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const period = reactHookForm.getValues('date') + ' ' + reactHookForm.getValues('time')
    reactHookForm.setValue('period', period)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reactHookForm.watch('date'), reactHookForm.watch('time')])

  const handleAddPeople = () => {
    const copiedOthers = reactHookForm.getValues('others')?.map(item => {
      return { ...item }
    }) ?? []
    copiedOthers.push({
      id: copiedOthers.length,
      name: '',
      phone: '',
      birthday: ''
    });
    reactHookForm.setValue('others', copiedOthers);
  };

  const handleSubmit = () => {
    const period = reactHookForm.getValues('period');
    const bookerId = reactHookForm.getValues('booker.id');
    const bookerName = reactHookForm.getValues('booker.name');
    const bookerPhone = reactHookForm.getValues('booker.phone');
    const bookerBirthday = reactHookForm.getValues('booker.birthday');
    const copiedOthers = reactHookForm.getValues('others')?.map(item => {
      return { ...item }
    }) ?? []

    setValue('period', period)
    setValue('booker.id', bookerId)
    setValue('booker.name', bookerName)
    setValue('booker.phone', bookerPhone)
    setValue('booker.birthday', bookerBirthday)
    setValue('others', copiedOthers)
    props.setStep(1)
  };

  return (
    <form
      className="d-flex flex-column align-items-center justify-content-between h-100 p-5"
      onSubmit={reactHookForm.handleSubmit(handleSubmit)}
      autoComplete="off"
    >
      <div className="booking-step1-content">
        <p className="title-main">Pick your date and time</p>
        <div className="w-100 d-flex mb-5">
          <DatePickerField
            label="date"
            name="date"
            asterisk
            mode={CalendarModeValuesEnum.Date}
            control={reactHookForm.control}
            errors={reactHookForm.formState.errors}
          />
          <SelectField
            label="time"
            options={selectOptions}
            asterisk
            {...reactHookForm.register('time')}
            errors={reactHookForm.formState.errors}
          />
        </div>
        <ErrorMessage
          name="period"
          errors={reactHookForm.formState.errors}
          render={() => <ErrorMsg>Your date can not be before system time</ErrorMsg>}
        />
        <p className="title-main">Booker's information</p>
        <div className="w-100 d-flex mb-5">
          <InputTextField
            label="username"
            type="text"
            asterisk
            {...reactHookForm.register('booker.name')}
            errors={reactHookForm.formState.errors}
          />
          <DatePickerField
            label="birthday"
            name="booker.birthday"
            asterisk
            mode={CalendarModeValuesEnum.Birthday}
            control={reactHookForm.control}
            errors={reactHookForm.formState.errors}
          />
          <InputTextField
            label="phone"
            type="tel"
            asterisk
            {...reactHookForm.register('booker.phone')}
            errors={reactHookForm.formState.errors}
          />
        </div>
        <p className="title-main">Other's information</p>
        {
          reactHookForm.watch('others')?.map((person, index) => (
            <div key={person.id} className="w-100 mb-5 others">
              <div className="w-100 d-flex justify-content-between">
                <p className="font-md color-main m-1">Customer {index + 1}</p>
                <div className="m-1 delete">
                  <AiFillDelete />
                </div>
              </div>
              <div className="d-flex">
                <InputTextField
                  label="username"
                  type="text"
                  asterisk
                  {...reactHookForm.register(`others.${person.id}.name`)}
                  errors={reactHookForm.formState.errors}
                />
                <DatePickerField
                  label="birthday"
                  name={`others.${person.id}.birthday`}
                  asterisk
                  mode={CalendarModeValuesEnum.Birthday}
                  control={reactHookForm.control}
                  errors={reactHookForm.formState.errors}
                />
                <InputTextField
                  label="phone"
                  type="tel"
                  asterisk={false}
                  {...reactHookForm.register(`others.${person.id}.phone`)}
                />
              </div>
            </div>
          ))
        }
        <div className="d-flex justify-content-center my-5">
          <button type="button" onClick={handleAddPeople}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button
          type="submit"
          className="text-uppercase button-main"
        >
          next
        </button>
      </div>
    </form>
  )
}

export default BookingStep1;