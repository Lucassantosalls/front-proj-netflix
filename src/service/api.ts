import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

// const api = { 
//   request(endpoint="",method="GET", data={},callback=(r:object)=>{}){
//     axios({
//       method: method,
//       url: endpoint,
//       data: data,
//       headers: {
//         "Access-Control-Allow-Origin": "*"
//       }
//     })
//     .then((response) => {
//       callback(response)
//     })
//     .catch((error) => {
//   })
//   }
// }

export default api;
