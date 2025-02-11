// Imports
import Header from "./components/Header";
import TodoComponent from "./components/Todos";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { TodoItems } from "./types/todos.type";
import axios from "axios";

const App = () => {
  //States
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  //Fetching Todos from the API
  const fetchTodoList = async () => {
    setLoading(true);
    try{
      const response = await axios.get('https://dummyjson.com/todos');
      setTodos(response.data.todos);
    } catch(error){
      window.alert('Error fetching data');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTodoList();
  }, []);
  
  const renderTodoList = () => {
    return todos.map((todo) => (<TodoComponent todoTitle={todo.todo} todoID={todo.id} todoCompleted={todo.completed} />));
  }

  return (
    <div className="max-w-screen min-h-screen">
      <Header />
      {isLoading ? <div>Loading...</div> : renderTodoList()}
      <Footer />
    </div>
  );
};

export default App;
