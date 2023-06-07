import { useState } from "react"

const AddFood = ({ onAdd}) => {
    const [textoffood, setTexttofood] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setRemider] = useState(false)

    const onSubmit = (e) => {
      e.preventDefault()

      if(!textoffood) {
        alert('Please add a food')
        return
      }

      onAdd({ textoffood, day, reminder })

      setTexttofood('')
      setDay('')
      setRemider(false)
    }


  return (
   <form className="add-form" onSubmit={onSubmit}>
    <div className="form-control">
    <label>Food</label>
    <input type="text" placeholder="Add Food"
    value={textoffood}
    onChange={(e) => 
    setTexttofood(e.target.value)}
    /> 
    </div>

    <div className="form-control">
    <label>Day & Time</label>
    <input type="text" placeholder="Day & Time"
     value={day}
     onChange={(e) => 
     setDay(e.target.value)}
    />
    </div>

    <div className="form-control form-control-check">
    <label>Set reminder</label>
    <input type="checkbox"
    checked={reminder}
     value={reminder}
     onChange={(e) => 
     setRemider(e.currentTarget.checked)}
    />
    </div>

    <input type="submit" value='Save Food' className="btn btn-block" />

   </form>
  )
}

export default AddFood