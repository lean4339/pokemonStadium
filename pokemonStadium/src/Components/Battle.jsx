/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Button from "./Button";
import PokemonDetail from "./PokemonDetail";
const Battle = ({ setWinner, opponent, figther }) => {
    const chooseOpponent = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        const body = JSON.stringify({
            "pokemon1Id":figther.id,
            "pokemon2Id":opponent.id,
        })
        const res = await fetch('http://localhost:3000/battle', {headers, body, method: 'POST'})
        const data = await res.json()
        setWinner(data.name);
    }
    return (
        <Box sx={{width: '100%',
         display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center',
           gap: 2,
           // Media queries
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            gap: 2,
          },
          '@media (min-width: 600px) and (max-width: 960px)': {
            flexDirection: 'row',
            gap: 3,
          },
          '@media (min-width: 960px)': {
            flexDirection: 'row',
            gap: 5,
          }}}>
            <PokemonDetail pokemon={figther}/>
            <Button text="Start Battle" onClick={chooseOpponent}/>
            <PokemonDetail pokemon={opponent}/>
        </Box>
    )
}
export default Battle