import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react' 
import Filter from './Filter'

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
      <div >
        
        <Filter/>
           
        <section className='w-full  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:p-12  '>
             
              {
                data.map((item)=>{
                     return(
                        <div className='md:w-80 lg:w-[23rem]  h-auto rounded border border-black-900 my-2 mx-auto flex flex-col'>
                               <div >
                                   <img className='w-full h-48 ' src={item.image} alt="name" />
                               </div>
                               <div className=' p-6'>
                                    <h1>{item.price}/month</h1>
                                    <h1 className='font-semibold'>{item.name}</h1>
                                    <h1>{item.location}</h1>
                                    <hr className='bg-blue-500 my-2'></hr>

                                   <div>
                                    {
                                      item.more.map((items)=>{
                                           return(
                                              <div className='flex justify-between'>
                                                 <h1>{items.beds}-Beds</h1>
                                                 <h1>{items.bathroom}-bathroom</h1>
                                                 <h1>{items.area}<sup>2</sup></h1>
                                              </div>
                                           )
                                      })
                                    }
                                   </div>
                               </div>
                               <div>
                                  
                               </div>
                        </div>
                     )
                })
              }
      </section>
      </div>
  )
}


export default Fetch
