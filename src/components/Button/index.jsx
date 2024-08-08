import './style.css'

const Button = ({title , type , size}) =>{
  return(
    <div className={`btn ${type} ${size}`}>
      {title}
    </div>
  );
}

export default Button;