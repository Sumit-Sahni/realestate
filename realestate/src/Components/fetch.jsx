import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'


const Fetch= () => {
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        const fetct = async()=>{
            const {data} = await axios.get(`http://localhost:3001/data`)
            console.log(data)
            setItem(data);
        }
        fetct()
    },[])
   
       
    


  return (
    <div>
         {
            item.map((items, index)=>{
               return (
                <div key={index}>
                     <h1>{items.name}</h1>
                </div>
               )
            })
         }

    </div>
  )
}


export default Fetch
