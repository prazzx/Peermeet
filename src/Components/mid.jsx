import  hero from '../Assets/herosection.png'
export default function Body(){
    return(
        <section className="relative bg-white "> 
                    {/* text wala div  */}

                <div className=' max-w-[1080px]  flex items-center h-screen" px-2 py-2  justify-between mx-auto  '>  
                    <div className='space-y-8'>
<h1 className=' font-bold text-[36px] text-black   leading-[1.2]'>Meet, Match, and Grow with PeerMeet</h1>
<p className='text-black text-[1.2rem] leading-7 opacity-75'> Join a community built for students who want to share knowledge, build networks, and make meaningful connections for their personal and professional growth. </p>
<div></div>
  <button className="text-black  bg-white hover:bg-indigo-950 px-3.5 py-1.5  transition-all duration-100 font-mono  cursor-pointer  hover:text-red-400 border-2 border-solid border-blue-900 rounded-sm ">Get Started Now</button>

                    </div>
{/* pic wala div */}
<img src = {hero} alt= 'hero image' className='  max-w-[550px]'  ></img>
         </div>
        </section>
    )
}