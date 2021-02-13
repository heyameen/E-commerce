import './registration.scss';

import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const RegistrationPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp/>
  </div>
);

export default RegistrationPage;