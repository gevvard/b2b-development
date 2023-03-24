import React from 'react';
import css from "./license.module.scss"
const License = () => {
  return (
    <div className={css.licenseContainer} >
      <div className={css.licenseInfo} >
        <h1 className={css.licenseInfoTitle} >Free license</h1>
        <p className={css.licenseInformation} >Right now you can try free Bitrix24 without user <br/>
          restrictions</p>
        <div className={css.btnContainer} >
          <button>WANT TO TRY</button>
        </div>
      </div>
      <div className={css.licenseImg} >
        <img src="https://cdn-ru.bitrix24.ru/b6881111/landing/abb/abbc9236101c2cfcc330c5758cf97722/img_plan_card_free_540_1x.png" alt=""/>
      </div>
    </div>
  );
};

export default License;