import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(0)
  const [mostrar, setMostrar] = useState(false)

  function aumentar() {
    setNumero(numero + 100)
  }

  function diminuir() {
    setNumero(numero - 100)
  }

  function Mostrar() {
    setMostrar(!mostrar)
  }

  function Aleatorio() {
    setNumero(Math.floor(Math.random() * 1000)) 
  }

  return (
    <div>
      <p className="text-red-600">Numero: {numero}</p>
      
      {mostrar ? <p>Esse texto é <span className=" bg-green-600">TRUE</span></p> : null}
      
      <div>
        <button className="bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={aumentar}>Aumentar</button>
        <button className="bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={diminuir}>Diminuir</button>
        <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded" onClick={Aleatorio}>Número Aleatório</button>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={Mostrar}>
          {mostrar ? "Esconder" : "Mostrar"}
        </button>
      </div>
    </div>
  )
}