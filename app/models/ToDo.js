

export class ToDo {
    constructor(data) {
        this.completed = data.completed ? data.completed : false
        this.description = data.description
        this.id = data.id
    }

    get ToDoTemplate() {
        return `
        <div>
            <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.ToDosController.ToggleChecked('${this.id}')">
            ${this.description}
            <button onclick="app.ToDosController.DeleteToDo('${this.id}')" class="btn"><i class="mdi mdi-trash-can-outline"></i></button>
        </div>
        `
    }
}