import Axios from "axios"


export const login = ( email,password) => {
    return  async (dispatch, getState) =>  {
        console.log("what is password", password)
        console.log("what is email", email)
        //axios request...
        try{

            const response = await Axios.post("http://localhost:4000/login", {email, password})
            console.log("JWT PLEASEEEEEE!", response.data   )
            localStorage.setItem("token",  response.data.jwt );
            dispatch({type: "LOGIN", payload: response.data  })
        }
        catch(err){
            console.log("error", err)
            //localStorage.setItem("token",  "" );
            localStorage.removeItem("token");
        }

    }
}