import Avatar from '../Avatar';
import {useState} from 'react';
import './style.css'

const Tab = () => {
  const [tab,setTab] = useState([true,false]);
  const [content,setContent] = useState([false,false]);
  const clickTab = (key) => {
    let temp = [false,false];
    temp[key]= true;
    setTab(temp);
  }
  const clickContent = (key) => {
    let temp = [false,false];
    temp[key]= true;
    setContent(temp);
  }
  let menu = ["Recent","Contacts"];
  let userinfo=[
    {
      path : "man/man2.png",
      name:"Michael",
      message:"Yeah, we all loved it!",
      time:"7:48 PM",
      status:"activated"
    },
    {
      path : "woman/woman3.png",
      name:"Julia",
      message:"We need to re-asses our strategy",
      time:"Sep 21",
      status:"off"
    },
  ]
  
  return(
    <div className="tab-wrapper">
      <div className="tab-header d-flex">
        {
          menu.map((item, key) => {
            return(
              <div className="tab-btn" key={key} onClick={() => clickTab(key)}>
                <div className={tab[key] ? "tab-text-clicked" : "tab-text"}>{item}</div>
                <div className={tab[key] ? "tab-clicked" : "tab"} />
              </div>
            )
          })
        }
      </div>
      <div className="tab-main">
        {
          userinfo.map((item , key)=>{
            return(
              <div className="tab-item d-flex" key ={key} onClick={() => clickContent(key)}>
                <div className={content[key] ? "tab-clicked2" : "tab-2"}/>
                <div className="tab-content d-flex justify-content-between">
                  <div className='tab-item-content d-flex align-items-center'>
                    <Avatar path={item.path} type={item.status}/>
                    <div className="tab-item-message">
                      <div>{item.name}</div>
                      <div>{item.message}</div>
                    </div>
                  </div>
                  <div className="tab-item-time d-flex align-items-center">
                    <div className="tab-item-time-content">
                      <div>{item.time}</div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Tab;