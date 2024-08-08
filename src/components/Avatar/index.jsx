import './style.css'

const Avatar = ({path , type}) =>{
  let basePath = "./assets/img/avatar/";
  return(
    <div>
      <img src={basePath+path} className="avatar" alt="none" />
      <div className={!type ? "d-none" : `${type}`}>
        <div className={type === "activated" ? "up-act" : "up-off"}/>
        <div className={type === "activated" ? "under-act" : "under-off"}/>
      </div>
    </div>
  );
}

export default Avatar;