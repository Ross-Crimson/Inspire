import { AppState } from "../AppState.js"
import { toDosService } from "../services/ToDosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class ToDosController {
    constructor() {
        AppState.on('account', this.GetToDos)
        AppState.on('toDos', this.DrawToDos)
    }

    async GetToDos() {
        const ToDoForm = document.getElementById('toDo-form')
        if (AppState.account == null) {
            ToDoForm.classList.add('hidden')
            return
        }
        else {
            ToDoForm.classList.remove('hidden')
        }
        try {
            await toDosService.GetToDos()

        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }

    DrawToDos() {
        let todoHTML = ''
        AppState.toDos.forEach(toDo => todoHTML += toDo.ToDoTemplate)
        setHTML('current-todos', todoHTML)
    }

    async CreateToDo() {

        try {
            event.preventDefault()
            const form = event.target
            const newToDo = getFormData(form)
            await toDosService.CreateToDo(newToDo)
            form.reset()

        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }

    async ToggleChecked(todoId) {
        try {
            await toDosService.ToggleChecked(todoId)
        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }

    async DeleteToDo(todoId) {
        try {
            let confirm = await Pop.confirm("Delete ToDo?", "This can't be undone", "Delete", "question")
            if (!confirm) return
            await toDosService.DeleteToDo(todoId)
        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }
}