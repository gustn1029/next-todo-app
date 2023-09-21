import React from "react";
import TodoItem, { TodoItemProps } from "./TodoItem";
import classNames from "classnames";

interface TodoListProps {
  props: TodoItemProps[];
  onClick: (id: string) => void;
  ulClassName?: string;
}
const TodosList = ({ props, onClick, ulClassName }: TodoListProps) => {
  return (
    <ul className={classNames("", ulClassName)}>
      {props.map(({ text, id }, index) => (
        <TodoItem
          text={text}
          id={id}
          key={index}
          onClick={onClick.bind(null, id)}
          articleClassName="flex justify-between p-[1rem] bg-white rounded-[15px] shadow-lg"
          liClassName="mb-[20px]"
          strongClassName="text-[25px]"
          buttonClassName='w-[70px] border border-slate-500 text-[14px] hover:bg-slate-500 hover:text-white'
        />
      ))}
    </ul>
  );
};

export default TodosList;
