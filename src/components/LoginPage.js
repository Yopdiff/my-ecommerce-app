import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';


function LoginPage( props ) {
  return (
    <div> 
      <Header />
      <LoginForm  onLogin={props.onLogin} />
      <Footer />
    </div>
  );
}

export default LoginPage;