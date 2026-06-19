import axios from "axios";

const API = axios.create({

baseURL:"http://127.0.0.1:8000"

})


export const getAnalytics=()=>{

return API.get(

"/api/analytics"

)

}

export default API;
