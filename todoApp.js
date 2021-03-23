let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClr = $('#btnClr')
let inpNewTask = $('#inpNewTask')

btnAdd.click(() => {
    console.log(inpNewTask.val())
    inpNewTask.val("")
})
