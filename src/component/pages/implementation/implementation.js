import React from 'react';
import  css from  "./implementation.module.scss"

const Implementation = () => {
  return (
    <div className={css.implementationContainer}>
      <div>
        <h1 className={css.informationTitle} >Bitrix24 implementation stages</h1>
      </div>
      <div className={css.implementationInformation} >
        <div className={css.item} >
          <h4 className={css.number}>01 →</h4>
          <h2 className={css.title}>Pre-project analysis</h2>
          <p className={css.information} >We analyze the specifics of your <br/> company's work, give practical <br/> advice for improvement.</p>
        </div>
        <div className={css.item} >
          <h4 className={css.number} >02 →</h4>
          <h2 className={css.title} >Audit</h2>
          <p className={css.information} >We identify the strengths and <br/> weaknesses of the future <br/> project, and work on its <br/> improvement.</p>
        </div>
        <div className={css.item} >
          <h4 className={css.number} >03 →</h4>
          <h2 className={css.title}>Project development</h2>
          <p className={css.information} >We develop a project taking <br/> into account the wishes of the <br/> client and the specifics of his <br/> business.</p>
        </div>
        <div className={css.item} >
          <h4 className={css.number} >04 →</h4>
          <h2 className={css.title} >Implementation </h2>
          <p className={css.information} >The finished project is being <br/> implemented, the necessary <br/> work is being carried out to <br/> implement and train employees.</p>
        </div>
      </div>
    </div>
  );
};

export default Implementation;