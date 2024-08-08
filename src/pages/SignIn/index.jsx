import './style.css';
import Field from '../../components/Field';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';

const SignIn = () =>{
  return(
    <div className="wrapper">
      <div className='row'>
        <div className='col-lg-6 d-flex align-items-center justify-content-center text-align-center p-5'>
          <div>
            <h1>Sign In</h1>
            <div>
              <Field title="Email" type="normal"/>
              <Field title="Password" type="password"/>
            </div>
            <Button title="LOGIN" type="dark"/>
            <div className='d-flex justify-content-center'>
              <span className='mt-5'>Don't Have An Account ? <Link to="/signup">Sign Up</Link></span>
            </div>
          </div>
        </div>
        <div className='right_img col-lg-6'></div>
      </div>
    </div>
  );
}

export default SignIn;