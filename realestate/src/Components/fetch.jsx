import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react' 

const Fetch= () => {
  const [data, setData] = useState([])
   
  useEffect(()=>{
          const getData = async()=>{
            const store = await axios.get("https://sumit-sahni.github.io/jsonapi/db.json")
            console.log(store.data.data)
            setData(store.data.data)
          }
          getData();
          
  },[])
    


  return (
   <>
      {
        data.map((item)=>{
            return(
              item.name
            )
        })
      }
   </>
  )
}


export default Fetch
