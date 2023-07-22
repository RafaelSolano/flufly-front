import React from 'react';
import css from './singup.module.css';
import Link from 'next/link';

interface InputTextProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
  type?: string;
  
  
}

const InputText: React.FC<InputTextProps> = ({ label, id, placeholder, required, autoComplete, ...rest }) => {
  return (
    <label htmlFor={id} className={css.cont_input_text}>
      <span className={css.input_text__label}>{label}</span>
      <input
        id={id}
        className={css.input_text}
        type="text"
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        {...rest}
      />
    </label>
  );
};

const SingUpForm: React.FC = () => {
  return (
    <section className={css.container_login}>
      <p className={css.title}>Iniciar Sesión</p>
      <p>¿Nuevo en FLUFFY? <Link className={css.link_login} href={"/login"}>Regístrate aquí</Link></p>

      <form className={ css.form} action="submit">

  
        <InputText
          label="Ingresa tu correo electrónico:"
          id="input_email"
          placeholder=""
          required
          autoComplete="email"
          type="email"
        />

        <InputText
          label="Ingresa una contraseña:"
          id="input_password"
          placeholder=""
          required
          autoComplete="current-password"
          type="password"
        />


        <button type="submit" className={css.btn_submit}>Crear cuenta</button>
      </form>

      <div className={css.form__footer}>
        <p className={css.form_footer__title}>Iniciar sesion con</p>

        <div className={css.btns_social_networks}>
          <a href="">
            <img className={css.ico_network} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="Google" />
          </a>

          <a href="">
            <img className={css.ico_network} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png" alt="Facebook" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default SingUpForm;


