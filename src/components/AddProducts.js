import "./AddProducts.css"
import { useState } from "react"



const AddProducts =({onAdd})=> {
    const [title, setTitle] = useState('')


    const submitForm = (e) => {
       e.preventDefault()

       onAdd({ title })

       setTitle('')

    }

    return(
        <div>
            <form className='add-product-form' onSubmit={submitForm}>
                <div className="form-contorol">
                    <input type="text" placeholder="Add Product"
                    value={title} 
                    onChange={(e) =>setTitle(e.target.value)}/>
                </div>
                <button type='submit' className="form-btn">Add</button>
            </form>
        </div>
    )

}
export default AddProducts