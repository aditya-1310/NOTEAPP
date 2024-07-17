import penw from '../contants/penw.svg';
import home from '../contants/home.svg';
import plus from '../contants/plus.svg';
import exit from '../contants/exit.svg';
import Task from './Task';
import { useContext } from "react";
import TaskContext from "../Context/Taskcontext";
import { useNavigate } from "react-router-dom";

const Note = ()=>{
    const {taskList,n}= useContext(TaskContext);
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <div className="side_nav fixed bg-[#3C3D43] h-full w-[100px] flex flex-col items-center py-8">
                <img src={penw} alt="pen" className=' mt-4'/>
                <button> 
                    <img src={home} alt="home" onClick={(e)=>navigate("/") } className=' h-22 w-22 mt-60 mr-7 '/>
                </button>
                <div className="plus">
                    <button> 
                        <img src={plus} onClick={(e)=>{navigate('/addtask')}} alt="home" className='ml-1 mt-20'/>
                    </button>
                </div>
                <button> 
                    <img src={exit} alt="home" onClick={(e)=>navigate("/") } className='ml-3 mt-44'/>
                </button>
            </div>
            <div className="ml-[100px] flex-1 flex flex-col overflow-hidden">
                <div className='p-10'>
                    <h1 className='ml-10 mt-10'>Hello, {n}! 👋🏼</h1> 
                    <h1 className='ml-10 mt-5'>All your notes are here, in one place!</h1> 
                </div>
                <div className='main overflow-auto p-10'>
                    <div className='mm flex flex-wrap gap-4'>
                        {taskList.map((task, count) =>
                            <Task task={task} key={task.taskId} />
                        )}
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Note;
