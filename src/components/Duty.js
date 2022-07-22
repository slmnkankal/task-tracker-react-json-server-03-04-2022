import { FaTimesCircle } from 'react-icons/fa';

const Duty = ({ duty, deleteTask, toggleDone }) => {
  return (
    <div 
    className={`task ${duty.isDone ? "done" : ""}`} 
    onDoubleClick={() => {toggleDone(duty.id)}}>
        <h3>
            {duty.text} <FaTimesCircle 
            style={{color: "purple", cursor: "pointer"}}
            onClick={() => deleteTask(duty.id)}
            />
        </h3>
        <p>{duty.day}</p>
    </div>
  )
}

export default Duty;