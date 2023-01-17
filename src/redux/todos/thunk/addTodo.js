import { added } from "../actions"

const addedTodos = (todoText) => {
    return async (dispatch) => {
        const respon = await fetch("http://localhost:9000/todos", {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false,

            }),
            headers : {"Content-type" : "application/json; charset=UTF-8",
        },
        })
        const todo =await respon.json()
        dispatch(added(todo.text))
    }
}
export default addedTodos