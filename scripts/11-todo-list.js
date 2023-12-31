const todoList=[];

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const item = inputElement.value;
  todoList.push(item);
  console.log(todoList);
  inputElement.value= '';
}