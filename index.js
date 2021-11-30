// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state


const showCompletedCheckbox = document.querySelector(".show-completed-checkbox")
const addTodoForm = document.querySelector(".add-item")
const todoList = document.querySelector(".todo-list")
const completedList = document.querySelector(".completed-list")

const state = {
    todos: [
        {
        title: "Buy milk",
        completed: false
    },
    {
        title: "Learn JS",
        completed: true
    },
    {
        title: "Sleep well",
        completed: false
    }
],

    completedTodos: [],
    uncompletedTodos: []

}

function getCompletedTodos() {
    return state.todos.filter(function(todo) {
            return todo.completed
})
}

function getUncompletedTodos () {
    return state.todos.filter(function(todo) {
            return !todo.completed
})
}


function toggleTodo (todo) {
    todo.completed = !todo.completed
}

function addTodo (todo) {
    state.todos.push(todo)
}

function deleteTodo (text) {    
    state.todos = state.todos.filter(function(todo){  
        return todo.title !== text
    })
}


function renderCompletedTodos(){

    const completedTodos = getCompletedTodos()
    completedList.innerHTML = ""

    for (const todo of completedTodos){

        const liEl = document.createElement("li")
        liEl.setAttribute("class","completed-todo")

        liEl.innerHTML = `
            <div class="completed-section">
                <input class="completed-checkbox" type="checkbox" />
            </div>
                <input class="completed-checkbox" type="checkbox" />
            <div class="text-section">
                <p class="text">${todo.title}</p>
            </div>
            <div class="button-section">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div> `

        const completedCheckbox = liEl.querySelector(".completed-checkbox")
        completedCheckbox.checked = todo.completed
        completedCheckbox.addEventListener("click", function(){
            toggleTodo(todo)
            render()
        })

        completedList.append(liEl)
    }
}
function renderUncompletedTodos(){
 
    const uncompletedTodos = getUncompletedTodos()
    todoList.innerHTML = ""

    for (const todo of uncompletedTodos){

        const liEl = document.createElement("li")
        liEl.setAttribute("class","uncompleted-todo")

        liEl.innerHTML = `
            <div class="completed-section">
                <input class="completed-checkbox" type="checkbox" />
            </div>
                <input class="completed-checkbox" type="checkbox" />
            <div class="text-section">
                <p class="text">${todo.title}</p>
            </div>
            <div class="button-section">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div> `

            const completedCheckbox = liEl.querySelector(".completed-checkbox")
            completedCheckbox.checked = todo.completed
            completedCheckbox.addEventListener("click", function(){
                toggleTodo(todo)
                render()
            })

            todoList.append(liEl)
    }
}

function render(){
    console.log(state)
    renderCompletedTodos()
    renderUncompletedTodos()
}
render()
