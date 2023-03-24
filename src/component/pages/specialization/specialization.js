import React from 'react';
import css from "./specialization.module.scss"
import {IoIosConstruct} from "react-icons/io";
import {FaCity, FaRobot, FaTags} from "react-icons/fa";
import {TbBrowser} from "react-icons/tb";

const Specialization = () => {
  return (
    <div className={css.specializationContainer} >
      <div className={css.specializationTitleContainer} >
        <h1 className={css.specializationTitle} >Our specialization</h1>
        <p className={css.specializationInformation} >We can complete almost any task and always on time. We also conduct <br/> audits and consulting for businesses.</p>
      </div>
     <div className={css.options}>
       <div className={css.firstRowOption} >
         <div className={css.item} >
           <IoIosConstruct  />
           <h1 className={css.title} >Infrastructure</h1>
           <p className={css.information} >Over 10 years of website <br/>
             development experience  <br/>
             Our experience in web <br/> development
             exceeds 10 years,<br/> during which time we <br/>
             have developed more than 600 <br/> projects.</p>
         </div>
         <div className={css.item} >
           <TbBrowser/>
           <h1 className={css.title} >Programs 1C</h1>
           <p className={css.information} >Our clients get the opportunity to integrate <br/> their websites with the Bitrix 24 CRM <br/>system.</p>
         </div  >
         <div className={css.item} >

           <IoIosConstruct/>
           <h1 className={css.title} >Industry Solutions</h1>
           <p className={css.information} >We work with different clients and projects <br/> that differ in nature, goals, scale and <br/> budget.</p>
         </div>
       </div>
       <div className={css.secondRowOption} >
         <div className={css.item} >
           <FaRobot/>
           <h1 className={css.title} >Business process automation</h1>
           <p className={css.information} >In our practice, there are many cases<br/> when  we worked on projects in <br/> various business  areas.</p>
         </div>
         <div className={css.item} >
           <FaTags/>
           <h1 className={css.title} >Marking</h1>
           <p className={css.information} >Our company is a team of professionals <br/> who have been developing websites and <br/> integrating Bitrix24 for more than 10 years.</p>
         </div>
         <div className={css.item} >
           <FaCity/>
           <h1 className={css.title} >Solutions for large businesses</h1>
           <p className={css.information} >We know all the subtleties and pitfalls of <br/> this process, so it is very easy and pleasant <br/> to work with us.</p>
         </div>
       </div>
       <div className={css.specializationImg} >
         <img src="https://cdn-ru.bitrix24.ru/b6881111/landing/3b0/3b089c2a24d6e1365ffb0e9184cec80b/ACH06556_1x.jpg" alt=""/>
       </div>
     </div>
    </div>
  );
};

export default Specialization;
