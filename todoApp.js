let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpnewTask = $('#inpnewTask')

function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpnewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpnewTask.val('')
    toggleInputButtons()
}