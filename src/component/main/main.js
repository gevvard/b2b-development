import React from 'react';
import css from "./main.module.scss"
import {FaPaperPlane, FaRegLightbulb} from "react-icons/fa";
import {TbMoodPlus} from "react-icons/tb";
import Bitrix24 from "../../component/pages/bitrix24/bitrix24";
const Main = () => {
  return (
    <div className={css.mainContainer} >
     <div className={css.pictureContainer} >
      <div className={css.title} >Битрикс24-ը օգնում է <br/> բիզնեսին աշխատել</div>
       <div className={css.section} > Սերտ համագործակցություն B2B SaaS առաջատար <br/>
         մատակարարների հետ: Bitrix24, Google, Freshworks, <br/> Asana և այլն:</div>
       <button className={css.orderButton} >ՊԱՏՎԻՐԵՔ ՆԵՐԴՐՈՒՄ</button>
     </div>
      <div className={css.options}>
        <div className={css.section1} >
          <FaPaperPlane className={css.sect1Icon}/>
          <h3>Ամենալավ ամպային լուծումը</h3>
          <p>Սերտ համագործակցություն B2B SaaS <br/>
            առաջատար վաճառողների հետ՝ Bitrix24,<br/>
            Google, Freshworks, Asana և այլն:</p>
        </div>
        <div className={css.section2} >
          <FaRegLightbulb className={css.sect2Icon} />
          <h3>Հետազոտություններ և փորձ</h3>
          <p>
            Ի լրումն իրականացվող ծառայությունների,մենք <br/>
            ունենք փորձաքննություն համապատասխան <br/>
            բիզնես ոլորտում:
          </p>
        </div>
        <div className={css.section3} >
          < TbMoodPlus className={css.sect3Icon}/>
          <h3>Ժամանակակից մոտեցում</h3>
          <p>Ժամանակակից բիզնես մշակույթն օգնում է մեզ <br/>
            լրացուցիչ արտոնություններ տրամադրել մեր <br/>
            գործընկերներին։
          </p>
        </div>
      </div>
      <Bitrix24/>

    </div>
  );
};

export default Main;