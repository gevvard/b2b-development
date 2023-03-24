import React from 'react';
import css from "./registrationForm.module.scss"

const RegistrationForm = () => {
  return (
    <div className={css.registrationForm} >
      <div>
        {/*<script data-b24-form="inline/1512/jph3ux" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b6881111/crm/form/loader_1512.js');</script>*/}
      </div>
      <form action="" className={css.form}>
        <h1>Registration Form</h1>
        <input type="text"  placeholder="Name" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email" />
        <textarea type="text" placeholder="Comments" />
        <button>Send</button>
        <span>Заряжено Битрикс 24</span>
      </form>
    </div>
  );
};

export default RegistrationForm;