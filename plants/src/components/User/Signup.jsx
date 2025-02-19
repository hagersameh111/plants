import { Link } from "react-router-dom"

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';



const Signup= () => {
  
    const[setValues]= useState({
      email:"",
      password:"",
      
    })
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
      setValues(prev=> ({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event) => {
      event.preventDefault();
      setErrors;
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <div  className="h-screen w-screen flex justify-center items-center bg-quinary  border border-quaternary rounded-tl-full rounded-br-full   ">
            <div className='   relative '>
             <div>
              <div className='space-y-6   rounded-md p-10 relative '>
                <h1 className="text-3xl text-quaternary text-center"> <FontAwesomeIcon icon={faPagelines} className="text-green-500 text-2xl" /> Signup <FontAwesomeIcon icon={faPagelines} className="text-green-500 text-2xl" /></h1>
                <div>
                       <div className=" font-mono text-[14px] text-quaternary" >
                            <label htmlFor="" >Enter Email </label>
                          
                             <input type="email"  onChange={handleInput} name="email" className='w-full bg-transparent my-2 range  border-2 border-b-2 border-quaternary   border-opacity-30 appearance-none accent-quaternary rounded-full p-2 text-white  focus:outline-quaternary focus:outline outline-1'/>
                             {errors.email && 
                            <span className="text-danger">
                              {errors.email}
                              </span>}
                        </div>
                       <div className=" font-mono text-[14px] text-quaternary" >
                             <label htmlFor="">Enter Password</label>
                            <input type="password" onChange={handleInput}  name="password" className='w-full bg-transparent my-2 range  border-2 border-b-2 border-quaternary border-opacity-30 appearance-none accent-quaternary rounded-full p-2 text-White focus:outline-quaternary focus:outline outline-1'/>
                            {errors.password && 
                            <span className="text-danger">
                              {errors.password}
                              </span>}
                        </div>
                        <div className=" font-mono text-[14px] text-quaternary" >
                             <label htmlFor="">Confirm Password</label>
                            <input type="password"  name="confirm" className='w-full bg-transparent my-2 range  border-2 border-b-2 border-quaternary border-opacity-30 appearance-none accent-quaternary rounded-full p-2 text-White focus:outline-quaternary focus:outline outline-1'/>
                       
                        </div>
                        <div className=" font-mono text-[14px] text-quaternary">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="Remember Me"> Remember Me</label>
                            </div>
                        <button type="submit"   className="bg-tertiary opacity-95 text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute  left-1/2 -translate-x-1/2">SIGNUP</button>
                        </div>
                       <div className=' rounded-md p-4 flex flex-col space-y-8'>
                       <div className="relative flex justify-center items-center py-4 text-quaternary">
                        <span>
                        Already have an account?
                        <Link to={"/Userinfo"} className="text-tertiary"> Signin</Link>
                        </span>
                       </div>
                       </div>
                    

            </div>

           </div> 
          </div>
        </div>
        </form>
    </div>
  )
}


export default Signup