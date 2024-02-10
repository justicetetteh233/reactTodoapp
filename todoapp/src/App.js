
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My Todos</h1>

     <div className = 'todo-wrapper'>
        <div className= 'todo-input'>

          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" placeholder="what is the title?" />
          </div>

          <div className='todo-input-item'>
            <label>Discription</label>
            <input type="text" placeholder="what is the title?" />
          </div>

          <div className='todo-input-item'>
            <button type= 'button'className = 'primaryBtn'>Add</button>
          </div>

        </div>

        <div className = 'btn-area'>
          <button>todo</button>
          <button>completed</button>
        </div>

        <div className = 'todo-list'>
          <div className = 'todo-list-item'>
            <h1>task 1</h1>
            <h1>some discription</h1>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
