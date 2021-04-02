import React, { useState } from 'react'
import { FormContextProvider, useFormHook } from './FormContext';
import InputField from './InputField';
const Form=props=>{
    let form = useFormHook();
    const [formValue, setformValue] = useState({
        name:'musaib',
        lname:''
      });
    return(
      <>
        <InputField
        name="name"
        type="text"
        value={formValue.name}
        // ref={nameRef}
        disable={false}
        placeholder="Name"
        maxLength={9}
        required
        maxLength="13"
      />
      <InputField
      name="lname"
      type="text"
      value={formValue.lname}
      // ref={nameRef}
      disable={false}
      placeholder="Name"
      maxLength={9}
      required
      maxLength="13"
    />
    </>
    );
};

const FormInput = props => {
    return (
      <FormContextProvider>
        <Form {...props}></Form>
      </FormContextProvider>
    );
  };
  
  export default FormInput;
  
