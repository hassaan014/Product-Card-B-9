import React from 'react'
import { Data } from '../../data'
import Card from '../Card/Card'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {

    const navigate = useNavigate()
    // let direct =(id)=> {
        // console.log(id);
        
    // }

    return (
        <>
            {Data.map((e, i) => {
                return <Card func={()=>{navigate(`/singleproduct/${e.id}`)}} title={e.title} category={e.category} description={e.description.slice(0,90)} key={i} img={e.image} actionBtn='View' />
            })}
        </>
    )
}

export default ProductsPage