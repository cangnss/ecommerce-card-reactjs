import React,{useState, useEffect} from 'react'
import Product from './Product';
import axios from 'axios'


function DataFetching() {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=20') //axios paketi ile verileri çektik.
            .then(response =>{
                //console.log(response);
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[]);

    return (
        // çekilen verileri map fonksiyonu ile oluşturduğum componente dataları gönderdim
        <div className="d-flex flex-wrap"> 
            {products.map(product =>(
                <Product title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} />
            
            ))
            }
            
        </div>
    )
}
{/* <ul>
                {
                    products.map(product => (
                        <li key={product.id}>{product.title}</li>        
                    ))
                }
            </ul> */}
export default DataFetching
