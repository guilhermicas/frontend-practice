import React from "react";

function App() {
  return (
    <div>
      <h2>My todos</h2>
      <input type="checkbox" id="task1" name="task1" />
      <label for="task1">Buy some groceries</label>
      <br />
      <input type="checkbox" id="task2" name="task2" />
      <label for="task2">Wash the car</label>
      <br />
      <input type="checkbox" id="task3" name="task3" />
      <label for="task3">Drink water</label>
      <br />
      <input type="checkbox" id="task4" name="task4" />
      <label for="task4">Study</label>
      <br />
    </div>
  );
}

export default App;
