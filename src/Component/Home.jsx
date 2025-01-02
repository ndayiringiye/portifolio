import Footer from "./Footer"

const Home = () => {
  return (
    <div>
    <div className='bg-blue-400/20 mt-36'>
        <h1 className=' flex justify-end  uppercase font-serif font-bold text-blue-700 text-2xl mx-10'>Bio<span className='text-black uppercase'>Status</span></h1>
        <div className='flex justify-center w-11/12 mx-auto gap-10'>
            <div className=''>
                 <img src="src/assets/MYXJ_20240727215832676_save.jpg" alt="my image"  className='w-[300px] h-[450px rounded-full'/>
            </div>
            <div className='mt-10'>
                  <h1 className='font-bold uppercase font-serif  text-xl'>HI ,</h1>
                  <div className='flex gap-2'>
                  <h1 className='font serif '>I'm</h1>
                  <strong className='font-bold text-xl  font-serif'>NDAYIRINGIYE David</strong>
                  </div>
                  <p>i experienced in fronted web development</p>
                  <p>as <span className='font-semibold font-serif '>"Fronted web developer"</span></p>
                  <button className='bg-blue-400 py-o.5 px-2 text-center text-white font-bold shodw-mc rounded-md my-4 mx-20 font-serif'>confirm it</button>
            </div>
        </div>
      </div>
      <Footer />
      </div>
  )
}

export default Home