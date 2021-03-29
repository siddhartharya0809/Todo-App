// assign all the buttons according to their tasks that they are doing
let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

// function for adding items in the list
function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    // when list items are clicked they are marked as done
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    // to show all the item in a new list 
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
}

// function to clear all the done items in a list 
function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

// function to sort all the tasks according to done and undone tasks
function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
}

// function to disable or enable the buttons according to tasks are done or not
function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() === '')
    btnAdd.prop('disabled', inpNewTask.val() === '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
}

// function to create a keypress event so that when we press enter an item is inserted in a list
inpNewTask.keypress((e) => {
    if (e.which === 13) addItem()   // here 13 is the keycode which Enter or enter key
})
inpNewTask.on('input', toggleInputButtons)

btnAdd.click(addItem)   // when we click add button it should add a new item in list

// when we click Reset button it will only remove the items typed in text field
btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
})
// Cleanup button will reomove all the done tasks from the list
btnCleanup.click(clearDone)

// Sort button will sort the tasks according to done ot undone tasks
btnSort.click(sortTasks)
