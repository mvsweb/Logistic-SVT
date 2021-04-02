import React from 'react';
import { Container } from 'react-bootstrap';
import FormInput from './FormInput';
const  HomeLayout=()=>{
return (
    <Container
        fluid={true}
      >
          <div class="btn-big red"> <i class="fa fa-wrench fa-2x"></i> <span class="label bottom">Logistics</span> </div>
          <div class="btn-big blue"> <i class="fa fa-envelope fa-2x"></i> <span class="label bottom">Mail</span> </div>
          <div class="btn-big blue"> <i class="fa fa-user fa-2x"></i> <span class="label bottom">User</span> </div>
          <div class="btn-small green last"> <i class="fa fa-wrench fa-2x"></i> <span class="label bottom">Setting</span> </div>
          <FormInput/>
          </Container>
);
}
export default HomeLayout;