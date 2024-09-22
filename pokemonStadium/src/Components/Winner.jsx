/* eslint-disable react/prop-types */

import { Typography } from '@mui/material';

const Winner = ({ winner }) => {
    const greenPastel = '#77DD77'; // Verde pastel
    return (
                <Typography sx={{marginBottom: 2, padding: 1, display: 'flex', alignItems: 'center', fontSize: '2rem', backgroundColor: greenPastel, border: '1px solid black'}} gutterBottom variant="p" component="div">
                    {winner? `${winner} wins!`: 'Select your figther' }
                </Typography>
    );
}

export default Winner;