import "./App.css";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [años, setAños] = useState(0);

  const mostrarDatos = () => {
    alert(nombre);
  };
  return (
    <div className="w-100 items-center flex-col">
      <div className="w-80 flex-col gap-4">
        <div className="flex-row gap-2 items-center">
          <label htmlFor="name">Nombre</label>
          <TextField
            fullWidth
            size="small"
            id="name"
            variant="outlined"
            onChange={(event) => {
              setNombre(event.target.value);
            }}
          />
        </div>
        <div className="flex-row gap-2 items-center">
          <label htmlFor="edad">Edad</label>
          <TextField
            fullWidth
            size="small"
            id="edad"
            variant="outlined"
            onChange={(event) => {
              setEdad(event.target.value);
            }}
          />
        </div>
        <div className="flex-row gap-2 items-center">
          <label htmlFor="pais">Pais</label>
          <TextField
            fullWidth
            size="small"
            id="pais"
            variant="outlined"
            onChange={(event) => {
              setPais(event.target.value);
            }}
          />
        </div>
        <div className="flex-row gap-2 items-center">
          <label htmlFor="cargo">Cargo</label>
          <TextField
            fullWidth
            size="small"
            id="cargo"
            variant="outlined"
            onChange={(event) => {
              setCargo(event.target.value);
            }}
          />
        </div>
        <div className="flex-row gap-2 items-center">
          <label htmlFor="años">Años</label>
          <TextField
            fullWidth
            size="small"
            id="años"
            variant="outlined"
            onChange={(event) => {
              setAños(event.target.value);
            }}
          />
        </div>
        <Button onClick={mostrarDatos} variant="outlined">
          Registrar
        </Button>
      </div>
    </div>
  );
}

export default App;
