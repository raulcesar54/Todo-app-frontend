import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import { AiOutlineLike, AiTwotoneLike, AiOutlineClose } from "react-icons/ai";
import { ListItem, Body, Text,Description } from "./style";
import { transpile } from "typescript";
interface ITask {
  id: number;
  description: string;
  status: number;
}
interface IList{
    updateValues:boolean;
}
const List: React.FC<IList> = ({updateValues}) => {
  const [task, setTasks] = useState<ITask[]>();

  useEffect(() => {
    handleGetTasks();
  }, [updateValues]);

  const handleGetTasks = async () => {
    const tasks = await api.get("/task");
    setTasks(tasks.data);
  };
  const changeTask = async (id: number, status: number) => {
    await api.put(`task/${id}`, { status: status });
    handleGetTasks();
  };
  const deleteTask = async (id: number) => {
    await api.delete(`task/${id}`);
    handleGetTasks();
  };
  const updateTask = async(id:number,value:string)=>{
    await api.put(`task/${id}`, { description: value });
    handleGetTasks();
  }
  return (
    <Body>
      {task?.map((task: ITask) => {
        return (
          <>
            <ListItem>
                {task.status === 0 ?
                <Text value={task.description} onChange={(value) => updateTask(task.id, value.target.value)} />
                    :
                    <Description isClosed={task.status === 0 ? false : true}>{task.description}</Description>
            }
              <div>
                {task.status === 0 ? (
                  <AiOutlineLike
                    style={{ cursor: "pointer" }}
                    onClick={() => changeTask(task.id, 1)}
                  />
                ) : (
                  <AiTwotoneLike
                    style={{ cursor: "pointer" }}
                    onClick={() => changeTask(task.id, 0)}
                  />
                )}
                <AiOutlineClose
                  style={{ cursor: "pointer", marginLeft:'15px', color:'red' }}
                  onClick={() => deleteTask(task.id)}
                />
              </div>
            </ListItem>
          </>
        );
      })}
    </Body>
  );
};
export default List;
