import Axios from "axios"

export const fetchTree = () => {
    return async(dispatch, getState) => {
        console.log("step 3: in actions tree")
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE1OTczMDk4OTgsImV4cCI6MTU5NzMxNTg5OH0.IBrBreSowQA3iiPfVsV1rZgkB3kgAOuga_c-5oOXOZM"
        console.log("what is getState", getState().user.jwt)
        const response = await Axios.get("http://localhost:4000/",{ headers: { Authorization: `Bearer ${getState().user.jwt}` }} )
        console.log("response:", response.data)
        if(response.body.error){
            dispatch({type: "ERROR"})
        }
        dispatch({type: "ALL_TREE", payload: response.data})
    }
}