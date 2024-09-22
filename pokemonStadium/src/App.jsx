import { useEffect, useState } from 'react'
import Menu from './Components/Menu'
import Winner from './Components/Winner'
import Battle from './Components/Battle'
import { Container } from '@mui/material'
import './App.css'

function App() {
  const [selected, setSelected] = useState({})
  const [winner, setWinner] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [oponent, setOponent] = useState({})
  const handleSelected = (pokemon) => {
    setSelected(pokemon)  
  }
  const handleWinner = (name) => {
    setWinner(name)
  }
  const handleOpponent = (oponent) => {
    setOponent(oponent)
  }
  useEffect(() => {
    const fetchPokemon = async () => {
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      const res = await fetch('http://localhost:3000', {headers})
      const data = await res.json()
      setPokemon(data)
      setOponent(data[1])
      setSelected(data[0])
    }
    fetchPokemon();
  }, [])
  return (
    <Container>
      <h1>Battle of pokemon</h1>
      <Menu pokemons={pokemon} setSelected={handleSelected} setOpponent={handleOpponent}/>
      <Winner winner={winner}/>
      <Battle 
      setWinner={handleWinner}
      figther={selected}
      figthers={pokemon}
      opponent={oponent} />
    </Container>
  )
}

export default App
