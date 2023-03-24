import React from 'react';
import css from "./advantages.module.scss"

const Advantages = () => {
  return (
    <div className={css.advantagesContainer} >
      <div className={css.advantagesTitleContainer} >
        <h1 className={css.advantagesTitle} >Our advantages</h1>
        <p className={css.advantagesInformation} >We can complete almost any task and always on time. We also conduct <br/> audits and consulting for businesses.</p>
      </div>
      <div className={css.advantagesOptions} >
        <div className={css.item1} >
          <h3>Full Stack Implementation</h3>
          <p>We carefully study each project <br/> and
            offer a solution that best<br/> meets the
            requirements of <br/> the customer.</p>
        </div>
        <div className={css.item2} >
          <h3>Leading experts with <br/> extensive experience</h3>
          <p>The implementation of Bitrix24 <br/>is
            carried out by professionals<br/>who are
            well acquainted with <br/>  the specifics
            and <br/> architecture of the  product</p>
        </div>
        <div className={css.item3} >
          <h3>Full support</h3>
          <p>After a successful implementation, <br/>
            we will provide you with full <br/>
            assistance in mastering and solving <br/>
            technical problems.</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;