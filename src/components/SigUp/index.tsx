import React from 'react';
import history from '../../service/history';



export function SigUp() {

  
  const handleClickLogin = () => {
    history.push("/signin");
  };

  return (
  
  <>
    <div className="w-[700px] h-auto ml-auto mr-auto bg-white bg-opacity-5 mt-20">
      <div className="pt-8">
        <h1 className='text-3xl	text-white justify-center text-center'>Registrar</h1>
      </div>
      <div className="items-center justify-center text-center">
        <div className="w-[350px] ml-auto mr-auto mt-3">
          <input type="text" required placeholder='Name' className='bg-[#333] pl-2 w-full rounded-md' />
          <input type="date" id='id_dt_nascimento' required className='bg-[#333]  mt-3 pl-2 w-full rounded-md text-stone-400 pr-0' />
          <input required type="email" placeholder='Email' className='bg-[#333] pl-2 mt-3 w-full rounded-md'/>

          <input required type="password" placeholder='Password' className="bg-[#333] pl-2 mt-3 w-full rounded-md" />
          <input type='number'placeholder='Credit card number' className="bg-[#333] pl-2 mt-6 w-full rounded-md" />
          <input type="date" id='id_dt_validade_cartao' required className='bg-[#333]  mt-3 pl-2 w-full rounded-md text-stone-400 pr-0' />
          <input type="number" placeholder='CVV' className="bg-[#333] pl-2 mt-3 w-full rounded-md"  />
          
        </div>
        <button type='submit' className="bg-red-600 mt-4 w-[350px] ml-auto mr-auto rounded-md" >Registrar</button>
      </div>
      <br />
      <div className='text-stone-500 justify-center text-center pb-3'>
        Já possui uma conta? <span onClick={handleClickLogin} className='text-white'>Entrar.</span>
      </div>
      
    </div>
  </>
  
  );
}