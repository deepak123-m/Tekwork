import React, {useState, useContext,useEffect} from 'react'
import Taskitem from './Taskitem'
import notecontext from "../Context/Notecontext"
const Home = () => {
    const [task,setTask] = useState({taskTitle:""})
    let context = useContext(notecontext);

    const {createTask,allTask,taskall}= context;

    const handleTask = (e) => {

        setTask({...task,taskTitle:e.target.value})

    }

    const handleSubmit = async(e) => {

        await createTask(task.taskTitle)
        call();

    }
    

 
    const call = async() => {

        await allTask();

    }
    console.log("taskall")
    console.log(taskall)

    useEffect(()=> {
        call();
    },[])

  return (
    <>
    <div className='flex justify-center items-center  pt-[10%] '>
        <div className=''>
      <form className=''>
        <label htmlFor='task'>Create Your Task :</label>
        <input type='text' id = "task" placeholder='Create New Task' className='outline ml-3 ' onChange={(e)=>handleTask(e)}/>
      </form>

      <button className='bg-blue-500 rounded-xm rounded-full p-2 mt-8 ml-28' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </div>

      
    </div>


    <div className='grid grid-cols-3 gap-4 m-6 bg-gray-200'>
        {taskall && taskall.map((task)=> {
            return <div className='bg-yellow-200 rounded-sm w-[350px] h-[100px'>Task Title :{task.task}</div>
        })}
    </div>
    </>
  )
}

export default Home
