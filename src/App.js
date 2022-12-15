import {useState, useEffect} from 'react'
import ProductList from "./components/ProductList/ProductList"
import AddProducts from "./components/AddProducts"

function App(){



    const [products, setProducts]=useState( [ ] )

    useEffect(() => {

        const sendRequet = async () => {
          const r = await  fetch('http://localhost:8000/products')
          const rd = await r.json()
          
          setProducts(rd)
        }
    sendRequet()}, [])

    const addProducts = async (title) => {

      const respons =await fetch(`http://localhost:8000/products`, {
        method : 'POST',
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify(title),
      })

      const responsDate=await respons.json()
      setProducts([...products, responsDate])
    }
    const deleteProduct = async (id) => {
       await fetch(`http://localhost:8000/products/${id}`, {method : 'DELETE'})

       setProducts (products.filter((item) => item.id !== id))
    }
    return (
        <div className="container">
            <AddProducts onAdd={addProducts}/>
        <ProductList products={products} onDelete={deleteProduct}/>
        </div>
    )
}

export default App