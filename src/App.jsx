// import React from 'react';
// import './App.css';

// function App() {

//   function addTask() {

//     var Tasklist = document.getElementById('tasklist');
//     var Taskinput = document.getElementById('taskinput');

//     var inputValue = Taskinput.value;

//     if (!inputValue.trim()) {
//       return alert("Input can't be empty!");
//     }

//     var li = document.createElement('li');
//     li.textContent = inputValue;

//     var removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.className = 'remove-btn';
//     removeButton.onclick = function () {
//       Tasklist.removeChild(li);
//     };

//     li.onclick = function () {
//       li.classList.toggle('completed');
//     };

//     li.appendChild(removeButton);

//     Tasklist.appendChild(li);
//     Taskinput.value = '';
//   }

//   return (
//     <div>
//       <input type="text" placeholder='Enter a Task' id='taskinput' />
//       <button onClick={addTask}>Add Task</button>
//       <ul id="tasklist"></ul>
//     </div>
//   );
// }

// export default App;



// function App() {
//   function addTask() {
//     var progressList = document.getElementById('progress-list');
//     var taskInput = document.getElementById('taskinput');
//     var inputValue = taskInput.value;

//     if (!inputValue.trim()) {
//       return alert("Input can't be empty!");
//     }

//     var li = document.createElement('li');
//     li.textContent = inputValue;
//     li.draggable = true;
//     li.className =
//       'bg-gray-50 border border-gray-300 px-4 py-2 mb-2 rounded flex justify-between items-center transition-colors duration-400 hover:bg-gray-100 mr-2';

//     // Drag events
//     li.ondragstart = function (e) {
//       e.dataTransfer.setData('text/plain', null);
//       li.classList.add('opacity-50');
//       window.dragged = li;
//     };
//     li.ondragend = function () {
//       li.classList.remove('opacity-50');
//       window.dragged = null;
//     };

//     li.onclick = function () {
//       // Move to completed list
//       if (!li.classList.contains('line-through')) {
//         li.classList;
//         document.getElementById('completed-list').appendChild(li);
//       } else {
//         li.classList.remove();
//         progressList.appendChild(li);
//       }
//     };

//     var removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.className =
//       'bg-red-400 hover:bg-red-600 text-white px-2 py-1 rounded text-xs ml-2';
//     removeButton.onclick = function (e) {
//       e.stopPropagation();
//       li.parentNode.removeChild(li);
//     };

//     li.appendChild(removeButton);

//     progressList.appendChild(li);
//     taskInput.value = '';
//   }

//   // Drag-over and drop for both lists
//   function allowDrop(e) {
//     e.preventDefault();
//     e.currentTarget.classList.add('bg-cyan-100');
//   }
//   function removeDrop(e) {
//     e.currentTarget.classList.remove('bg-cyan-100');
//   }
//   function dropTask(e, listId) {
//     e.preventDefault();
//     e.currentTarget.classList.remove('bg-cyan-100');
//     if (window.dragged) {
//       document.getElementById(listId).appendChild(window.dragged);
//       if (listId === 'completed-list') {
//         window.dragged.classList.add();
//       } else {
//         window.dragged.classList.remove();
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl text-center">
//         <h1 className="text-blue-600 text-2xl mb-6 font-bold animate-slide-down">Task Manager</h1>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             placeholder="Enter a Task"
//             id="taskinput"
//             className="w-3/4 px-4 py-2 border-2 border-gray-300 rounded mr-4 focus:border-blue-600 transition duration-300"
//           />
//           <button
//             onClick={addTask}
//             className="px-4 py-2 bg-blue-400 hover:bg-blue-700 text-white rounded transition duration-300"
//           >
//             Add Task
//           </button>
//         </div>
//         <div className="flex gap-8 mt-6 justify-center">
//           <div className="w-1/2">
//             <h3 className="text-lg font-semibold mb-2 text-blue-700">In Progress</h3>
//             <ul
//               id="progress-list"
//               onDragOver={allowDrop}
//               onDragLeave={removeDrop}
//               onDrop={e => dropTask(e, 'progress-list')}
//               className="min-h-10 border border-gray-200 p-3 rounded max-h-52 overflow-y-auto"
//             ></ul>
//           </div>
//           <div className="w-1/2">
//             <h3 className="text-lg font-semibold mb-2 text-green-400">Completed</h3>
//             <ul
//               id="completed-list"
//               onDragOver={allowDrop}
//               onDragLeave={removeDrop}
//               onDrop={e => dropTask(e, 'completed-list')}
//               className="min-h-10 border border-gray-200 p-3 rounded max-h-55 overflow-y-auto"
//             ></ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




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
      if (!li.classList.contains('line-through')) {
        li.classList;
        document.getElementById('completed-list').appendChild(li);
      } else {
        li.classList.remove();
        progressList.appendChild(li);
      }
    };

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
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
    e.currentTarget.classList.add('bg-cyan-100');
  }
  function removeDrop(e) {
    e.currentTarget.classList.remove('bg-cyan-100');
  }
  function dropTask(e, listId) {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-cyan-100');
    if (window.dragged) {
      document.getElementById(listId).appendChild(window.dragged);
      if (listId === 'completed-list') {
        window.dragged.classList.add();
      } else {
        window.dragged.classList.remove();
      }
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-blue-600 text-2xl mb-6 font-bold ">Task Manager</h1>
        <div className="">
          <input
            type="text"
            placeholder="Enter a Task"
            id="taskinput"
            className="border-2 border-gray-100 px-4 py-2 rounded outline-none focus:border-blue-600 transition duration-300"
          />
          <button
            onClick={addTask}
            className="border bg-blue-500 "
          >
            Add Task
          </button>
        </div>
        <div className="">
          <div className="">
            <h3 className="">In Progress</h3>
            <ul
              id="progress-list"
              onDragOver={allowDrop}
              onDragLeave={removeDrop}
              onDrop={e => dropTask(e, 'progress-list')}
              className=""
            ></ul>
          </div>
          <div className="">
            <h3 className="">Completed</h3>
            <ul
              id="completed-list"
              onDragOver={allowDrop}
              onDragLeave={removeDrop}
              onDrop={e => dropTask(e, 'completed-list')}
              className=""
            ></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;