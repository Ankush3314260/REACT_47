
import { useState } from 'react'

  
function App() {
  const [color, setColor] = useState(0)
             
  return (
    <>
        <div  className='  w-full h-screen transition duration-1000  '
         style={{backgroundColor:color}}>
          <div className='fixed  flex flex-wrap justify-center bottom-10 inset-x-2 px-2'>
            <button className=' rounded-xl px-4 py-1 mx-2  ' 
              style={{backgroundColor:'#EB728A',border:"1px solid white"}}
              onClick={()=>setColor('#EB728A')}
            >RED</button>
            <button className=' rounded-xl px-4 py-1 mx-2  ' 
              style={{backgroundColor:'#90EE90',border:"1px solid white"}}
              onClick={()=>setColor('#90EE90')}
            >GREEN</button>
            <button className=' rounded-xl px-4 py-1 mx-2  ' 
              style={{backgroundColor:'#50B8E7',border:"1px solid white"}}
              onClick={()=>setColor('#50B8E7')}
            >BLUE</button>
            <button className=' rounded-xl px-4 py-1 mx-2  ' 
              style={{backgroundColor:'#728AEB',border:"1px solid white"}}
              onClick={()=>setColor('#728AEB')}
            >PURPLE</button>
            <button className=' rounded-xl px-4 py-1 mx-2 ' 
              style={{backgroundColor:'#CCD6C9',border:"1px solid white"}}
              onClick={()=>{setColor("#CCD6C9")}}
            >L-GREEN</button>
            <button className=' rounded-xl px-4 py-1 mx-2 shadow-xl ' 
              style={{backgroundColor:'#212121',border:"1px solid white"}}
              onClick={(e)=>{setColor('#212121')}
            }
            >DEFAULT</button>

            
            
          </div>

        </div>
    </>
  )
}

export default App
