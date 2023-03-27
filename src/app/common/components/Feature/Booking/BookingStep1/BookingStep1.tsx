import React from 'react';
import { useForm } from 'react-hook-form';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import InputTextField from 'app/common/components/Form/InputTextField/InputTextField';
import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import { BookingStep1Form, BookingStep1Props } from './types';

const BookingStep1: React.FC<BookingStep1Props> = (props) => {
  const { reset, getValues, register, watch, formState, trigger } = useFormContext<BookingFormValues>();
  const reactHookForm = useForm<BookingStep1Form>({
    defaultValues: {
      date: getValues('date'),
      booker: {
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
  const handleSubmit = () => {
    console.log('reactHookForm', reactHookForm.getValues());
    props.setStep(1)
  };
  return (
    <form className="d-flex flex-column align-items-center justify-content-between h-100 p-5" onSubmit={reactHookForm.handleSubmit(handleSubmit)}>
      {/* <p className="font-md color-white">Basic Information</p> */}
      <div className="booking-step1-content">
        <p className="title-main">Booker's information</p>
        <div className="w-100 d-flex mb-4">
          <InputTextField
            label="username"
            type="text"
            asterisk
            {...reactHookForm.register('booker.name')}
          />
          <InputTextField
            label="username"
            type="text"
            asterisk
            {...reactHookForm.register('booker.phone')}
          />
        </div>
        <p className="title-main">Other's information</p>
        {
          reactHookForm.watch('others')?.map((person) => (
            <div key={person.id} className="w-100 d-flex mb-4">
              <InputTextField
                label="username"
                type="text"
                asterisk
                {...reactHookForm.register(`others.${person.id}.name`)}
              />
              <InputTextField
                label="username"
                type="text"
                asterisk
                {...reactHookForm.register(`others.${person.id}.phone`)}
              />
            </div>
          ))
        }
        <div className="d-flex justify-content-center">
          <AiOutlinePlusCircle />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="text-uppercase button-main"
        >
          next page
        </button>
      </div>
    </form>
  )
}

export default BookingStep1;