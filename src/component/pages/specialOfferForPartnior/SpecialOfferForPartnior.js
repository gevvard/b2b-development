import React from 'react';
import css from "./specialOfferForPartnior.module.scss"
const SpecialOfferForPartnior = () => {
  return (
    <div className={css.specialOfferForPartnerContainer} >
      <div className={css.titleContainer} >
        <h1 className={css.title} >Special offer from Bitrix24 partner</h1>
        <p className={css.information} >
          You do not need to look for dozens of services for various processes and <br/>
          integrate them with each other - everything you are looking for is already in <br/>
          Bitrix24, ready to work at the start, at a low price</p>
      </div>
      <div  className={css.options} >
        <div className={css.option1} >
        <div   className={css.picture}>
         <span className={css.price} > 1 999 ₽/мес.</span>
        </div>
         <div>
           <h1 className={css.title} >Set up of «Basic» <br/>
             License</h1>
           <p className={css.information} >
             The basic tariff plan contains a set <br/>
             of tools for organizing an online <br/>
             office. As part of the tariff, a license <br/>
             is provided for 5 users and 24 GB of <br/>
             cloud disk space, while basic CRM <br/>
             system options, task and project <br/>
             management are available.
           </p>
           <button className={css.button1} >ORDER</button>
         </div>
        </div>
        <div className={css.option2} >
          <div   className={css.picture}>
            <span className={css.price} > 4 999 ₽/мес.</span>
          </div>
          <h1 className={css.title} >Set up of «Standart» <br/>
            License</h1>
          <p className={css.information} >Standard — the main Bitrix24 CRM <br/>
            tariff plan. The subscription allows <br/>
            you to organize the work of up to 50 <br/>
            employees of the company and <br/>
            offers 100 GB of cloud storage. <br/>
            Standard contains a set of <br/>
            management tools.</p>
          <button className={css.button1} >ORDER</button>
        </div>
        <div className={css.option3} >
          <div   className={css.picture}>
            9999 ₽/мес.
          </div>
          <h1 className={css.title} >Setup of  «Professional» <br/>
            License</h1>
          <p className={css.information} >A powerful set of tools for large <br/>
            companies that allows you to <br/>
            automate the work of the sales <br/>
            department and build relationships <br/>
            with customers. Professional <br/>
            Bitrix24 allows you to add up to 100 <br/>
            users and includes 1 TB of cloud <br/>
            storage space.</p>
          <button className={css.button1} >ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferForPartnior;