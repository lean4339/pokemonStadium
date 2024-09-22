/* eslint-disable react/prop-types */

import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const PokemonItem = ({onClick, pokemon }) => {
  return (
    <Card
      onClick={onClick}
      sx={{ height: 200, maxWidth: 300, width: 250, boxShadow: 3,'&:hover': { 
              boxShadow: 10,// Color al pasar el cursor
            } }}>
      <CardMedia
        component="img"
        height="150"
        image={pokemon.imageUrl}
        alt={pokemon.name}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default PokemonItem