import './Add.css'

function Add(props) {

    function addTask() {

        const newTask = {
            "taskName": document.getElementById("taskInput").value, 
            "status": false
        }

        props.setTasks([...props.tasks, newTask])
        document.getElementById("taskInput").value = ""

    }

    return(

        <div className='add-task'>
        <input type="text" id="taskInput" placeholder="Enter Task"></input>
        <button onClick={addTask}>+</button>
        </div>

    )
}

export default Add