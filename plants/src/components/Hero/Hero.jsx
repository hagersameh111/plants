import { Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className=' h-full margin-top 10px bg-blur'>
    <div className='h-full flex justify-center items-center p-4 '>
        <div className=' gap-4 '>
            <div className='text-quaternary'>
                <p 
                className='font-bold text-4xl'>
                 Eyes on plants
                </p>

            </div>
            <div className='space-y-4 bg-blur  rounded-md p-4 '>
              <div className='  gap-4 py-4 text-quaternary text-l'>
                <div className=' border border-tertiary rounded-full backdrop-filter backdrop-blur bg-opacity-50 py-6 px-6  '>
                    <p >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Quam expedita ipsum laborum aperiam enim eaque earum quod consequuntur<br/> aliquid facere illum culpa, adipisci atque dolorum odit mollitia, neque delectus fuga.
                    </p>
                    
                </div>
                
                
              </div>
              <div className=" flex justify-center  ">
              <button className="bg-gradient-to-r from-secondary to-tertiary hover:from-tertiary hover:to-secondary transition-all duration-600 text-quaternary px-4 py-3 rounded-full"
>                <Link to="/products" className="w-full h-full flex justify-center items-center">
                   Shop now
                  </Link>
                </button>
                </div>
            </div>

        </div>

    </div>

</div>
  )
}

export default Hero;