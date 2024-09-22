/* eslint-disable react/prop-types */
import PokemonItem from "./PokemonItem"
import { Box } from "@mui/material"

const Menu = ({pokemons, setSelected, setOpponent}) => {
    const handleSelected = (id) => {
        setSelected(pokemons.find(pokemon => pokemon.id === id))
        let randmon = Math.floor(Math.random() * pokemons.length)
        let op = pokemons[randmon]
        while (op.id === id) {
            randmon = Math.floor(Math.random() * pokemons.length)
            op = pokemons[randmon]
        }
        setOpponent(pokemons[randmon])
    }
    return (
        <Box sx={{width: '100%', marginBottom: 2}}>
            <h2>Select your Pokemon</h2>
            <Box sx={{ 
                width:'100%',
                display: 'flex',
                 flexDirection:'row',
                  justifyContent: 'space-between',
                   alignItems: 'center',
                    gap: 5,
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
          },}}>
               {pokemons && pokemons.map(pokemon => {
                   return <PokemonItem onClick={()=> handleSelected(pokemon.id)} key={pokemon.name} pokemon={pokemon} />
               })

               }
            </Box>
        </Box>
    )
}
export default Menu