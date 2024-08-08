import './style.css'

const Field = ({title , type}) =>{
  return(
    <div class="col-75">
      <span>{title}</span>
      <input type={type === "normal" ? "text" : "password"} name={title} placeholder={`Input your ${title}`}/>
    </div>
  );
}

export default Field;