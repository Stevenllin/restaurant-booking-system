import React from 'react';
import { useForm } from 'react-hook-form';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import InputTextField from 'app/common/components/Form/InputTextField/InputTextField';
import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import { BookingStep1Form, BookingStep1Props } from './types';

const BookingStep1: React.FC<BookingStep1Props> = (props) => {
  const { getValues, setValue } = useFormContext<BookingFormValues>();
  const reactHookForm = useForm<BookingStep1Form>({
    defaultValues: {
      date: getValues('date'),
      booker: {
        id: getValues('booker.id'),
        name: getValues('booker.name'),
        phone: getValues('booker.phone')
      },
      others: [{
        id: 0,
        name: 'steven',
        phone: '0978030930',
        birthday: '1995-02-15'
      }]
    }
  });

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
    const bookerId = reactHookForm.getValues('booker.id');
    const bookerName = reactHookForm.getValues('booker.name');
    const bookerPhone = reactHookForm.getValues('booker.phone');
    const copiedOthers = reactHookForm.getValues('others')?.map(item => {
      return { ...item }
    }) ?? []

    setValue('booker.id', bookerId)
    setValue('booker.name', bookerName)
    setValue('booker.phone', bookerPhone)
    setValue('others', copiedOthers)
    props.setStep(1)
  };

  return (
    <form className="d-flex flex-column align-items-center justify-content-between h-100 p-5" onSubmit={reactHookForm.handleSubmit(handleSubmit)}>
      {/* <p className="font-md color-white">Basic Information</p> */}
      <div className="booking-step1-content">
        <p className="title-main">Booker's information</p>
        <div className="w-100 d-flex mb-2">
          <InputTextField
            label="username"
            type="text"
            asterisk
            {...reactHookForm.register('booker.name')}
          />
          <InputTextField
            label="phone"
            type="tel"
            asterisk
            {...reactHookForm.register('booker.phone')}
          />
        </div>
        <p className="title-main">Other's information</p>
        {
          reactHookForm.watch('others')?.map((person) => (
            <div key={person.id} className="w-100 d-flex mb-2">
              <InputTextField
                label="username"
                type="text"
                asterisk
                {...reactHookForm.register(`others.${person.id}.name`)}
              />
              <InputTextField
                label="phone"
                type="tel"
                asterisk
                {...reactHookForm.register(`others.${person.id}.phone`)}
              />
            </div>
          ))
        }
        <div className="d-flex justify-content-center">
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