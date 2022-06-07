import api from '../../service/api';

export function CrudFilme() {

  const handleClick = () => {
    api.request(
      "http://localhost:8080/filme",
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
        <h1 className="ml-52 text-xl p-5">Crie, atualize ou delete filmes.</h1>
        <input type="text" required placeholder="ID:" className="text-black mt-10 ml-48 h-10 w-80 p-1" />
        <input type="text" required placeholder="Título:" className="text-black mt-2 ml-48 h-10 w-80 p-1" />
        <input type="text" required placeholder="Categoria:" className="text-black block mt-2 ml-48 h-10 w-80 p-1" />
        <button className="bg-green-500 p-2 ml-48 mr-1 mt-3">Criar filme</button>
        <button className="bg-indigo-500 p-2 mr-1 ">Atualizar filme</button>
        <button className="bg-red-500 p-2 mr-1">Deletar filme</button>
    </div>
  </>
  
  );
}