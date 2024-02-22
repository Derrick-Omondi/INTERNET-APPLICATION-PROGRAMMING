
document.addEventListener('DOMContentLoaded', function () {
    var submit = document.getElementById('todo');
    var newTask = document.getElementById('add');
    var list = document.createElement('ul'); 

    document.querySelector('.main').appendChild(list);

    submit.addEventListener('input', function (event) {
        if (event.target.value.trim().length > 0) {
            newTask.disabled = false;
        } else {
            newTask.disabled = true;
        }
    });

    newTask.addEventListener('click', function (e) {
        e.preventDefault();
        var taskText = submit.value.trim();

        if (taskText.length > 0) {
            var listItem = document.createElement('li'); 
            listItem.textContent = taskText; 
            list.appendChild(listItem); 
            submit.value = ''; 
            newTask.disabled = true; 
        }
    });
});
