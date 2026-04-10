//importams React y useState para manejar el estado del formulario
import React, { useState } from "react";

// Componente de formulario de login usando Bootstrap
function LoginFormBoostrap() {
  // Estados para usuario, contraseña y mensaje de error
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple: campos obligatorios
    if (!user || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError(""); // limpiamos errores
    alert(`Usuario: ${user}\nContraseña: ${password}`);
  };
// Renderizamos el formulario con clases de Bootstrap para estilos
  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <h2 className="mb-3 text-center">Login</h2>

      {error && <div className="alert alert-danger">{error}</div>}
   
      <div className="mb-3">
  
        <label className="form-label">Usuario</label>
        <input
        // Tipo de entrada, clase de Bootstrap, valor y función para actualizar el estado
          type="text"
          className="form-control"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success w-100">
        Ingresar
      </button>
    </form>
  );
}

export default LoginFormBoostrap;
