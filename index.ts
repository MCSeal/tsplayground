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

const today = new Date();

today.getMonth();

const person = {
  age: 25,
};

class color {}

const red = new color();

let speed: string = 'fast';
let hasName: boolean = false;

//array
let apples: string[] = ['macintosh', 'fuji', 'granny smith'];
let numbers: number[] = [1, 2, 3];

//classes
class Car {}

let car: Car = new Car();
//objects

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//variables

const cordinatesJson = '{"x": 15, "y": 25}';

const cords: { x: number; y: number } = JSON.parse(cordinatesJson);

console.log(cords);

console.log('e');

//3 functions again

const add = (a: number, b: number): number => {
  return a + b;
};
