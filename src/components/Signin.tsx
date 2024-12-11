import React from "react";
import Inputfield from "./Inputfield.tsx";
import { useState, useRef } from "react";

interface SigninData {
  email: string;
  password: string;
}

const defaultData: SigninData = {
  email: "",
  password: "",
};
const Signin = ({ onSubmit }) => {
  const formRef: HTMLFormElement = useRef();
  const [formData, setFormData] = useState(defaultData);

  /**
   * Handles submit of form data (now without backend)
   * @param e {Event} Some Event on target input element
   */
  const handleSubmit = (e: Event): void => {
    e.preventDefault();
    for (let field in formData) {
      if (!formData[field]) {
        alert("All fields need to be filled");
        return;
      }
    }
    console.log(
      `Posted some data: User -> ${formData.email}${formData.password}`
    );
    onSubmit(formData); //В задании указано, что в пропсы компонента должен попасть какой-то метод. Видимо метод должен проводить роутинг или еще что-то, но в задании ничего не указано
    formRef.current.reset();
    setFormData(defaultData);
  };

  /**
   * Handles changes from input elements
   * @param e {Event} Some Event on target input element
   */
  const handleChange = (e: Event): void => {
    setFormData((prevState): SigninData => {
      return {
        ...prevState,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      }; // Без типизации e.target выдает ошибку TS
    });
  };

  return (
    <>
      <div className="form">
        <h3>Вход</h3>
        <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
          <Inputfield
            type="email"
            value={formData.email}
            name="email"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Эл. Почта"
            description="Введите вашу почту"
          />
          <Inputfield
            type="password"
            value={formData.password}
            name="password"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Пароль"
            description="Введите ваш пароль"
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </>
  );
};

export default Signin;
