import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import pencil from "../assets/pencil.svg";
import trash from "../assets/trash.svg";
const Home = ({ data }) => {
  
  const [tasks, setTasks] = useState(data)
  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="home">
      <section className="section">
        <div className="section__table">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data.map((task) => (
                <tr key={task.id}>
                  <td key={task.id}>{task.title}</td>
                  <td>
                  <input
                      type="checkbox"
                      name=""
                      id=""
                      checked = {task.completed}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                  </td>
                  <td>
                    <Link to={`/edit/${task.id}`}>
                      <img src={pencil} alt="ERROR" />
                    </Link>
                    <Link to={`/delete/${task.id}`}>
                      <img src={trash} alt="ERROR" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
              <td></td>
              <td></td>
              
                <td><Link className="section__add" to={"/"}>+</Link></td>
              
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
