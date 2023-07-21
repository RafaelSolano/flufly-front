import React from 'react';
import css from './login.module.css';
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

const LoginForm: React.FC = () => {
  return (
    <section className={css.container_login}>
      <p className={css.title}>Regístrate</p>
      <p>¿Ya tienes una cuenta? <Link href={"/home"}>Inicia sesión</Link></p>

      <form className={ css.form} action="submit">

        <InputText
          label="Nombre:"
          id="input_nombre"
          placeholder=""
          required
          autoComplete="name"
        />

        <InputText
          label="Apellidos:"
          id="input_apellido"
          placeholder=""
          required
          autoComplete="family-name"
        />

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

        <div className={css.content_section_checbox}>
          <p>¿Tienes mascota?</p>
          <div className={css.content_checkbox_pet}>
            <label className={css.checbox_label} htmlFor="">
              <input type="checkbox" name="" id="" required />
              <span>Perro</span>
            </label>

            <label className={css.checbox_label} htmlFor="">
              <input type="checkbox" name="" id="" />
              <span>Gato</span>
            </label>
          </div>
        </div>

        <div className={css.content_term}>
          <input type="checkbox" name="" id="checkbox_term" required />

          <label htmlFor="checkbox_term">
            <span>Acepto términos y condiciones y autorizo tratamiento de datos y políticas</span>
            <Link href="">Leer más</Link>
          </label>
        </div>

        <button type="submit" className={css.btn_submit}>Crear cuenta</button>
      </form>

      <div className={css.form__footer}>
        <p className={css.form_footer__title}>o regístrate con</p>

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

export default LoginForm;


