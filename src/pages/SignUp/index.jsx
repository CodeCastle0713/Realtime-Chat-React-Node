import './style.css';
import Field from '../../components/Field';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';

const SignUp = () =>{
  return(
    <div className="wrapper">
      <div className='row'>
      <div className='left_img col-lg-6'></div>
        <div className='col-lg-6 d-flex align-items-center justify-content-center p-5'>
          <div>
            <h1>Sign Up</h1>
            <div>
              <Field title="Email" type="normal"/>
              <Field title="Password" type="password"/>
              <Field title="Name" type="name"/>
            </div>
            <Button title="SIGN UP" type="light"/>
            <div className='d-flex justify-content-center'>
              <span className='mt-5'>Already Have An Account ? <Link to="/signin">Sign In</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;