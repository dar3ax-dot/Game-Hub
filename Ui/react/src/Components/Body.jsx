import logo from '../assets/solo.png'
import dua from '../assets/dua.png'
import squad from '../assets/squad.png'
import Footer from './Footer';
function Body() {
    return ( 

        <>

            <div className="h-full w-full bg-gray-950 ">

             <div className="flex w-full justify-between h-auto items-center">

                 <img src={logo} alt="" className='w-109'/>
                   <div className="w-[700px]">
                         <h1 className='text-blue-50 text-[60px] font-cairo py-3.5' >شارك في بطولات <br />فري فاير</h1>
                         <p className=' text-white text-2xl pb-4'>انضم الى مجمتمع ملئ بالمحترفين</p>
                       <button className='text-white bg-blue-700 rounded-2xl px-4 py-2 text-1xl'>انشاء حساب</button>
                   </div>

            </div>

                <div className="w-[96%] bg-gray-800 rounded-2xl h-full m-auto">



                    <h2 className='text-center pt-5 text-[60px] text-white'>شارك في بطولة النمط الثنائية </h2>

                    <div className="flex w-full justify-around h-full">
                        <img src={dua} className='w-[500px]' />
                       
                    </div>
                    
                </div>

                <div className="w-[96%] bg-gray-800 rounded-2xl h-full m-auto">



                    <h2 className='text-center pt-5 text-[60px] text-white mt-3'>شارك في بطولة الفرق</h2>

                    <div className="flex w-full justify-around h-full">
                        <img src={squad} className='w-[600px]' />
                       
                    </div>
                    
                </div>
                <Footer/>

            </div>
                     
        </>
     );
}

export default Body;