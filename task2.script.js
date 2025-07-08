document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Load tasks from localStorage if available
    loadTasks();
    
    // Add task event listener
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });
    
    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            // Create task item
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            
            // Create task text span
            const taskSpan = document.createElement('span');
            taskSpan.className = 'task-text';
            taskSpan.textContent = taskText;
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            
            // Add event listeners
            taskSpan.addEventListener('click', toggleTask);
            deleteBtn.addEventListener('click', deleteTask);
            
            // Append elements
            taskItem.appendChild(taskSpan);
            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);
            
            // Clear input
            taskInput.value = '';
            
            // Save tasks to localStorage
            saveTasks();
        }
    }
    
    // Function to toggle task completion
    function toggleTask(e) {
        const taskItem = e.target.parentElement;
        taskItem.classList.toggle('completed');
        saveTasks();
    }
    
    // Function to delete a task
    function deleteTask(e) {
        const taskItem = e.target.parentElement;
        taskList.removeChild(taskItem);
        saveTasks();
    }
    
    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(function(taskItem) {
            tasks.push({
                text: taskItem.querySelector('.task-text').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // Function to load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            
            tasks.forEach(function(task) {
                // Create task item
                const taskItem = document.createElement('li');
                taskItem.className = 'task-item';
                if (task.completed) {
                    taskItem.classList.add('completed');
                }
                
                // Create task text span
                const taskSpan = document.createElement('span');
                taskSpan.className = 'task-text';
                taskSpan.textContent = task.text;
                
                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';
                
                // Add event listeners
                taskSpan.addEventListener('click', toggleTask);
                deleteBtn.addEventListener('click', deleteTask);
                
                // Append elements
                taskItem.appendChild(taskSpan);
                taskItem.appendChild(deleteBtn);
                taskList.appendChild(taskItem);
            });
        }
    }
});