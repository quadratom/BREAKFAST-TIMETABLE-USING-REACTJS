import Food from "./Food"
const Foods = ({ foods , onDelete, onToggle }) => {
  
  return (
    <div>
      {foods.map((food)=>(
      <Food key={food.id}
      food={food}
      onDelete={onDelete}
      onToggle={onToggle}
      />
      ))}
    </div>
  )
}

export default Foods