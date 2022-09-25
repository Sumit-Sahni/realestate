import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react' 

const Fetch= () => {
  const [data, setData] = useState([])
   
  useEffect(()=>{
          const getData = async()=>{
            const store = await axios.get("http://localhost:8001/data")
            console.log(store.data)
            setData(store.data)
          }
          getData();
          
  },[])
    


  return (
    <div>
          {
            data.map((item)=>{
                return(
                  item.name
                )
            })
          }
    </div>
  )
}


export default Fetch
