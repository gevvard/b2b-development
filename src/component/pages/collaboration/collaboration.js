import React from 'react';
import css from "./collaboration.module.scss"
const Collaboration = () => {
  return (
    <div className={css.collaborationContainer} >
      <div className={css.collaborationInfo} >
        <h1 className={css.collaborationInfoTitle} >Collaboration</h1>
        <p className={css.collaborationInformation} >Communications, documents and workflows - everything for <br/>
          organizing a full-fledged online office</p>
        <div>
          <h2>Videocalls HD</h2>
          <p>Colleagues, customers and contractors are connected with high <br/>
            quality video and audio, stable connection and support for group <br/>
            calls of up to 48 people. It's easy to start a call right from a task, a <br/>
            calendar event, or a post in Company News.</p>
        </div>
        <div>
          <h2>Messenger</h2>
          <p>Unlimited work group and individual chats at your fingertips - as <br/>
            well as Open lines, conversations with external users, file sharing <br/>
            and notifications</p>
        </div>
        <div>
          <h2>Working hours and reports</h2>
          <p>Start, stop, end your working day in one click. Keep track of <br/>
            working hours and create reports on the fly.</p>
        </div>
        <div className={css.btnContainer} >
          <button>ORDER SET UP</button>
        </div>
      </div>
      <div className={css.collaborationImg} >
        <img src={"https://cdn-ru.bitrix24.ru/b6881111/landing/3c6/3c607bb0c841dde657928e8962421b93/img_tools_01_1x.png"} />
      </div>
    </div>
  );
};

export default Collaboration;