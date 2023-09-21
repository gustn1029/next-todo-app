import React from "react";
import Button from "../button/Button";
import classNames from "classnames";

export interface TodoItemProps {
  text: string;
  liClassName?: string;
  articleClassName?: string;
  buttonClassName?: string;
  strongClassName?: string;
  id: string;
  onClick?: (id: string) => void;
}
const TodoItem = ({
  text,
  onClick,
  buttonClassName = '',
  liClassName = '',
  articleClassName = '',
  strongClassName = '',
  id,
  ...restProps
}: TodoItemProps) => {
  return (
    <li className={classNames("", liClassName)} id={id}>
      <article className={classNames("", articleClassName)}>
        <strong className={classNames('', strongClassName)}>{text}</strong>
        <Button onClick={onClick} styleClass={classNames('', buttonClassName)} text="삭제" />
      </article>
    </li>
  );
};

export default TodoItem;
