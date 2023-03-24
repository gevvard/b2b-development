import React from 'react';
import css from "./websiteBuilder.module.scss"

const WebsiteBuilder = () => {
  return (
    <div className={css.websiteContainer}>
      <div className={css.websiteImg} >
        <img src="https://cdn-ru.bitrix24.ru/b6881111/landing/3e5/3e58afc58a205f194b29c2aa31de086f/img_tools_04_1x.png" alt=""/>
      </div>
      <div className={css.websiteInfo} >
        <h1 className={css.websiteInfoTitle} >Website Builder</h1>
        <p className={css.websiteInformation} >Your own website in a few minutes without a developer and <br/>
          designer, ready to work with clients</p>
        <div>
          <h2>Direct connection with CRM</h2>
          <p>
            The site is already created inside the CRM. All visitors are taken into <br/>
            account, all applications instantly get into the work of managers.
          </p>
        </div>
        <div>
          <h2>SEO-promotion</h2>
          <p>Sites are fully prepared for promotion in search engines: they are <br/>
            optimized, load quickly, and meet the requirements of search <br/>
            engines.</p>
        </div>
        <div>
          <h2>Adaptability for any screens</h2>
          <p>Sites are ready to work on a desktop, tablet and smartphone - the <br/>
            blocks adapt themselves to different screens.</p>
        </div>
        <div className={css.btnContainer} >
          <button>ORDER SET UP</button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;