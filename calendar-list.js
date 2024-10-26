const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

  const action = addBtn.addEventListener('click', () => {
    if (taskInput.value != '') {
      const newTask = document.createElement('li')

      const markBtn = document.createElement('button')
      markBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"> <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29 16a13 13 0 11-26 0 13 13 0 0126 0h0z"/>
    <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 16l3.5 3.5 6-6"/>
  </svg>`
      markBtn.addEventListener('click', () => {
        const svg = markBtn.querySelector('svg')
        const paths = svg.querySelectorAll('path')
        paths.forEach(path => {
          path.style.stroke = 'green'
        })
      })

      newTask.appendChild(markBtn)
      newTask.appendChild(document.createTextNode(taskInput.value))

      taskList.appendChild(newTask)
      taskInput.value = ''
    }
  })

  const button = taskInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      addBtn.click()
    }
  })