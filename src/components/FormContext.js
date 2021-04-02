import React, { createContext, useContext, useMemo } from 'react';

let FormContext=createContext();
FormContext.displayName="FormContextHook";
export function useFormHook(){
    let formContext=useContext(FormContext);
    return formContext;
}
function formReducer(state, action) {
    switch (action.type) {
      case 'ADD_VALIDATOR': {
        let validators = state.validators[action.key];
        state.validators[action.key] = validators !== undefined ? [...validators, action.validator] : [action.validator];
        return state;
      }
      case 'UPDATE_VALUE': {
        state.formValues[action.key] = action.value;
        return state;
      }
      default:
        return state;
    }
  }
let createFormStore = (reducer, fName) => {
    let state = {
        formValues: {},
        formInitialValues: {},
        isValid: false,
        isDirty: false,
        formReady: false,
        mode: '',
      };
      let listners = [];
    let dispatch = action => {
    state = reducer(state, action);
    listners.forEach(listner => listner(state));
  };
  let subScribe = listner => {
    listners.push(listner);
    return () => {
      listners = listners.filter(l => l !== listner);
    };
  };
  let getState = () => {
    return state;
  };
  let setValue = (key, value) => {
    dispatch({
      type: 'UPDATE_VALUE',
      key: key,
      value: value,
    });
  };
  // let updateParentState = (key, childState) => {
  //   //console.log('parent form...');
  //   state.isValid = childState.isValid;
  //   state.formValues = {
  //     ...state.formValues,
  //     [key]: childState.formValues,
  //   };
  //   listners.forEach(listner => listner(state));
  //   //console.log('parent state', state);
  // };
  let setIsDirty = isDirty => {
    state.isDirty = isDirty;
    //listners.forEach(listner => listner(state));
  };
  let setMode = mode => {
    state.mode = mode;
    listners.forEach(listner => listner(state));
  };
  let reset = () => {
    setTimeout(() => {
      state.isDirty = false;
      state.isValid = false;
      listners.forEach(listner => listner(state));
      //console.log(state);
    });
  };
  return {
    state,
    getState,
    dispatch,
    subScribe,
    setValue,
    // updateParentState,
    setIsDirty,
    
    setMode,
    reset,
  };
}

const FormContextProviderHook=props=>{
    const form=useFormHook();
    let formStore=useMemo(()=>{
      console.log('formContext')
        return createFormStore(formReducer,form);
    },[form])
    return <FormContext.Provider value={formStore}>{props.children}</FormContext.Provider>;
}

export const FormContextProvider = React.memo(FormContextProviderHook);
