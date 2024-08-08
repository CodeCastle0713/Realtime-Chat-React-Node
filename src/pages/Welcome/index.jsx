import './style.css';
import {Link} from 'react-router-dom';
import Button from '../../components/Button';

const Welcome = () =>{
  let name = "Andrew";
  
  return(
    <div className="wrapper">
      <div className='container row'>
        <div className='welcome_left col-lg-6 d-flex align-items-center justify-content-center text-align-center'>
          <h1>Welcome {name} ! </h1>
            <Button title="CHAT NOW" type="light" size="small"/>
        </div>
        <div className='right_img col-lg-6'></div>
      </div>
    </div>
  );
}

export default Welcome;