import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Data } from '../../data';
import Card from '../Card/Card';

const SingleProduct = () => {

    const {id} = useParams()
    console.log(id);

    let [obj] = Data.filter((e,i)=>{return e.id == id});
    console.log(obj);
    
    const navigate = useNavigate();

  return (
    <div>
        <Card func={()=>{navigate(-1)}} title={obj.title} category={obj.category} description={obj.description} key={obj.id} price={obj.price} star={obj.rating.rate} count={obj.rating.count} img={obj.image} actionBtn='Go Back' />
    </div>
  )
}

export default SingleProduct