export function Categorias() {


  return (
  
  <>
    <div className="w-[700px] h-96 ml-auto mr-auto bg-white bg-opacity-5 mt-20">
        <h1 className="ml-60 text-xl">Procure filmes por categoria</h1>
          <select name="Categorias" id="Categorias" className="text-black mt-10 ml-64 h-10 w-52 p-1">
            <option value="comedia">Comédia</option>
            <option value="romance">Romance</option>
            <option value="terror">Terror</option>
            <option value="trash">Infantil</option>
          </select>
        <button  type= "submit" className="block ml-64 bg-red-500 mt-2 p-1 w-52">Procurar</button>
    </div>
  </>
  
  );
}