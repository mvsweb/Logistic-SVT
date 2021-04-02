import React, { useEffect, useRef, useState } from 'react';
import { useFormHook } from './FormContext';

const InputField=props=>{
    const [value, setValue] = useState();
  const [disable, setDisable] = useState(false);
  const [clearValue, setClearValue] = useState();
  let inputRef=useRef();
    let form=useFormHook();
    useEffect(() => {
        if (!form) return;
        if (props.value === '' && value !== undefined) setClearValue(!clearValue);
        setValue(props.value);
    
        //form.setValue(props.name, props.value);
        //form.validate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.value]);
      useEffect(() => {
        setDisable(props.disable);
      }, [props.disable]);
      useEffect(() => {
        if (!form) return;
    
        form.setValue(props.name, value);
        // if (form.getState().formReady) form.validate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value]);
      let onValueChange = e => {
        if (form) form.setIsDirty(true);
        let value = e.target.value;
        setValue(value);
        console.log(form.getState());
      }
return(
    <input
          type='text'
          id={props.name}
          name={props.name}
          onChange={onValueChange}
          value={value}
        //   onBlur={() => onBlur()}
          autoComplete="off"
          noValidate={true}
        //   onFocus={() => onFocusIn()}
          readOnly={props.readOnly}
          disabled={disable}
          maxLength={props.maxLength}
        //   onMouseEnter={() => showTooltip()}
        //   onMouseLeave={() => hideTooltip()}
          ref={inputRef}
          onKeyDown={props.onKeyDown}
          autoFocus={props.autofocus}
        // tabindex={props.disabled && '-1'}
        />
)
}
export default InputField;