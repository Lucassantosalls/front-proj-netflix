import React from 'react';
import api from '../../service/api';
import history from '../../service/history';
import { SigUp } from '../SigUp';



export function SigIn() {

  const handleClickLogin = () => {
    history.push("/sigup");
  };

  const handleClick = () => {
    api.request(
      "http://localhost:8080/api/usuario",
      "GET",
      {},
      (r)=>{
        console.log(
          r
        )
      }
    )
    /*fetch("http://localhost:8080/filme").then(response => {
      return response.json()
    })*/
  }


  return (
  
  <>
    <div className="w-[700px] h-96 ml-auto mr-auto bg-white bg-opacity-5 mt-20">
      <div className="pt-12">
        <h1 className='text-3xl	text-white justify-center text-center'>Entrar</h1>
      </div>
      <br />
      <div className="items-center justify-center text-center">
        <br />
        <div className="w-[350px] ml-auto mr-auto">
          <input required type="email" placeholder='Email' className='bg-[#333] pl-2 w-full rounded-md'/>
          <br />
          <input required type="password" placeholder='Password' className="bg-[#333] pl-2 mt-3 w-full rounded-md" />
          <br />
        </div>
        <button type='submit' className="bg-red-600 mt-4 w-[350px] ml-auto mr-auto rounded-md" >Entrar</button>
      </div>
      <br />
      <div className='text-stone-500 justify-center text-center'>
        Novo por aqui? <button onClick={handleClick} className='text-white'>Assine agora.</button>
      </div>
      
    </div>
  </>
  
  );
}