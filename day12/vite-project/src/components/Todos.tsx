interface TodosProps {
    todoTitle: string;
    todoID: number;
    todoCompleted: boolean;
}

const TodoComponent = (props: TodosProps) => {
    return(
        <div className="mx-12 border-1 border-black mt-5 rounded-lg px-5 py-3 flex flex-col justify-center items-center">
            <div className="w-full flex flex-row text-xl text-black font-bold">
                <h1>{props.todoTitle}</h1>
            </div>
            <div className="w-full flex flex-row text-sm text-black">
                {props.todoCompleted ? <h1 className="text-green-300">Completed</h1> : <h1 className="text-red-300">Not Completed</h1>}
            </div>
            <div className="w-full flex flex-row justify-end">
                <p>{props.todoID}</p>
            </div>
        </div>
    );
}

export default TodoComponent;