import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTrash);
const Overview = (props) => {
  const { tasks } = props;
  const { onDelete} = props;
  console.log(onDelete)
  return (
    <div>
      {tasks.map((task, index) => {
        return <h1  key={task.id}> { index + 1 + '.'  } { task.text } <FontAwesomeIcon icon="trash" onClick={() => onDelete(task.id) } /></h1>;
        
      })}
    </div>
  )
}

export default Overview;