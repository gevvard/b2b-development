import React from 'react';
import css from "./crm.module.scss"
const Crm = () => {
  return (
    <div className={css.crmContainer}>
      <div className={css.crmImg} >
        <img src="https://cdn-ru.bitrix24.ru/b6881111/landing/dfa/dfaaafeb60f703bb569c3e7f96e520ec/img_tools_02_1x.png" alt=""/>
      </div>
      <div className={css.crmInfo} >
        <h1 className={css.crmInfoTitle} >CRM</h1>
        <p className={css.crmInformation} >Telephony, mail, social networks, advertising accounting,<br/>
          warehouses, payment and delivery - it has everything</p>
        <div>
          <h2>Clients, deals, leads, commercial offers</h2>
          <p>
            All necessary CRM entities. Replenish and refine your customer <br/>
            base, conduct sales, save correspondence and calls with customers <br/>
            in CRM.
          </p>
        </div>
        <div>
          <h2>Marketing</h2>
          <p>Send email and sms compaigns, create advertising campaigns,<br/>
            track the effectiveness of advertising channels in End-to-End <br/>
            Analytics. For you - everything you need to attract customers.</p>
        </div>
        <div>
          <h2>Inventory, payment and delivery</h2>
          <p>Everything you need for sales is already in CRM. Keep inventory <br/>
            records, sell goods and control stocks. Issue an invoice for payment <br/>
            and arrange delivery directly from the transaction card - the client <br/>
            will be able to pay directly in the dialogue with your company</p>
        </div>
        <div className={css.btnContainer} >
          <button>ORDER SET UP</button>
        </div>
      </div>
    </div>
  );
};

export default Crm;