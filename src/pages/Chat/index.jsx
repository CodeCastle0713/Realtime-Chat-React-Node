import './style.css'
import Avatar from '../../components/Avatar';
import Tab from '../../components/Tab';

const Chat = () => {
  let path = "man/man2.png";
  let name = "Andrew";

  return(
    <div className='chat_wrapper'>
      <div className='chat_inner d-flex'>
        <div className='col-lg-3'>
          <div className='d-flex'>
            <div className='col-lg-6 d-flex align-items-center p-4'>
              <Avatar path={path} />
              <span className='m-2'>{name}</span>
            </div>
            <div className='col-lg-6 d-flex align-items-center'>
              <input type="text" name="search" placeholder="Find People" />
            </div>
          </div>
          <Tab />
        </div>
        <div className='col-lg-9 p-4'>

        </div>
      </div>
    </div>
  );
}

export default Chat;