
function App() {

  function addTask() {
    var progressList = document.getElementById('progress-list');
    var taskInput = document.getElementById('taskinput');
    var inputValue = taskInput.value;

    if (!inputValue.trim()) {
      return alert("Input can't be empty!");
    }

    var li = document.createElement('li');
    li.textContent = inputValue;
    li.draggable = true;
    li.className =
      'border border-gray-300 px-3 py-1 mb-2 rounded flex justify-between items-center';

    // Drag events
    li.ondragstart = function (e) {
      e.dataTransfer.setData('text/plain', null);
      li.classList.add('opacity-50');
      window.dragged = li;
    };
    li.ondragend = function () {
      li.classList.remove('opacity-50');
      window.dragged = null;
    };

    li.onclick = function () {
      // Move to completed list
      if (!li.classList.contains('completed')) {
        li.classList.add('completed');
        document.getElementById('completed-list').appendChild(li);
      } else {
        li.classList.remove('completed');
        progressList.appendChild(li);
      }
    };

    var removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.className =
      'bg-red-500 text-white rounded px-2 py-1 text-xs ml-2 cursor-pointer hover:bg-red-600 font-semibold';
    removeButton.onclick = function (e) {
      e.stopPropagation();
      li.parentNode.removeChild(li);
    };

    li.appendChild(removeButton);

    progressList.appendChild(li);
    taskInput.value = '';
  }

  // Drag-over and drop for both lists
  function allowDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.add('bg-gray-300');
  }
  function removeDrop(e) {
    e.currentTarget.classList.remove('bg-gray-300');
  }
  function dropTask(e, listId) {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-300');
    if (window.dragged) {
      document.getElementById(listId).appendChild(window.dragged);
      if (listId === 'completed-list') {
        window.dragged.classList.add('completed');
      } else {
        window.dragged.classList.remove('completed');
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="bg-white p-10 rounded-[10px] shadow-xl/30 m-5">
        <h1 className="text-center text-3xl font-semibold text-blue-500 mb-8">To-Do List</h1>
        <div className="">
          <input
            type="text"
            placeholder="Enter a Task"
            id="taskinput"
            className="w-100 outline-none border-2 border-black-300 rounded focus:border-blue-500 p-2 font-light tracking-wider"
          />
          <button
            onClick={addTask}
            className="px-5 bg-blue-400 hover:bg-blue-600 ml-2 rounded text-white p-2 cursor-pointer"
          >
            Add Task
          </button>
        </div>
        <div className="flex gap-4 mt-6 justify-center">
          <div className="w-1/2">
            <h3 className="text-lg font-semibold mb-2 text-blue-600 ">In Progress Task</h3>
            <ul
              id="progress-list"
              onDragOver={allowDrop}
              onDragLeave={removeDrop}
              onDrop={e => dropTask(e, 'progress-list')}
              className=" border border-gray-200 p-3 rounded max-h-55 overflow-y-auto"
            ></ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-lg mb-2 font-semibold text-green-600">Completed Tasks</h3>
            <ul
              id="completed-list"
              onDragOver={allowDrop}
              onDragLeave={removeDrop}
              onDrop={e => dropTask(e, 'completed-list')}
              className=" border border-gray-200 p-3 rounded max-h-55 overflow-y-auto"
            ></ul>
          </div>
        </div>
      </div>
      <style>
        {`
          .completed {
            text-decoration: line-through;
            color: grey;
          }
        `}
      </style>
    </div>
  );
}

export default App;


