"use client";

import React, { useState } from "react";
import Input from "../input/Input";
import TodosList from "../todo/TodosList";
import Title from "../title/Title";
import { TodoItemProps } from "../todo/TodoItem";

const Todos = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<TodoItemProps[]>([]);

  const addTodoHandler = () => {
    console.log(inputValue);
    let todoData:TodoItemProps = {
      text: inputValue,
      id: `todo${todos.length}`
    }

    setTodos([...todos, todoData]);
    setInputValue('');
  };
  const removeTodoHandler = (id:string) => {
    const updateTodos = todos.filter(todo => todo.id !== id);
    updateTodos.forEach((item,i) => {
      item.id = `todo${i}`;
    });

    setTodos([...updateTodos]);
  }
  return (
    <div className="w-[600px] mx-auto">
      <Input
        name="Todo"
        label="Todo"
        placeholder="할 일을 입력하세요."
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={addTodoHandler}
        labelClassName={`overflow-hidden w-[0] h-[0] text-[0px] leading-[0]`}
        inputClassName={`flex-1 border-[1px] bg-white p-[.5rem] border-slate-500`}
        buttonClassName={`block w-[100px] p-[.5rem] border border-slate-500 bg-white hover:text-white hover:bg-slate-500`}
      />
      <Title title="Todo List" />
      <TodosList props={todos} onClick={removeTodoHandler} 
      />
    </div>
  );
};

export default Todos;
