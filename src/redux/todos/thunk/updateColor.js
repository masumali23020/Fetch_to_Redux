import { colorSelected } from "../actions"

const updateColorStatus = (todoId, color) => {
    return async (dispatch) => {
        const respon = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
              
                color: color,

            }),
            headers : {"Content-type" : "application/json; charset=UTF-8",
        },
        })
        const todo =await respon.json()
        dispatch(colorSelected(todo.id, todo.color))
    }
}
export default updateColorStatus