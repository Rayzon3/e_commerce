import {useRef} from 'react'
import styles from '../styles/Sell.module.css'

const Sell = () => {

  const titleInputRef = useRef()
  const descriptionInputRef = useRef()
  const priceInputRef = useRef()
  const categoryInputRef = useRef()

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredTitleInput = titleInputRef.current.value;
    const enteredDescriptionInput = descriptionInputRef.current.value;
    const enteredPriceInput = priceInputRef.current.value;
    const enteredCategoryInput = categoryInputRef.current.value;
    
    const data = {
      title: enteredTitleInput,
      description: enteredDescriptionInput,
      price: enteredPriceInput,
      category: enteredCategoryInput
    }
    console.log("sending data")
    console.log(data)
    // props.onSubmit(data)
  }

    return (
        
        <div className="flex flex-col py-2 bg-midNight center">
            <form onSubmit={submitHandler} >
                <h2 className={styles.title}>Add Product</h2>

                <div className={styles.container1}>

                    <div className="mx-auto mt-15 mb-8">
                            <label htmlFor="title" className="form-label">
                            Title
                            </label>
                            <input
                            type="text"
                            className="ml-4"
                            id="title"
                            aria-describedby="emailHelp"
                            ref = {titleInputRef}
                            />
                        </div>

                        <div className="mx-auto mt-15 mb-8">
                            <label htmlFor="description" className="form-label">
                            Description
                            </label>
                            <textarea
                            className="form-control"
                            id="description"
                            rows="4"
                            ref ={descriptionInputRef}
                            ></textarea>
                            </div>

                        <div className="mx-auto mt-15 mb-8">
                        <label htmlFor="price" className="form-label">
                            Price
                            </label>
                            <input type="number" className="form-control" id="price" ref={priceInputRef}  />
                        </div>

                        <label htmlFor="category" className="form-label">
          Category
        </label>
      <select id='category' className="form-select mb-3" aria-label="Default select example" ref={categoryInputRef}>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
                 </div>

                    

                    

            </form>
        </div>
    
    )
}
export default Sell;
