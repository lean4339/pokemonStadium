/* eslint-disable react/prop-types */
import { LinearProgress } from "@mui/material";
const Stats = ({value}) => {
    return (
        <LinearProgress 
        valueBuffer={10} variant="determinate" 
        value={value * 10}
        sx={{
            height: 6,
            backgroundColor: 'GrayText', // Color de fondo de la barra
            '& .MuiLinearProgress-bar': {
                backgroundColor:  '#00FF00', // Color de la barra de progreso
                }
            }}  />
    )
}
export default Stats;