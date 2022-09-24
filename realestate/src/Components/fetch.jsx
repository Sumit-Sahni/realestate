import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react' 



const Fetch= () => {
    const [item, setItem] = useState([]);
    
       useEffect(()=>{
          fetch("http://localhost:3500/data")
          .then(res =>{
            return res.json();
          })
          .then(data =>{
              console.log(data)
              setItem(data)
          })
       },[])
   
       
    


  return (
    <div>
         {
            item.map((items)=>{
                return(
                  items.name
                )
            })
         }

    </div>
  )
}


export default Fetch
