import React from 'react'
import axios from 'axios';
import { useState , useEffect} from 'react';


 const Filter = () => {
    const [data, setData] = useState([])
    const [query,  setQuery] = useState("")
   
    useEffect(()=>{
            const getData = async()=>{
              const store = await axios.get("https://sumit-sahni.github.io/jsonapi/db.json")
              console.log(store.data.data)
              setData(store.data.data)
            }
            getData();      
    },[])
   
    const [location, setLocation] =  useState("")
    const [property, setProperty] =  useState("")
   
    
  
      const filterResult = (property,location) =>{
       
        console.log(data)
        const newDataStore = data.filter((currProperty,currLocation)=>{
            return(
              currProperty.property === (property === "" ? currProperty.property : property)|| 
              currLocation.location  === (location === "" ? currLocation.location : location)
            )
        })
          setData(newDataStore)
          console.log(newDataStore)   
     }
     
       
   
     
   


  return (
    <section className=" flex flex-col top-[90px] md:top-[150px] relative">
        <div className='flex items-center justify-evenly p-6 flex-col sm:flex-row '>
            <div>
               <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-medium sm:mb-0 '>Search properties to rent</h1>
            </div>
            <div>
                
                 <select onChange={(e)=> setQuery(e.target.value)}  className="border p-4 w-64 md:w-48 md:mx-4  rounded"   placeholder="Gender">
                  <option defaultValue>Price</option>
                  <option value="25000">$25000</option>
                  <option value="10000">$10000</option>
                  <option value="2000">$2000</option>
                  <option value="1800">$1800</option>
                  <option value="1200">$1200</option>
                  <option value="1180">$1180</option>
                  <option value="980">$980</option>
                  <option value="880">$880</option>
            </select>
            </div>
        </div>
    <div className=' w-full mx-auto flex flex-col items-center md:flex-row justify-center lg:gap-12 p-8 '>
        <div className='mb-2'>
            <select onChange={(e)=> setLocation(e.target.value)}  className="border p-4 w-64 md:w-48 md:mx-4  rounded "  placeholder="Gender" >
              <option  defaultValue>Location</option>
              <option value="delhi">Delhi</option>
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
              <option value="nagpur">Nagpur</option>
              <option value="gurugram">Grugram</option>
              <option value="goa">Goa</option>
              <option value="colaba">Colaba</option>
            </select>
        </div>
       
        <div className='mb-2'>
          <select onChange={(e)=> setProperty(e.target.value)}  className="border p-4 w-64 md:w-48 md:mx-4  rounded "   placeholder="Gender">
              <option defaultValue>Property Type</option>
              <option value="rent">Rent</option>
              <option value="home">Home</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="corporeal">Corporeal</option>
              <option value="incorporeal">Incorporeal</option>
              <option value="movable">Movable</option>
            </select>
        </div>
        <button onClick={()=>filterResult(property,location)} className='bg-slate-300  px-7 py-2 rounded-2xl mx-2 hover:bg-slate-400'>SEARCH</button>
    </div>
      
    <div className='w-full  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:p-12  '>
             
             {
               data.filter(data=> data.price.toString().includes(query) ).map((item, index)=>{
                    return(
                       <div key={index} className='md:w-80 lg:w-[23rem]  h-auto rounded border border-black-900 my-2 mx-auto flex flex-col'>
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
                                     item.more.map((items, index)=>{
                                          return(
                                             <div key={index} className='flex justify-between'>
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
     </div>
    </section>
  )
}


export default Filter;