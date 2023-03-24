import React from 'react';
import css from "./bitrix24.module.scss"
import Collaboration from "../../pages/collaboration/collaboration";
import Crm from "../crm/crm";
import TaskAndProject from "../task and projects/taskAndProject";
import WebsiteBuilder from "../website builder/websiteBuilder";
import Automation from "../automation/automation";
import Table from "../table/table";
import License from "../license/license";
import SpecialOfferForPartnior from "../specialOfferForPartnior/SpecialOfferForPartnior";
import Specialization from "../specialization/specialization";
import Advantages from "../advantages/advantages";
import Implementation from "../implementation/implementation";
import RegistrationForm from "../registrationForm/registrationForm";

const Bitrix24 = () => {
  return (
    <div className={css.container} >
    <h2 className={css.title}>
      Ինչ է bitrix24-ը
    </h2>
      <p className={css.infoText} >Ձեզ հարկավոր չէ տարբեր գործընթացների համար տասնյակ ծառայություններ փնտրել <br/>
        և դրանք ինտեգրել միմյանց հետ. այն ամենը, ինչ փնտրում եք, արդեն Bitrix24-ում է։</p>
      <ul className={css.bitrixCategory} >
        <li>ՀԱՄԱՏԵՂ ԱՇԽԱՏԱՆՔ</li>
        <li>CRM</li>
        <li> ՀԱՆՁՆԱՐԱՐՈՒԹՅՒՈՆԵՐ և ՊՐՈՅԵԿՏՆԵՐ</li>
        <li>ԿԱՅՔԵՐԻ ԿԱՌՈՒՑՈՒՄ</li>
        <li>ԱՎՏՈՄԱՏԱՑՈՒՄԵՐ</li>
      </ul>
      <img  className={css.bitrix24img} src="https://cdn-ru.bitrix24.ru/b6881111/landing/d93/d93fa40720ddc63bc88f33753fe7a8f9/img_screen_b24_main_1x.png" />

       <Collaboration/>
       <Crm/>
      <TaskAndProject/>
      <WebsiteBuilder/>
      <Automation/>
      <Table/>
      <License/>
      <SpecialOfferForPartnior/>
      <Specialization/>
      <Advantages/>
      <Implementation/>
      <RegistrationForm/>
    </div>
  );
};

export default Bitrix24;