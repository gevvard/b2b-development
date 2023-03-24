import React from 'react';
import css from "./automation.module.scss"

const Automation = () => {
  return (
    <div className={css.automationContainer} >
      <div className={css.automationInfo} >
        <h1 className={css.automationInfoTitle} >Automation</h1>
        <p className={css.automationInformation} >Minimum effort, maximum efficiency - this is true both for  <br/>
          working with business automation tools and for setting them up</p>
        <div>
          <h2>Robots and triggers</h2>
          <p>Set a task, schedule a call or a meeting, change the owner or the <br/>
            stage of the transaction, send an email or SMS, remind the person <br/>
            in charge - this is just a part of what you can set up using robots <br/>
            and triggers in CRM and Tasks.</p>
        </div>
        <div>
          <h2>Business processes</h2>
          <p>The tool simplifies the process of coordinating documents within <br/>
            the company. All vacation and business trip applications, invoices <br/>
            and contracts automatically go through the chain of necessary <br/>
            approvals in a matter of minutes. And you can configure it without <br/>
            code in a convenient editor.</p>
        </div>
        <div>
          <h2>RPA (Business Robotization)</h2>
          <p>The built-in kanban-based editor allows you to create an approval <br/>
            chain in just a few minutes without code. The document will go <br/>
            through all those responsible, who will receive notifications and will <br/>
            not miss the approval queue.</p>
        </div>
        <div className={css.btnContainer} >
          <button>ORDER SET UP</button>
        </div>
      </div>
      <div className={css.automationImg} >
        <img src={"https://cdn-ru.bitrix24.ru/b6881111/landing/596/596951b786b5ac036ac3d62b476891c7/img_tools_05_1x.png"} />
      </div>
    </div>
  );
};

export default Automation;