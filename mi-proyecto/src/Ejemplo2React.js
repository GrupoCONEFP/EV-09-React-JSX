
import React from "react";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Lista de tareas"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "Estudiar React 2"),
      React.createElement("li", null, "Hacer ejercicios"),
      React.createElement("li", null, "Preparar presentación")
    )
  );
}

export default App;
