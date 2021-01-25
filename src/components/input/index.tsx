import React, { useRef } from "react";
import { Input } from "./style";
import { api } from "../../service/api";
import { useFormik } from "formik";

interface IInput {
  placeholder: string;
  updateValues():void;
}
const InputComponent: React.FC<IInput> = ({ placeholder,updateValues }) => {
  const { values, handleChange,setFieldValue } = useFormik({
    initialValues: {
      taskInput: "",
    },
    onSubmit: () => {},
  });
  const InputRef = useRef<HTMLInputElement>(null);
  const handleInserNewTask = async () => {
    await api.post("/task", { description: values.taskInput, status: 0 });
    updateValues()
    setFieldValue('taskInput','')
  };

  return (
    <Input
      name="taskInput"
      placeholder={placeholder}
      onBlur={handleInserNewTask}
      value={values.taskInput}
      onChange={handleChange}
      ref={InputRef}
    />
  );
};

export default InputComponent;
