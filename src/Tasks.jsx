import './Tasks.css'
import { useRef } from 'react' //for click timeout

function Tasks(props) {

    const clickTimeout = useRef(null)

    function removeTask(toRemove) {

        //cancel the single click timeout if double click event occurs
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current)
            clickTimeout.current = null
        }

        props.setTasks(props.tasks.filter((_, index) => index !== toRemove))

    }

    function checkTask(toCheck) {

        clearTimeout(clickTimeout.current) //clear any existing timeout

        //set a click timeout, if time is up the code runs, else if inteferred then timeout is cancelled
        clickTimeout.current = setTimeout(() => {

            if (props.tasks[toCheck].status) {

                props.tasks[toCheck].status = false

                const target = props.tasks[toCheck]
                props.setTasks([target, ...props.tasks.filter((_,index) => index !== toCheck)])

            } else {

                props.tasks[toCheck].status = true

                const target = props.tasks[toCheck]
                props.setTasks([...props.tasks.filter((_, index) => index !== toCheck), target])
            }

        }, 250)
   
    }

 


    return(
        <>
        <ul className="list">{props.tasks.map((task, index) => <li key={task.taskName} id={task.taskName} onClick={() => checkTask(index)} onDoubleClick={() => removeTask(index)} style={{background: task.status ? "linear-gradient(45deg, rgb(166, 222, 135), rgb(26, 197, 72))" : "linear-gradient(45deg, rgb(235, 210, 112), rgb(251, 182, 44))"}}>{task.taskName}</li>)}</ul>
        </>
    )
}

export default Tasks