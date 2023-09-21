import React, { ChangeEvent } from "react";
import Button from "../button/Button";

interface InputProps {
  type?: "text" | "checkbox" | "password" | "email";
  placeholder?: string;
  label: string;
  name: string;
  inputValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  [e: string]: any;
}

const Input = ({
  type = "text",
  placeholder,
  label,
  name,
  inputValue,
  labelClassName,
  inputClassName,
  buttonClassName,
  onChange,
  onClick,
  ...restProps
}: InputProps) => {
  return (
    <section className="flex mb-[30px] w-full items-center">
      <label htmlFor={name} className={labelClassName}>{label}</label>
      <input
        type={type}
        id={name}
        value={inputValue}
        className={inputClassName}
        placeholder={placeholder}
        onChange={onChange}
      />
      <article>
        <Button text="추가" onClick={onClick} width="100px" bg="#eee" p=".5rem" styleClass={buttonClassName} />
      </article>
    </section>
  );
};

export default Input;
