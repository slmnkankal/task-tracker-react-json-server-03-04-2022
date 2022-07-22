
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, toggleShow }) => {
  const handleClick = () => {
    //console.log("Click with handle");
};
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button 
        toggleShow={toggleShow}
        color={showAddTask ? "orange" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        />
    </div>
  )
}

// Header.defaultProps = {
//     title :"task tracker",
// }

export default Header;