import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;

  const finished = todo.completed;
  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `the todo with id : ${id} 
    has a title of ${title} 
    and is it finished? ${completed}`
  );
};
