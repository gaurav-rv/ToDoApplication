import logo from './logo.svg';
import './bootstrap.css';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import FirstComponent from './components/learning-example/FirstComponent';
import SecondComponent from './components/learning-example/SecondComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TodoApp/>
    </div>
  );
}

export default App;



class LearningComponent extends Component{
  render(){
    return(
      <div className="LearningComponents">
      Hello World
      <FirstComponent />
      <SecondComponent/>
    </div>
    );
  }
}