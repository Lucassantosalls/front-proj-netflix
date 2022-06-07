import history from "../../service/history";
import { SigIn } from "../SigIn";
import api from "../../service/api";
import { useEffect, useState } from "react";

interface FilmesFavoritosProps {
  id: number;
  filmeFavorito: string;
}

export function FilmesFavoritos() {
  const [filmes, setfilmes] = useState<FilmesFavoritosProps[]>([]);

  const [buscar, setBuscar] = useState("");
  useEffect(() => {
    api.get("favorito").then((resposta) => {
      setfilmes(resposta.data);
      console.log(resposta.data);
    });
  }, []);

  const handleClickLogin = () => {
    history.push("/signin");
  };

  /*const handleClick = () => {
    api.request(
      "http://localhost:8080/filme",
      "GET",
      [],
      (r)=>{
        
        
      }
    )
  }*/

  const handleClick = () => {
    api.get(`filme/titulo/${buscar}`).then((resposta) => {
      setfilmes(resposta.data);
    });
    // api.request(
    //   "http://localhost:8080/filme",
    //   "GET",
    //   {},
    //   (r)=>{
    //     console.log(
    //       r
    //     )
    //   }
    // )
    /*fetch("http://localhost:8080/filme").then(response => {
      return response.json()
    })*/
  };

  return (
    <>
      <div className="w-[700px] h-96 ml-auto mr-auto bg-white bg-opacity-5 mt-20">
        <div className="flex flex-col items-center justify-center w-100">
      <h1 className="text-xl mt-2">Filmes Favoritos</h1>
          <table className="w-[600px] text-sm text-left text-gray-500 dark:text-gray-400 mt-20 text-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
              <tr>
                <th scope="col" className="p-2">
                  Titulo
                </th>
              </tr>
            </thead>
            <tbody>
              {filmes.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="p-2">{item.filmeFavorito}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="w-[700px] h-96 ml-auto mr-auto bg-white bg-opacity-5 mt-20 flex items-center justify-center flex-col">
        <h1 className="text-xl">Procure um filme</h1>
        <input
          type="text"
          placeholder="Título:"
          className="text-black mt-10 h-10 w-52 p-1"
          value={buscar}
          onChange={(event) => setBuscar(event.target.value)}
        />
        <button
          onClick={handleClick}
          className="block  bg-red-500 mt-2 p-1 w-52"
        >
          Procurar
        </button>

        <table className="table-auto mt-5 w-100">
          <thead >
            <tr>
              <th>Titulo</th>
              <th>Genero</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map((item) => (
              <tr >
                <td >{item.titulo}</td>
                <td>{item.genero.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}
