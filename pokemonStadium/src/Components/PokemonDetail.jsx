/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia } from "@mui/material";
import Stats from "./stats";
const PokemonDetail = ({ pokemon }) => {
    return (
        <Card sx={{ 
            height: 470,
         width: 400,
          boxShadow: 3,
          // Media queries
          '@media (max-width: 600px)': {
            height: 400,
            width: 300,
          },
          '@media (min-width: 600px) and (max-width: 960px)': {
            height: 470,
            width: 300,
          },
          '@media (min-width: 960px)': {
            height: 470,
            width: 300,
          } }}>
            <CardMedia
                component="img"
                height="160"
                image={pokemon.imageUrl}
                alt={pokemon.name}
                sx={{ objectFit: 'contain',// Media queries
                    '@media (max-width: 600px)': {
                      height: '80px',
                    },
                    '@media (min-width: 600px) and (max-width: 960px)': {
                      height: '140px',
                    },
                    '@media (min-width: 960px)': {
                      height: '160px',
                    }, }}
            />
            <CardContent>
                <h2>{pokemon.name}</h2>
                <p>Attack</p>
                <Stats value={pokemon.attack} />
                <p>Defense</p>
                <Stats value={pokemon.defense} />
                <p>HP</p>
                <Stats value={pokemon.hp} />
                <p>Speed</p>
                <Stats value={pokemon.speed} />
            </CardContent>
        </Card>
    )
}

export default PokemonDetail;