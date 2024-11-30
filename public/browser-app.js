const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')
// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks')
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskID, name } = task
        return `<div class="single-task ${completed && 'task-completed'}">
<h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
<div class="task-links">



<!-- edit link -->
<a href="task.html?id=${taskID}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${taskID}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`
      })
      .join('')
    tasksDOM.innerHTML = allTasks
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showTasks()

// delete task /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/tasks/${id}`)
      showTasks()
    } catch (error) {
      console.log(error)
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = taskInputDOM.value

  try {
    await axios.post('/api/v1/tasks', { name })
    showTasks()
    taskInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, task added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 7500)
})












/* const { getAllTasks } = require("../controllers/appcontroll"); 

const tasksDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const descInputDOM = document.querySelector('.desc-input');
const dateInputDOM = document.querySelector('.date-input');
const priorityInputDOM = document.querySelector('.select');
const formAlertDOM = document.querySelector('.form-alert');

// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'

  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks')
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
      loadingDOM.style.visibility = 'visible'
      return
    }
    
    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskID, name, description } = task
        return  `<div class="single-task ${completed && 'task-completed'}"> 
        <h5><span><i class="far fa-check-circle"></i></span>${name}</h5> 
        <p>${description}</p> 
        <p>Date: ${new Date(date).toLocaleDateString()}</p> 
        <p>Priority: ${priority}</p> 
        
        <div class="task-links"> 
        <!-- edit link -->
         <a href="task.html?id=${taskID}" class="edit-link"> 
         <i class="fas fa-edit"></i> 
         </a> 
         <!-- delete btn -->
          <button type="button" class="delete-btn" data-id="${tasks}"> 
          <i class="fas fa-trash"></i> 
          </button>
           </div> 
           </div>`; 
        
      })
        

      .join('');
    tasksDOM.innerHTML = allTasks;
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loadingDOM.style.visibility = 'visible'
};

showTasks();

// delete task /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/tasks/${id}`)
      showTasks();
    } catch (error) {
      console.log(error);
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = taskInputDOM.value; 
  const description = descInputDOM.value; 
  const date = dateInputDOM.value; 
  const priority = priorityInputDOM.value;
  try {
    await axios.post('/api/v1/tasks', { name, description, date, priority });
    showTasks();
     taskInputDOM.value = ''; 
     descInputDOM.value = '';
     dateInputDOM.value = ''; 
     priorityInputDOM.value = 'low'; 
     formAlertDOM.style.display = 'block'; 
     formAlertDOM.textContent = `Task added`; 
     formAlertDOM.classList.add('text-success');
     } catch (error) 
     { formAlertDOM.style.display = 'block'; 
      formAlertDOM.innerHTML = `Error, please try again`; }

  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
    loadingDOM.style.display = 'none'; 
    tasksDOM.innerHTML = '<p>Task 1</p><p>Task 2</p>'
  }, 7500);
}) */