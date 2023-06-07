import { FaTimes } from 'react-icons/fa'

const Food = ({ food , onDelete, onToggle }) => {
  return (
    <div className={`food ${food.reminder ? 'reminder' :''}`} 
        onDoubleClick={() => onToggle(food.id)}>
        <h3>{food.textoffood} 
        <FaTimes 
        style={{ color: 'red', cursor: 'pointer' }}
         onClick={() => onDelete(food.id)}/> </h3>
        <p>{food.day}</p>
    </div>
  )
}

export default Food