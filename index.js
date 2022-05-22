var arr;
if (localStorage.getItem("allDataTasks") != null) {
    arr = JSON.parse(localStorage.getItem("allDataTasks"));
}
else {
    arr = [];
}

function validation(task, date, time) {
    if (task == "" || task == null) {
        alert("Task Is empty");
        return false;
    }
    else if (date == "" || date == null) {
        alert("Please Select a date");
        return false;
    }
    else if (time == "" || time == null) {
        alert("Please Select a Time");
        return false;
    }

    else {
        return true;
    }
}

function removeItem(event) {
    var bu = event.target
    bu.closest("div").remove();

}

function createTask(e) {
    e.preventDefault();

    let dataTask = []

    let text = document.getElementById('task').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    var isValid = validation(text, date, time)

    if (isValid) {

        $(".grid-container").append(` 
            <div class="task-item">
            <button type="button" class="close" aria-label="Close"  onClick=removeItem(event)>
                <span aria-hidden="true">&times;</span>
            </button>
            <textarea class="grid-item fade-in-text" readonly>
                ${text}
            </textarea>
                <span>${date}</span>
                <span>${time}</span>
            </div>
        `)


        dataTask[0] = text;
        dataTask[1] = date;
        dataTask[2] = time

        let y = {
            task: dataTask[0],
            date: dataTask[1],
            times: dataTask[2],
        };

        arr.push(y);
        localStorage.setItem("allDataTasks", JSON.stringify(arr));

        document.getElementById('task').value = "";
        document.getElementById('date').value = "";
        document.getElementById('time').value = "";
    }

}


let clearButt = document.getElementById("clear")
clearButt.addEventListener("click", clearData);


function clearData() {
    arr = []
    localStorage.clear();

    var allTasks = document.querySelectorAll('.task-item');
    allTasks.forEach(task => {
        task.remove();
    });
}

