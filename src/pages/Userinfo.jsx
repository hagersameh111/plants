import Navbar from "../components/Navbar/Navbar"

import Signin from "../components/User/Signin"

const Userinfo = () => {
  return (
    <div >
      <Navbar/>
        
            <div className='bg-secondary   '>
                  
           <Signin/>
        </div>
       
    </div>
  )
}

export default Userinfo