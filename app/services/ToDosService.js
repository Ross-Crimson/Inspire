import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { setText } from "../utils/Writer.js"
import { api } from "./AxiosService.js"

class ToDosService {
    async GetToDos() {
        const results = await api.get('api/todos')
        //console.log("📃", results)
        const toDoList = results.data.map(todo => new ToDo(todo))
        AppState.toDos = toDoList
        //console.log("✔📃", AppState.toDos)

        this.RemainingTodoCount()
    }

    async CreateToDo(description) {
        const results = await api.post('api/todos', description)

        const newToDo = new ToDo(results.data)
        AppState.toDos.push(newToDo)

        this.RemainingTodoCount()
    }

    async ToggleChecked(todoId) {
        const toDotoToggle = AppState.toDos.find(todo => todo.id == todoId)
        toDotoToggle.completed = !toDotoToggle.completed
        const response = await api.put(`api/todos/${todoId}`, toDotoToggle)

        AppState.emit('toDos')

        this.RemainingTodoCount()
    }

    RemainingTodoCount() {
        const remainingTodo = AppState.toDos.filter(todo => !todo.completed)
        setText('todo-count', remainingTodo.length + " ToDos Remaining")
    }

    async DeleteToDo(todoId) {
        const results = await api.delete(`api/todos/${todoId}`)

        const todoIndex = AppState.toDos.findIndex(todo => todo.id == todoId)
        AppState.toDos.splice(todoIndex, 1)

        this.RemainingTodoCount()
    }
}

export const toDosService = new ToDosService