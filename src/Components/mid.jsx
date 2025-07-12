import  hero from '../Assets/herosection.png'
export default function Body(){
    return(
        <section className="relative bg-sky-600"> 
                <div className='flex '>  
                    {/* text wala div  */}
                    <div>
<h1 className='text-sanserif'>Welcome to Peermeet</h1>
<p>elcome to Peermeetel come to Peerme etelcome to Peermee elcome to Peermeet t</p>
<div></div>
  <button className="text-black bg-white hover:bg-white px-3.5 py-1.5 font-mono  cursor-pointer  hover:text-red-400 border-2 border-solid border-blue-900 rounded-sm ">Register now!</button>

                    </div>
{/* pic wala div */}
<div>
<img src = {hero} alt= 'hero image' className='mx-auto'  ></img>
</div>
                </div>
        </section>
    )
}