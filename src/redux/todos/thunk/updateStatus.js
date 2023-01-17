import { toggled } from "../actions";

const updateStatus = (todoID, curentStatus) => {
    return async (dispatch) =>{
        const response = await fetch(`http://localhost:9000/todos/${todoID}`, {
           method: "PATCH",
           body: JSON.stringify(
            {
                completed: !curentStatus,
    
               }
               
           ) ,
           headers : {"Content-type" : "application/json; charset=UTF-8",
        },

        });
        const todo =await response.json()
        dispatch(toggled(todo.id))

    }
}
export default updateStatus