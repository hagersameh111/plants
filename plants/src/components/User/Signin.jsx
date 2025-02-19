import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';



const Signin = () => {
  const[setValues]= useState({
    email:"",
    password:""
  })
  
  const handleInput=(event)=>{
    setValues(prev=> ({...prev, [event.target.name]:[event.target.value]}))
  }
  const handleSubmit=() => {
   
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div  className=' h-screen w-screen flex justify-center items-center rounded-bl-full rounded-tr-full  bg-quinary border border-quaternary'>
            <div className='   relative '>
             <div>
              <div className='space-y-4   relative  '>
                <h1 className="text-3xl  text-quaternary text-center"><FontAwesomeIcon icon={faPagelines} className="text-green-500 text-2xl" />  Login <FontAwesomeIcon icon={faPagelines} className="text-green-500 text-2xl" /></h1>
                <div>
                       <div className=" font-mono text-[14px] text-quaternary" >
                            <label htmlFor="" >Your E-Mail </label>
                          
                             <input type="email"  onChange={handleInput} name="email" className='w-full bg-transparent my-2 range  border-2 border-b-2 border-quaternary border-opacity-30 appearance-none accent-quaternary rounded-full p-2 text-white  focus:outline-quaternary focus:outline outline-1'/>
                             
                              
                        </div>
                       <div className=" font-mono text-[14px] text-quaternary" >
                             <label htmlFor="">Enter Password</label>
                            <input type="password"   onChange={handleInput} name="password" className='w-full bg-transparent my-2 range  border-2 border-b-2 border-quaternary border-opacity-30 appearance-none accent-quaternary rounded-full p-2 text-White focus:outline-quaternary focus:outline outline-1'/>
                            
                           
                        </div>
                        <div className=" font-mono text-[14px] text-quaternary">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="Remember Me"> Remember Me</label>
                            </div>
                        
                        <button type="submit" onClick={<Link to="/NoPage"/>} className="bg-tertiary  opacity-95 text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute  left-1/2 -translate-x-1/2">
                          
                          Login
                          </button>
                         
                        </div>
                       <div className=' rounded-md p-4 flex flex-col space-y-8'>
                       <div className="relative flex justify-center items-center py-4 text-quaternary">
                        <span>
                        Dont Have An Account?
                        <Link to={"/Reg"} className="text-tertiary "> Signup Now</Link>
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


export default Signin