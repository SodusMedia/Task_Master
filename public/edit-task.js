const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskDescriptionDOM = document.querySelector('task-edit-description')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName
/* let tempDescription */

const showTask = async () => {
  try {
    const {
      data: { task },
    } = await axios.get(`/api/v1/tasks/${id}`)
    const { _id: taskID, completed, name, description } = task

    taskIDDOM.textContent = taskID
    taskNameDOM.value = name
    taskDescriptionDOM.value = description
    tempName = name
/*     tempDescription = description */
    if (completed) {
      taskCompletedDOM.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showTask()

editFormDOM.addEventListener('submit', async (e) => {
  editBtnDOM.textContent = 'Loading...'
  e.preventDefault()
  try {
    const taskName = taskNameDOM.value
    const taskDescription = taskDescriptionDOM.value
    const taskCompleted = taskCompletedDOM.checked

    const {
      data: { task },
    } = await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskName,
      description: taskDescription,
      completed: taskCompleted,
    })

    const { _id: taskID, completed, name, description } = task

    taskIDDOM.textContent = taskID
    taskNameDOM.value = name
    taskDescriptionDOM.value = description
    tempName = name
   /*  tempDescription = description  */
    if (completed) {
      taskCompletedDOM.checked = true
    }

    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `task edited`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    console.error(error)
    taskNameDOM.value = tempName
 /*    taskDescriptionDOM.value = tempDescription */
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }

  editBtnDOM.textContent = 'Done'
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 7500)
})