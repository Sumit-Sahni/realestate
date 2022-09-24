import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react' 



const Fetch= () => {
    const [item, setItem] = useState([]);
    
       useEffect(()=>{
        const load = async() =>{
          const devEnv = process.env.NODE_ENV !=="production";
          const {REACT_AP} = process.env;
          const response = await axios.get(`${devEnv ? REACT_AP:REACT_APP_DEV}`);
        }
       
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
